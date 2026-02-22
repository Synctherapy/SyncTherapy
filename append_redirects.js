const fs = require('fs');

const mapData = JSON.parse(fs.readFileSync('mapped_result.json'));
const currentRedirects = JSON.parse(fs.readFileSync('redirects.json'));

const existingSources = new Set(currentRedirects.map(r => r.source));

let addedCount = 0;
for (const match of mapData.redirects) {
    if (!existingSources.has(match.source)) {
        currentRedirects.push({
            source: match.source,
            destination: match.destination,
            permanent: true
        });
        existingSources.add(match.source);
        addedCount++;
    }
}

fs.writeFileSync('redirects.json', JSON.stringify(currentRedirects, null, 2));
console.log(`Successfully added ${addedCount} new redirects from the mapped list to redirects.json.`);
console.log(`Total redirects is now: ${currentRedirects.length}`);
