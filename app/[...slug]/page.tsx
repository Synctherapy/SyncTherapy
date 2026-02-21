import { getContentBySlug, getAllPaths } from '@/lib/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogOneLayout, type BlogCategory } from '@/components/layouts/BlogOneLayout';
import { ServiceLayout } from '@/components/layouts/ServiceLayout';
import { ServicesIndexLayout } from '@/components/layouts/ServicesIndexLayout';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// ─── Category Detection ────────────────────────────────────────
const RED_LIGHT_KEYWORDS = ['red-light', 'pemf', 'sauna', 'infrared', 'recovery-modali', 'cryo', 'photobiomodulation'];
const GUT_HEALTH_KEYWORDS = ['gut', 'probiotic', 'prebiotic', 'hydrogen', 'alkaline', 'nutrient', 'supplement', 'leaky-gut', 'candida', 'ibs', 'acid-reflux', 'collagen', 'digestive', 'nutrition'];

function getCategoryFromSlug(slug: string, frontmatterCategory?: string): BlogCategory {
    // Explicit frontmatter category always wins
    if (frontmatterCategory) {
        const normalized = frontmatterCategory.toLowerCase().replace(/\s+/g, '-');
        if (['red-light-recovery', 'gut-health-nutrition', 'manual-therapy'].includes(normalized)) {
            return normalized as BlogCategory;
        }
    }
    // Auto-detect from slug
    const s = slug.toLowerCase();
    if (RED_LIGHT_KEYWORDS.some(kw => s.includes(kw))) return 'red-light-recovery';
    if (GUT_HEALTH_KEYWORDS.some(kw => s.includes(kw))) return 'gut-health-nutrition';
    return 'manual-therapy';
}

// ─── Schema Type Detection ─────────────────────────────────────
type SchemaType = 'review' | 'listicle' | 'article';
const REVIEW_KEYWORDS = ['-review', '-reviews'];
const LISTICLE_PREFIXES = ['best-', 'top-'];

function getSchemaType(slug: string): SchemaType {
    const s = slug.toLowerCase();
    if (REVIEW_KEYWORDS.some(kw => s.includes(kw))) return 'review';
    if (LISTICLE_PREFIXES.some(kw => s.startsWith(kw))) return 'listicle';
    // Also catch "X-best-Y" patterns
    if (s.match(/\d+-best-/)) return 'listicle';
    return 'article';
}

type Props = {
    params: Promise<{
        slug: string[];
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const item = await getContentBySlug(resolvedParams.slug);

    if (!item) {
        return {
            title: 'Page Not Found',
        };
    }

    const title = item.frontmatter.seoTitle || item.frontmatter.title;
    const description = item.frontmatter.description || '';
    const url = `https://www.synctherapy.ca/${resolvedParams.slug.join('/')}`;

    // Custom Metadata for /direct-billing
    if (resolvedParams.slug.length === 1 && resolvedParams.slug[0] === 'direct-billing') {
        return {
            title: 'Direct Billing RMT & Athletic Therapy | Victoria & Colwood | Sync Therapy',
            description: 'Direct billing RMT in Colwood. We bill Pacific Blue Cross, Canada Life & Sun Life. Accepting insurance for Visceral Manipulation & Athletic Therapy.',
            openGraph: {
                title: 'Direct Billing Massage & Athletic Therapy | Sync Therapy',
                description: 'Skip the paperwork. We direct bill Pacific Blue Cross, Canada Life, and more for RMT and Visceral Manipulation in Colwood/Victoria.',
                url: 'https://www.synctherapy.ca/direct-billing/',
                siteName: 'Sync Therapy',
                locale: 'en_CA',
                type: 'website',
            },
            alternates: {
                canonical: 'https://www.synctherapy.ca/direct-billing/',
            },
        };
    }

    // Custom Metadata for /services/deep-tissue-massage
    if (resolvedParams.slug.length === 2 &&
        resolvedParams.slug[0] === 'services' &&
        resolvedParams.slug[1] === 'deep-tissue-massage') {
        return {
            title: 'Deep Tissue Massage Colwood, Langford & Victoria | Sync Therapy',
            description: 'Clinical deep tissue massage on Wale Rd, Colwood. Treating back pain, neck tension & sports injuries. Direct Billing for West Shore & Victoria residents.',
            openGraph: {
                title: 'Deep Tissue Massage Colwood, Langford & Victoria | Sync Therapy',
                description: 'Relieve chronic tension and sports injuries without the downtown commute. Voted Best Rehab Clinic in the West Shore.',
                url: 'https://www.synctherapy.ca/services/deep-tissue-massage/',
                siteName: 'Sync Therapy',
                locale: 'en_CA',
                type: 'website',
            },
            alternates: {
                canonical: 'https://www.synctherapy.ca/services/deep-tissue-massage/',
            },
        };
    }

    // Custom Metadata for /services/sports-massage-therapy
    if (resolvedParams.slug.length === 2 &&
        resolvedParams.slug[0] === 'services' &&
        resolvedParams.slug[1] === 'sports-massage-therapy') {
        return {
            title: 'Sports Massage Colwood & Langford | Recovery RMT | Sync Therapy',
            description: 'Sports massage for runners, lifters & athletes in Colwood. Improve recovery & range of motion. Located near Juan de Fuca Rec. Direct Billing available.',
            openGraph: {
                title: 'Sports Massage Colwood & Langford | Recovery RMT | Sync Therapy',
                description: 'Sports massage for runners, lifters & athletes in Colwood. Improve recovery & range of motion. Located near Juan de Fuca Rec. Direct Billing available.',
                url: 'https://www.synctherapy.ca/services/sports-massage-therapy/',
                siteName: 'Sync Therapy',
                locale: 'en_CA',
                type: 'website',
            },
            alternates: {
                canonical: 'https://www.synctherapy.ca/services/sports-massage-therapy/',
            },
        };
    };




    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            type: 'website',
        },
        alternates: {
            canonical: url,
        },
    };
}

import { MassageTherapyColwood } from '@/components/pages/MassageTherapyColwood';
import { DirectBillingMassage } from '@/components/pages/DirectBillingMassage';
import { DeepTissueMassage } from '@/components/pages/DeepTissueMassage';
import { SportsMassage } from '@/components/pages/SportsMassage';

export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    const item = await getContentBySlug(resolvedParams.slug);

    if (!item && resolvedParams.slug[0] !== 'direct-billing' && !(resolvedParams.slug[0] === 'services' && resolvedParams.slug[1] === 'deep-tissue-massage')) {
        notFound();
    }

    // SPECIAL PAGE: Massage Therapy (Consolidated)
    // Renders the dedicated high-fidelity component for the main service page
    if (resolvedParams.slug.length === 2 &&
        resolvedParams.slug[0] === 'services' &&
        resolvedParams.slug[1] === 'massage-therapy') {
        return (
            <>
                <Header />
                <MassageTherapyColwood />
                <Footer />
            </>
        );
    }

    // SPECIAL PAGE: Direct Billing Massage
    if (resolvedParams.slug.length === 1 &&
        resolvedParams.slug[0] === 'direct-billing') {
        return (
            <>
                <Header />
                <DirectBillingMassage />
                <Footer />
            </>
        );
    }

    // SPECIAL PAGE: Deep Tissue Massage
    if (resolvedParams.slug.length === 2 &&
        resolvedParams.slug[0] === 'services' &&
        resolvedParams.slug[1] === 'deep-tissue-massage') {
        return (
            <>
                <Header />
                <DeepTissueMassage />
                <Footer />
            </>
        );
    }

    // SPECIAL PAGE: Sports Massage Therapy
    if (resolvedParams.slug.length === 2 &&
        resolvedParams.slug[0] === 'services' &&
        resolvedParams.slug[1] === 'sports-massage-therapy') {
        return (
            <>
                <Header />
                <SportsMassage />
                <Footer />
            </>
        );
    }

    // 1. Blog Post Layout
    if (item && item.type === 'post') {
        const content = <div dangerouslySetInnerHTML={{ __html: item.content }} />;
        const detectedCategory = getCategoryFromSlug(resolvedParams.slug.join('/'), item.frontmatter.category);
        const currentSlug = resolvedParams.slug.join('/');
        const pageTitle = item.frontmatter.title || '';

        // Fetch related posts from same category
        const allPaths = await getAllPaths();
        const related = await Promise.all(
            allPaths
                .filter(p => p.slug[0] !== currentSlug)
                .slice(0, 30) // Check a reasonable number
                .map(async (p) => {
                    const post = await getContentBySlug(p.slug);
                    if (post && post.type === 'post') {
                        const postCategory = getCategoryFromSlug(p.slug[0], post.frontmatter.category);
                        if (postCategory === detectedCategory) {
                            return {
                                slug: p.slug[0],
                                title: post.frontmatter.title || '',
                                description: post.frontmatter.description,
                                date: post.frontmatter.date,
                            };
                        }
                    }
                    return null;
                })
        );
        const relatedPosts = related.filter(Boolean).slice(0, 4) as { slug: string; title: string; description?: string; date?: string }[];

        const canonicalUrl = `https://www.synctherapy.ca/${currentSlug}/`;

        // ─── Content Type Detection ────────────────────────────
        const schemaType = getSchemaType(currentSlug);

        // ─── Entity-chained Author + Publisher ─────────────────
        const authorEntity = {
            '@type': 'Person' as const,
            '@id': 'https://www.synctherapy.ca/about-daryl-stubbs/#person',
            'name': 'Daryl Stubbs',
            'url': 'https://www.synctherapy.ca/about-daryl-stubbs/',
            'jobTitle': 'RMT, CAT(C), Holistic Nutritionist',
            'worksFor': { '@id': 'https://www.synctherapy.ca/#organization' },
            'sameAs': [
                'https://www.instagram.com/synctherapy/',
                'https://www.facebook.com/SyncTherapyVictoria/',
            ],
        };

        const publisherEntity = {
            '@type': 'Organization' as const,
            '@id': 'https://www.synctherapy.ca/#organization',
            'name': 'Sync Massage Therapy',
            'url': 'https://www.synctherapy.ca',
            'logo': {
                '@type': 'ImageObject' as const,
                'url': 'https://www.synctherapy.ca/icon.svg',
            },
        };

        // ─── Build type-specific schema ────────────────────────
        const schemas: object[] = [];

        if (schemaType === 'review') {
            // Review schema for product review posts
            const productName = pageTitle
                .replace(/review.*$/i, '')
                .replace(/\d{4}.*$/i, '')
                .replace(/[-–—:]\s*should.*$/i, '')
                .trim();

            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'Review',
                'name': pageTitle,
                'description': item.frontmatter.description || '',
                'datePublished': item.frontmatter.date,
                'dateModified': item.frontmatter.date,
                'author': authorEntity,
                'publisher': publisherEntity,
                'itemReviewed': {
                    '@type': 'Product',
                    'name': productName,
                },
                'mainEntityOfPage': { '@type': 'WebPage', '@id': canonicalUrl },
            });
        } else if (schemaType === 'listicle') {
            // Article + ItemList for best-of / top-N posts
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'Article',
                'headline': pageTitle,
                'description': item.frontmatter.description || '',
                'datePublished': item.frontmatter.date,
                'dateModified': item.frontmatter.date,
                'author': authorEntity,
                'publisher': publisherEntity,
                'mainEntityOfPage': { '@type': 'WebPage', '@id': canonicalUrl },
            });
            // Extract the number from the slug for itemListElement count
            const numberMatch = currentSlug.match(/(\d+)/);
            const listCount = numberMatch ? parseInt(numberMatch[1], 10) : 10;
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                'name': pageTitle,
                'numberOfItems': listCount,
                'itemListOrder': 'https://schema.org/ItemListOrderDescending',
            });
        } else {
            // Standard Article schema
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'Article',
                'headline': pageTitle,
                'description': item.frontmatter.description || '',
                'datePublished': item.frontmatter.date,
                'dateModified': item.frontmatter.date,
                'author': authorEntity,
                'publisher': publisherEntity,
                'mainEntityOfPage': { '@type': 'WebPage', '@id': canonicalUrl },
            });
        }

        // Breadcrumb schema (always present)
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.synctherapy.ca/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://www.synctherapy.ca/blog/' },
                { '@type': 'ListItem', 'position': 3, 'name': pageTitle },
            ],
        });

        return (
            <>
                <Header />
                {/* Structured Data — type-specific + breadcrumb */}
                {schemas.map((schema, i) => (
                    <script
                        key={i}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                ))}
                <BlogOneLayout
                    frontmatter={{
                        title: pageTitle,
                        date: item.frontmatter.date,
                        author: item.frontmatter.author,
                        description: item.frontmatter.description,
                    }}
                    content={content}
                    category={detectedCategory}
                    relatedPosts={relatedPosts}
                    slug={currentSlug}
                />
                <Footer />
            </>
        );
    }

    // 2. Services Index Layout (/services)
    if (resolvedParams.slug.length === 1 && resolvedParams.slug[0] === 'services') {
        return (
            <>
                <Header />
                <ServicesIndexLayout content={null} />
                <Footer />
            </>
        );
    }

    // 3. Service Detail Layout 
    // Applies to /services/*, /conditions/*, and other top-level pages
    // Excluding special pages like About, Contact (unless we want to use it for them too for now)
    const isServiceOrCondition =
        (resolvedParams.slug[0] === 'services' && resolvedParams.slug.length > 1) ||
        !['about', 'contact', 'home'].includes(resolvedParams.slug[0]);

    if (isServiceOrCondition && item) {
        const content = <div dangerouslySetInnerHTML={{ __html: item.content }} />;
        return (
            <>
                <Header />
                <ServiceLayout
                    frontmatter={{
                        title: item.frontmatter.title || '',
                        description: item.frontmatter.description,
                    }}
                    content={content}
                />
                <Footer />
            </>
        );
    }

    // 4. Default Layout for others (About, Contact)
    return (
        <div className="min-h-screen flex flex-col pt-[72px]">
            <Header />
            <main className="flex-grow">
                <div className="bg-muted py-12 border-b border-border">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold text-foreground font-sans">
                            {item?.frontmatter?.title || 'Page Not Found'}
                        </h1>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="prose max-w-none prose-neutral dark:prose-invert" dangerouslySetInnerHTML={{ __html: item?.content || '' }} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    return await getAllPaths();
}
