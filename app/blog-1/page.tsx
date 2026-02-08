import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getContentBySlug } from '@/lib/content';

async function getPosts() {
    const postsDirectory = path.join(process.cwd(), 'content/posts');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace('.md', ''),
            title: data.title,
            date: data.date,
            description: data.description,
        };
    });

    // Sort by date desc
    return posts.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export default async function BlogIndex() {
    // Get the "Source of Truth" blog page content
    // We use "blog-1" as identified in the content directory
    const blogPage = await getContentBySlug(['blog-1']);
    const posts = await getPosts();

    return (
        <div className="min-h-screen flex flex-col pt-[72px]">
            <Header />
            <main className="flex-grow bg-background">
                <div className="bg-muted py-12 text-center border-b border-border">
                    <h1 className="text-4xl font-bold font-sans text-foreground">{blogPage?.frontmatter.title || 'Blog'}</h1>
                    {blogPage?.frontmatter.description && (
                        <p className="mt-4 text-muted-foreground">{blogPage.frontmatter.description}</p>
                    )}
                </div>

                {/* Render content from the blog page if it exists (e.g. intro text) */}
                {blogPage?.content && (
                    <div className="container mx-auto px-4 py-8 prose max-w-none text-center prose-neutral dark:prose-invert">
                        <div dangerouslySetInnerHTML={{ __html: blogPage.content }} />
                    </div>
                )}

                <div className="container mx-auto px-4 py-12">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/${post.slug}`} className="block group">
                                <div className="bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 h-full border border-border">
                                    <span className="text-sm text-primary font-semibold">{new Date(post.date).toLocaleDateString()}</span>
                                    <h2 className="text-xl font-bold text-card-foreground mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                                    <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                                    <span className="inline-block mt-4 text-primary font-semibold text-sm group-hover:underline">Read Article →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
