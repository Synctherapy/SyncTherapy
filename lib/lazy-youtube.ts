/**
 * Utilities for lazy-loading YouTube embeds
 * Transforms eager-loading iframes to lightweight thumbnail placeholders.
 * Click-to-play is handled by the LazyYouTubeActivator client component.
 */

export interface YouTubeVideoInfo {
  videoId: string;
  title: string;
  startTime?: string;
}

/**
 * Extract YouTube video ID from various URL formats
 */
export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/embed\/|youtube-nocookie\.com\/embed\/)([^?&#]+)/,
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^?&#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

/**
 * Transform YouTube iframes to lazy-loading HTML placeholders.
 * No inline scripts — click handlers are attached by LazyYouTubeActivator.
 */
export function transformYouTubeEmbeds(html: string): string {
  const iframePattern = /<iframe[^>]*src=["']([^"']*(?:youtube\.com|youtube-nocookie\.com)\/embed\/[^"']*)["'][^>]*>[\s\S]*?<\/iframe>/gi;

  return html.replace(iframePattern, (match, src) => {
    const videoId = extractYouTubeId(src);
    if (!videoId) return match;

    const titleMatch = match.match(/title=["']([^"']*)["']/i);
    const title = titleMatch ? titleMatch[1] : 'YouTube video player';

    return generateLazyYouTubeHTML(videoId, title);
  });
}

/**
 * Generate HTML placeholder for lazy-loading YouTube embed.
 * Pure HTML/CSS — no JavaScript needed at render time.
 */
function generateLazyYouTubeHTML(videoId: string, title: string): string {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return `<div class="lazy-youtube-container" data-video-id="${videoId}" data-title="${title.replace(/"/g, '&quot;')}">
      <div class="lazy-youtube-wrapper" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:0.5rem;cursor:pointer;background:#000">
        <img
          src="${thumbnailUrl}"
          alt="${title.replace(/"/g, '&quot;')}"
          class="lazy-youtube-thumbnail"
          style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover"
          loading="lazy"
          width="640"
          height="360"
        />
        <div class="lazy-youtube-overlay" style="position:absolute;inset:0;background:rgba(0,0,0,0.3);transition:background 0.3s"></div>
        <div class="lazy-youtube-play-button" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">
          <svg width="68" height="48" viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#f00"/>
            <path d="M45 24L27 14v20l18-10z" fill="#fff"/>
          </svg>
        </div>
      </div>
    </div>`;
}
