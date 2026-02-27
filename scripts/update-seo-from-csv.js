const fs = require('fs');
const path = require('path');
const glob = require('glob');
const csv = require('csv-parser');
const matter = require('gray-matter');

const PROJECT_DIR = path.join(__dirname, '..');
const APP_DIR = path.join(PROJECT_DIR, 'app');
const CONTENT_DIR = path.join(PROJECT_DIR, 'content');

// Using the absolute path provided by the user
const CSV_FILE = '/Users/jaystubbs/Local Sites/synctherapylocal/Updated Meta Title and description - All Metadata Rewrites.csv';

const updates = new Map();

// Helper to determine string representation of URL matching what we exported
function getUrlPathFromAppRoute(root) {
    const relPath = path.relative(APP_DIR, root);
    if (relPath === '') return '/';
    // Skip dynamic routes for now if any
    if (relPath.includes('[') || relPath.includes('(')) return null;
    return '/' + relPath.split(path.sep).join('/') + '/';
}

function getUrlPathFromContentRoute(file, subdir) {
    const slug = path.basename(file, path.extname(file));
    if (subdir === 'pages' && ['home', 'index', 'about', 'blog'].includes(slug)) {
        return null;
    }
    return `/${slug}/`;
}

async function readCsv() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(CSV_FILE)
            .pipe(csv())
            .on('data', (row) => {
                const url = row['URL'];
                const newTitle = row['NEW Title'];
                const newDesc = row['NEW Meta Description'];

                if (url && (newTitle || newDesc)) {
                    updates.set(url.toLowerCase(), {
                        title: newTitle ? newTitle.trim() : null,
                        description: newDesc ? newDesc.trim() : null
                    });
                }
            })
            .on('end', () => {
                resolve();
            })
            .on('error', reject);
    });
}

async function updateTsxFiles() {
    let updatedCount = 0;
    const files = glob.sync(`${APP_DIR}/**/page.tsx`);

    for (const file of files) {
        const root = path.dirname(file);
        const urlPath = getUrlPathFromAppRoute(root);

        if (!urlPath) continue;

        const updateData = updates.get(urlPath.toLowerCase());
        if (!updateData) continue;

        let content = fs.readFileSync(file, 'utf8');
        let changed = false;

        // This regex looks for export const metadata = { ... } and updates title/description within it
        // Note: It's simplistic and assumes a relatively standard format
        if (updateData.title && updateData.title !== '') {
            const titleRegex = /(title\s*:\s*)(['"`])(.*?)\2/g;
            if (titleRegex.test(content)) {
                content = content.replace(titleRegex, `$1$2${updateData.title.replace(/'/g, "\\'")}$2`);
                changed = true;
            } else {
                console.log(`Warning: Could not find title metadata field in ${file}`);
            }
        }

        if (updateData.description && updateData.description !== '') {
            const descRegex = /(description\s*:\s*)(['"`])([\s\S]*?)\2/g;
            if (descRegex.test(content)) {
                content = content.replace(descRegex, `$1$2${updateData.description.replace(/'/g, "\\'")}$2`);
                changed = true;
            } else {
                console.log(`Warning: Could not find description metadata field in ${file}`);
            }
        }

        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            updatedCount++;
            console.log(`Updated TSX metadata for ${urlPath}`);
        }
    }
    return updatedCount;
}

async function updateMdFiles() {
    let updatedCount = 0;
    const contentTypes = ['posts', 'pages'];

    for (const type of contentTypes) {
        const dir = path.join(CONTENT_DIR, type);
        if (!fs.existsSync(dir)) continue;

        const files = glob.sync(`${dir}/**/*.{md,mdx}`);

        for (const file of files) {
            const urlPath = getUrlPathFromContentRoute(file, type);
            if (!urlPath) continue;

            const updateData = updates.get(urlPath.toLowerCase());
            if (!updateData) continue;

            let fileContent = fs.readFileSync(file, 'utf8');
            try {
                const { data, content } = matter(fileContent);
                let changed = false;

                if (updateData.title && updateData.title !== '') {
                    // Update both to be safe, but primarily seoTitle
                    data.seoTitle = updateData.title;
                    if (!data.title) {
                        data.title = updateData.title;
                    }
                    changed = true;
                }

                if (updateData.description && updateData.description !== '') {
                    data.description = updateData.description;
                    changed = true;
                }

                if (changed) {
                    const newFileContent = matter.stringify(content, data);
                    fs.writeFileSync(file, newFileContent, 'utf8');
                    updatedCount++;
                    console.log(`Updated MD frontmatter for ${urlPath}`);
                }
            } catch (err) {
                console.error(`Error parsing matter for ${file}:`, err);
            }
        }
    }
    return updatedCount;
}

async function main() {
    try {
        console.log('Reading CSV...');
        await readCsv();
        console.log(`Loaded ${updates.size} updates from CSV.`);

        console.log('Updating TSX files...');
        const tsxCount = await updateTsxFiles();

        console.log('Updating MD files...');
        const mdCount = await updateMdFiles();

        console.log(`\nSuccess! Updated ${tsxCount} TSX files and ${mdCount} MD files.`);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

main();
