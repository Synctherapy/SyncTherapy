import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.synctherapy.ca';

export default function sitemap(): MetadataRoute.Sitemap {
    const contentDirectory = path.join(process.cwd(), 'content');
    const pagesDir = path.join(contentDirectory, 'pages');
    const postsDir = path.join(contentDirectory, 'posts');

    const urls: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];

    const getFiles = (dir: string) => {
        if (!fs.existsSync(dir)) return [];
        return fs.readdirSync(dir).filter(file => file.endsWith('.md'));
    };

    // Pages
    getFiles(pagesDir).forEach((file) => {
        const slug = file.replace('.md', '');
        const filePath = path.join(pagesDir, file);
        const stats = fs.statSync(filePath);

        // Skip home page as it is added manually above
        if (slug === 'home' || slug === 'index') return;

        urls.push({
            url: `${BASE_URL}/${slug}`,
            lastModified: stats.mtime,
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    });

    // Posts
    getFiles(postsDir).forEach((file) => {
        const slug = file.replace('.md', '');
        const filePath = path.join(postsDir, file);
        const stats = fs.statSync(filePath);

        urls.push({
            url: `${BASE_URL}/${slug}`,
            lastModified: stats.mtime,
            changeFrequency: 'monthly',
            priority: 0.6,
        });
    });

    return urls;
}
