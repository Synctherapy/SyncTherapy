import os
import json
import shutil
import re
from pathlib import Path

def load_redirects(redirects_file):
    with open(redirects_file, 'r') as f:
        return json.load(f)

def get_slug_from_frontmatter(filepath):
    """Extract slug from frontmatter, or fall back to filename."""
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        # Match slug in frontmatter
        match = re.search(r'^slug:\s*(.+)$', content, re.MULTILINE)
        if match:
            return match.group(1).strip().strip('"').strip("'")
    except:
        pass
    # Fallback to filename
    return os.path.basename(filepath).replace('.md', '')

def build_source_only_slugs(redirects):
    """
    Build a set of URL paths that are ONLY redirect sources and never destinations.
    A file should be archived only if its URL is a source that redirects AWAY,
    and that URL is NOT also a destination of another redirect.
    """
    sources = set()
    destinations = set()

    for r in redirects:
        src = r.get('source', '').rstrip('/')
        dst = r.get('destination', '').rstrip('/')
        if src:
            sources.add(src)
        if dst:
            destinations.add(dst)

    # Only archive sources that are NOT also destinations
    archive_sources = sources - destinations
    return archive_sources

def get_content_urls(filepath, parent_type):
    """
    Given a content file, figure out what URL(s) it would produce on the site.
    Pages: /<slug>/
    Posts: /<slug>/
    """
    slug = get_slug_from_frontmatter(filepath)
    urls = set()
    # Add common URL patterns this file could match
    urls.add(f'/{slug}')
    if parent_type == 'pages':
        # Some pages might be under /services/, /conditions/, etc.
        # We check against all possible patterns
        urls.add(f'/services/{slug}')
        urls.add(f'/conditions/{slug}')
        urls.add(f'/pages/{slug}')
    if parent_type == 'posts':
        urls.add(f'/blogs/{slug}')
        urls.add(f'/blogs/red-light-therapy/{slug}')
        urls.add(f'/blogs/hydrogen-water/{slug}')
        urls.add(f'/blogs/probiotics/{slug}')
        urls.add(f'/blogs/pemf/{slug}')
        urls.add(f'/blogs/gut-health/{slug}')
        urls.add(f'/blogs/supplements/{slug}')
    return urls

def find_md_files(content_dirs):
    md_files = []
    for d in content_dirs:
        if not os.path.exists(d):
            continue
        for root, dirs, files in os.walk(d):
            if 'archive' in root.split(os.sep):
                continue
            for file in files:
                if file.endswith('.md'):
                    md_files.append(os.path.join(root, file))
    return md_files

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    redirects_file = os.path.join(base_dir, 'redirects.json')
    content_dirs = [
        os.path.join(base_dir, 'content', 'pages'),
        os.path.join(base_dir, 'content', 'posts')
    ]
    archive_dir = os.path.join(base_dir, 'content', 'archive')

    if not os.path.exists(archive_dir):
        os.makedirs(archive_dir)

    print(f"Loading redirects from {redirects_file}")
    redirects = load_redirects(redirects_file)
    archive_sources = build_source_only_slugs(redirects)
    print(f"Found {len(archive_sources)} redirect sources (excluding destinations).")

    # Also build full destination set for safety check
    destinations = set()
    for r in redirects:
        dst = r.get('destination', '').rstrip('/')
        if dst:
            destinations.add(dst)

    md_files = find_md_files(content_dirs)
    print(f"Scanning {len(md_files)} md files in content directories.\n")

    archived_count = 0
    skipped_destinations = []

    for filepath in md_files:
        parent_type = os.path.basename(os.path.dirname(filepath))  # 'pages' or 'posts'
        content_urls = get_content_urls(filepath, parent_type)

        # Check if ANY of this file's possible URLs match a source-only redirect
        is_redirect_source = bool(content_urls & archive_sources)

        # Safety: check if this file is also a redirect destination (should NOT archive)
        is_redirect_dest = bool(content_urls & destinations)

        if is_redirect_source and not is_redirect_dest:
            rel_path = os.path.relpath(filepath, base_dir)
            archive_filename = f"{parent_type}_{os.path.basename(filepath)}"
            archive_path = os.path.join(archive_dir, archive_filename)

            print(f"Archiving: {rel_path} -> content/archive/{archive_filename}")
            shutil.move(filepath, archive_path)
            archived_count += 1
        elif is_redirect_source and is_redirect_dest:
            slug = get_slug_from_frontmatter(filepath)
            skipped_destinations.append(slug)

    print(f"\nSuccessfully archived {archived_count} files.")

    if skipped_destinations:
        print(f"\nSkipped {len(skipped_destinations)} files that are both redirect sources AND destinations (live pages):")
        for s in sorted(skipped_destinations):
            print(f"  - {s}")

if __name__ == '__main__':
    main()
