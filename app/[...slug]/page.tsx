import { getContentBySlug, getAllPaths } from '@/lib/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogOneLayout, type BlogCategory } from '@/components/layouts/BlogOneLayout';
import { ServiceLayout } from '@/components/layouts/ServiceLayout';
import { ServicesIndexLayout } from '@/components/layouts/ServicesIndexLayout';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { transformYouTubeEmbeds } from '@/lib/lazy-youtube';
import { transformLazyImages } from '@/lib/lazy-images';
import { transformFontAwesome } from '@/lib/transform-fontawesome';
import { LazyYouTubeActivator } from '@/components/blog/LazyYouTubeActivator';

// Server-side date formatting (replaces date-fns in client bundle)
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function formatDate(dateStr: string | undefined): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

// ─── Category Detection ────────────────────────────────────────
const RED_LIGHT_KEYWORDS = ['red-light', 'pemf', 'sauna', 'infrared', 'recovery-modali', 'cryo', 'photobiomodulation', 'grounding', 'wavelength', 'mitochondri', 'kala-', 'rouge-', 'mito-', 'infraredi', 'flexbeam', 'hooga', 'bon-charge', 'platinum-led', 'higherdose', 'healthyline', 'heat-healer', 'sunlighten', 'ringconn', 'anti-aging'];
const GUT_HEALTH_KEYWORDS = ['gut', 'probiotic', 'prebiotic', 'hydrogen', 'alkaline', 'nutrient', 'supplement', 'leaky-gut', 'candida', 'ibs', 'acid-reflux', 'collagen', 'digestive', 'nutrition', 'seed-vs', 'culturelle', 'ritual', 'bioma', 'viome', 'megaspore', 'yourbiology', 'just-thrive', 'sauerkraut', 'fodmap', 'sibo', 'constipation', 'bloating', 'echo-', 'kangen', 'reverse-osmosis', 'fiber', 'triglyceride', 'gary-brecka', 'gi-map', 'amen-supplement', 'cymbiotika', 'ion-bottle', 'lourdes', 'dana-white', 'kim-kardashian', 'joe-rogan', 'cellpower', 'lumivitae'];

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

function getSchemaType(slug: string, frontmatterSchemaType?: string): SchemaType {
    // Frontmatter override always wins
    if (frontmatterSchemaType && ['review', 'listicle', 'article'].includes(frontmatterSchemaType)) {
        return frontmatterSchemaType as SchemaType;
    }
    const s = slug.toLowerCase();
    if (REVIEW_KEYWORDS.some(kw => s.includes(kw))) return 'review';
    if (LISTICLE_PREFIXES.some(kw => s.startsWith(kw))) return 'listicle';
    // Also catch "X-best-Y" or "N best" patterns anywhere in slug
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
    // Early checks for hardcoded special pages where CMS content doesn't exist

    // Custom Metadata for /contact
    if (resolvedParams.slug.length === 1 && resolvedParams.slug[0] === 'contact') {
        return {
            title: 'Contact Sync Massage Therapy | Colwood, BC',
            description: 'Book an appointment or get in touch with Sync Massage Therapy at 132-328 Wale Rd, Colwood, BC. Call (250) 812-8698 or book online 24/7.',
            openGraph: {
                title: 'Contact Sync Massage Therapy | Colwood, BC',
                description: 'Award-winning RMT clinic in Colwood. Book online, call, or visit us at 132-328 Wale Rd. Direct billing available.',
                url: 'https://www.synctherapy.ca/contact/',
                siteName: 'Sync Massage Therapy',
                locale: 'en_CA',
                type: 'website',
            },
            alternates: {
                canonical: 'https://www.synctherapy.ca/contact/',
            },
        };
    }

    // Custom Metadata for /direct-billing
    if (resolvedParams.slug.length === 1 && resolvedParams.slug[0] === 'direct-billing') {
        return {
            title: 'Direct Billing RMT & Athletic Therapy | Victoria & Colwood',
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
            title: 'Deep Tissue Massage Colwood, Langford & Victoria',
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

    // Custom Metadata for /services/sports-massage
    if (resolvedParams.slug.length === 2 &&
        resolvedParams.slug[0] === 'services' &&
        resolvedParams.slug[1] === 'sports-massage') {
        return {
            title: 'Sports Massage Colwood & Langford | Recovery RMT',
            description: 'Sports massage for runners, lifters & athletes in Colwood. Improve recovery & range of motion. Located near Juan de Fuca Rec. Direct Billing available.',
            openGraph: {
                title: 'Sports Massage Colwood & Langford | Recovery RMT | Sync Therapy',
                description: 'Sports massage for runners, lifters & athletes in Colwood. Improve recovery & range of motion. Located near Juan de Fuca Rec. Direct Billing available.',
                url: 'https://www.synctherapy.ca/services/sports-massage/',
                siteName: 'Sync Therapy',
                locale: 'en_CA',
                type: 'website',
            },
            alternates: {
                canonical: 'https://www.synctherapy.ca/services/sports-massage/',
            },
        };
    }

    // Custom Metadata for /new-patients
    if (resolvedParams.slug.length === 1 && resolvedParams.slug[0] === 'new-patients') {
        return {
            title: 'New Patients | Sync Massage Therapy Colwood & Victoria',
            description: 'Tired of treatments that don\'t last? Sync Massage Therapy finds the root cause of chronic pain with RMT, Athletic Therapy & Holistic Nutrition. One therapist. Three disciplines. Book online 24/7.',
            openGraph: {
                title: 'New Patients | Sync Massage Therapy Colwood',
                description: 'Finally, a therapist who investigates why you\'re in pain — not just where. One therapist, three disciplines, no starting over. Serving Colwood, Langford & Victoria.',
                url: 'https://www.synctherapy.ca/new-patients/',
                siteName: 'Sync Massage Therapy',
                locale: 'en_CA',
                type: 'website',
            },
            alternates: {
                canonical: 'https://www.synctherapy.ca/new-patients/',
            },
        };
    }

    const item = await getContentBySlug(resolvedParams.slug);

    if (!item) {
        return {
            title: 'Page Not Found',
        };
    }

    const title = item.frontmatter.seoTitle || item.frontmatter.title;
    const description = item.frontmatter.description || '';
    const url = `https://www.synctherapy.ca/${resolvedParams.slug.join('/')}/`;





    const noIndexPages = ['privacy-policy', 'terms-of-service', 'affiliate-disclosure', 'testimonials-disclosure', 'cookies-policy'];
    const shouldNoIndex = resolvedParams.slug.length === 1 && noIndexPages.includes(resolvedParams.slug[0]);

    // Use absolute title (no "| Sync Therapy" suffix) for comparison pages only
    const slugStr = resolvedParams.slug.join('/');
    const comparisonSlugs = ['rouge-vs-kala', 'rouge-vs-mito-red-light', 'rouge-vs-platinumled', 'mito-red-light-vs-platinumled', 'flexbeam-vs-kineon', 'mito-red-light-vs-joovv'];
    const isComparisonPage = comparisonSlugs.includes(slugStr);
    const metaTitle = isComparisonPage && title ? { absolute: title } : title;

    return {
        title: metaTitle,
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
        ...(shouldNoIndex && { robots: { index: false, follow: true } }),
    };
}

import { MassageTherapyColwood } from '@/components/pages/MassageTherapyColwood';
import { DirectBillingMassage } from '@/components/pages/DirectBillingMassage';
import { DeepTissueMassage } from '@/components/pages/DeepTissueMassage';
import { SportsMassage } from '@/components/pages/SportsMassage';
import { NewPatients } from '@/components/pages/NewPatients';
import { ContactPage } from '@/components/pages/ContactPage';
import { ServiceSchema } from '@/components/ServiceSchema';


export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    const item = await getContentBySlug(resolvedParams.slug);

    if (!item && resolvedParams.slug[0] !== 'direct-billing' && resolvedParams.slug[0] !== 'contact' && resolvedParams.slug[0] !== 'new-patients' && !(resolvedParams.slug[0] === 'services' && (resolvedParams.slug[1] === 'deep-tissue-massage' || resolvedParams.slug[1] === 'sports-massage'))) {
        notFound();
    }

    // SPECIAL PAGE: Contact
    if (resolvedParams.slug.length === 1 && resolvedParams.slug[0] === 'contact') {
        return (
            <>
                <Header />
                <ContactPage />
                <Footer />

            </>
        );
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
        resolvedParams.slug[1] === 'sports-massage') {
        return (
            <>
                <Header />
                <SportsMassage />
                <Footer />

            </>
        );
    }

    // SPECIAL PAGE: New Patients
    if (resolvedParams.slug.length === 1 &&
        resolvedParams.slug[0] === 'new-patients') {
        return (
            <>
                <Header />
                <NewPatients />
                <Footer />
            </>
        );
    }

    // 1. Blog Post Layout
    if (item && item.type === 'post') {
        // Transform content: lazy YouTube embeds, lazy images, and strip FA link tags
        const transformedContent = transformLazyImages(transformFontAwesome(transformYouTubeEmbeds(item.content)));
        const content = (
            <>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: transformedContent }} suppressHydrationWarning />
                <LazyYouTubeActivator />
            </>
        );
        const detectedCategory = getCategoryFromSlug(resolvedParams.slug.join('/'), item.frontmatter.category);
        const currentSlug = resolvedParams.slug.join('/');

        // Fetch related posts from same category (slug-based pre-filter for performance)
        const allPaths = await getAllPaths();
        const sameCategorySlugs = allPaths
            .filter(p => p.slug[0] !== currentSlug && getCategoryFromSlug(p.slug[0]) === detectedCategory);

        // Shuffle to get variety across builds, then load metadata for top candidates
        const shuffled = sameCategorySlugs.sort(() => Math.random() - 0.5).slice(0, 12);
        const related = await Promise.all(
            shuffled.map(async (p) => {
                const post = await getContentBySlug(p.slug);
                if (post && post.type === 'post') {
                    return {
                        slug: p.slug[0],
                        title: post.frontmatter.title,
                        description: post.frontmatter.description,
                        formattedDate: formatDate(post.frontmatter.date),
                    };
                }
                return null;
            })
        );
        const relatedPosts = related.filter(Boolean).slice(0, 4) as { slug: string; title: string; description?: string; formattedDate?: string }[];

        const canonicalUrl = `https://www.synctherapy.ca/${currentSlug}/`;

        // ─── Content Type Detection ────────────────────────────
        const schemaType = getSchemaType(currentSlug, item.frontmatter.schemaType);

        // ─── Entity-chained Author + Publisher ─────────────────
        const authorEntity = {
            '@type': 'Person' as const,
            '@id': 'https://www.synctherapy.ca/our-team/daryl-stubbs/#person',
            'name': 'Daryl Stubbs',
            'url': 'https://www.synctherapy.ca/our-team/daryl-stubbs/',
            'image': 'https://www.synctherapy.ca/images/daryl-stubbs-author.jpg',
            'description': 'Award-winning Registered Massage Therapist (RMT) and Certified Athletic Therapist (CAT(C)) with over 12 years of clinical experience. Founder of Sync Massage Therapy.',
            'jobTitle': [
                'Registered Massage Therapist (RMT)',
                'Certified Athletic Therapist (CAT(C))',
                'Holistic Nutritionist',
                'Clinical Director'
            ],
            'alumniOf': {
                '@type': 'CollegeOrUniversity',
                'name': 'Camosun College',
                'sameAs': 'https://en.wikipedia.org/wiki/Camosun_College'
            },
            'knowsAbout': [
                'Massage Therapy',
                'Athletic Therapy',
                'Sports Injury Rehabilitation',
                'Red Light Therapy',
                'Holistic Nutrition',
                'Manual Therapy',
                'Pain Management'
            ],
            'worksFor': { '@id': 'https://www.synctherapy.ca/#organization' },
            'sameAs': [
                'https://www.instagram.com/synctherapy/',
                'https://www.facebook.com/SyncTherapyVictoria/',
                'https://www.linkedin.com/in/daryl-stubbs-36245379/',
                'https://luminohealth.sunlife.ca/en/health-care-provider-profile/massage-therapist/sync-therapy/daryl-stubbs-603519-692895/',
                'https://luminohealth.sunlife.ca/en/health-care-provider-profile/athletic-therapist/sync-therapy/daryl-stubbs-603519-692895/',
                'https://www.youtube.com/@synctherapy',
                'https://ca.pinterest.com/SyncTherapyWellness/'
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
            const productName = item.frontmatter.productName || (item.frontmatter.title || '')
                .replace(/review.*$/i, '')
                .replace(/\d{4}.*$/i, '')
                .replace(/[-–—:]\s*should.*$/i, '')
                .trim();

            const reviewSchema: any = {
                '@context': 'https://schema.org',
                '@type': 'Review',
                'name': item.frontmatter.title || '',
                'description': item.frontmatter.description || '',
                'datePublished': item.frontmatter.date,
                'dateModified': item.frontmatter.dateModified || item.frontmatter.date,
                'author': authorEntity,
                'publisher': publisherEntity,
                'itemReviewed': {
                    '@type': 'Product',
                    'name': productName,
                    'image': item.frontmatter.image || item.frontmatter.featuredImage || 'https://www.synctherapy.ca/icon.svg',
                },
                'mainEntityOfPage': { '@type': 'WebPage', '@id': canonicalUrl },
            };

            if (item.frontmatter.productPrice) {
                reviewSchema.itemReviewed.offers = {
                    '@type': 'Offer',
                    'priceCurrency': 'CAD',
                    'price': item.frontmatter.productPrice,
                };
            }

            if (item.frontmatter.rating) {
                reviewSchema.reviewRating = {
                    '@type': 'Rating',
                    'ratingValue': item.frontmatter.rating,
                    'bestRating': '5',
                };
            }

            if (item.frontmatter.pros) {
                reviewSchema.positiveNotes = {
                    '@type': 'ItemList',
                    'itemListElement': Array.isArray(item.frontmatter.pros)
                        ? item.frontmatter.pros.map((pro: string, idx: number) => ({
                            '@type': 'ListItem',
                            'position': idx + 1,
                            'name': pro
                        }))
                        : [{ '@type': 'ListItem', 'position': 1, 'name': item.frontmatter.pros }]
                };
            }

            if (item.frontmatter.cons) {
                reviewSchema.negativeNotes = {
                    '@type': 'ItemList',
                    'itemListElement': Array.isArray(item.frontmatter.cons)
                        ? item.frontmatter.cons.map((con: string, idx: number) => ({
                            '@type': 'ListItem',
                            'position': idx + 1,
                            'name': con
                        }))
                        : [{ '@type': 'ListItem', 'position': 1, 'name': item.frontmatter.cons }]
                };
            }

            schemas.push(reviewSchema);
        } else if (schemaType === 'listicle') {
            // Article + ItemList for best-of / top-N posts
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                'headline': item.frontmatter.title || '',
                'description': item.frontmatter.description || '',
                'datePublished': item.frontmatter.date,
                'dateModified': item.frontmatter.dateModified || item.frontmatter.date,
                'author': authorEntity,
                'publisher': publisherEntity,
                'mainEntityOfPage': { '@type': 'WebPage', '@id': canonicalUrl },
            });
            // Extract the number from the slug or title for itemListElement count
            const numberMatch = currentSlug.match(/(\d+)/) || (item.frontmatter.title || '').match(/(\d+)/);
            const listCount = numberMatch ? parseInt(numberMatch[1], 10) : 10;
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                'name': item.frontmatter.title || '',
                'numberOfItems': listCount,
                'itemListOrder': 'https://schema.org/ItemListOrderDescending',
            });
        } else {
            // Standard Article schema
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                'headline': item.frontmatter.title || '',
                'description': item.frontmatter.description || '',
                'datePublished': item.frontmatter.date,
                'dateModified': item.frontmatter.dateModified || item.frontmatter.date,
                'author': authorEntity,
                'publisher': publisherEntity,
                'mainEntityOfPage': { '@type': 'WebPage', '@id': canonicalUrl },
            });
        }

        // FAQPage schema — render if frontmatter contains faqs array
        if (item.frontmatter.faqs && Array.isArray(item.frontmatter.faqs) && item.frontmatter.faqs.length > 0) {
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': item.frontmatter.faqs.map((faq: { question: string; answer: string }) => ({
                    '@type': 'Question',
                    'name': faq.question,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': faq.answer,
                    },
                })),
            });
        }

        // Breadcrumb schema (always present)
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.synctherapy.ca/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://www.synctherapy.ca/blog/' },
                { '@type': 'ListItem', 'position': 3, 'name': item.frontmatter.title || '' },
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
                        title: item.frontmatter.title || '',
                        date: item.frontmatter.dateModified || item.frontmatter.date || '',
                        formattedDate: formatDate(item.frontmatter.dateModified || item.frontmatter.date),
                        author: item.frontmatter.author || '',
                        description: item.frontmatter.description || '',
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
    // Applies strictly to /services/* and /conditions/*
    const isServiceOrCondition =
        (resolvedParams.slug[0] === 'services' && resolvedParams.slug.length > 1) ||
        (resolvedParams.slug[0] === 'conditions' && resolvedParams.slug.length > 1);

    if (isServiceOrCondition && item) {
        const content = <div dangerouslySetInnerHTML={{ __html: item.content }} />;
        const schemaType = resolvedParams.slug[0] === 'conditions' ? 'condition' : 'service';

        return (
            <>
                <Header />
                <ServiceSchema
                    type={schemaType}
                    name={item.frontmatter.title || ''}
                    description={item.frontmatter.description || ''}
                    slug={resolvedParams.slug[resolvedParams.slug.length - 1]}
                    breadcrumbLabel={item.frontmatter.title || ''}
                />
                <ServiceLayout
                    frontmatter={{
                        title: item.frontmatter.title || '',
                        description: item.frontmatter.description || '',
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
