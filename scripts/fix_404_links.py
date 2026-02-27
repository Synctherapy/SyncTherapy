import os
import json
import re

base_dir = "/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next"

replacements = {
    "/nutrition-consulting": "/services/nutrition-consulting",
    "/conditions/knee-pain": "/conditions/anterior-knee-pain",
    "/services/deep-tissue-massage-victoria": "/services/deep-tissue-massage",
    "/services/direct-billing": "/direct-billing",
    "/conditions/cholesterol-management": "/services/cholesterol-diet",
    "/services/chronic-pain-victoria": "/conditions/chronic-pain"
}

# Fix internal links
def replace_in_files(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            # Avoid the script modifying itself
            if root == os.path.join(base_dir, "scripts"):
                continue
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

print("Scanning for internal links to update...")
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
                # Update destination if it exists but is wrong
                if r['destination'] != new + '/':
                    r['destination'] = new + '/'  # Enforce trailing slash on dest
                    exists = True
                else:
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
