import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const contentDirectory = path.join(process.cwd(), 'content');

// Helper to check file existence asynchronously
async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

// Cached function to fetch and parse content
const getCachedContent = cache(async (slugStr: string) => {
    const realSlug = slugStr;

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
        const flatSlug = slugStr.split('/').pop();
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

    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Clean content
    // 1. Remove absolute URLs to point to local relative paths
    let cleanContent = content
        .replace(/https?:\/\/synctherapylocal\.local/g, '')
        // 2. Remove WordPress specific classes and styles to clean up the design
        .replace(/class="[^"]*fusion-[^"]*"/g, '')
        .replace(/style="[^"]*"/g, '');

    return {
        slug: realSlug,
        frontmatter: data,
        content: cleanContent,
        type,
    };
});

export async function getContentBySlug(slug: string[]) {
    return getCachedContent(slug.join('/'));
}

export async function getAllPaths() {
    const pagesDir = path.join(contentDirectory, 'pages');
    const postsDir = path.join(contentDirectory, 'posts');

    const paths: { slug: string[] }[] = [];

    // Helper to process directory
    const processDir = async (dir: string) => {
        if (await fileExists(dir)) {
            const files = await fs.readdir(dir);
            files.forEach((file) => {
                if (file.endsWith('.md') || file.endsWith('.mdx')) {
                    const slug = file.replace(/\.mdx?$/, '');
                    paths.push({ slug: [slug] });
                }
            });
        }
    };

    await Promise.all([processDir(pagesDir), processDir(postsDir)]);

    return paths;
}
