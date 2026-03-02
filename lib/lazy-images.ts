/**
 * Utilities for optimizing images in Markdown content
 * Applies fetchPriority="high" and eager loading to first 3 images
 * Applies loading="lazy" to subsequent images
 * Adds decoding="async" for better performance
 */

export function transformLazyImages(html: string): string {
  let imageCount = 0;

  // Match standard HTML <img ...> tags
  return html.replace(/<img\s+([^>]+)>/gi, (match, attributes) => {
    imageCount++;
    let newAttributes = attributes;

    // First 3 images: optimize for LCP and above-the-fold content
    if (imageCount <= 3) {
      // Remove loading="lazy" from first 3 images
      if (/loading=["']lazy["']/i.test(newAttributes)) {
        newAttributes = newAttributes.replace(/\s*loading=["']lazy["']/i, '');
      }

      // Add loading="eager" to ensure immediate loading
      if (!/loading=/i.test(newAttributes)) {
        newAttributes = `loading="eager" ${newAttributes}`;
      }

      // First image gets fetchPriority="high" for LCP optimization
      if (imageCount === 1 && !/fetchpriority=/i.test(newAttributes)) {
        newAttributes = `fetchPriority="high" ${newAttributes}`;
      }

      // Add decoding="async" for better performance
      if (!/decoding=/i.test(newAttributes)) {
        newAttributes = `decoding="async" ${newAttributes}`;
      }

      return `<img ${newAttributes.trim()}>`;
    }
    // All subsequent images: lazy load
    else {
      // Add loading="lazy" if not present
      if (!/loading=/i.test(newAttributes)) {
        newAttributes = `loading="lazy" ${newAttributes}`;
      }

      // Add decoding="async"
      if (!/decoding=/i.test(newAttributes)) {
        newAttributes = `decoding="async" ${newAttributes}`;
      }

      return `<img ${newAttributes.trim()}>`;
    }
  });
}
