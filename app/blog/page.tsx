import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogArchiveClient, type BlogPost } from '@/components/BlogArchiveClient';
import type { Metadata } from 'next';

// ─── SEO Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
    title: 'Blog | Sync Massage Therapy — Recovery, Nutrition & Rehab Insights',
    description: 'Evidence-based articles on massage therapy, red light recovery, gut health, athletic therapy, and holistic wellness by Daryl Stubbs, RMT in Colwood, BC.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/blog/',
    },
    openGraph: {
        title: 'The Sync Massage Therapy Blog',
        description: 'Evidence-based insights on recovery, nutrition, and manual therapy — by Daryl Stubbs, RMT.',
        url: 'https://www.synctherapy.ca/blog/',
        siteName: 'Sync Massage Therapy',
        type: 'website',
        locale: 'en_CA',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Sync Massage Therapy Blog',
        description: 'Evidence-based insights on recovery, nutrition, and manual therapy.',
    },
};

// ─── Category Detection (mirrors app/[...slug]/page.tsx) ───────
const RED_LIGHT_KEYWORDS = ['red-light', 'pemf', 'sauna', 'infrared', 'recovery-modali', 'cryo', 'photobiomodulation', 'grounding', 'ringconn'];
const GUT_HEALTH_KEYWORDS = ['gut', 'probiotic', 'prebiotic', 'hydrogen', 'alkaline', 'nutrient', 'supplement', 'leaky-gut', 'candida', 'ibs', 'acid-reflux', 'collagen', 'digestive', 'nutrition', 'fiber', 'constipation', 'gerd', 'seed-', 'viome', 'ag1', 'bioma', 'pendulum'];

function detectCategory(slug: string): BlogPost['category'] {
    const s = slug.toLowerCase();
    if (RED_LIGHT_KEYWORDS.some(kw => s.includes(kw))) return 'red-light-recovery';
    if (GUT_HEALTH_KEYWORDS.some(kw => s.includes(kw))) return 'gut-health-nutrition';
    return 'manual-therapy';
}

// ─── Description Sanitizer ─────────────────────────────────────
function sanitizeDescription(desc: unknown): string {
    if (!desc || typeof desc !== 'string') return '';
    const s = desc.trim();
    // If it looks like CSS, JS, or HTML code → clear it
    if (/^\s*\/\*|^\s*\/\/|^\s*\{|^\s*<|body\s*\{|font-family:|tailwind/i.test(s)) return '';
    // Truncate overly long descriptions
    if (s.length > 300) return s.slice(0, 297) + '...';
    return s;
}

// ─── Reading Time Estimate ─────────────────────────────────────
function estimateReadTime(content: string): number {
    const words = content.split(/\s+/).length;
    return Math.max(3, Math.round(words / 250));
}

// ─── First Image Extraction ────────────────────────────────────
function extractFirstImage(content: string): string | null {
    // Match src attributes, skip CDN/script/video URLs
    const matches = content.match(/src="([^"]+)"/g);
    if (!matches) return null;
    for (const match of matches) {
        const src = match.slice(5, -1); // extract URL from src="..."
        // Skip non-image sources (scripts, embeds, stylesheets, videos)
        if (src.includes('tailwindcss') || src.includes('youtube') || src.includes('cdnjs') || src.includes('googleapis') || src.includes('.js')) continue;
        // Skip video files
        if (src.match(/\.(mp4|webm|mov|avi|ogg)$/i)) continue;
        // Must have an actual image extension
        if (src.match(/\.(jpg|jpeg|png|gif|webp|svg|avif)$/i)) {
            return src;
        }
    }
    return null;
}

// ─── Data Fetching ─────────────────────────────────────────────
async function getPosts(): Promise<BlogPost[]> {
    const postsDir = path.join(process.cwd(), 'content/posts');
    const filenames = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

    const posts: BlogPost[] = filenames.map((filename) => {
        const filePath = path.join(postsDir, filename);
        const raw = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(raw);
        const slug = filename.replace('.md', '');

        return {
            slug,
            title: data.title || slug,
            date: data.date || '',
            description: sanitizeDescription(data.description),
            category: detectCategory(slug),
            readTime: estimateReadTime(content),
            image: extractFirstImage(content),
        };
    });

    // Sort newest first
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// ─── Page ──────────────────────────────────────────────────────
export default async function BlogIndex() {
    const posts = await getPosts();

    // ─── JSON-LD: CollectionPage + BreadcrumbList ──────────────
    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': 'The Sync Massage Therapy Blog',
        'description': 'Evidence-based articles on massage therapy, red light recovery, gut health, athletic therapy, and holistic wellness.',
        'url': 'https://www.synctherapy.ca/blog/',
        'inLanguage': 'en-CA',
        'isPartOf': { '@id': 'https://www.synctherapy.ca/#website' },
        'about': [
            { '@type': 'Thing', 'name': 'Massage Therapy' },
            { '@type': 'Thing', 'name': 'Red Light Therapy' },
            { '@type': 'Thing', 'name': 'Gut Health' },
            { '@type': 'Thing', 'name': 'Athletic Therapy' },
        ],
        'author': { '@id': 'https://www.synctherapy.ca/about-daryl-stubbs/#person' },
        'publisher': { '@id': 'https://www.synctherapy.ca/#organization' },
        'numberOfItems': posts.length,
        'mainEntity': {
            '@type': 'ItemList',
            'numberOfItems': posts.length,
            'itemListElement': posts.slice(0, 30).map((post, i) => ({
                '@type': 'ListItem',
                'position': i + 1,
                'url': `https://www.synctherapy.ca/${post.slug}/`,
                'name': post.title,
            })),
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.synctherapy.ca/' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://www.synctherapy.ca/blog/' },
        ],
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <main className="flex-grow">
                <BlogArchiveClient posts={posts} />
            </main>
            <Footer />
        </div>
    );
}
