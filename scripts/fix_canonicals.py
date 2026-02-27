import os
import glob
import re

base_dir = "/Users/jaystubbs/Local Sites/synctherapylocal/synctherapy-next/app"
patterns = [
    os.path.join(base_dir, "conditions", "**", "page.tsx"),
    os.path.join(base_dir, "services", "**", "page.tsx"),
    os.path.join(base_dir, "html-sitemap", "page.tsx"),
    os.path.join(base_dir, "page.tsx"),
]

files = []
for p in patterns:
    files.extend(glob.glob(p, recursive=True))

for f in set(files):
    if '[...slug]' in f:
        continue
    with open(f, 'r') as file:
        content = file.read()
    
    # Update existing canonical domain if it is missing the www
    content = re.sub(r"canonical:\s*[\'\"]https://synctherapy\.ca", "canonical: 'https://www.synctherapy.ca", content)
    
    # Provide the relative path (with trailing slash)
    rel_path = f.replace(base_dir, "").replace("/page.tsx", "").replace("\\", "/") + "/"
    if rel_path == "//":
        rel_path = "/"
        
    canonical_url = f"https://www.synctherapy.ca{rel_path}"
    
    # Check if metadata block exists
    if "export const metadata: Metadata = {" in content or "export const metadata = {" in content:
        if "alternates:" not in content and "canonical:" not in content:
            # Inject it after export statement
            injection = "\n    alternates: {\n        canonical: '" + canonical_url + "',\n    },"
            content = content.replace("export const metadata: Metadata = {", "export const metadata: Metadata = {" + injection)
            content = content.replace("export const metadata = {", "export const metadata = {" + injection)
            
    else:
        # File doesn't export metadata, inject it
        if "generateMetadata" not in content:
            imports = ""
            if "Metadata" not in content:
                imports = "import { Metadata } from 'next';\n"
            
            metadata_block = "\nexport const metadata: Metadata = {\n    alternates: {\n        canonical: '" + canonical_url + "',\n    },\n};\n\n"
            
            if "export default function" in content:
                content = imports + re.sub(r"(export default function)", metadata_block + r"\1", content)
            else:
                content = imports + content + metadata_block
        
    with open(f, 'w') as file:
        file.write(content)

print(f"Updates completed for {len(files)} files!")
