const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const CONTENT_DIR = path.join(__dirname, '../content');
const WP_UPLOADS_DIR = '/Users/jaystubbs/Local Sites/synctherapylocal/app/public/wp-content/uploads';
const NEXT_PUBLIC_UPLOADS_DIR = path.join(__dirname, '../public/uploads');

// Regex to find images
// Matches: src="https://synctherapylocal.local/wp-content/uploads/..." OR ](https://synctherapylocal.local/wp-content/uploads/...)
// We capture the relative path after /uploads/
const URL_REGEX = /https:\/\/synctherapylocal\.local\/wp-content\/uploads\/([^\s"'()]+)/g;

async function migrateImages() {
    // Ensure glob is available (you might need to install it if not present, but usually standard in many envs or use simple recursion)
    // If glob not available, I'll allow the user to install it.

    const files = glob.sync(`${CONTENT_DIR}/**/*.{md,mdx}`);
    console.log(`Found ${files.length} content files to scan.`);

    let totalImagesFound = 0;
    let totalImagesCopied = 0;
    let totalImagesMissing = 0;

    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;
        let match;

        // We use a loop with exec or replace to handle matches
        // But since we need async copy (or just synchronous copy for simplicity), let's find all matches first

        // Reset regex index if using exec loop, or just replace with callback
        content = content.replace(URL_REGEX, (fullMatch, relativePath) => {
            totalImagesFound++;

            // Decode URI components (e.g. %20 -> space)
            const decodedPath = decodeURIComponent(relativePath);

            const sourcePath = path.join(WP_UPLOADS_DIR, decodedPath);
            const destPath = path.join(NEXT_PUBLIC_UPLOADS_DIR, decodedPath);

            try {
                if (fs.existsSync(sourcePath)) {
                    // Ensure directory exists
                    fs.mkdirSync(path.dirname(destPath), { recursive: true });

                    // Copy file if it doesn't exist or overwrite? Let's overwrite to be safe/ensure latest version
                    fs.copyFileSync(sourcePath, destPath);
                    totalImagesCopied++;

                    // Return the new URL path
                    return `/uploads/${relativePath}`;
                } else {
                    console.warn(`[MISSING] Image not found at source: ${sourcePath}`);
                    totalImagesMissing++;
                    return fullMatch; // Keep original if missing
                }
            } catch (err) {
                console.error(`[ERROR] Failed to process ${sourcePath}: ${err.message}`);
                return fullMatch;
            }
        });

        // Write back if changed (regex replace returns new string)
        // To know if it changed, we can compare lengths or just write it if we found matches.
        // Simpler: if totalImagesFound incremented within this file loop... but the replace is global.
        // Let's just write file if matches were found, or simple comparison.
        // Actually regex replace always returns a string. If no matches, it returns original.
        // So simple equality check works.
        if (content !== fs.readFileSync(file, 'utf8')) {
            fs.writeFileSync(file, content, 'utf8');
            // console.log(`Updated images in: ${path.basename(file)}`);
        }
    }

    console.log('--- Migration Summary ---');
    console.log(`Total Images Found in Content: ${totalImagesFound}`);
    console.log(`Successfully Copied: ${totalImagesCopied}`);
    console.log(`Missing/Failed: ${totalImagesMissing}`);
}

migrateImages().catch(console.error);
