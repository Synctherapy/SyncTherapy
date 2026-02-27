import os
import re
import glob

def clean_markdown_files():
    content_dir = os.path.join(os.getcwd(), 'content')
    md_files = glob.glob(os.path.join(content_dir, '**', '*.md'), recursive=True)
    
    modified_count = 0
    for filepath in md_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Patterns to remove completely
        patterns_to_remove = [
            # Tailwind CDN
            r'<script src="https://cdn\.tailwindcss\.com"></script>\n?',
            
            # Google Fonts preconnect and link
            r'<link rel="preconnect" href="https://fonts\.googleapis\.com">\n?',
            r'<link rel="preconnect" href="https://fonts\.gstatic\.com" crossorigin>\n?',
            r'<link href="https://fonts\.googleapis\.com/css.*?" rel="stylesheet">\n?',
            
            # Font Awesome link
            r'<link rel="stylesheet" href="https://cdnjs\.cloudflare\.com/ajax/libs/font-awesome/.*?/css/all\.min\.css">\n?',
            
            # Body tags
            r'<body class="bg-neutral-light">\n?',
            r'</body>\n?'
        ]

        for pattern in patterns_to_remove:
            content = re.sub(pattern, '', content, flags=re.IGNORECASE)

        # We also need to remove the <style> block, but only the specific one injected by the template
        # So we look for a style block containing the 'New design template' comment or 'Custom styles'
        style_pattern = r'<style>.*?</style>\n?'
        # Replace only if it contains specific known content to avoid removing legitimate styles
        style_blocks = re.findall(style_pattern, content, flags=re.IGNORECASE | re.DOTALL)
        for block in style_blocks:
            if 'Custom styles based on the new design template' in block or '/* Custom color classes */' in block:
                content = content.replace(block, '')

        # Clean up any excessive blank lines left behind by the removals
        content = re.sub(r'\n{3,}', '\n\n', content)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            modified_count += 1
            print(f"Cleaned {os.path.basename(filepath)}")

    print(f"\nCleanup complete. Modified {modified_count} out of {len(md_files)} markdown files.")

if __name__ == "__main__":
    clean_markdown_files()
