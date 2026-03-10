import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';

const contentDirectory = path.join(process.cwd(), 'content');

// ⚡ Bolt Optimization:
// React.cache is used to memoize the result of reading and parsing a markdown file.
// Because React.cache uses strict equality, we use the primitive string `realSlug`
// rather than the `slug: string[]` array. This prevents redundant file I/O
// when the same page content is requested multiple times in a single render pass
// (e.g. by `generateMetadata` and the `Page` component itself).
const getCachedContent = React.cache(async (realSlug: string) => {
    // 1. Try to find the file using the full URL path (e.g. "services/massage")
    const pagePath = path.join(contentDirectory, 'pages', `${realSlug}.md`);
    const postPath = path.join(contentDirectory, 'posts', `${realSlug}.md`);

    let filePath = '';
    let type = '';

    // ⚡ Bolt Optimization:
    // Replaced blocking fs.existsSync with non-blocking fs.promises.access
    // to prevent freezing the Node.js event loop during high concurrent traffic.
    const fileExists = async (p: string) => {
        try {
            await fs.promises.access(p);
            return true;
        } catch {
            return false;
        }
    };

    if (await fileExists(pagePath)) {
        filePath = pagePath;
        type = 'page';
    } else if (await fileExists(postPath)) {
        filePath = postPath;
        type = 'post';
    } else {
        // 2. Fallback: Try the last segment of the slug (flattened structure)
        // e.g. URL "services/massage-therapy-victoria" -> look for "massage-therapy-victoria.md"
        const segments = realSlug.split('/');
        const flatSlug = segments[segments.length - 1];
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

    // ⚡ Bolt Optimization:
    // Replaced blocking fs.readFileSync with non-blocking fs.promises.readFile.
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
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
    return getCachedContent(realSlug);
}

export async function getAllPaths() {
    const pagesDir = path.join(contentDirectory, 'pages');
    const postsDir = path.join(contentDirectory, 'posts');

    const paths: { slug: string[] }[] = [];

    // Helper to process directory
    const processDir = async (dir: string) => {
        try {
            // ⚡ Bolt Optimization:
            // Replaced fs.existsSync and fs.readdirSync with async equivalents.
            await fs.promises.access(dir);
            const files = await fs.promises.readdir(dir);
            files.forEach((file) => {
                if (file.endsWith('.md') || file.endsWith('.mdx')) {
                    const slug = file.replace(/\.mdx?$/, '');
                    paths.push({ slug: [slug] });
                }
            });
        } catch (e) {
            // Directory doesn't exist or is inaccessible
        }
    };

    // ⚡ Bolt Optimization:
    // Process directories in parallel instead of sequentially.
    await Promise.all([
        processDir(pagesDir),
        processDir(postsDir)
    ]);

    return paths;
}
