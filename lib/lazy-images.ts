/**
 * Utilities for optimizing images in Markdown content
 * Applies fetchPriority="high" to the first image (LCP)
 * Applies loading="lazy" to subsequent images if not already specified
 */

export function transformLazyImages(html: string): string {
  let firstImgFound = false;

  // Match standard HTML <img ...> tags
  // Note: We don't match self-closing tags explicitly since HTML5 allows both <img> and <img />
  return html.replace(/<img\s+([^>]+)>/gi, (match, attributes) => {
    // If it's the first image, optimize for LCP
    if (!firstImgFound) {
      firstImgFound = true;

      let newAttributes = attributes;

      // If it has loading="lazy", remove it for the first image
      if (/loading=["']lazy["']/i.test(newAttributes)) {
        newAttributes = newAttributes.replace(/\s*loading=["']lazy["']/i, '');
      }

      // Add fetchPriority="high" if it doesn't have it
      if (!/fetchpriority=/i.test(newAttributes)) {
        newAttributes = `fetchPriority="high" ${newAttributes}`;
      }

      return `<img ${newAttributes.trim()}>`;
    }
    // Subsequent images
    else {
      // Add loading="lazy" if it doesn't already have a loading attribute
      if (!/loading=/i.test(attributes)) {
        return `<img loading="lazy" ${attributes.trim()}>`;
      }
      return match; // Leave as is if it already has a loading attribute
    }
  });
}
