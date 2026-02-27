import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.synctherapy.ca/html-sitemap/',
    },
    title: 'HTML Sitemap | Sync Massage Therapy',
    description: 'Browse all pages, services, and conditions on the Sync Massage Therapy website. Navigate our complete content directory.',
};

const MAIN_PAGES = [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: '/about/' },
    { title: 'Our Team', url: '/our-team/' },
    { title: 'Blog', url: '/blog/' },
    { title: 'Contact Us', url: '/contact/' },
];

const SERVICES = [
    "athletic-therapy",
    "cholesterol-diet",
    "diabetes-nutrition",
    "dietary-consultation",
    "exercise-therapy",
    "food-sensitivity-counseling",
    "gut-health-optimization",
    "health-consulting",
    "home-exercise-plans",
    "ibs-diet-counseling",
    "immune-support-nutrition",
    "injury-rehab-massage",
    "low-fodmap-diet",
    "mens-health-consulting",
    "muscle-recovery-massage",
    "muscle-tension-relief",
    "myofascial-release",
    "nutrition-consulting",
    "nutrition-counseling",
    "pain-management",
    "personalized-health-plan",
    "physical-rehabilitation",
    "post-event-massage",
    "pre-event-massage",
    "relaxation-massage",
    "rotator-cuff-release",
    "sports-injury-rehab",
    "sports-injury-treatment",
    "sports-medicine",
    "supplements-advice",
    "trigger-point-therapy",
    "visceral-manipulation",
    "wellness-consultation",
    "womens-health-consulting"
];

const CONDITIONS = [
    "anterior-knee-pain",
    "arthritis-pain",
    "back-pain",
    "baseball-injuries",
    "bursitis-treatment",
    "cardiovascular-health",
    "chronic-disease-management",
    "chronic-pain",
    "fibromyalgia",
    "headaches-migraines",
    "hip-and-knee-pain",
    "it-band-syndrome",
    "joint-stiffness",
    "knee-pain",
    "muscle-tension",
    "neck-shoulder-pain",
    "plantar-fasciitis",
    "postural-imbalance",
    "rotator-cuff-injury",
    "sciatica-treatment",
    "shin-splints",
    "shoulder-impingement",
    "shoulder-pain",
    "sports-injuries-and-prevention",
    "sprains-and-strains",
    "tendonitis-treatment"
];

function formatName(slug: string) {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export default function HTMLSitemap() {
    return (
        <div className="min-h-screen flex flex-col pt-[72px]">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-primary/10 py-16 border-b border-border">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-sans mb-4">
                            Site Directory
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Navigate through all of our pages, specialized services, and conditions we treat at Sync Massage Therapy.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Main Pages */}
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">Main Pages</h2>
                            <ul className="space-y-3">
                                {MAIN_PAGES.map((page) => (
                                    <li key={page.url}>
                                        <Link href={page.url} className="text-base text-foreground hover:text-primary transition-colors flex items-center">
                                            <span className="mr-2 text-primary/50">›</span> {page.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">Our Services</h2>
                            {/* Link to index */}
                            <Link href="/services/" className="text-base font-semibold text-foreground hover:text-primary transition-colors block mb-4 flex items-center">
                                <span className="mr-2 text-primary/50">›</span> All Services
                            </Link>
                            <ul className="space-y-3 pl-4 border-l-2 border-primary/10">
                                {SERVICES.map((slug) => (
                                    <li key={slug}>
                                        <Link href={`/services/${slug}/`} className="text-base text-muted-foreground hover:text-primary transition-colors block">
                                            {formatName(slug)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Conditions */}
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">Conditions We Treat</h2>
                            {/* Link to index */}
                            <Link href="/conditions/" className="text-base font-semibold text-foreground hover:text-primary transition-colors block mb-4 flex items-center">
                                <span className="mr-2 text-primary/50">›</span> All Conditions
                            </Link>
                            <ul className="space-y-3 pl-4 border-l-2 border-primary/10">
                                {CONDITIONS.map((slug) => (
                                    <li key={slug}>
                                        <Link href={`/conditions/${slug}/`} className="text-base text-muted-foreground hover:text-primary transition-colors block">
                                            {formatName(slug)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
