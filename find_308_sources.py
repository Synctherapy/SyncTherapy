import os
import re

urls_to_check = [
    "/conditions/neck-shoulder-pain",
    "/services/athletic-therapy",
    "/our-team/daryl-stubbs",
    "/services/visceral-manipulation",
    "/services/massage-therapy",
    "/services/neck-pain-relief",
    "/services/migraine-headache-management",
    "/seed-pediatric-probiotic-reviews",
    "/red-light-therapy-infographic",
    "/services/chronic-pain-management",
    "/viome-vs-zoe",
    "/best-massage-langford-clinics",
    "/viome-vs-seed",
    "/seed-vs-pendulum",
    "/services/health-assessment",
    "/services/arthritis-pain-management",
    "/red-light-therapy",
    "/seed-probiotics-reviews",
    "/services/shoulder-impingement",
    "/services/sprain-strain-treatment",
    "/best-prebiotics-and-probiotics-supplements",
    "/services/anterior-knee-pain",
    "/services/tendonitis-treatment",
    "/red-light-therapy-and-scars",
    "/viome-review",
    "/services/swedish-massage",
    "/services/knee-pain-treatment",
    "/services/rotator-cuff-rehab",
    "/services/athletic-training",
    "/conditions/irritable-bowel-syndrome",
    "/red-light-therapy-and-mitochondria",
    "/pemf-vs-tens",
    "/pemf-therapy-for-arthritis-relief",
    "/best-sauerkraut-for-probiotics",
    "/pemf-mat-benefits",
    "/how-pemf-therapy-works"
]

results = {url: [] for url in urls_to_check}

def search_files(directory):
    for root, dirs, files in os.walk(directory):
        if any(skip in root for skip in ['.git', 'node_modules', '.next']):
            continue
        for file in files:
            if file.endswith(('.tsx', '.ts', '.md', '.mdx', '.json')):
                filepath = os.path.join(root, file)
                if file == 'redirects.json': 
                    continue # skip redirects since we know they are there
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                        for i, line in enumerate(lines):
                            for url in urls_to_check:
                                # Look for the exact URL. We want to catch instances where it might be missing a trailing slash
                                # e.g. href="/services/massage-therapy"
                                # or href="https://sync-therapy.vercel.app/services/massage-therapy"
                                if url in line:
                                    # To avoid false positives (like "/services/massage-therapy/" matching "/services/massage-therapy"),
                                    # let's only count if it is strictly without the trailing slash when followed by quote or space,
                                    # OR if we are looking for the version WITH the trailing slash.
                                    # Actually, let's just log the exact line to see context.
                                    results[url].append(f"{filepath}:{i+1}: {line.strip()[:100]}")
                except Exception as e:
                    pass

search_files('.')

found_any = False
for url, hits in results.items():
    if hits:
        found_any = True
        print(f"\n--- Found {len(hits)} hits for {url} ---")
        for h in hits[:5]: # Show first 5 hits
            print(h)

if not found_any:
    print("NO MATCHES FOUND FOR ANY URLS IN CODEBASE.")
