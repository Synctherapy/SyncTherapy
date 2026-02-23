import sanitizeHtml from 'sanitize-html';

export function sanitizeContent(html: string): string {
  if (!html) return '';
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'h1', 'h2', 'img', 'span', 'div'
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      'img': ['src', 'alt', 'title', 'width', 'height', 'loading', 'class'],
      'a': ['href', 'name', 'target', 'title', 'rel', 'class'],
      '*': ['class', 'id']
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  });
}
