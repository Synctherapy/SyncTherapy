import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Pill, AlertCircle, ShieldCheck, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Professional Nutritional Supplements Advice in Colwood | Sync Massage Therapy',
    description: 'Cautious, evidence-based, and integrative nutritional supplements advice in Colwood. We identify specific, measurable micronutrient gaps safely.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/supplements-advice/',
    },
};

export default function SupplementsAdvicePage() {
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
                        "name": "Do I have to buy supplements directly from your clinic?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. While we may provide recommendations for high-quality, professional-grade brands, you are never obligated to purchase products through us. Our priority is unbiased, safe advice."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you review the supplements I am currently taking?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. Bringing in your current supplement regimen is highly encouraged. We will review them for redundancies, potential interactions, and overall necessity based on your current diet."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is more always better when taking vitamins?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Many vitamins (especially fat-soluble ones like A, D, E, and K) can accumulate in the body and cause toxicity. Supplementation should always be targeted and measured."
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
                        <Link href="/" className="hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Home</Link> /
                        <Link href="/services/" className="hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Services</Link> /
                        <span className="text-white">Supplements Advice</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Winner • Holistic Nutrition</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Nutritional Supplements Advice</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Stop wasting money on random vitamins. We provide cautious, evidence-based recommendations by cross-referencing your diet with specific health goals to identify true micronutrient gaps.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                    <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                        Book Supplement Review
                                    </a>
                                </div>
                            </div>

                            <div className="relative mt-8 lg:mt-0">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/10 backdrop-blur-sm bg-white/5 aspect-[4/3] lg:aspect-square transform hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="/images/generated/supplements-placeholder.jpg"
                                        alt="Professional Supplements Advice"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Evidence-Based</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><AlertCircle className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Cabinet of Confusion"</h3>
                                <p className="text-slate-700">You have a cabinet full of half-used supplement bottles, but you aren't completely sure what half of them are actually physically doing for you.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><TrendingUp className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Trend Follower"</h3>
                                <p className="text-slate-700">You frequently buy new vitamins based on social media trends or generic articles, without knowing if your body actually requires them.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><ShieldCheck className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Interaction Anxiety"</h3>
                                <p className="text-slate-700">You want to take natural supplements for specific wellness goals but are worried about how they might interact with each other or existing conditions.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Pill className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Expensive Urine"</h3>
                                <p className="text-slate-700">You suspect you are taking too much of a particular isolated vitamin, resulting in poor absorption and wasted money.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Bioavailability & Micronutrient Gaps</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Supplements are meant to do exactly that: supplement a baseline diet. The body prefers identifying and absorbing vitamins and minerals in their whole-food matrix form. When taking isolated, synthetic vitamins, bioavailability (how well your body can actually absorb and use it) drops significantly. We focus on identifying the physiological gaps where targeted, high-quality supplementation is genuinely required to support your systems.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Assessment Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We use evidence-based methods to review and recommend nutritional products safely.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Dietary Intake Cross-Referencing</h3>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Supplement Redundancy Check</h3>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Quality & Formulation Audit</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Because our background is heavily integrated with manual and athletic therapy, we view supplements through a functional, whole-body lens. We don't just ask "What is this pill supposed to do?" We ask, "Is your digestive system currently capable of absorbing this?" and "Will this support tissue recovery or neurological balance?" creating a much safer, comprehensive approach.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Always Look for Third-Party Testing:</strong> The supplement industry is notoriously under-regulated. Always check if a supplement bottle has a third-party testing seal (like NSF, USP, or Informed-Choice) to ensure you are actually getting the ingredients listed on the label without harmful fillers or contaminants.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Services</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/immune-support-nutrition/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Immune Support Nutrition</h3>
                            </Link>
                            <Link href="/services/gut-health-optimization/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Gut Health Optimization</h3>
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
                            Clinical care provided by Daryl Stubbs, RMT, CAT(C) & RHN. Bringing a cautious, cautious and unbiased approach to evidence-based nutrition.
                        </p>
                        <Link href="/our-team/daryl-stubbs/" className="text-blue-600 font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Do I have to buy supplements directly from your clinic?</h3>
                                <p className="text-slate-600 text-sm">No. While we may provide recommendations for high-quality, professional-grade brands, you are never obligated to purchase products through us. Our priority is unbiased, safe advice.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Can you review the supplements I am currently taking?</h3>
                                <p className="text-slate-600 text-sm">Absolutely. Bringing in your current supplement regimen is highly encouraged. We will review them for redundancies, potential interactions, and overall necessity based on your current diet.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Is more always better when taking vitamins?</h3>
                                <p className="text-slate-600 text-sm">No. Many vitamins (especially fat-soluble ones like A, D, E, and K) can accumulate in the body and cause toxicity. Supplementation should always be targeted and measured.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
