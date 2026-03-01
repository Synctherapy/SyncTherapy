import { transformLazyImages } from './lib/lazy-images';
import { transformYouTubeEmbeds } from './lib/lazy-youtube';

const html = `
<div class="bg-white p-4 rounded-lg shadow-md mb-6">
    <div class="relative" style="padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            src="https://www.youtube-nocookie.com/embed/4BcOcJll0aI"
            title="Rouge G4 Red Light Therapy Review - Pro, Max & Tabletop Panels Tested"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    </div>
</div>
`;

console.log(transformLazyImages(transformYouTubeEmbeds(html)));
