import { MetadataRoute } from 'next';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// Load redirects to ensure we don't put 301 URLs into the sitemap
import redirectsCache from '../redirects.json';

const BASE_URL = 'https://www.synctherapy.ca';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

    // 2. Discover App Directory Routes
    const appDir = path.join(process.cwd(), 'app');

    // Helper to recursively find page.tsx
    const findPages = async (dir: string, basePath: string) => {
        try {
            const entries = await fs.readdir(dir, { withFileTypes: true });

            const promises = entries.map(async (entry) => {
                // Ignore Next.js dynamic route folder brackets, we handle static specific ones
                if (entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('(') && !entry.name.startsWith('_')) {
                    await findPages(path.join(dir, entry.name), `${basePath}/${entry.name}`);
                } else if (entry.isFile() && entry.name === 'page.tsx') {
                    const stats = await fs.stat(path.join(dir, entry.name));
                    addUrl(basePath, 0.9, 'weekly', stats.mtime);
                }
            });

            await Promise.all(promises);
        } catch (error: any) {
            if (error.code !== 'ENOENT') {
                console.error(`Error reading directory ${dir}:`, error);
            }
        }
    };

    // Scan all root categories in the app dir, excluding known non-page folders
    try {
        const rootEntries = await fs.readdir(appDir, { withFileTypes: true });
        const appDirPromises = rootEntries.map(async (entry) => {
            if (entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('(') && !entry.name.startsWith('_') && entry.name !== 'api') {
                await findPages(path.join(appDir, entry.name), `/${entry.name}`);
            }
        });
        await Promise.all(appDirPromises);
    } catch (error: any) {
        console.error("Error scanning app directory for sitemap:", error);
    }


    // 3. Discover Markdown Content Routes
    const contentDirectory = path.join(process.cwd(), 'content');
    const pagesDir = path.join(contentDirectory, 'pages');
    const postsDir = path.join(contentDirectory, 'posts');

    const getFiles = async (dir: string) => {
        try {
            const files = await fs.readdir(dir);
            return files.filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
        } catch (error: any) {
            if (error.code !== 'ENOENT') {
                 console.error(`Error reading content directory ${dir}:`, error);
            }
            return [];
        }
    };

    // Markdown Pages
    const pageFiles = await getFiles(pagesDir);
    const pagesPromises = pageFiles.map(async (file) => {
        const slug = file.replace(/\.mdx?$/, '');
        const filePath = path.join(pagesDir, file);
        const [fileContent, stats] = await Promise.all([
            fs.readFile(filePath, 'utf8'),
            fs.stat(filePath)
        ]);
        const { data } = matter(fileContent);

        // Skip pages that are mapped as root or statically known
        if (slug === 'home' || slug === 'index' || slug === 'about' || slug === 'blog' || slug === '404') return;

        // Skip explicitly marked noindex or drafts
        if (data.noindex || data.draft) return;

        addUrl(`/${slug}`, 0.8, 'weekly', stats.mtime);
    });
    await Promise.all(pagesPromises);

    // Markdown Posts
    const postFiles = await getFiles(postsDir);
    const postsPromises = postFiles.map(async (file) => {
        const slug = file.replace(/\.mdx?$/, '');
        const filePath = path.join(postsDir, file);
         const [fileContent, stats] = await Promise.all([
            fs.readFile(filePath, 'utf8'),
            fs.stat(filePath)
        ]);
        const { data } = matter(fileContent);

        // Skip if explictly noindex or draft
        if (data.noindex || data.draft) return;

        // Blog posts map to root in [...slug] dynamically 
        addUrl(`/${slug}`, 0.6, 'monthly', stats.mtime);
    });
    await Promise.all(postsPromises);

    return urls;
}
