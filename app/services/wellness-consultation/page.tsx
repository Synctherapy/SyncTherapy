import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Battery, Activity, MonitorX, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Holistic Wellness Consultation in Colwood | Sync Massage Therapy',
    description: 'Encouraging, comprehensive Holistic Wellness Consultation in Colwood. Optimize your baseline health proactively with personalized lifestyle and habit tracking.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/wellness-consultation/',
    },
};

export default function WellnessConsultationPage() {
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
                        "name": "What exactly happens during a wellness consultation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We conduct a comprehensive audit of your current health history, daily habits, sleep hygiene, and nutritional intake to establish a clear baseline and identify systemic areas for optimization."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to be in physical pain to benefit from this?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Not at all. A wellness consultation is highly proactive. It is designed to optimize your baseline health, improve daily energy levels, and prevent future systemic or musculoskeletal issues before they arise."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this a one-time session or ongoing support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It can be either. Many clients start with an initial comprehensive consultation to establish their baseline, and then continue with follow-up sessions to track lifestyle habits and adjust their personalized plans."
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
                        <span className="text-white">Wellness Consultation</span>
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
                                    <span className="text-blue-400">Holistic Wellness Consultation</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Encouraging, comprehensive, and wide-ranging support. We review your holistic health baseline to systematically optimize your energy and systemic healing.
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
                                        src="/images/generated/health_consulting_wellness_hero.jpg"
                                        alt="Holistic Wellness Consultation"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Proactive Health</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Battery className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> Restful Exhaustion</h3>
                                <p className="text-slate-700">You are feeling generally, chronically fatigued throughout the daytime despite consistently sleeping for 8 hours every night.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Activity className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> Low-Grade Discomfort</h3>
                                <p className="text-slate-700">You are dealing with frustrating, chronic, low-grade aches and systemic body pains that never seem to fully resolve or have an obvious cause.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><MonitorX className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> Information Overload</h3>
                                <p className="text-slate-700">You feel entirely overwhelmed by the massive amount of conflicting, contradictory health and nutrition information available online.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><TrendingUp className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> Proactive Optimization</h3>
                                <p className="text-slate-700">You aren't necessarily injured, but you are actively looking to optimize your baseline health and physical longevity proactively.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Systemic Physiology & Baseline Health</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            True holistic wellness recognizes that the body's systems do not operate in isolation. Chronic fatigue, lingering inflammation, and slow healing times are frequently the result of an accumulating physiological burden—a combination of inadequate restorative sleep, systemic nutritional deficits, and unchecked lifestyle stress pathways. Optimizing wellness means identifying and reducing these hidden physiological burdens simultaneously, allowing your body to naturally redirect energy back toward cellular maintenance and robust, unhindered healing.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Assessment Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We look deeply at the variables influencing your daily physiological state.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Comprehensive Health Audit</h3>
                                <p className="text-sm text-slate-600">A thorough review of your health history to identify long-standing systemic patterns or missing foundational elements.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Lifestyle Habit Tracking</h3>
                                <p className="text-sm text-slate-600">Analyzing daily inputs, from hydration protocols to stress-management responses, to build a realistic baseline.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Sleep Hygiene Review</h3>
                                <p className="text-sm text-slate-600">Evaluating your circadian rhythms and restorative sleep quality, the absolute foundation of hormonal and cellular recovery.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            As a triple-credentialed practitioner (RMT, CAT(C), RHN), the true advantage is integration. We don't just instruct you on what to eat. Because we deeply understand your physical mechanics from the treatment table, we can seamlessly combine Holistic Nutrition strategies with your manual therapy and active rehab. Systemically optimizing your internal environment ensures that the physical tissue we are working to rehabilitate externally has the exact nutritional building blocks required to actually heal faster.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Start A "Habit Stacking" Routine:</strong> Do not rely purely on sheer willpower to change a routine. Instead, "stack" a new, positive habit directly onto an existing one. For example, purposefully drink a full glass of water immediately after brushing your teeth in the morning to easily establish a new baseline hydration habit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Options</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/personalized-health-plan/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Personalized Health Plan</h3>
                            </Link>
                            <Link href="/services/nutrition-counseling/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Nutrition Counseling</h3>
                            </Link>
                            <Link href="/services/massage-therapy/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Massage Therapy</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 10. Practitioner Bio Block */}
                <section className="py-16 px-4 bg-white border-t border-gray-100">
                    <div className="max-w-3xl mx-auto text-center bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-blue-950 mb-4">Your Practitioner</h2>
                        <p className="text-slate-700 mb-6">
                            Clinical care provided by Daryl Stubbs, RMT, CAT(C) & RHN. Dedicated to integrating systemic nutritional support with exceptional structural rehabilitation.
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">What exactly happens during a wellness consultation?</h3>
                                <p className="text-slate-600 text-sm">We conduct a comprehensive audit of your current health history, daily habits, sleep hygiene, and nutritional intake to establish a clear baseline and identify systemic areas for optimization.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Do I need to be in physical pain to benefit from this?</h3>
                                <p className="text-slate-600 text-sm">Not at all. A wellness consultation is highly proactive. It is designed to optimize your baseline health, improve daily energy levels, and prevent future systemic or musculoskeletal issues before they arise.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Is this a one-time session or ongoing support?</h3>
                                <p className="text-slate-600 text-sm">It can be either. Many clients start with an initial comprehensive consultation to establish their baseline, and then continue with follow-up sessions to track lifestyle habits and adjust their personalized plans.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
