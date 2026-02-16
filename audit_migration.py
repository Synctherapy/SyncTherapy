import json
import os
import glob
import re

# Config
WP_DATA_PATH = '../wp_data.json'
REDIRECTS_PATH = 'redirects.json'
CONTENT_DIR = 'content'
APP_DIR = 'app'

def parse_frontmatter(filepath):
    """Simple frontmatter parser."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            match = re.match(r'^---\s+(.*?)\s+---', content, re.DOTALL)
            if match:
                fm = match.group(1)
                data = {}
                for line in fm.split('\n'):
                    if ':' in line:
                        key, val = line.split(':', 1)
                        data[key.strip()] = val.strip().strip('"\'')
                return data
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
    return {}

def main():
    report = {
        'missing_content': [],
        'redirect_issues': [],
        'metadata_issues': [],
        'stats': {'pages': 0, 'posts': 0, 'redirects': 0}
    }

    # 1. Load Data
    try:
        with open(WP_DATA_PATH, 'r') as f:
            wp_data = json.load(f)
    except FileNotFoundError:
        print(f"WP Data not found at {WP_DATA_PATH}")
        wp_data = []

    try:
        with open(REDIRECTS_PATH, 'r') as f:
            redirects = json.load(f)
    except FileNotFoundError:
        print(f"Redirects not found at {REDIRECTS_PATH}")
        redirects = []

    # 2. Map Existing Next.js Content
    existing_slugs = set()
    content_files = {} # slug -> filepath

    # Scan content/pages
    for filepath in glob.glob(os.path.join(CONTENT_DIR, 'pages', '*.md')):
        filename = os.path.basename(filepath)
        slug = filename.replace('.md', '')
        existing_slugs.add(slug)
        content_files[slug] = filepath
        report['stats']['pages'] += 1

    # Scan content/posts
    for filepath in glob.glob(os.path.join(CONTENT_DIR, 'posts', '*.md')):
        filename = os.path.basename(filepath)
        slug = filename.replace('.md', '')
        existing_slugs.add(slug)
        content_files[slug] = filepath
        report['stats']['posts'] += 1

    # Scan static app routes (basic check)
    # Assume directories in app/ that have page.tsx are routes
    for root, dirs, files in os.walk(APP_DIR):
        if 'page.tsx' in files:
            rel_path = os.path.relpath(root, APP_DIR)
            if rel_path == '.':
                existing_slugs.add('') # Home
                existing_slugs.add('home')
            elif not rel_path.startswith('[') and not rel_path.startswith('('):
                 existing_slugs.add(rel_path)

    # 3. Audit Content (WP Data -> Next.js)
    # Check if WP content exists in Next.js
    for item in wp_data:
        if not isinstance(item, dict):
            print(f"Skipping non-dict item: {item}")
            continue

        slug = item.get('slug')
        if not slug:
            continue
            
        # Normalization
        # Some WP slugs might be full URLs, but assume usually slugs
        if slug not in existing_slugs:
            # Check if it's handled by a redirect to a *different* slug
            # (Hard to check without full URL, but let's try strict slug match first)
            report['missing_content'].append({
                'title': item.get('title'),
                'slug': slug,
                'type': item.get('type')
            })

    # 4. Audit Redirects
    # Check if redirect destinations exist
    report['stats']['redirects'] = len(redirects)
    for r in redirects:
        dest = r['destination']
        # Remove leading/trailing slashes for check
        clean_dest = dest.strip('/')
        # Handle "services/something" -> check if slug "something" exists in pages/posts OR "services/something"
        
        # Simplified existence check:
        # 1. Exact match in existing_slugs
        # 2. Match basename (e.g. /services/foo -> foo)
        # 3. Special cases (external links)
        if dest.startswith('http'):
            continue # External
            
        found = False
        parts = clean_dest.split('/')
        if clean_dest in existing_slugs:
            found = True
        elif parts[-1] in existing_slugs:
            found = True
        
        if not found:
             report['redirect_issues'].append(r)

    # 5. Audit Metadata
    for slug, filepath in content_files.items():
        fm = parse_frontmatter(filepath)
        issues = []
        if not fm.get('seoTitle') and not fm.get('title'):
            issues.append('Missing Title')
        if not fm.get('description'):
            issues.append('Missing Description')
        
        # Note: We know OG checks will fail globally, but let's log description gaps
        if issues:
            report['metadata_issues'].append({
                'file': filepath,
                'issues': issues
            })

    # 6. Output Results
    print(json.dumps(report, indent=2))

if __name__ == '__main__':
    main()
