const https = require('https');

function checkUrl(url) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      const matches = data.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
      if (matches) {
        console.log(`Found ${matches.length} JSON-LD blocks on ${url}:`);
        matches.forEach(m => {
          try {
            const jsonStr = m.replace(/<script type="application\/ld\+json">/i, '').replace(/<\/script>/i, '').trim();
            const parsed = JSON.parse(jsonStr);
            console.log(`- Type: ${parsed['@type']}`);
            if (parsed['@type'] === 'Service' || parsed['@type'] === 'MedicalCondition') {
              console.log(JSON.stringify(parsed, null, 2));
            }
          } catch (e) {
            console.log(`- Parse error: ${e.message}`);
          }
        });
      } else {
        console.log(`No JSON-LD blocks found on ${url}`);
      }
    });
  });
}

checkUrl('https://www.synctherapy.ca/services/massage-therapy/');
