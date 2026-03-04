const url = 'https://www.synctherapy.ca/services/massage-therapy/';

fetch(url)
    .then(res => res.text())
    .then(html => {
        const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
        let match;
        let index = 1;
        while ((match = scriptRegex.exec(html)) !== null) {
            console.log(`--- Schema Box ${index} ---`);
            try {
                const parsed = JSON.parse(match[1]);
                console.log("✅ Valid JSON-LD!");
                console.log(`Type: ${parsed['@type']}`);
                if (parsed['@type'] === 'Service') {
                    console.log(JSON.stringify(parsed, null, 2));
                }
            } catch (err) {
                console.error("❌ INVALID JSON-LD DETECTED!");
                console.error(`Syntax Error: ${err.message}`);
                console.log("Raw JSON-LD String that failed to parse:");
                console.log(match[1]);
            }
            index++;
        }
    })
    .catch(console.error);
