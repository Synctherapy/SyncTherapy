import os
import json
import re

base_dir = "/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next"

replacements = {
    "/conditions/shoulder-pain-victoria-bc": "/conditions/shoulder-pain",
    "/conditions/sciatica-treatment-victoria": "/conditions/sciatica-treatment",
    "/conditions/plantar-fasciitis-treatment-victoria": "/conditions/plantar-fasciitis",
    "/conditions/headaches-and-neck-pain": "/conditions/headaches-migraines",
    "/conditions/back-pain-victoria": "/conditions/back-pain"
}

# Fix internal links
def replace_in_files(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.md', '.mdx')):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r') as f:
                        content = f.read()
                    
                    new_content = content
                    for old, new in replacements.items():
                        # Replace exact matches (with optional trailing slashes) in links
                        new_content = re.sub(re.escape(old) + r'(/?)(["\'\s)}])', new + r'\1\2', new_content)
                    
                    if new_content != content:
                        with open(filepath, 'w') as f:
                            f.write(new_content)
                        print(f"Updated links in {filepath}")
                except Exception as e:
                    pass

replace_in_files(os.path.join(base_dir, "content"))
replace_in_files(os.path.join(base_dir, "components"))
replace_in_files(os.path.join(base_dir, "app"))

# Update redirects.json
redirects_file = os.path.join(base_dir, "redirects.json")
try:
    with open(redirects_file, 'r') as f:
        redirects = json.load(f)
        
    for old, new in replacements.items():
        # Check if already exists
        exists = False
        for r in redirects:
            if r.get('source') == old or r.get('source') == old + '/':
                r['destination'] = new + '/'  # Enforce trailing slash on dest
                exists = True
                
        if not exists:
            redirects.append({
                "source": old + '/',
                "destination": new + '/',
                "permanent": True
            })
            # Also add without trailing slash just in case Next.js routing needs it
            redirects.append({
                "source": old,
                "destination": new + '/',
                "permanent": True
            })
            
    with open(redirects_file, 'w') as f:
        json.dump(redirects, f, indent=2)
    print("Updated redirects.json")
except Exception as e:
    print(f"Error updating redirects: {e}")
