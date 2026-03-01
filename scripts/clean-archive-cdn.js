#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const archiveDir = path.join(__dirname, '../content/archive');

const patternsToRemove = [
  /<script\s+src="https?:\/\/cdnjs\.cloudflare\.com[^"]*"[^>]*><\/script>/gi,
  /<script\s+src="https?:\/\/d2xvgzwm836rzd\.cloudfront\.net[^"]*"[^>]*><\/script>/gi,
  /<link\s+rel="stylesheet"\s+href="https?:\/\/cdnjs\.cloudflare\.com[^"]*"[^>]*>/gi,
  /<link\s+href="https?:\/\/d2xvgzwm836rzd\.cloudfront\.net[^"]*"[^>]*type="text\/css"[^>]*>/gi,
  /<!--\s*Tailwind CSS\s*-->\s*/gi,
  /<!--\s*Google Fonts[^>]*-->\s*/gi,
  /<!--\s*Font Awesome[^>]*-->\s*/gi,
  /^\s*<!--\s*-->\s*$/gm,
];

function cleanMarkdownFile(filePath) {
  console.log(`Processing: ${path.basename(filePath)}`);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalLength = content.length;

  patternsToRemove.forEach(pattern => {
    content = content.replace(pattern, '');
  });

  content = content.replace(/\n{4,}/g, '\n\n\n');

  const savedBytes = originalLength - content.length;
  if (savedBytes > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Cleaned ${savedBytes} bytes`);
    return true;
  } else {
    console.log(`  • No CDN resources found`);
    return false;
  }
}

console.log('🧹 Cleaning archive folder...\n');
const files = fs.readdirSync(archiveDir)
  .filter(f => f.endsWith('.md'))
  .map(f => path.join(archiveDir, f));

let cleaned = 0;
files.forEach(filePath => {
  if (cleanMarkdownFile(filePath)) cleaned++;
});

console.log(`\n✨ Done! Processed ${files.length} files, cleaned ${cleaned} files.`);
