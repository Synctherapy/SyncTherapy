import { promises as fsp } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const contentDirectory = path.join(process.cwd(), 'content');

// Helper to reliably check file existence asynchronously
async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fsp.access(filePath);
        return true;
    } catch {
        return false;
    }
}

const getCachedContent = cache(async (realSlug: string, flatSlug: string | undefined) => {
    // 1. Try to find the file using the full URL path (e.g. "services/massage")
    const pagePath = path.join(contentDirectory, 'pages', `${realSlug}.md`);
    const postPath = path.join(contentDirectory, 'posts', `${realSlug}.md`);

    let filePath = '';
    let type = '';

    if (await fileExists(pagePath)) {
        filePath = pagePath;
        type = 'page';
    } else if (await fileExists(postPath)) {
        filePath = postPath;
        type = 'post';
    } else {
        // 2. Fallback: Try the last segment of the slug (flattened structure)
        // e.g. URL "services/massage-therapy-victoria" -> look for "massage-therapy-victoria.md"
        if (!flatSlug) return null; // Handle empty slug case

        const flatPagePath = path.join(contentDirectory, 'pages', `${flatSlug}.md`);
        const flatPostPath = path.join(contentDirectory, 'posts', `${flatSlug}.md`);

        if (await fileExists(flatPagePath)) {
            filePath = flatPagePath;
            type = 'page';
        } else if (await fileExists(flatPostPath)) {
            filePath = flatPostPath;
            type = 'post';
        } else {
            return null;
        }
    }

    const fileContents = await fsp.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Clean content
    // 1. Remove absolute URLs to point to local relative paths
    let cleanContent = content
        .replace(/https?:\/\/synctherapylocal\.local/g, '')
        // 2. Remove WordPress specific fusion classes
        .replace(/class="[^"]*fusion-[^"]*"/g, '')
        // 3. Strip <script> tags EXCEPT JSON-LD schemas (which are needed for SEO)
        .replace(/<script(?![^>]*type=["']application\/ld\+json["'])[\s\S]*?<\/script>/gi, '')
        // 4. Strip WordPress block comments (but keep regular HTML comments
        //    to avoid breaking blog post designs)
        .replace(/<!--\s*\/?wp:[^>]*-->/g, '')
        // 5. Strip duplicate data-wpil attributes from Link Whisper
        //    (these can repeat 30+ times per link, massively bloating HTML)
        .replace(/(\s*data-wpil(?:-[a-z-]+)?=["'][^"']*["'])\1+/gi, '$1')
        // 6. Remove redundant data-wpil-url-old attributes entirely (base64 noise)
        .replace(/\s*data-wpil-url-old=["'][^"']*["']/gi, '')
        // 7. Remove duplicate data-wpil="url" attributes on the same tag
        .replace(/(<[^>]*?data-wpil=["'][^"']*["'])(\s+data-wpil=["'][^"']*["'])*/gi, '$1');

    // Sanitize frontmatter description — some WP exports store CSS/HTML as description
    let description = data.description || '';
    if (typeof description === 'string') {
        // Clear description if it looks like code (CSS, HTML, or JS)
        if (/^\s*\/\*|^\s*\{|^\s*<|^\s*body\s*\{|font-family:/i.test(description)) {
            description = '';
        }
    }

    return {
        slug: realSlug,
        frontmatter: { ...data, description } as { title?: string, seoTitle?: string, description?: string, date?: string, author?: string, category?: string, [key: string]: any },
        content: cleanContent,
        type,
    };
});

export async function getContentBySlug(slug: string[]) {
    const realSlug = slug.join('/');
    const flatSlug = slug[slug.length - 1];
    return getCachedContent(realSlug, flatSlug);
}

export async function getAllPaths() {
    const pagesDir = path.join(contentDirectory, 'pages');
    const postsDir = path.join(contentDirectory, 'posts');

    const paths: { slug: string[] }[] = [];

    // Helper to process directory asynchronously
    const processDir = async (dir: string) => {
        if (await fileExists(dir)) {
            const files = await fsp.readdir(dir);
            // using Promise.all or similar isn't strictly necessary for just pushing to an array
            // but we can map over them
            for (const file of files) {
                if (file.endsWith('.md') || file.endsWith('.mdx')) {
                    const slug = file.replace(/\.mdx?$/, '');
                    paths.push({ slug: [slug] });
                }
            }
        }
    };

    // run in parallel
    await Promise.all([
        processDir(pagesDir),
        processDir(postsDir)
    ]);

    return paths;
}
