import { readFile, access, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const contentDirectory = path.join(process.cwd(), 'content');

// Helper for async file existence check
async function fileExists(filePath: string) {
    try {
        await access(filePath);
        return true;
    } catch {
        return false;
    }
}

// Internal implementation that takes a primitive key (slug string) for cache stability
const getContentBySlugImpl = cache(async (slugPath: string) => {
    // Reconstruct slug array from path for logic consistency
    const slug = slugPath.split('/');
    const realSlug = slugPath;

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
        const flatSlug = slug[slug.length - 1];
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

    const fileContents = await readFile(filePath, 'utf8');
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
    return getContentBySlugImpl(slug.join('/'));
}

export async function getAllPaths() {
    const pagesDir = path.join(contentDirectory, 'pages');
    const postsDir = path.join(contentDirectory, 'posts');

    const paths: { slug: string[] }[] = [];

    // Helper to process directory
    const processDir = async (dir: string) => {
        if (await fileExists(dir)) {
            const files = await readdir(dir);
            files.forEach((file) => {
                if (file.endsWith('.md') || file.endsWith('.mdx')) {
                    const slug = file.replace(/\.mdx?$/, '');
                    paths.push({ slug: [slug] });
                }
            });
        }
    };

    await Promise.all([
        processDir(pagesDir),
        processDir(postsDir)
    ]);

    return paths;
}
