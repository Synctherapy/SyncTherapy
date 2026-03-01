#!/usr/bin/env node

/**
 * Script to remove external CDN resources from markdown files
 * Preserves inline styles and HTML structure
 * Only removes render-blocking external scripts and stylesheets
 */

const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../content/posts');

// Patterns to remove (external CDN resources)
const patternsToRemove = [
  // External script tags from CDN
  /<script\s+src="https?:\/\/cdnjs\.cloudflare\.com[^"]*"[^>]*><\/script>/gi,
  /<script\s+src="https?:\/\/d2xvgzwm836rzd\.cloudfront\.net[^"]*"[^>]*><\/script>/gi,

  // External stylesheet links from CDN
  /<link\s+rel="stylesheet"\s+href="https?:\/\/cdnjs\.cloudflare\.com[^"]*"[^>]*>/gi,
  /<link\s+href="https?:\/\/d2xvgzwm836rzd\.cloudfront\.net[^"]*"[^>]*type="text\/css"[^>]*>/gi,

  // Tailwind CSS CDN comments/links (not needed - already in Next.js)
  /<!--\s*Tailwind CSS\s*-->\s*/gi,
  /<!--\s*Google Fonts[^>]*-->\s*/gi,
  /<!--\s*Font Awesome[^>]*-->\s*/gi,

  // Standalone empty HTML comments
  /^\s*<!--\s*-->\s*$/gm,
];

function cleanMarkdownFile(filePath) {
  console.log(`Processing: ${path.basename(filePath)}`);

  let content = fs.readFileSync(filePath, 'utf8');
  const originalLength = content.length;

  // Apply all removal patterns
  patternsToRemove.forEach(pattern => {
    content = content.replace(pattern, '');
  });

  // Clean up excessive blank lines (more than 2 consecutive)
  content = content.replace(/\n{4,}/g, '\n\n\n');

  const savedBytes = originalLength - content.length;

  if (savedBytes > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Cleaned ${savedBytes} bytes of CDN resources`);
    return true;
  } else {
    console.log(`  • No CDN resources found`);
    return false;
  }
}

function processAllMarkdownFiles() {
  console.log('🧹 Cleaning CDN resources from markdown files...\n');

  const files = fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(postsDir, f));

  let processedCount = 0;
  let cleanedCount = 0;

  files.forEach(filePath => {
    processedCount++;
    if (cleanMarkdownFile(filePath)) {
      cleanedCount++;
    }
  });

  console.log(`\n✨ Done! Processed ${processedCount} files, cleaned ${cleanedCount} files.`);
}

// Run the script
processAllMarkdownFiles();
