const url = 'https://www.synctherapy.ca/blog/kala-red-light-therapy-review/';

fetch(url)
    .then(res => res.text())
    .then(html => {
        const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
        let match;
        let index = 1;

        console.log("Found JSON-LD blocks:\n");

        while ((match = scriptRegex.exec(html)) !== null) {
            console.log(`--- Schema Box ${index} ---`);
            try {
                const parsed = JSON.parse(match[1]);
                console.log(`Type: ${parsed['@type']}`);
                if (parsed['@type'] === 'Review' || parsed['@type'] === 'Article') {
                    console.log(JSON.stringify(parsed, null, 2));
                }
            } catch (err) {
                console.error(`Syntax Error: ${err.message}`);
            }
            index++;
        }
    })
    .catch(console.error);
