import json
import os

# 1. Update redirects.json
redirects_file = 'redirects.json'
try:
    with open(redirects_file, 'r') as f:
        redirects = json.load(f)
except FileNotFoundError:
    print("No redirects.json found.")
    redirects = []

new_redirects = [
    {
        "source": "/services/chronic-disease-management/",
        "destination": "/conditions/chronic-disease-management/",
        "permanent": True
    },
    {
        "source": "/services/cardiovascular-health/",
        "destination": "/conditions/cardiovascular-health/",
        "permanent": True
    },
    {
        "source": "/services/fibromyalgia-treatment/",
        "destination": "/conditions/fibromyalgia/",
        "permanent": True
    },
    {
        "source": "/services/baseball-injury-therapy/",
        "destination": "/conditions/baseball-injuries/",
        "permanent": True
    }
]

# Avoid duplicates
existing_sources = [r['source'] for r in redirects]
for r in reversed(new_redirects):
    source_no_slash = r['source'].rstrip('/')
    source_with_slash = source_no_slash + '/'
    if source_no_slash not in existing_sources and source_with_slash not in existing_sources:
        redirects.insert(0, r)

with open(redirects_file, 'w') as f:
    json.dump(redirects, f, indent=4)
print("Updated redirects.json")

# 2. Update internal links
replacements = {
    "/services/chronic-disease-management": "/conditions/chronic-disease-management",
    "/services/cardiovascular-health": "/conditions/cardiovascular-health",
    "/services/fibromyalgia-treatment": "/conditions/fibromyalgia",
    "/services/baseball-injury-therapy": "/conditions/baseball-injuries"
}

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for old, new in replacements.items():
        # Handle links with or without trailing slash
        content = content.replace(old + "/", new + "/")
        # For strict matching on exact quotes where trailing slash is missing:
        content = content.replace(old + '"', new + '/"')
        content = content.replace(old + "'", new + "/'")
        content = content.replace(old + ")", new + "/)")

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated internal links in {filepath}")

for root, _, files in os.walk('.'):
    if any(ignore in root.split(os.sep) for ignore in ['.next', '.git', 'node_modules']):
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.mdx', '.md', '.txt')):
            path = os.path.join(root, file)
            # Skip updating redirects.json and the script itself as internal links
            if path not in ['./redirects.json', './update_urls.py', './update_6_urls.py']:
                replace_in_file(path)

print("Done updating URLs.")
