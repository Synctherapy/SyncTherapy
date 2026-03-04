const https = require('https');

https.get('https://www.synctherapy.ca/services/health-consulting/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Look for JSON-LD schemas
        const regex = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
        let match;
        let found = false;
        while ((match = regex.exec(data)) !== null) {
            found = true;
            try {
                const parsed = JSON.parse(match[1].trim());
                console.log("SCHEMA FOUND:", JSON.stringify(parsed, null, 2));
            } catch (e) {
                // If it fails, print raw
                console.log("Raw match:", match[1]);
            }
        }

        // Also look inside next data dumps
        if (data.includes('Health Consulting &amp; Wellness Strategy')) {
            console.log("Found text indicating the page loaded correctly.");
        }

        if (!found) {
            console.log("No exact script tags found, checking for JSON substrings...");
            const jsonMatch = data.match(/{"@context":"https:\/\/schema\.org"[^<]*/g);
            if (jsonMatch) {
                jsonMatch.forEach(str => {
                    console.log("Potential schema in inline js:", str.substring(0, 500) + '...');
                });
            }
        }
    });
});
