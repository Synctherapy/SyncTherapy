import os
import re

replacements = {
    "/our-team": "/our-team/daryl-stubbs",
    "/seed-pediatric-probiotic-reviews": "/seed-probiotics-reviews",
    "/red-light-therapy-infographic": "/red-light-therapy",
    "/viome-vs-zoe": "/viome-review",
    "/best-massage-langford-clinics": "/services/massage-therapy",
    "/services/visceral-manipulation-victoria": "/services/visceral-manipulation",
    "/viome-vs-seed": "/viome-review",
    "/services/swedish-relaxation-massage-victoria": "/services/swedish-massage",
    "/services/athletic-therapy-colwood": "/services/athletic-therapy",
    "/massage-therapist-langford": "/services/massage-therapy",
    "/conditions/neck-pain": "/conditions/neck-shoulder-pain",
    "/red-light-therapy-boosts-mitochondrial-function": "/red-light-therapy",
    "/conditions/muscle-tension-relief": "/conditions/muscle-tension",
    "/cymbiotika-vs-seed-ds-01-probiotic": "/seed-vs-pendulum",
    "/best-probiotic-foods-for-gut-health-naturally": "/best-sauerkraut-for-probiotics",
    "/red-light-therapy-for-alopecia": "/red-light-therapy-and-scars",
    "/best-time-to-take-probiotics": "/best-prebiotics-and-probiotics-supplements"
}

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for old, new in replacements.items():
        pattern = r"(https://(?:www\.)?synctherapy\.ca|https://sync-therapy\.vercel\.app)?" + re.escape(old) + r"(/?)(?=[#\"'\?\)\s])"
        
        def replacer(match):
            domain = match.group(1) or ""
            trailing_slash = match.group(2)
            # Remove Vercel URL
            if "vercel.app" in domain:
                domain = ""
            return domain + new + ("/" if trailing_slash else "")
            
        content = re.sub(pattern, replacer, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('.'):
    # skip .next, .git, node_modules
    if any(ignore in root for ignore in ['.next', '.git', 'node_modules']):
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.mdx', '.json', '.md', '.txt')):
            replace_in_file(os.path.join(root, file))

print("DONE")
