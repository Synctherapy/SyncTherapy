import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const postsDir = path.join(process.cwd(), 'content', 'posts');
const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'content');
const files = fs.readdirSync(postsDir);

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

function downloadImage(url, destPath) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(destPath)) {
            resolve();
            return;
        }
        const parsedUrl = new URL(url);
        const client = parsedUrl.protocol.startsWith('https') ? https : http;

        client.get(url, (response) => {
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(destPath);
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                reject(`Failed to download: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            reject(err.message);
        });
    });
}

(async () => {
    let filesModified = 0;
    let totalImagesDownloaded = 0;

    for (const file of files) {
        if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
        if (file === 'best-sauna-blanket.md') continue;

        const filePath = path.join(postsDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        let originalContent = content;

        // Match any shopify cdn URL
        const shopifyUrlRegex = /https?:\/\/cdn\.shopify\.com\/s\/files\/[^"' \)\n]+(?:\.jpg|\.jpeg|\.png|\.webp|\.gif|\.svg)(?:\?v=\d+)?(?:&\w+=[^"' \)\n]*)?/ig;

        let match;
        const matches = [...content.matchAll(shopifyUrlRegex)];

        if (matches.length > 0) {
            for (const m of matches) {
                const fullUrl = m[0];

                // Exclude srcset matches if any are left
                if (content.indexOf(`srcset="${fullUrl}`) !== -1 || content.indexOf(`data-srcset="${fullUrl}`) !== -1) {
                    // In previous script we removed srcset altogether, so this should just be direct src or md links
                }

                // Parse URL
                try {
                    const parsed = new URL(fullUrl);
                    const pathname = parsed.pathname;
                    let filename = path.basename(pathname);
                    // Sometimes shopify appends _1000x or something to the filename before the extension
                    // We can just keep the filename as is
                    const cleanFilename = filename.replace(/_[0-9]+x\./, '.'); // Try to get base

                    const localPath = path.join(uploadsDir, filename);
                    const localUrl = `/uploads/content/${filename}`;

                    console.log(`Downloading ${fullUrl} to ${localPath}`);
                    await downloadImage(fullUrl, localPath);
                    totalImagesDownloaded++;

                    // Replace all occurrences in this file
                    // escape fullUrl for regex
                    const escapedUrl = fullUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    content = content.replace(new RegExp(escapedUrl, 'g'), localUrl);
                } catch (e) {
                    console.error(`Error processing ${fullUrl}:`, e);
                }
            }
        }

        // Write changes if any were made
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            filesModified++;
        }
    }

    console.log(`\nShopify Image Extraction Complete!`);
    console.log(`Files modified: ${filesModified}`);
    console.log(`Total images downloaded/processed: ${totalImagesDownloaded}`);
})();
