const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../.next/server/app/kala-red-light-therapy-review.html');

if (!fs.existsSync(filePath)) {
    console.error(`File ${filePath} not found. Ensure you have run 'npm run build'.`);
    process.exit(1);
}

const html = fs.readFileSync(filePath, 'utf8');

const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
let match;
let index = 1;

console.log(`Found JSON-LD blocks in ${filePath}:\n`);

while ((match = scriptRegex.exec(html)) !== null) {
    console.log(`--- Schema Box ${index} ---`);
    try {
        const parsed = JSON.parse(match[1]);
        console.log(`Type: ${parsed['@type']}`);
        if (parsed['@type'] === 'Review' || parsed['@type'] === 'Article' || parsed['@type'] === 'BlogPosting') {
            console.log(JSON.stringify(parsed, null, 2));
        }
    } catch (err) {
        console.error(`Syntax Error: ${err.message}`);
    }
    index++;
}
