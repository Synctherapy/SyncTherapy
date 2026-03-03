const fs = require('fs');
const path = require('path');

const postsDir = path.join(process.cwd(), 'content/posts');

// Helper to escape or format frontmatter strings securely
function escapeYAMLString(str) {
    if (typeof str !== 'string') return '';

    // Clean out weird parsed characters or accidentally caught frontmatter
    let cleanStr = str.replace(/---\n[\s\S]*?\n---/, '').replace(/\n{2,}/g, '\n').trim();

    // If it has newlines, format as block scalar
    if (cleanStr.includes('\n')) {
        return `|-\n      ${cleanStr.replace(/\n/g, '\n      ')}`;
    }

    // If it contains colon, quotes, or special characters, wrap in double quotes and escape internal double quotes
    if (cleanStr.includes(':') || cleanStr.includes("'") || cleanStr.includes('"') || cleanStr.includes('#') || cleanStr.includes('>') || cleanStr.includes('{') || cleanStr.includes('[')) {
        return `"${cleanStr.replace(/"/g, '\\"')}"`;
    }

    return cleanStr;
}

async function migrateSchemas() {
    let files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
    console.log(`Scanning ${files.length} markdown files...`);

    let modifiedCount = 0;

    for (const filename of files) {
        const filePath = path.join(postsDir, filename);
        let content = fs.readFileSync(filePath, 'utf-8');

        // Check if there's any JSON-LD script block
        if (!content.includes('<script type="application/ld+json">')) {
            continue;
        }

        // We only care about Review and FAQPage schemas, and extracting their specific properties
        const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
        let match;

        // We'll collect new frontmatter attributes here
        let newFrontmatterProps = {};
        let scriptsToRemove = [];

        while ((match = schemaRegex.exec(content)) !== null) {
            scriptsToRemove.push(match[0]);

            try {
                // Parse the JSON. Sometimes they have trailing commas or are slightly malformed
                let cleanJsonStr = match[1].trim()
                    .replace(/,(\s*[\}\]])/g, '$1') // remove trailing commas
                    .replace(/[\u0000-\u0019]+/g, ""); // remove control chars

                const schema = JSON.parse(cleanJsonStr);

                // --- 1. EXTRACT REVIEW DATA ---
                if (schema['@type'] === 'Review') {
                    if (schema.reviewRating?.ratingValue) {
                        newFrontmatterProps['rating'] = schema.reviewRating.ratingValue;
                    }

                    if (schema.itemReviewed) {
                        const item = schema.itemReviewed;
                        if (item.name && item['@type'] === 'Product') {
                            newFrontmatterProps['productName'] = item.name;
                        }

                        // Handle ProductGroup -> hasVariant for Kala specific reviews where main is a variant array
                        if (item['@type'] === 'ProductGroup' && Array.isArray(item.hasVariant)) {
                            newFrontmatterProps['productName'] = item.name;
                            // We don't port all variants to frontmatter right now, just the main product name
                        }
                    }
                }

                // --- 2. EXTRACT FAQ DATA ---
                if (schema['@type'] === 'FAQPage' && Array.isArray(schema.mainEntity)) {
                    newFrontmatterProps['faqs'] = schema.mainEntity.map(q => ({
                        question: q.name,
                        answer: q.acceptedAnswer?.text || ''
                    }));
                }

            } catch (e) {
                console.error(`Error parsing JSON-LD in ${filename}:`, e.message);
                // We still want to remove it to stop duplicate schemas, even if parsing failed partially
            }
        }

        if (scriptsToRemove.length > 0) {
            // 1. Remove all old script tags from content
            for (const scriptTag of scriptsToRemove) {
                content = content.replace(scriptTag, '');
            }

            // Also clean up any loose HTML comments that wrapped them like "<!-- Schema Markup -->"
            content = content.replace(/<!--\s*(FAQ|Review)?\s*Schema[\s\S]*?-->/gi, '');

            // 2. Inject new properties into frontmatter
            if (Object.keys(newFrontmatterProps).length > 0) {
                // Find existing frontmatter block
                const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
                const fmMatch = frontmatterRegex.exec(content);

                if (fmMatch) {
                    let newFmBlock = fmMatch[1];

                    // Append rating / productName
                    if (newFrontmatterProps.rating && !newFmBlock.includes('\nrating:')) {
                        newFmBlock += `\nrating: ${newFrontmatterProps.rating}`;
                    }
                    if (newFrontmatterProps.productName && !newFmBlock.includes('\nproductName:')) {
                        newFmBlock += `\nproductName: ${escapeYAMLString(newFrontmatterProps.productName)}`;
                    }

                    // Append FAQs
                    if (newFrontmatterProps.faqs && newFrontmatterProps.faqs.length > 0 && !newFmBlock.includes('\nfaqs:')) {
                        newFmBlock += `\nfaqs:`;
                        for (const faq of newFrontmatterProps.faqs) {
                            newFmBlock += `\n  - question: ${escapeYAMLString(faq.question)}`;
                            newFmBlock += `\n    answer: ${escapeYAMLString(faq.answer)}`;
                        }
                    }

                    // Replace old frontmatter
                    content = content.replace(frontmatterRegex, `---\n${newFmBlock}\n---`);
                }
            }

            // Cleanup multiple blank lines left behind
            content = content.replace(/\n{3,}/g, '\n\n');

            fs.writeFileSync(filePath, content, 'utf-8');
            modifiedCount++;
            console.log(`Migrated schemas in: ${filename}`);
        }
    }

    console.log(`\nMigration complete. Modified ${modifiedCount} files.`);
}

migrateSchemas().catch(console.error);
