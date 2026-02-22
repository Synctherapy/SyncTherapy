import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { ListChecks, Search, HelpCircle, Activity } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Low FODMAP Diet Guidance in Colwood | Sync Massage Therapy',
    description: 'Structured, relieving Low FODMAP guidance in Colwood. We guide you through elimination and reintroduction protocols to isolate fermentable carbohydrate distress.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/low-fodmap-diet/',
    },
};

export default function LowFodmapDietPage() {
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
                        "name": "Is the Low FODMAP diet a permanent diet?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. The Low FODMAP diet is a temporary, 3-phase diagnostic tool used to identify specific intolerances. Long-term restriction is discouraged as it can negatively impact microbiome diversity."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will I have to cook all my meals from scratch?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While cooking at home gives you the most control over hidden ingredients (like garlic and onion powders), we provide practical strategies for navigating social events and dining out during the elimination phase."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does the elimination phase normally last?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The initial strict elimination phase typically lasts between 2 to 6 weeks. Once symptoms are adequately managed, we immediately begin the structured reintroduction phase."
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
                        <span className="text-white">Low FODMAP Diet</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Award-Winning Nutritional Support</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Low FODMAP Diet Guidance</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Stop restrictive guessing. We guide you through structured, educational protocols to systematically identify the exact fermentable carbohydrates causing your digestive distress, paving the way for lasting relief.
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
                                        src="/images/generated/low-fodmap-placeholder.jpg"
                                        alt="Low FODMAP Diet Consultation"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Structured Relief</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><HelpCircle className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Healthy Food Reaction"</h3>
                                <p className="text-slate-700">You eat foods widely considered "healthy"—like apples, cauliflower, or certain yogurts—yet experience severe gastrointestinal distress hours later.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Activity className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Excessive Distension"</h3>
                                <p className="text-slate-700">By the evening, your abdomen visibly swells, leaving you feeling distended and highly uncomfortable despite a modest meal size.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><ListChecks className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Confusing Triggers"</h3>
                                <p className="text-slate-700">You have eliminated gluten and dairy but are still experiencing unpredictable symptoms that don't follow an obvious pattern.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Search className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Restaurant Roulette"</h3>
                                <p className="text-slate-700">Eating out or consuming packaged meals frequently results in immediate urgency, making eating a stressful experience.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Fermentable Carbohydrates</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            FODMAPs are a specific group of short-chain carbohydrates that are naturally poorly absorbed in the small intestine. When they enter the large intestine, bacteria ferment them, producing gas and drawing in excess water. This rapid fermentation is responsible for the intense distension, discomfort, and irregular transit times experienced by sensitive individuals.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Structured 3-Phase Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            This is not a permanent diet. We use clinical, highly structured protocols to isolate specific triggers.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Phase 1: Elimination</h3>
                                <p className="text-sm text-slate-600">Temporarily reducing high-FODMAP foods to establish a comfortable baseline.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Phase 2: Reintroduction</h3>
                                <p className="text-sm text-slate-600">Systematically challenging specific groups to identify exact tolerance thresholds.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Phase 3: Personalization</h3>
                                <p className="text-sm text-slate-600">Building a long-term, diverse dietary plan that avoids only your specific triggers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            The Low FODMAP diet is notoriously complex to navigate alone. Unlike generic PDF handouts, we support you through the emotional and logistical hurdles of the protocol. By combining structured nutritional education with manual therapies that promote parasympathetic (rest and digest) nervous system dominance, we actively manage the overwhelming stress of dietary change.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Beware of Hidden Ingredients:</strong> Be incredibly careful with hidden FODMAPs—ingredients like garlic and onion powders are exceptionally high in fermentable carbohydrates and are frequently hidden in pre-packaged spice blends, broths, and commercial sauces under the label "natural flavors."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Services</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/ibs-diet-counseling/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">IBS Diet Counseling</h3>
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
                            Clinical care provided by Daryl Stubbs, RMT, CAT(C) & RHN. Bringing a disciplined, structured approach to comprehensive digestive screening.
                        </p>
                        <Link href="/our-team/daryl-stubbs/" className="text-blue-600 font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
                            Read Full Bio →
                        </Link>
                    </div>
                </section>

                {/* 11. Reviews Placeholder */}
                <section className="py-16 px-4 bg-blue-50/50 text-center border-t border-blue-100">
                    <h2 className="text-2xl font-bold mb-8 text-blue-950">Platinum Winner Care in Colwood</h2>
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Is the Low FODMAP diet a permanent diet?</h3>
                                <p className="text-slate-600 text-sm">No. The Low FODMAP diet is a temporary, 3-phase diagnostic tool used to identify specific intolerances. Long-term restriction is discouraged as it can negatively impact microbiome diversity.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Will I have to cook all my meals from scratch?</h3>
                                <p className="text-slate-600 text-sm">While cooking at home gives you the most control over hidden ingredients (like garlic and onion powders), we provide practical strategies for navigating social events and dining out during the elimination phase.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">How long does the elimination phase normally last?</h3>
                                <p className="text-slate-600 text-sm">The initial strict elimination phase typically lasts between 2 to 6 weeks. Once symptoms are adequately managed, we immediately begin the structured reintroduction phase.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
