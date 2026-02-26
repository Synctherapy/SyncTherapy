import json

def normalize_url(url):
    if not url.startswith('/'):
        url = '/' + url
    if not url.endswith('/'):
        url += '/'
    return url

with open('/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next/redirects.json', 'r') as f:
    redirects = json.load(f)

new_redirects = []
removed = 0

for r in redirects:
    src = r.get('source', '')
    dest = r.get('destination', '')
    
    # Check for direct loop (ignoring trailing slashes)
    if normalize_url(src) == normalize_url(dest):
        print(f"Removing loop: {src} -> {dest}")
        removed += 1
    else:
        # Also let's make sure ALL destinations have trailing slashes
        # to save Next.js a double redirect!
        if not dest.endswith('/'):
            r['destination'] = dest + '/'
            
        new_redirects.append(r)

# Check for chains now
source_to_rule = {normalize_url(r['source']): r for r in new_redirects}

# Let's flatten chains: if A -> B and B -> C, make A -> C
for r in new_redirects:
    src = normalize_url(r['source'])
    dest = normalize_url(r['destination'])
    
    visited = set([src])
    current = dest
    while current in source_to_rule:
        visited.add(current)
        next_rule = source_to_rule[current]
        next_dest = normalize_url(next_rule['destination'])
        if next_dest in visited:
            print(f"WARNING: Circular chain detected at {current} -> {next_dest}")
            break
        current = next_dest
        
    if current != dest and current not in visited:
        # Flatten the chain
        r['destination'] = current
        print(f"Flattened chain: {src} -> {current}")

with open('/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next/redirects.json', 'w') as f:
    json.dump(new_redirects, f, indent=4)

print(f"Removed {removed} circular redirects and normalized destinations.")
