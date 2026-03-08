import os
import json
import shutil
from pathlib import Path

def get_redirect_sources(redirects_file):
    with open(redirects_file, 'r') as f:
        redirects = json.load(f)
    
    sources = set()
    for redirect in redirects:
        source = redirect.get('source', '')
        if source:
            # Clean up the source to match potential file slugs
            # e.g., /blogs/red-light-therapy/mito-pro-x-750-review -> mito-pro-x-750-review
            parts = [p for p in source.split('/') if p]
            if parts:
                sources.add(parts[-1])
                # Also add the full relative path without leading slash
                sources.add(source.lstrip('/'))
    return sources

def find_md_files(content_dirs):
    md_files = []
    for d in content_dirs:
        for root, dirs, files in os.walk(d):
            # Skip archive directory itself
            if 'archive' in root.split(os.sep):
                continue
            for file in files:
                if file.endswith('.md'):
                    md_files.append(os.path.join(root, file))
    return md_files

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    redirects_file = os.path.join(base_dir, 'redirects.json')
    content_dirs = [
        os.path.join(base_dir, 'content', 'pages'),
        os.path.join(base_dir, 'content', 'posts')
    ]
    archive_dir = os.path.join(base_dir, 'content', 'archive')
    
    if not os.path.exists(archive_dir):
        os.makedirs(archive_dir)

    print(f"Loading redirects from {redirects_file}")
    redirect_sources = get_redirect_sources(redirects_file)
    print(f"Found {len(redirect_sources)} potential slugs/paths to archive.")

    md_files = find_md_files(content_dirs)
    print(f"Scanning {len(md_files)} md files in content directories.")

    archived_count = 0
    for filepath in md_files:
        filename = os.path.basename(filepath)
        slug = filename.replace('.md', '')
        
        # Check if the slug or any part of the path matches a redirect source
        # A more precise way: check if the slug exactly matches the last part of a redirect source
        if slug in redirect_sources:
            # Found a match, let's archive it
            rel_path = os.path.relpath(filepath, base_dir)
            # Create a flat or nested structure in archive. Let's do flat for simplicity,
            # but prefix with folder name to avoid collisions if necessary.
            # E.g. posts_mito-pro-x-750.md
            parent_dir = os.path.basename(os.path.dirname(filepath))
            archive_filename = f"{parent_dir}_{filename}"
            archive_path = os.path.join(archive_dir, archive_filename)
            
            print(f"Archiving: {rel_path} -> content/archive/{archive_filename}")
            shutil.move(filepath, archive_path)
            archived_count += 1
            
    print(f"\nSuccessfully archived {archived_count} files.")

if __name__ == '__main__':
    main()
