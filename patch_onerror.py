import re
import glob

files = glob.glob("app/services/**/*.tsx", recursive=True) + glob.glob("app/conditions/**/*.tsx", recursive=True)

for file in files:
    with open(file, "r") as f:
        content = f.read()

    # Remove the onError block from the Image component
    pattern = r'\s*onError=\{\(e\) => \{\s*e\.currentTarget\.style\.display = \'none\';\s*\}\}'
    
    new_content = re.sub(pattern, '', content)
    
    if new_content != content:
        with open(file, "w") as f:
            f.write(new_content)
        print(f"Patched {file}")

print("Done patching onError.")
