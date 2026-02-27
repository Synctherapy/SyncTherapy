import os
import re
import json
import csv

PROJECT_DIR = '/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next'
APP_DIR = os.path.join(PROJECT_DIR, 'app')
CONTENT_DIR = os.path.join(PROJECT_DIR, 'content')
REDIRECTS_FILE = os.path.join(PROJECT_DIR, 'redirects.json')

redirects = []
if os.path.exists(REDIRECTS_FILE):
    with open(REDIRECTS_FILE, 'r') as f:
        redirects = json.load(f)

# Normalize redirects: strip trailing slash and lowercase
redirect_sources = set(r['source'].rstrip('/').lower() for r in redirects)

results = []

def should_skip(url):
    cleaned = url.rstrip('/').lower()
    return cleaned in redirect_sources

def extract_from_tsx(filepath, url_path):
    if should_skip(url_path):
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    title_match = re.search(r'title\s*:\s*[\'"`](.*?)[\'"`]', content, re.DOTALL)
    desc_match = re.search(r'description\s*:\s*[\'"`](.*?)[\'"`]', content, re.DOTALL)
    
    title = title_match.group(1).replace('\n', ' ').strip() if title_match else ''
    desc = desc_match.group(1).lstrip(">").lstrip("-").strip() if desc_match else ''
    
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.IGNORECASE | re.DOTALL)
    if h1_match:
        h1 = h1_match.group(1).replace('\n', ' ').strip()
        h1 = re.sub(r'<[^>]+>', '', h1).strip()
    else:
        h1 = ''
        
    results.append({
        'url': url_path,
        'title': title,
        'meta_description': desc,
        'h1': h1,
        'type': 'page'
    })

def extract_from_md(filepath, url_path):
    if should_skip(url_path):
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    fm_match = re.search(r'^---\s*(.*?)\s*---', content, re.DOTALL)
    fm = fm_match.group(1) if fm_match else content

    title_match = re.search(r'^title:\s*[\'"]?(.*?)[\'"]?\s*$', fm, re.MULTILINE)
    seotitle_match = re.search(r'^seoTitle:\s*[\'"]?(.*?)[\'"]?\s*$', fm, re.MULTILINE)
    desc_match = re.search(r'^description:\s*[\'"]?(.*?)[\'"]?\s*$', fm, re.MULTILINE)

    title = title_match.group(1).strip() if title_match else ''
    seotitle = seotitle_match.group(1).strip() if seotitle_match else ''
    desc = desc_match.group(1).strip() if desc_match else ''

    final_title = seotitle if seotitle else title

    h1_match = re.search(r'^#\s+(.*?)$', content, re.MULTILINE)
    h1 = h1_match.group(1).strip() if h1_match else title

    results.append({
        'url': url_path,
        'title': final_title,
        'meta_description': desc,
        'h1': h1,
        'type': 'post'
    })

for root, dirs, files in os.walk(APP_DIR):
    for file in files:
        if file == 'page.tsx':
            filepath = os.path.join(root, file)
            rel_path = os.path.relpath(root, APP_DIR)
            
            if rel_path == '.':
                url_path = '/'
            else:
                if '[' in rel_path or '(' in rel_path:
                    continue
                url_path = '/' + rel_path.replace(os.sep, '/') + '/'
            
            extract_from_tsx(filepath, url_path)

posts_dir = os.path.join(CONTENT_DIR, 'posts')
if os.path.exists(posts_dir):
    for root, dirs, files in os.walk(posts_dir):
        for file in files:
            if file.endswith('.md') or file.endswith('.mdx'):
                filepath = os.path.join(root, file)
                slug = os.path.splitext(file)[0]
                url_path = f"/{slug}/"
                extract_from_md(filepath, url_path)

pages_dir = os.path.join(CONTENT_DIR, 'pages')
if os.path.exists(pages_dir):
    for root, dirs, files in os.walk(pages_dir):
        for file in files:
            if file.endswith('.md') or file.endswith('.mdx'):
                filepath = os.path.join(root, file)
                slug = os.path.splitext(file)[0]
                if slug in ['home', 'index', 'about', 'blog']:
                    continue
                url_path = f"/{slug}/"
                extract_from_md(filepath, url_path)

results = [r for r in results if r['title'] or r['meta_description'] or r['h1']]

results.sort(key=lambda x: x['url'])

csv_path = os.path.join(os.path.expanduser('~'), 'Downloads', 'seo_metadata_export.csv')
with open(csv_path, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['url', 'title', 'meta_description', 'h1', 'type'])
    writer.writeheader()
    writer.writerows(results)

print(f"Exported {len(results)} pages to {csv_path}")
