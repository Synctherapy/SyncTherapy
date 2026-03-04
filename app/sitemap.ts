import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Load redirects to ensure we don't put 301 URLs into the sitemap
import redirectsCache from '../redirects.json';

const BASE_URL = 'https://www.synctherapy.ca';

export default function sitemap(): MetadataRoute.Sitemap {
    const urls: MetadataRoute.Sitemap = [];
    const addedUrls = new Set<string>();

    // Normalize redirects for easy lookup
    const redirectSources = new Set(
        redirectsCache.map((r: any) => r.source.replace(/\/$/, ''))
    );

    const addUrl = (urlPath: string, priority: number, changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly', lastModified?: Date) => {
        // Ensure valid URL path formatting
        const cleanPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;

        // Skip if this URL is being 301 redirected
        if (redirectSources.has(cleanPath.replace(/\/$/, ''))) {
            return;
        }

        let fullUrl = `${BASE_URL}${cleanPath === '/' ? '' : cleanPath}`;

        // Enforce trailing slash
        if (!fullUrl.endsWith('/')) {
            fullUrl += '/';
        }

        if (!addedUrls.has(fullUrl)) {
            urls.push({
                url: fullUrl,
                lastModified: lastModified || new Date(),
                changeFrequency,
                priority,
            });
            addedUrls.add(fullUrl);
        }
    };

    // 1. Manually add static core pages
    addUrl('/', 1.0, 'daily');
    addUrl('/about', 0.8, 'monthly');
    addUrl('/blog', 0.8, 'daily');
    addUrl('/services/massage-therapy', 0.9, 'weekly');
    addUrl('/services/deep-tissue-massage', 0.8, 'monthly');
    addUrl('/services/sports-massage', 0.8, 'monthly');

    // 2. Discover App Directory Routes
    const appDir = path.join(process.cwd(), 'app');

    // Helper to recursively find page.tsx
    const findPages = (dir: string, basePath: string) => {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            // Ignore Next.js dynamic route folder brackets, we handle static specific ones
            if (entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('(') && !entry.name.startsWith('_')) {
                findPages(path.join(dir, entry.name), `${basePath}/${entry.name}`);
            } else if (entry.isFile() && entry.name === 'page.tsx') {
                const stats = fs.statSync(path.join(dir, entry.name));
                addUrl(basePath, 0.9, 'weekly', stats.mtime);
            }
        }
    };

    // Scan all root categories in the app dir, excluding known non-page folders
    const rootEntries = fs.readdirSync(appDir, { withFileTypes: true });
    for (const entry of rootEntries) {
        if (entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('(') && !entry.name.startsWith('_') && entry.name !== 'api') {
            findPages(path.join(appDir, entry.name), `/${entry.name}`);
        }
    }

    // 3. Discover Markdown Content Routes
    const contentDirectory = path.join(process.cwd(), 'content');
    const pagesDir = path.join(contentDirectory, 'pages');
    const postsDir = path.join(contentDirectory, 'posts');

    const getFiles = (dir: string) => {
        if (!fs.existsSync(dir)) return [];
        return fs.readdirSync(dir).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
    };

    // Markdown Pages
    getFiles(pagesDir).forEach((file) => {
        const slug = file.replace(/\.mdx?$/, '');
        const filePath = path.join(pagesDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);

        // Skip pages that are mapped as root or statically known
        if (slug === 'home' || slug === 'index' || slug === 'about' || slug === 'blog' || slug === '404' || slug === 'massage-therapy' || slug === 'sports-massage-therapy' || slug === 'deep-tissue-massage-victoria') return;

        // Skip explicitly marked noindex or drafts
        if (data.noindex || data.draft) return;

        const stats = fs.statSync(filePath);
        addUrl(`/${slug}`, 0.8, 'weekly', stats.mtime);
    });

    // Markdown Posts
    getFiles(postsDir).forEach((file) => {
        const slug = file.replace(/\.mdx?$/, '');
        const filePath = path.join(postsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);

        // Skip if explictly noindex or draft
        if (data.noindex || data.draft) return;

        const stats = fs.statSync(filePath);

        // Blog posts map to root in [...slug] dynamically 
        addUrl(`/${slug}`, 0.6, 'monthly', stats.mtime);
    });

    return urls;
}
