import { MetadataRoute } from 'next';
import { promises as fsp } from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Load redirects to ensure we don't put 301 URLs into the sitemap
import redirectsCache from '../redirects.json';

const BASE_URL = 'https://www.synctherapy.ca';

// Helper to reliably check file existence asynchronously
async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fsp.access(filePath);
        return true;
    } catch {
        return false;
    }
}

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
    addUrl('/services/massage-therapy', 0.9, 'weekly');
    addUrl('/services/deep-tissue-massage', 0.8, 'monthly');
    addUrl('/services/sports-massage', 0.8, 'monthly');

    // 2. Discover App Directory Routes
    const appDir = path.join(process.cwd(), 'app');

    // Helper to recursively find page.tsx
    const findPages = async (dir: string, basePath: string) => {
        if (!(await fileExists(dir))) return;
        const entries = await fsp.readdir(dir, { withFileTypes: true });

        const promises = entries.map(async (entry) => {
            // Ignore Next.js dynamic route folder brackets, we handle static specific ones
            if (entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('(') && !entry.name.startsWith('_')) {
                await findPages(path.join(dir, entry.name), `${basePath}/${entry.name}`);
            } else if (entry.isFile() && entry.name === 'page.tsx') {
                const stats = await fsp.stat(path.join(dir, entry.name));
                addUrl(basePath, 0.9, 'weekly', stats.mtime);
            }
        });

        await Promise.all(promises);
    };

    // Scan all root categories in the app dir, excluding known non-page folders
    if (await fileExists(appDir)) {
        const rootEntries = await fsp.readdir(appDir, { withFileTypes: true });
        const appPromises = rootEntries.map(async (entry) => {
            if (entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('(') && !entry.name.startsWith('_') && entry.name !== 'api') {
                await findPages(path.join(appDir, entry.name), `/${entry.name}`);
            }
        });
        await Promise.all(appPromises);
    }

    // 3. Discover Markdown Content Routes
    const contentDirectory = path.join(process.cwd(), 'content');
    const pagesDir = path.join(contentDirectory, 'pages');
    const postsDir = path.join(contentDirectory, 'posts');

    const getFiles = async (dir: string) => {
        if (!(await fileExists(dir))) return [];
        const files = await fsp.readdir(dir);
        return files.filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
    };

    const [pageFiles, postFiles] = await Promise.all([
        getFiles(pagesDir),
        getFiles(postsDir)
    ]);

    // Markdown Pages
    const pagePromises = pageFiles.map(async (file) => {
        const slug = file.replace(/\.mdx?$/, '');

        // Skip pages that are mapped as root or statically known
        if (slug === 'home' || slug === 'index' || slug === 'about' || slug === 'blog' || slug === '404' || slug === 'massage-therapy' || slug === 'sports-massage-therapy' || slug === 'deep-tissue-massage-victoria') return;

        const filePath = path.join(pagesDir, file);
        const fileContent = await fsp.readFile(filePath, 'utf8');
        const { data } = matter(fileContent);

        // Skip explicitly marked noindex or drafts
        if (data.noindex || data.draft) return;

        const stats = await fsp.stat(filePath);
        addUrl(`/${slug}`, 0.8, 'weekly', stats.mtime);
    });

    // Markdown Posts
    const postPromises = postFiles.map(async (file) => {
        const slug = file.replace(/\.mdx?$/, '');
        const filePath = path.join(postsDir, file);
        const fileContent = await fsp.readFile(filePath, 'utf8');
        const { data } = matter(fileContent);

        // Skip if explictly noindex or draft
        if (data.noindex || data.draft) return;

        const stats = await fsp.stat(filePath);
        // Blog posts map to root in [...slug] dynamically 
        addUrl(`/${slug}`, 0.6, 'monthly', stats.mtime);
    });

    await Promise.all([...pagePromises, ...postPromises]);

    return urls;
}
