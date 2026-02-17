import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const contentDirectory = path.join(process.cwd(), 'content');

const getCachedContent = cache(async (slugStr: string) => {
    // Reconstruct the array for fallback logic
    // We filter(Boolean) to avoid empty strings from split, but wait...
    // If slug was ['a', 'b'], join is 'a/b', split is ['a', 'b'].
    // If slug was [''], join is '', split is [''].
    // If slug was [], join is '', split is [''].
    // The original logic relies on slug array.

    const slug = slugStr.split('/');
    const realSlug = slugStr;

    // 1. Try to find the file using the full URL path (e.g. "services/massage")
    const pagePath = path.join(contentDirectory, 'pages', `${realSlug}.md`);
    const postPath = path.join(contentDirectory, 'posts', `${realSlug}.md`);

    let filePath = '';
    let type = '';

    if (fs.existsSync(pagePath)) {
        filePath = pagePath;
        type = 'page';
    } else if (fs.existsSync(postPath)) {
        filePath = postPath;
        type = 'post';
    } else {
        // 2. Fallback: Try the last segment of the slug (flattened structure)
        // e.g. URL "services/massage-therapy-victoria" -> look for "massage-therapy-victoria.md"
        const flatSlug = slug[slug.length - 1];
        if (!flatSlug) return null; // Handle empty slug case

        const flatPagePath = path.join(contentDirectory, 'pages', `${flatSlug}.md`);
        const flatPostPath = path.join(contentDirectory, 'posts', `${flatSlug}.md`);

        if (fs.existsSync(flatPagePath)) {
            filePath = flatPagePath;
            type = 'page';
        } else if (fs.existsSync(flatPostPath)) {
            filePath = flatPostPath;
            type = 'post';
        } else {
            return null;
        }
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
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

export const getContentBySlug = async (slug: string[]) => {
    return getCachedContent(slug.join('/'));
}

export async function getAllPaths() {
    const pagesDir = path.join(contentDirectory, 'pages');
    const postsDir = path.join(contentDirectory, 'posts');

    const paths: { slug: string[] }[] = [];

    // Helper to process directory
    const processDir = (dir: string) => {
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            files.forEach((file) => {
                if (file.endsWith('.md') || file.endsWith('.mdx')) {
                    const slug = file.replace(/\.mdx?$/, '');
                    paths.push({ slug: [slug] });
                }
            });
        }
    };

    processDir(pagesDir);
    processDir(postsDir);

    return paths;
}
