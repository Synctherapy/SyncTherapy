export function transformFontAwesome(html: string): string {
    // We will not completely replace FontAwesome logic since it could be vast,
    // but we can strip the heavy preload link from the markdown and instead load FontAwesome
    // globally and non-blockingly, or asynchronously if not already done.

    // Remove inline FontAwesome link tags from the HTML content
    const cleanedHtml = html.replace(/<link[^>]*href=["'](?:https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome|https:\/\/use\.fontawesome\.com)[^>]*>/gi, '');
    return cleanedHtml;
}
