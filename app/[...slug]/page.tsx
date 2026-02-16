import { getContentBySlug, getAllPaths } from '@/lib/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogOneLayout } from '@/components/layouts/BlogOneLayout';
import { ServiceLayout } from '@/components/layouts/ServiceLayout';
import { ServicesIndexLayout } from '@/components/layouts/ServicesIndexLayout';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

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

export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    const item = await getContentBySlug(resolvedParams.slug);

    if (!item) {
        notFound();
    }

    // SPECIAL PAGE: Massage Therapy Colwood
    // Renders the dedicated high-fidelity component for this specific slug
    if (resolvedParams.slug.length === 2 &&
        resolvedParams.slug[0] === 'services' &&
        resolvedParams.slug[1] === 'massage-therapy-colwood') {
        return (
            <>
                <Header />
                <MassageTherapyColwood />
                <Footer />
            </>
        );
    }

    // 1. Blog Post Layout
    if (item.type === 'post') {
        const content = <div dangerouslySetInnerHTML={{ __html: item.content }} />;
        return (
            <>
                <Header />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Article',
                            headline: item.frontmatter.title,
                            datePublished: item.frontmatter.date,
                            dateModified: item.frontmatter.date,
                            author: {
                                '@type': 'Person',
                                name: item.frontmatter.author || 'Sync Therapy',
                            },
                        })
                    }}
                />
                <BlogOneLayout
                    frontmatter={{
                        title: item.frontmatter.title,
                        date: item.frontmatter.date,
                        author: item.frontmatter.author,
                        description: item.frontmatter.description,
                    }}
                    content={content}
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

    if (isServiceOrCondition) {
        const content = <div dangerouslySetInnerHTML={{ __html: item.content }} />;
        return (
            <>
                <Header />
                <ServiceLayout
                    frontmatter={{
                        title: item.frontmatter.title,
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
                            {item.frontmatter.title}
                        </h1>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="prose max-w-none prose-neutral dark:prose-invert" dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    return await getAllPaths();
}
