const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, '../content');

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>?/gm, '');
}

async function populateSeo() {
    const files = glob.sync(`${CONTENT_DIR}/**/*.{md,mdx}`);
    console.log(`Scanning ${files.length} files for missing SEO data...`);

    let updatedCount = 0;

    for (const file of files) {
        const fileContent = fs.readFileSync(file, 'utf8');
        const { data, content } = matter(fileContent);
        let changed = false;

        if (!data.seoTitle || data.seoTitle.trim() === '') {
            data.seoTitle = data.title;
            changed = true;
        }

        if (!data.description || data.description.trim() === '') {
            // Extract description from content
            // The content might start with HTML, so we strip it.
            // We also need to handle the case where content starts with frontmatter (handled by matter)
            const plainText = stripHtml(content).replace(/\s+/g, ' ').trim();
            // Take first 160 chars, but try to cut at a word boundary
            let desc = plainText.substring(0, 160);
            if (plainText.length > 160) {
                const lastSpace = desc.lastIndexOf(' ');
                if (lastSpace > 0) desc = desc.substring(0, lastSpace);
                desc += '...';
            }
            data.description = desc;
            changed = true;
        }

        if (changed) {
            const newFileContent = matter.stringify(content, data);
            fs.writeFileSync(file, newFileContent, 'utf8');
            updatedCount++;
        }
    }

    console.log(`Updated SEO data for ${updatedCount} files.`);
}

populateSeo();
