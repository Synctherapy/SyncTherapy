import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Frontmatter {
    title?: string;
    seoTitle?: string;
    description?: string;
    date?: string;
    author?: string;
    category?: string;
    readTime?: string;
    [key: string]: any;
}

export interface ContentItem {
    slug: string;
    frontmatter: Frontmatter;
    content: string;
    type: string;
}

export async function getContentBySlug(slug: string[]): Promise<ContentItem | null> {
    const realSlug = slug.join('/');

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
        // 2. Remove WordPress specific fusion classes
        .replace(/class="[^"]*fusion-[^"]*"/g, '')
        // 3. Strip <script> tags and their content — the Tailwind CDN
        //    was loading a second instance and overriding component styles
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        // 4. Strip WordPress block comments (but keep regular HTML comments
        //    to avoid breaking blog post designs)
        .replace(/<!--\s*\/?wp:[^>]*-->/g, '');

    // Sanitize frontmatter description — some WP exports store CSS/HTML as description
    let description = data.description || '';
    if (typeof description === 'string') {
        // Clear description if it looks like code (CSS, HTML, or JS)
        if (/^\s*\/\*|^\s*\{|^\s*<|^\s*body\s*\{|font-family:/i.test(description)) {
            description = '';
        }
    }

    // Ensure date is a string if it exists (gray-matter parses dates as Date objects)
    let date = data.date;
    if (date instanceof Date) {
        date = date.toISOString();
    }

    return {
        slug: realSlug,
        frontmatter: { ...data, description, date },
        content: cleanContent,
        type,
    };
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
