const fs = require('fs');
const currentRedirects = JSON.parse(fs.readFileSync('redirects.json'));

const newRedirects = [
  { source: "/conditions/shoulder-pain-relief-victoria/", destination: "/conditions/shoulder-pain/", permanent: true },
  { source: "/conditions/neck-pain-relief-victoria/", destination: "/conditions/neck-shoulder-pain/", permanent: true },
  { source: "/conditions/chronic-pain-relief-victoria/", destination: "/conditions/chronic-pain/", permanent: true },
  { source: "/conditions/sciatica-relief-victoria/", destination: "/conditions/sciatica-treatment/", permanent: true }
];

const existingSources = new Set(currentRedirects.map(r => r.source));

let addedCount = 0;
for (const match of newRedirects) {
    if (!existingSources.has(match.source)) {
        currentRedirects.push(match);
        existingSources.add(match.source);
        addedCount++;
    }
}

fs.writeFileSync('redirects.json', JSON.stringify(currentRedirects, null, 2));
console.log(`Successfully added ${addedCount} new condition redirects.`);
