import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'content', 'posts');
const files = fs.readdirSync(postsDir);

let filesModified = 0;
let wpilCount = 0;
let fusionCount = 0;
let wpImageCount = 0;
let shopifyCdnCount = 0;

for (const file of files) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
    if (file === 'best-sauna-blanket.md') continue; // Excluded per user request

    const filePath = path.join(postsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    // 1. Clean up classes
    content = content.replace(/class(Name)?="([^"]+)"/g, (match, isReact, classList) => {
        let classes = classList.split(/\s+/);
        let newClasses = classes.filter(c => {
            if (c === 'wpil_keyword_link') { wpilCount++; return false; }
            if (c.startsWith('wp-image-')) { wpImageCount++; return false; }
            if (c.startsWith('wp-block-')) return false;
            if (c.startsWith('fusion-')) { fusionCount++; return false; }
            if (c.startsWith('bggle')) return false; // bggle_image, bggle--block
            if (c === 'lazybloggle' || c === 'blog__img') return false;
            return true;
        });

        if (newClasses.length === 0) {
            return ''; // remove the class attribute entirely
        }
        return `class${isReact ? 'Name' : ''}="${newClasses.join(' ')}"`;
    });

    // 2. Remove empty class attributes safely
    content = content.replace(/\s+class(Name)?=""/g, '');

    // 3. Remove data-wpel-link
    content = content.replace(/\s+data-wpel-link="[^"]*"/g, '');

    // 4. Remove Shopify CDN data-srcset and srcset
    if (content.includes('cdn.shopify.com')) {
        content = content.replace(/\s+data-srcset="[^"]*cdn\.shopify\.com[^"]*"/g, () => {
            shopifyCdnCount++;
            return '';
        });
        content = content.replace(/\s+srcset="[^"]*cdn\.shopify\.com[^"]*"/g, () => {
            shopifyCdnCount++;
            return '';
        });
    }

    // Write changes if any were made
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        filesModified++;
    }
}

console.log(`Cleanup complete!`);
console.log(`Files modified: ${filesModified}`);
console.log(`Removed wpil_keyword_link: ${wpilCount} times`);
console.log(`Removed wp-image-* classes: ${wpImageCount} times`);
console.log(`Removed fusion-* classes: ${fusionCount} times`);
console.log(`Removed Shopify srcsets: ${shopifyCdnCount} times`);
