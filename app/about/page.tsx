import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { GoogleReviewsColumns } from '@/components/testimonials/google-reviews-columns';

export const metadata: Metadata = {
    title: 'About Sync Massage Therapy | Award-Winning Clinic in Colwood',
    description:
        'Learn why Colwood and Langford residents choose Sync Massage Therapy for clinical pain relief. We combine RMT, Athletic Therapy, and Holistic Nutrition.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/about/',
    },
    openGraph: {
        title: 'About Sync Massage Therapy | Award-Winning Clinic in Colwood',
        description:
            'Learn why Colwood and Langford residents choose Sync Massage Therapy for clinical pain relief. We combine RMT, Athletic Therapy, and Holistic Nutrition.',
        url: 'https://www.synctherapy.ca/about/',
        siteName: 'Sync Therapy',
        locale: 'en_CA',
        type: 'website',
    },
};

const faqItems = [
    {
        question: 'Is Sync Massage Therapy a spa or a clinical practice?',
        answer:
            'We are a results-driven clinical practice. While our treatments can be deeply relaxing, our primary focus is assessing and treating chronic pain, sports injuries, and complex mobility issues using evidence-based manual therapy.',
    },
    {
        question: 'Why do you combine RMT and Athletic Therapy?',
        answer:
            "RMT excels at treating the soft tissue (the muscles and fascia). Athletic Therapy excels at biomechanics and active rehabilitation (how you move). Combining them means we don't just release the tight muscle; we strengthen the weak links causing it to tighten up in the first place.",
    },
    {
        question: 'Do I have to book Nutrition to get Massage Therapy?',
        answer:
            'Not at all. All of our services can be booked completely independently. However, if we notice that your chronic pain is linked to systemic inflammation, we have the in-house expertise to provide holistic nutritional support if you desire it.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

export default function AboutPage() {
    return (
        <>
            {/* JSON-LD FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Header />

            <main className="bg-background min-h-screen relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
                {/* Fluid Background Blobs */}
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[100px] motion-safe:animate-pulse mix-blend-multiply filter will-change-transform" />
                    <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-orange-100/20 rounded-full blur-[100px] mix-blend-multiply filter will-change-transform" />
                    <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-teal-100/20 rounded-full blur-[100px] mix-blend-multiply filter will-change-transform" />
                </div>

                <div className="relative z-10">
                    {/* ════════════════════════════════════════════════════════════
              1. HERO SECTION
             ════════════════════════════════════════════════════════════ */}
                    <section className="pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                        <div className="container mx-auto px-4 max-w-5xl text-center">
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-2 border border-amber-300/60 bg-amber-50/80 backdrop-blur-sm text-amber-900 px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                <span>Platinum Winner: Best Massage Clinic (2022–2025)</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance mb-6">
                                Redefining Recovery in the West Shore
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
                                At Sync Massage Therapy, we believe true health is more than just the absence of pain. We combine Registered Massage Therapy, Athletic Therapy, and Holistic Nutrition to find your root cause and keep you moving.
                            </p>

                            <Link
                                href="/services/"
                                className="inline-flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl motion-safe:hover:-translate-y-0.5 transition-all text-lg px-8 py-4 rounded-xl font-semibold cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                            >
                                View Our Services
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </Link>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════════════════════════
              2. THE SYNC DIFFERENCE — HYBRID APPROACH
             ════════════════════════════════════════════════════════════ */}
                    <section className="py-20 lg:py-28">
                        <div className="container mx-auto px-4 max-w-6xl">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                    Why We Are Different
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Standard clinics often treat the symptom and send you home. We built Sync Massage Therapy to treat the <em>system</em>. By combining three disciplines under one roof, we deliver effective, comprehensive results.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Card 1: Clinical RMT */}
                                <div className="bg-white/70 backdrop-blur-lg border border-white/50 shadow-sm rounded-3xl p-8 hover:shadow-lg motion-safe:hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M7 21h10" /><path d="M12 21V3" /><path d="M3 7h4" /><path d="M17 7h4" /><path d="M5 3l2 4" /><path d="M19 3l-2 4" /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-3"><Link href="/services/massage-therapy/" className="hover:text-blue-700 transition-colors underline decoration-blue-200 underline-offset-4 hover:decoration-blue-500">Clinical RMT</Link></h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        We use advanced orthopedic assessments and manual therapy to release chronic tension and restore mobility—bridging the gap between relaxation and clinical rehab.
                                    </p>
                                </div>

                                {/* Card 2: Athletic Therapy */}
                                <div className="bg-white/70 backdrop-blur-lg border border-white/50 shadow-sm rounded-3xl p-8 hover:shadow-lg motion-safe:hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-700"><circle cx="12" cy="5" r="3" /><path d="m6.5 8 6 6" /><path d="m6.5 16 6-6" /><path d="M17.5 8 12 14" /><path d="m17.5 16-6-6" /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-3"><Link href="/services/athletic-therapy/" className="hover:text-blue-700 transition-colors underline decoration-blue-200 underline-offset-4 hover:decoration-blue-500">Athletic Therapy</Link></h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        We analyze your biomechanics and movement patterns to rehabilitate sports injuries and build the functional strength needed to prevent them from returning.
                                    </p>
                                </div>

                                {/* Card 3: Holistic Nutrition */}
                                <div className="bg-white/70 backdrop-blur-lg border border-white/50 shadow-sm rounded-3xl p-8 hover:shadow-lg motion-safe:hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 0 0-16 0c0 4.5 4 8 8 12z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-3"><Link href="/services/nutrition-consulting/" className="hover:text-blue-700 transition-colors underline decoration-blue-200 underline-offset-4 hover:decoration-blue-500">Holistic Nutrition</Link></h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        We recognize that systemic inflammation, gut health, and tissue recovery start from the inside out. We fuel your recovery at a cellular level.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════════════════════════
              3. TRUST & AUTHORITY BANNER — BY THE NUMBERS
             ════════════════════════════════════════════════════════════ */}
                    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
                        {/* Decorative shimmer */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
                        <div className="container mx-auto px-4 max-w-5xl relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 tracking-tight">
                                Proven Results in the West Shore Community
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">11+</div>
                                    <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Years in Practice</div>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">800+</div>
                                    <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Local Clients Helped</div>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">6x</div>
                                    <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Consecutive Award Winner</div>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                                    <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">5-Star Google Reviews</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════════════════════════
              4. OUR CLINICAL PHILOSOPHY
             ════════════════════════════════════════════════════════════ */}
                    <section className="py-20 lg:py-28">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-10 text-center">
                                Treat the Root, Not Just the Symptom
                            </h2>
                            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                                <p>
                                    Just as we all have unique physical features, we also have unique biomechanics and biochemical make-ups. No two injuries are exactly the same, which is why cookie-cutter treatment protocols rarely provide long-term relief.
                                </p>
                                <p>
                                    Our philosophy is simple: empower the patient. We don&apos;t just want to help you feel better today—we want to give you the tools, the active rehabilitation exercises, and the anatomical understanding to maintain optimal health independently. When you know <em>how</em> your body works and <em>why</em> it&apos;s in pain, you become an active participant in your own recovery.
                                </p>
                                <p>
                                    From weekend warriors tackling the trails at Mount Finlayson, to desk workers commuting from Langford, our goal is to restore balance to your body, mind, and environment.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════════════════════════
              5. MEET THE CLINICAL DIRECTOR — TEASER
             ════════════════════════════════════════════════════════════ */}
                    <section className="py-20 lg:py-28 bg-blue-50/40">
                        <div className="container mx-auto px-4 max-w-5xl">
                            <div className="bg-white/80 backdrop-blur-lg border border-white/60 shadow-xl rounded-3xl overflow-hidden">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Image */}
                                    <div className="lg:w-2/5 relative min-h-[320px] lg:min-h-[420px]">
                                        <Image
                                            src="/images/daryl-stubbs-author.jpg"
                                            alt="Daryl Stubbs — Clinical Director, Sync Massage Therapy"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            loading="lazy"
                                        />
                                    </div>
                                    {/* Content */}
                                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-sans tracking-tight mb-6">
                                            Guided by Experience
                                        </h2>
                                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                            Sync Massage Therapy was founded by Daryl Stubbs, a uniquely qualified practitioner holding credentials as a Registered Massage Therapist (CCHPBC), Certified Athletic Therapist (CATA), and Holistic Nutritionist. With over a decade of clinical experience and time spent treating Team Canada athletes, Daryl brings a professional sports-medicine standard of care to the Colwood community.
                                        </p>
                                        <div>
                                            <Link
                                                href="/our-team/daryl-stubbs/"
                                                className="inline-flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl motion-safe:hover:-translate-y-0.5 transition-all px-7 py-3.5 rounded-xl font-semibold cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                                            >
                                                Read Daryl&apos;s Full Bio
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════════════════════════
              6. REVIEWS SECTION
             ════════════════════════════════════════════════════════════ */}
                    <GoogleReviewsColumns />

                    {/* ════════════════════════════════════════════════════════════
              7. FREQUENTLY ASKED QUESTIONS
             ════════════════════════════════════════════════════════════ */}
                    <section className="py-20 lg:py-28 bg-blue-50/30">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-4 text-center">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-slate-600 text-center mb-12">
                                Common questions about our clinical approach.
                            </p>

                            <div className="space-y-4">
                                {faqItems.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-sm overflow-hidden"
                                    >
                                        <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-semibold text-blue-900 hover:text-blue-700 transition-colors list-none [&::-webkit-details-marker]:hidden">
                                            <span>{faq.question}</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="flex-shrink-0 ml-4 text-blue-400 group-open:rotate-180 transition-transform duration-200"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </summary>
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ════════════════════════════════════════════════════════════
              8. FINAL CTA
             ════════════════════════════════════════════════════════════ */}
                    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />
                        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                                Start Your Recovery Journey Today
                            </h2>
                            <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                                Join the 800+ West Shore residents who have chosen Sync Massage Therapy for lasting pain relief.
                            </p>
                            <a
                                href="https://synctherapy.janeapp.com/"
                                className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 shadow-lg shadow-black/20 hover:shadow-xl motion-safe:hover:-translate-y-0.5 transition-all text-lg px-8 py-4 rounded-xl font-bold cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:outline-none"
                            >
                                Book an Assessment
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </a>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
