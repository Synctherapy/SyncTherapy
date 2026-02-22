import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { CloudRain, Timer, Cloud, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Immune Support Nutrition in Colwood | Sync Massage Therapy',
    description: 'Preventative, science-based immune support nutrition in Colwood. We focus on micronutrient density and gut microbiome health to support your resilient system.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/immune-support-nutrition/',
    },
};

export default function ImmuneSupportNutritionPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalClinic",
                "@id": "https://synctherapy.ca/#organization",
                "name": "Sync Massage Therapy",
                "url": "https://synctherapy.ca",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "328 Wale Rd #120",
                    "addressLocality": "Colwood",
                    "addressRegion": "BC",
                    "postalCode": "V9B 0J8",
                    "addressCountry": "CA"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does gut health relate to my immune system?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Roughly 70% of your immune system resides in your gut. By supporting your gut microbiome through nutrition, you build a stronger foundation for immune function."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I just take supplements instead of changing my diet?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Supplements are helpful but they cannot replace a nutrient-dense diet. We guide you to focus on high-quality whole foods first, using supplements only when necessary to fill specific gaps."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is immune support nutrition beneficial all year round?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. A proactive, preventative approach to micronutrient density builds resilience for not just seasonal shifts but daily stress and athletic recovery."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main>
            <Header />
            <div className="bg-white text-gray-900 font-sans">
                {/* 1. JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* 2. Breadcrumbs */}
                <div className="bg-blue-950 pt-4 px-4">
                    <nav className="max-w-7xl mx-auto text-xs text-gray-400 flex gap-2">
                        <Link href="/" className="hover:text-white">Home</Link> /
                        <Link href="/services/" className="hover:text-white">Services</Link> /
                        <span className="text-white">Immune Support Nutrition</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Winner • Holistic Care</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Immune Support Nutrition</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Build systemic resilience from the inside out. We guide you through preventative, science-based nutritional strategies focusing on micronutrient density and gut microbiome health.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                    <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                        Book Assessment
                                    </a>
                                </div>
                            </div>

                            <div className="relative mt-8 lg:mt-0">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/10 backdrop-blur-sm bg-white/5 aspect-[4/3] lg:aspect-square transform hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="/images/generated/immune-support-placeholder.jpg"
                                        alt="Immune Support Nutrition Guidance"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Preventative Health</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Symptom Checklist */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Is This You?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><ShieldAlert className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Frequent Catcher"</h3>
                                <p className="text-slate-700">You seem to catch every cold or bug that circulates through your workplace, home, or community.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Timer className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Slow Recoverer"</h3>
                                <p className="text-slate-700">When you do fall ill or train hard, your body takes significantly longer to bounce back to its normal baseline.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><CloudRain className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Seasonal Sufferer"</h3>
                                <p className="text-slate-700">Changing seasons consistently trigger a cascade of systemic issues, lowering your physical and mental energy.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Cloud className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Brain Fog"</h3>
                                <p className="text-slate-700">Your immune response leaves you feeling mentally clouded, making it hard to focus on essential daily tasks.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Micronutrient Density & Microbiome Health</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Roughly 70% of your immune system lives in your gut microbiome. When this environment lacks dietary micronutrient density (like steady sources of Vitamin D, Zinc, and Vitamin C), your body's natural defenses become compromised. Optimizing your body's nutritional environment actively manages and supports cellular resilience.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Assessment Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We take a clinical view of your daily dietary intake to pinpoint areas lacking in vital defenses.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Micronutrient Density Evaluation</h3>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Gut Microbiome Health Assessment</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We don't isolate your immune system from the rest of your physical wellness. By supporting your immune function through a synergy of nervous system regulation (via manual therapy) and nutrient-dense dietary adjustments, we manage stress physically and chemically simultaneously.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Prioritize Sleep Hygiene:</strong> Deep, restorative sleep is when the body produces the majority of its infection-fighting cytokines. Focus on consistent sleep routines as a primary pillar of immune health before seeking complex dietary regimes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Services</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/gut-health-optimization/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Gut Health Optimization</h3>
                            </Link>
                            <Link href="/services/supplements-advice/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Supplements Advice</h3>
                            </Link>
                            <Link href="/services/dietary-consultation/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Dietary Consultation</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 10. Practitioner Bio Block */}
                <section className="py-16 px-4 bg-white border-t border-gray-100">
                    <div className="max-w-3xl mx-auto text-center bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-blue-950 mb-4">Your Practitioner</h2>
                        <p className="text-slate-700 mb-6">
                            Clinical care provided by Daryl Stubbs, RMT, CAT(C) & RHN. Connecting your nutritional habits to robust, systemic health.
                        </p>
                        <Link href="/our-team/daryl-stubbs/" className="text-blue-600 font-bold hover:underline">
                            Read Full Bio →
                        </Link>
                    </div>
                </section>

                {/* 11. Reviews Placeholder */}
                <section className="py-16 px-4 bg-blue-50/50 text-center border-t border-blue-100">
                    <h2 className="text-2xl font-bold mb-8 text-blue-950">Award-Winning Care in Colwood</h2>
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-dashed border-blue-200">
                        {/* <!-- INSERT GOOGLE REVIEW WIDGET HERE --> */}
                        <GoogleReviewsColumns />
                    </div>
                </section>

                {/* 12. FAQ */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center text-blue-950">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">How does gut health relate to my immune system?</h3>
                                <p className="text-slate-600 text-sm">Roughly 70% of your immune system resides in your gut. By supporting your gut microbiome through nutrition, you build a stronger foundation for immune function.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Can I just take supplements instead of changing my diet?</h3>
                                <p className="text-slate-600 text-sm">Supplements are helpful but they cannot replace a nutrient-dense diet. We guide you to focus on high-quality whole foods first, using supplements only when necessary to fill specific gaps.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Is immune support nutrition beneficial all year round?</h3>
                                <p className="text-slate-600 text-sm">Yes. A proactive, preventative approach to micronutrient density builds resilience for not just seasonal shifts but daily stress and athletic recovery.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
