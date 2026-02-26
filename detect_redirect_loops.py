import json

def normalize_url(url):
    if not url.startswith('/'):
        url = '/' + url
    if not url.endswith('/'):
        url += '/'
    return url

with open('/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next/redirects.json', 'r') as f:
    redirects = json.load(f)

# Find loops:
# 1. source == destination (after normalization)
# 2. destination points to another redirect source, forming a chain that loops

loops = []
for r in redirects:
    src = r.get('source', '')
    dest = r.get('destination', '')
    
    # 1. Check if it's a trailing slash loop
    if src + '/' == dest or src == dest + '/':
        loops.append((src, dest, 'Trailing Slash Loop'))
        continue
        
    s_norm = normalize_url(src)
    d_norm = normalize_url(dest)
    if s_norm == d_norm:
        loops.append((src, dest, 'Normalized Loop'))

print(f"Found {len(loops)} direct loops.")
for l in loops[:20]:
    print(l)

# Check for chains A -> B -> A
source_to_dest = {}
for r in redirects:
    src = normalize_url(r['source'])
    dest = normalize_url(r['destination'])
    source_to_dest[src] = dest

chain_loops = []
for src, dest in source_to_dest.items():
    visited = set()
    current = src
    while current in source_to_dest:
        visited.add(current)
        next_node = source_to_dest[current]
        if next_node in visited:
            chain_loops.append((src, next_node))
            break
        current = next_node

print(f"Found {len(chain_loops)} chain loops.")
if chain_loops:
    print(chain_loops[:10])
