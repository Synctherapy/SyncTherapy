const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

walkDir('./components/pages', function (filePath) {
    if (filePath.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const match = content.match(/<ServiceSchema[^>]*slug="([^"]+)"/);
        if (match) {
            console.log(`File: ${path.basename(filePath)} | Slug: ${match[1]}`);
        }
    }
});
