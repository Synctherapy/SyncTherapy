import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";

// ─── Inline SVG Icons (avoid lucide-react bundle in server component) ──
const ChevronRightIcon = () => (
    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const ClockIcon = () => (
    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const CalendarIcon = () => (
    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
);
const VerifiedIcon = () => (
    <svg className="text-[#2563EB] w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
);
const ZapIcon = () => (
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
);
const LeafIcon = () => (
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
);
const ShieldCheckIcon = () => (
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);

// ─── Category Types ────────────────────────────────────────────
export type BlogCategory = "red-light-recovery" | "gut-health-nutrition" | "manual-therapy";

// ─── E-E-A-T Config Per Category ───────────────────────────────
const EEAT_CONFIG: Record<BlogCategory, {
    iconKey: "zap" | "leaf" | "shield";
    header: string;
    body: string;
}> = {
    "red-light-recovery": {
        iconKey: "zap",
        header: "Clinical Perspective: Recovery Modalities",
        body: "As a Certified Athletic Therapist and RMT, I evaluate recovery tech based on its ability to accelerate tissue healing and reduce musculoskeletal inflammation. The insights in this article reflect my 12+ years of clinical practice integrating advanced modalities like photobiomodulation with hands-on manual therapy.",
    },
    "gut-health-nutrition": {
        iconKey: "leaf",
        header: "Clinical Standard: Holistic Nutrition",
        body: "As a Holistic Nutritionist and Athletic Therapist, I approach gut health as the foundation of systemic recovery. The supplements, probiotics, and hydration protocols discussed here are evaluated for their clinical efficacy in reducing systemic inflammation, based on practical experience optimizing client health.",
    },
    "manual-therapy": {
        iconKey: "shield",
        header: "Clinical Standard: Manual Therapy",
        body: "The protocols and assessments discussed in this article are based on evidence-based athletic therapy and registered massage therapy standards. This information reflects over a decade of hands-on clinical experience treating chronic pain and sports injuries at Sync Massage Therapy.",
    },
};

function EeatIcon({ iconKey }: { iconKey: "zap" | "leaf" | "shield" }) {
    if (iconKey === "zap") return <ZapIcon />;
    if (iconKey === "leaf") return <LeafIcon />;
    return <ShieldCheckIcon />;
}

// ─── Props ─────────────────────────────────────────────────────
interface BlogOneLayoutProps {
    frontmatter: {
        title: string;
        date?: string;
        formattedDate?: string;
        author?: string;
        description?: string;
        readTime?: string;
        category?: string;
    };
    content: React.ReactNode;
    category?: BlogCategory;
    toc?: { id: string; text: string }[];
    relatedPosts?: { slug: string; title: string; description?: string; formattedDate?: string }[];
    slug?: string;
}

export function BlogOneLayout({ frontmatter, content, category = "manual-therapy", toc, relatedPosts, slug }: BlogOneLayoutProps) {
    // ─── Author ────────────────────────────────────────────────
    const authorName = "Daryl Stubbs";
    const authorRole = "RMT, CAT(C), B.A.E.T., Holistic Nutritionist";
    const authorImage = "/images/daryl-stubbs-author.jpg";

    const formattedDate = frontmatter.formattedDate || "";

    // ─── E-E-A-T config for current category ───────────────────
    const eeat = EEAT_CONFIG[category] || EEAT_CONFIG["manual-therapy"];

    return (
        <div className="font-sans antialiased bg-[#F0F5FF] min-h-screen text-[#1A2B3C]">

            {/* ─── Reading Progress Bar (client) ─────────────────── */}
            <ReadingProgressBar />

            {/* ─── Breadcrumb ──────────────────────────────────────── */}
            <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-5 pt-4 pb-2">
                <ol className="flex items-center gap-1.5 text-[12px] text-[#1A2B3C]/50">
                    <li>
                        <Link href="/" className="hover:text-[#2563EB] transition-colors cursor-pointer">Home</Link>
                    </li>
                    <li><ChevronRightIcon /></li>
                    <li>
                        <Link href="/blog/" className="hover:text-[#2563EB] transition-colors cursor-pointer">Blog</Link>
                    </li>
                    <li><ChevronRightIcon /></li>
                    <li className="text-[#1A2B3C]/80 font-medium truncate max-w-[200px]" aria-current="page">
                        {frontmatter.title}
                    </li>
                </ol>
            </nav>

            <main className="max-w-3xl mx-auto">
                {/* ─── Hero Section ──────────────────────────────────── */}
                <section className="bg-[#1A2B3C] text-white px-5 pt-10 pb-12 relative overflow-hidden rounded-3xl mb-8 mx-4" id="overview">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                        <span className="bg-[#2563EB] text-white px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">Medical Review</span>
                        <span className="text-white/70 text-[11px] font-medium uppercase tracking-widest flex items-center gap-1">
                            <ClockIcon /> {frontmatter.readTime || "5 min read"}
                        </span>
                        {formattedDate && (
                            <span className="text-white/70 text-[11px] font-medium uppercase tracking-widest flex items-center gap-1">
                                <CalendarIcon /> {formattedDate}
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl sm:text-4xl leading-[1.1] mb-8 font-sans font-extrabold tracking-tight text-white" style={{ color: '#ffffff' }}>
                        {frontmatter.title}
                    </h1>

                    {frontmatter.description && (
                        <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xl">
                            {frontmatter.description}
                        </p>
                    )}

                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#2563EB]">
                            <Image
                                src={authorImage}
                                alt={`${authorName} - Founder of Sync Massage Therapy`}
                                width={56}
                                height={56}
                                className="w-full h-full object-cover"
                                priority={true}
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-1.5">
                                <p className="text-sm font-bold text-white font-sans">{authorName}</p>
                                <VerifiedIcon />
                            </div>
                            <p className="text-[11px] text-white/75 leading-snug mb-1">{authorRole}</p>
                            {formattedDate && (
                                <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest">Clinically Reviewed {formattedDate}</span>
                            )}
                        </div>
                    </div>
                </section>

                {/* ─── Table of Contents (client component) ────────── */}
                <TableOfContents articleId="content" />

                {/* ─── Article Content ────────────────────────────────── */}
                <article className="px-6 py-8" id="content">
                    {/* Dynamic E-E-A-T Box */}
                    <div className="bg-white border-l-4 border-[#2563EB] p-6 mb-12 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.1)] rounded-r-xl">
                        <div className="flex items-center gap-2 text-[#2563EB] mb-3">
                            <EeatIcon iconKey={eeat.iconKey} />
                            <p className="text-[10px] font-bold uppercase tracking-widest">{eeat.header}</p>
                        </div>
                        <p className="text-sm text-[#1A2B3C]/80 leading-relaxed">
                            {eeat.body}
                        </p>
                    </div>

                    {/* Content Injection */}
                    <div className="prose prose-lg max-w-none text-[#1A2B3C]/80
                prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#1A2B3C]
                prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6
                prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-[#2563EB] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-[#2563EB] prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-[#1A2B3C] prose-blockquote:bg-white/50 prose-blockquote:rounded-r-lg
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:shadow-[#1A2B3C]/10
            ">
                        {content}
                    </div>

                    {/* ─── Mid-Article CTA (category-aware) ──────────────── */}
                    {category === "manual-therapy" ? (
                        <div className="my-16 bg-gradient-to-r from-[#1A2B3C] to-[#2563EB]/90 rounded-2xl p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <p className="text-white/80 text-sm mb-2">Ready to feel the difference?</p>
                            <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 font-sans">Book Your Appointment Today</h3>
                            <p className="text-white/60 text-xs mb-6 max-w-md mx-auto">Direct billing available for Pacific Blue Cross, Canada Life, Sun Life & more.</p>
                            <a
                                href="https://sync-massage-therapy.janeapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-[#1A2B3C] font-bold uppercase tracking-[0.1em] text-[12px] px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer min-h-[48px] min-w-[48px]"
                            >
                                Book Now →
                            </a>
                        </div>
                    ) : (
                        <div className="my-16 bg-white rounded-2xl p-8 text-center border border-[#1A2B3C]/5 shadow-sm">
                            <p className="text-[#1A2B3C]/50 text-xs uppercase tracking-widest font-bold mb-3">
                                {category === "red-light-recovery" ? "Recovery Resources" : "Nutrition Resources"}
                            </p>
                            <h3 className="text-[#1A2B3C] text-xl sm:text-2xl font-bold mb-3 font-sans">
                                {category === "red-light-recovery"
                                    ? "Explore More Recovery Tools"
                                    : "Explore More Nutrition Guides"}
                            </h3>
                            <p className="text-[#1A2B3C]/60 text-sm mb-6 max-w-md mx-auto">
                                {category === "red-light-recovery"
                                    ? "Browse our clinically reviewed guides on red light therapy, PEMF mats, and sauna blankets."
                                    : "Browse our clinically reviewed guides on probiotics, gut health supplements, and hydration protocols."}
                            </p>
                            <a
                                href="/blog/"
                                className="inline-block bg-[#2563EB] text-white font-bold uppercase tracking-[0.1em] text-[12px] px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer min-h-[48px] min-w-[48px]"
                            >
                                Browse Articles →
                            </a>
                        </div>
                    )}
                </article>

                {/* ─── Social Share (client) ────────────────────────── */}
                <ShareButtons />

                {/* ─── Clinical Lead Profile ─────────────────────────── */}
                <section className="mx-4 mb-12 p-8 bg-white rounded-3xl border border-[#1A2B3C]/5 shadow-2xl shadow-[#1A2B3C]/5" id="resources">
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-8 border-b border-[#1A2B3C]/5 pb-3">Founder & Lead Therapist</h5>
                    <div className="flex items-center gap-5 mb-6">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                            <Image
                                src={authorImage}
                                alt={`${authorName} - Founder of Sync Massage Therapy`}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#1A2B3C] font-sans">{authorName}</h4>
                            <p className="text-[12px] text-[#1A2B3C]/50 font-medium uppercase tracking-wide">RMT, CAT(C), Holistic Nutritionist</p>
                        </div>
                    </div>
                    <p className="text-sm text-[#1A2B3C]/70 leading-relaxed mb-8">
                        Specializing in high-performance musculoskeletal rehabilitation and functional nutrition, Daryl integrates evidence-based athletic therapy with holistic strategies to resolve chronic pain and optimize systemic health.
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-y border-[#1A2B3C]/5 py-6 mb-6">
                        <div>
                            <p className="text-[#1A2B3C] font-bold text-2xl font-sans">800+</p>
                            <p className="text-[10px] text-[#2563EB] uppercase font-bold tracking-widest">Clients Treated</p>
                        </div>
                        <div>
                            <p className="text-[#1A2B3C] font-bold text-2xl font-sans">6x</p>
                            <p className="text-[10px] text-[#2563EB] uppercase font-bold tracking-widest">Award Winner</p>
                        </div>
                    </div>
                    <a
                        href="https://sync-massage-therapy.janeapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#2563EB] text-white font-bold uppercase tracking-[0.1em] text-[11px] px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#2563EB]/20 active:scale-95 transition-all cursor-pointer min-h-[44px]"
                    >
                        Book with Daryl →
                    </a>
                </section>

                {/* ─── Related Posts ──────────────────────────────────── */}
                {relatedPosts && relatedPosts.length > 0 && (
                    <section className="mx-4 mb-12">
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-6 px-2">You Might Also Like</h5>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {relatedPosts.slice(0, 4).map((post) => (
                                <Link key={post.slug} href={`/${post.slug}`} className="block group cursor-pointer">
                                    <div className="bg-white rounded-2xl p-5 border border-[#1A2B3C]/5 hover:shadow-lg hover:border-[#2563EB]/20 transition-all h-full">
                                        {post.formattedDate && (
                                            <span className="text-[10px] text-[#2563EB] font-bold uppercase tracking-widest">
                                                {post.formattedDate}
                                            </span>
                                        )}
                                        <h3 className="text-sm font-bold text-[#1A2B3C] mt-1.5 mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2 font-sans">
                                            {post.title}
                                        </h3>
                                        {post.description && (
                                            <p className="text-xs text-[#1A2B3C]/50 line-clamp-2">{post.description}</p>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* ─── Newsletter ─────────────────────────────────────── */}
                <section className="px-4 mb-16">
                    <div className="bg-[#1A2B3C] rounded-[2rem] p-10 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2563EB]"></div>
                        <h3 className="text-2xl font-sans text-white mb-4">The Sync Therapy Wellness Newsletter</h3>
                        <p className="text-white/60 text-sm mb-10 leading-relaxed">Evidence-based insights on recovery tech, gut health, and pain management straight from the clinic.</p>
                        <div className="space-y-4">
                            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                            <input
                                id="newsletter-email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#2563EB] outline-none text-white placeholder-white/30 transition-all min-h-[48px]"
                                placeholder="Enter your email address"
                                type="email"
                                aria-label="Email address for newsletter"
                            />
                            <button
                                className="w-full bg-[#2563EB] text-white font-bold uppercase tracking-[0.15em] text-[11px] py-4 rounded-xl shadow-lg shadow-[#2563EB]/20 active:scale-95 transition-transform cursor-pointer min-h-[48px]"
                                aria-label="Subscribe to the Sync Therapy newsletter"
                            >
                                GET CLINICAL INSIGHTS
                            </button>
                        </div>
                    </div>
                </section>

                {/* ─── Back to Blog ───────────────────────────────────── */}
                <div className="px-6 pb-12 text-center">
                    <Link
                        href="/blog/"
                        className="inline-flex items-center gap-2 text-sm text-[#2563EB] font-semibold hover:underline transition-colors cursor-pointer min-h-[44px]"
                    >
                        ← Back to All Articles
                    </Link>
                </div>

            </main>
        </div>
    );
}
