import os
import re
import json

def get_redirects_map():
    with open('/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next/redirects.json', 'r') as f:
        redirects = json.load(f)
    
    rmap = {}
    for r in redirects:
        src = r['source']
        dest = r['destination']
        # normalize
        src_clean = src.rstrip('/')
        dest_clean = dest if dest.endswith('/') else dest + '/'
        
        rmap[src_clean] = dest_clean
        rmap[src_clean + '/'] = dest_clean
    return rmap

def ensure_trailing_slash(url):
    if url.startswith('/') and not url.endswith('/') and '#' not in url and '?' not in url and not re.search(r'\.[a-zA-Z0-9]+$', url):
        return url + '/'
    return url

rmap = get_redirects_map()

# Regex to match href="..." or href: "..." or href={'...'} or markdown ](...)
# Match group 1: prefix (e.g. `href="`, `href: "`, `href={'`, `]('`)
# Match group 2: URL
# Match group 3: suffix (e.g. `"`, `'`, `'}`, `)`)

link_pattern = re.compile(r'(href\s*=\s*["\']|href\s*:\s*["\']|href=\{["\']|\]\()([^"\'\}\)>]+)(["\']|\}\"|\}\'|\)|")')

def process_match(match):
    prefix = match.group(1)
    url = match.group(2)
    suffix = match.group(3)
    
    # 1. Strip local development / outdated domains
    if url.startswith('https://synctherapylocal.local'):
        url = url.replace('https://synctherapylocal.local', '')
    elif url.startswith('https://www.synctherapy.ca'):
        url = url.replace('https://www.synctherapy.ca', '')
    elif url.startswith('https://sync-therapy.vercel.app'):
        url = url.replace('https://sync-therapy.vercel.app', '')

    # We only process internal links
    if url.startswith('/'):
        # Parse hash and query to preserve them
        parts = url.split('#', 1)
        path_query = parts[0]
        hash_part = '#' + parts[1] if len(parts) > 1 else ''
        
        parts2 = path_query.split('?', 1)
        path_part = parts2[0]
        query_part = '?' + parts2[1] if len(parts2) > 1 else ''

        # 2. Check if the path is in the redirects map
        if path_part in rmap:
            path_part = rmap[path_part]
            
        # 3. Ensure trailing slash
        path_part = ensure_trailing_slash(path_part)
        
        # Reconstruct
        url = path_part + query_part + hash_part

    return prefix + url + suffix


directories_to_scan = [
    '/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next/app',
    '/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next/components',
    '/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next/content'
]

updated_files = 0

for d in directories_to_scan:
    for root, dirs, files in os.walk(d):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.md', '.mdx')):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                new_content = link_pattern.sub(process_match, content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    updated_files += 1

print(f"Updated JS/TS/MD internal links in {updated_files} files.")
