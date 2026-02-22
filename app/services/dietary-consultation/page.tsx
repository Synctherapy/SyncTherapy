import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { BookOpen, Flame, Clock, TrendingDown } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Holistic Dietary Consultation in Colwood | Sync Massage Therapy',
    description: 'Educational, foundational dietary consultation in Colwood. We review macronutrient balance and systemic inflammation to build sustainable habits.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/dietary-consultation/',
    },
};

export default function DietaryConsultationPage() {
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
                        "name": "What is the focus of a dietary consultation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The focus is to provide holistic, foundational guidance. We look at macronutrient balance and lifestyle habits to manage systemic inflammation and support your daily energy."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will I get a meal plan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We provide personalized templates and flexible guidelines rather than rigid meal plans. Our goal is to help you build adaptable habits you can maintain long term."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this separate from sports therapy?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While it is a designated service, our holistic approach means we recognize how your nutritional habits directly impact physical recovery and athletic performance."
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
                        <span className="text-white">Dietary Consultation</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Award-Winning Clinic</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Holistic Dietary Consultation</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Confused by contradictory nutrition advice? We guide you through foundational, educational dietary strategies that address systemic inflammation and support whole-body health.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                    <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                        Book Consultation
                                    </a>
                                </div>
                            </div>

                            <div className="relative mt-8 lg:mt-0">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/10 backdrop-blur-sm bg-white/5 aspect-[4/3] lg:aspect-square transform hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="/images/generated/dietary-consultation-placeholder.jpg"
                                        alt="Holistic Dietary Consultation"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Nutrition Foundation</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><BookOpen className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Information Overload"</h3>
                                <p className="text-slate-700">You read so much contradictory nutrition advice online that you feel paralyzed about what to eat.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Clock className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Sluggish Afternoon"</h3>
                                <p className="text-slate-700">Every day at 2 PM, you hit a massive wall and struggle to function without coffee or a sugary snack.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Flame className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Inflammation Ache"</h3>
                                <p className="text-slate-700">Your joints and tissues consistently feel puffy, stiff, or slow to recover after basic activities.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><TrendingDown className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The "Unexplained Fatigue"</h3>
                                <p className="text-slate-700">Even when you get enough hours of sleep, you persistently lack the foundational energy needed for your day.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Macronutrient Balance & Inflammation</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            True energy comes from balanced cellular fuel. When your dietary intake favors refined carbohydrates and inflammatory fats over complete proteins and micronutrients, your body operates in a state of low-grade systemic inflammation. Balancing your macronutrients manages this response, steadying your natural energy levels.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Assessment Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We use explicit nutritional screening methods to establish where you stand and where adjustments are needed.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Lifestyle Audit</h3>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Macronutrient Review</h3>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Systemic Inflammation Review</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We look past generic templates to build a nutritional foundation that directly supports your physical recovery. Understanding that healing tissues require adequate building blocks, we bridge the gap between proper dietary habits and the manual therapy goals we establish together.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Add Before You Subtract:</strong> Focus on adding one extra serving of fibrous vegetables to your daily intake before trying to restrict or remove other foods. Building a nutrient-rich foundation is the first step toward lasting habits.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Services</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/nutrition-counseling/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Nutrition Counseling</h3>
                            </Link>
                            <Link href="/services/supplements-advice/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Supplements Advice</h3>
                            </Link>
                            <Link href="/services/immune-support-nutrition/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Immune Support Nutrition</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 10. Practitioner Bio Block */}
                <section className="py-16 px-4 bg-white border-t border-gray-100">
                    <div className="max-w-3xl mx-auto text-center bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-blue-950 mb-4">Your Practitioner</h2>
                        <p className="text-slate-700 mb-6">
                            Clinical care provided by Daryl Stubbs, RMT, CAT(C) & RHN. Delivering a combined approach for holistic nutrition and physical recovery.
                        </p>
                        <Link href="/our-team/daryl-stubbs/" className="text-blue-600 font-bold hover:underline">
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">What is the focus of a dietary consultation?</h3>
                                <p className="text-slate-600 text-sm">The focus is to provide holistic, foundational guidance. We look at macronutrient balance and lifestyle habits to manage systemic inflammation and support your daily energy.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Will I get a meal plan?</h3>
                                <p className="text-slate-600 text-sm">We provide personalized templates and flexible guidelines rather than rigid meal plans. Our goal is to help you build adaptable habits you can maintain long term.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Is this separate from sports therapy?</h3>
                                <p className="text-slate-600 text-sm">While it is a designated service, our holistic approach means we recognize how your nutritional habits directly impact physical recovery and athletic performance.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
