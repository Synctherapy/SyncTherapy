'use client';

import { useEffect } from 'react';

/**
 * Attaches click-to-play handlers to all .lazy-youtube-container elements.
 * Replaces the thumbnail with a real YouTube iframe on click.
 * Must be rendered alongside content that uses transformYouTubeEmbeds().
 */
export function LazyYouTubeActivator() {
    useEffect(() => {
        const containers = document.querySelectorAll<HTMLElement>('.lazy-youtube-container[data-video-id]');

        const handleClick = (e: Event) => {
            const container = e.currentTarget as HTMLElement;
            const videoId = container.dataset.videoId;
            const title = container.dataset.title || 'YouTube video player';
            if (!videoId) return;

            const wrapper = container.querySelector('.lazy-youtube-wrapper');
            if (!wrapper) return;

            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
            iframe.title = title;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;
            iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:0';

            wrapper.innerHTML = '';
            wrapper.appendChild(iframe);
        };

        containers.forEach((c) => c.addEventListener('click', handleClick, { once: true }));

        return () => {
            containers.forEach((c) => c.removeEventListener('click', handleClick));
        };
    }, []);

    return null;
}
