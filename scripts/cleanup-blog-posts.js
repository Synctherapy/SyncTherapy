#!/usr/bin/env node
/**
 * Cleanup Script for Blog Posts
 * Removes WordPress artifacts and external CDN loads
 */

const fs = require('fs');
const path = require('path');

function cleanupBlogPost(filePath) {
  console.log(`\n🔧 Cleaning: ${path.basename(filePath)}`);

  let content = fs.readFileSync(filePath, 'utf8');
  const originalLength = content.length;

  // 1. Remove WordPress HTML comment blocks
  content = content.replace(/<!-- wp:html -->\n?/g, '');
  content = content.replace(/\n?<!-- \/wp:html -->/g, '');
  content = content.replace(/<!-- wp:paragraph -->\n?/g, '');
  content = content.replace(/\n?<!-- \/wp:paragraph -->/g, '');

  // 2. Remove external CDN script/link tags
  content = content.replace(/<script[^>]*src="https:\/\/cdn\.tailwindcss\.com"[^>]*><\/script>\n?/g, '');
  content = content.replace(/<link[^>]*font-awesome[^>]*>\n?/g, '');
  content = content.replace(/<link[^>]*googleapis[^>]*>\n?/g, '');
  content = content.replace(/<link[^>]*preconnect[^>]*>\n?/g, '');
  content = content.replace(/<noscript>.*?<\/noscript>\n?/gs, '');

  // 3. Remove WordPress Internal Linking plugin attributes
  content = content.replace(/\s*data-wpil[^=]*="[^"]*"/g, '');
  content = content.replace(/\s*data-wpil-[^=]*="[^"]*"/g, '');
  content = content.replace(/\s*wpil="url"/g, '');

  // 4. Clean up data-wpil-monitor-id attributes
  content = content.replace(/\s*data-wpil-monitor-id="[^"]*"/g, '');

  // 5. Remove Schema Markup (handled by Next.js metadata instead)
  // Remove <!-- Schema Markup --> comments and associated script tags
  content = content.replace(/<!-- Schema Markup -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');

  // Also remove any standalone schema script tags that might exist
  content = content.replace(/<script type="application\/ld\+json">\s*\{[\s\S]*?"@context":\s*"https:\/\/schema\.org"[\s\S]*?<\/script>/g, '');

  // 6. Remove placehold.co fallback URLs (CSP violation + performance)
  // Replace with data URI or remove onerror handlers
  content = content.replace(/\s+onerror="[^"]*placehold\.co[^"]*"/g, '');
  content = content.replace(/src="https:\/\/placehold\.co[^"]*"/g, 'src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'50\' height=\'50\'%3E%3Crect fill=\'%23ddd\' width=\'50\' height=\'50\'/%3E%3C/svg%3E"');

  // 7. Remove excessive inline styles (keep essential positioning only)
  // This helps reduce HTML bloat and improve React hydration performance

  // 8. Remove empty <p> tags
  content = content.replace(/<p><\/p>\n?/g, '');
  content = content.replace(/<p>\s*<\/p>\n?/g, '');

  // 9. Clean up multiple blank lines
  content = content.replace(/\n{3,}/g, '\n\n');

  const savedBytes = originalLength - content.length;
  console.log(`  ✅ Removed ${savedBytes} bytes of WordPress artifacts`);

  // Write cleaned content back
  fs.writeFileSync(filePath, content, 'utf8');

  return {
    file: path.basename(filePath),
    savedBytes
  };
}

// Main execution
const postsDir = path.join(__dirname, '../content/posts');
const targetPosts = [
  'rouge-red-light-therapy-reviews.md',
  'platinum-led-therapy-lights-review.md',
  'best-red-light-therapy-panels.md',
  'best-hydrogen-water-machines.md',
  'best-grounding-sheets.md'
];

console.log('🚀 Starting WordPress artifact cleanup...\n');

const results = targetPosts.map(filename => {
  const filePath = path.join(postsDir, filename);
  if (fs.existsSync(filePath)) {
    return cleanupBlogPost(filePath);
  } else {
    console.log(`⚠️  File not found: ${filename}`);
    return null;
  }
}).filter(Boolean);

const totalSaved = results.reduce((sum, r) => sum + r.savedBytes, 0);

console.log(`\n✨ Cleanup complete!`);
console.log(`📊 Total space saved: ${totalSaved} bytes across ${results.length} files`);
console.log(`\n💡 Next steps:`);
console.log(`   1. Review the cleaned files`);
console.log(`   2. Run the dev server: npm run dev`);
console.log(`   3. Check http://localhost:3000/[post-slug]/`);
