/**
 * Utilities for optimizing images in Markdown content
 *
 * All blog content images are below the fold (hero section fills the mobile
 * viewport), so every content image should be lazy-loaded. Eager-loading
 * them steals bandwidth from render-blocking CSS and fonts on slow connections,
 * inflating LCP. The only above-the-fold image (author avatar) is handled
 * separately by Next.js <Image priority>.
 */

export function transformLazyImages(html: string): string {
  return html.replace(/<img\s+([^>]+)>/gi, (match, attributes) => {
    let newAttributes = attributes;

    // Ensure all content images are lazy-loaded
    if (/loading=["']eager["']/i.test(newAttributes)) {
      newAttributes = newAttributes.replace(/loading=["']eager["']/i, 'loading="lazy"');
    } else if (!/loading=/i.test(newAttributes)) {
      newAttributes = `loading="lazy" ${newAttributes}`;
    }

    // Remove any fetchPriority="high" — content images are below the fold
    newAttributes = newAttributes.replace(/\s*fetchPriority=["'][^"']*["']/i, '');
    newAttributes = newAttributes.replace(/\s*fetchpriority=["'][^"']*["']/i, '');

    // Add decoding="async" for better performance
    if (!/decoding=/i.test(newAttributes)) {
      newAttributes = `decoding="async" ${newAttributes}`;
    }

    // Add width/height if missing — prevents CLS by reserving space
    // Default to 400x400 for product images (most content images are square-ish)
    if (!/\bwidth=/i.test(newAttributes)) {
      newAttributes += ' width="400"';
    }
    if (!/\bheight=/i.test(newAttributes)) {
      newAttributes += ' height="400"';
    }

    return `<img ${newAttributes.trim()}>`;
  });
}
