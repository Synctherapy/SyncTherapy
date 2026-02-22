import { Metadata } from 'next';
import Link from 'next/link';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { AlertTriangle, Activity, Coffee, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Food Sensitivity Counseling in Colwood | Sync Massage Therapy',
    description: 'Investigative, relieving Food Sensitivity Counseling in Colwood. We use guided elimination diets to systematically isolate triggers without unnecessary restriction.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/food-sensitivity-counseling/',
    },
};

export default function FoodSensitivityCounselingPage() {
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
                        "name": "Are food sensitivities the same thing as food allergies?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. An allergy is an immediate, potentially life-threatening immune system response (IgE). A sensitivity is typically a delayed immune or digestive reaction (IgG) that causes lingering discomfort like bloating, fatigue, or joint pain hours or days later."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I have to stop eating these foods forever?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Often, no. The primary goal is to isolate the trigger, remove it temporarily to allow the gut lining to structurally heal, and then systematically reintroduce it later to determine your personal threshold of tolerance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does an elimination diet mean I will be starving?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely not. A properly guided elimination protocol simply shifts your caloric intake away from highly reactive foods directly toward nourishing, hypoallergenic alternatives to intentionally calm systemic inflammation."
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
                        <span className="text-white">Food Sensitivity Counseling</span>
                    </nav>
                </div>

                {/* 3. Hero */}
                <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                    <span className="text-yellow-400 text-sm">★</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Platinum Winner • Dietary Support</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    <span className="text-blue-400">Food Sensitivity Counseling</span> <br className="hidden md:block" />
                                    in Colwood
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                    Investigative, relieving, and highly structured support. We use guided elimination and reintroduction to isolate hidden triggers without enforcing unnecessary dietary restrictions.
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
                                        src="/images/generated/massage-visceral-gentle.png"
                                        alt="Food Sensitivity Relief Clinical Consultation"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-blue-500/20 flex items-center justify-center -z-10">
                                        <span className="text-white/50 text-xl font-bold">Digestive Relief</span>
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
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><HelpCircle className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The Guessing Game</h3>
                                <p className="text-slate-700">You are experiencing immense frustration desperately trying to figure out exactly which hidden ingredient in your diet is abruptly causing the issue.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><AlertTriangle className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> Unexplained Swelling</h3>
                                <p className="text-slate-700">You regularly struggle with deeply uncomfortable, unexplained bloating or profound brain fog intensely setting in shortly after regular meals.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Activity className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> The Random Flare-Up</h3>
                                <p className="text-slate-700">You suffer from chronic joint stiffness and aching that seems to flare up completely randomly, completely independent of your physical activity.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><Coffee className="text-blue-600 w-6 h-6 mr-2 flex-shrink-0" /> Inconsistent Digestion</h3>
                                <p className="text-slate-700">Your daily digestive system is wildly inconsistent, rapidly oscillating between discomfort, urgency, and feeling perfectly fine.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. The Science / Root Cause */}
                <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Systemic Inflammation & Immune Responses</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Food sensitivities occur when microscopic particles of incompletely digested proteins physically pass through an irritated intestinal lining into the bloodstream. Your body's immune system mistakenly identifies these common food particles as invading threats and mounts a low-grade, highly inflammatory defense response against them. This systemic internal swelling is exactly why a specific trigger food causes not just digestive bloating, but seemingly unrelated symptoms like joint stiffness, skin irritation, and profound cognitive fatigue.
                        </p>
                    </div>
                </section>

                {/* 6. The Assessment Approach */}
                <section className="py-16 px-4 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-blue-950">Our Assessment Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We use evidence-based protocols to carefully isolate the specific biochemical triggers hiding in your diet.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Guided Elimination Diets</h3>
                                <p className="text-sm text-slate-600">A tightly controlled, temporary removal of the most statistically common inflammatory triggers to immediately calm the hyperactive immune response down.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Systematic Reintroduction Protocols</h3>
                                <p className="text-sm text-slate-600">The meticulous, single-variable re-addition of foods over specific timelines to irrefutably pinpoint unique reactions without guessing.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. The Sync Difference */}
                <section className="py-20 px-4 bg-blue-950 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">The Sync Difference</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            As a triple-credentialed practitioner (RMT, CAT(C), RHN), we hold a distinct advantage when treating stubborn inflammation. Often, patients seek manual therapy for chronic, unyielding joint pain that simply refuses to respond to stretching or massage. By integrating Holistic Nutrition, we can definitively identify if that resilient joint pain is actually being heavily fueled by an underlying internal food sensitivity, allowing us to manage the true root cause systemically rather than just rubbing the symptom locally.
                        </p>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 px-4 bg-blue-600 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">High-Value Tip You Can Try Today</h2>
                        <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                            <p className="text-xl">
                                <strong>Keep a Timeline-Based Food Diary:</strong> Do not just list what you ate. The critical clue is the timeline. Write down exactly *how you feel* (energy crashes, severe bloating, joint pain flare-ups) strictly 2 to 4 hours *afterward*. Sensitivities are heavily delayed biological reactions, so this specific window helps you easily spot the hidden inflammatory patterns.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 text-blue-950">Explore Related Treatments</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/conditions/irritable-bowel-syndrome/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Irritable Bowel Syndrome</h3>
                            </Link>
                            <Link href="/services/low-fodmap-diet/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Low FODMAP Diet</h3>
                            </Link>
                            <Link href="/services/gut-health-optimization/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
                                <h3 className="font-bold text-xl mb-2 text-blue-900">Gut Health Optimization</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 10. Practitioner Bio Block */}
                <section className="py-16 px-4 bg-white border-t border-gray-100">
                    <div className="max-w-3xl mx-auto text-center bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-blue-950 mb-4">Your Practitioner</h2>
                        <p className="text-slate-700 mb-6">
                            Clinical care provided by Daryl Stubbs, RMT, CAT(C) & RHN. Specializing in identifying and systemically managing deep inflammatory triggers.
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
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Are food sensitivities the same thing as food allergies?</h3>
                                <p className="text-slate-600 text-sm">No. An allergy is an immediate, potentially life-threatening immune system response (IgE). A sensitivity is typically a delayed immune or digestive reaction (IgG) that causes lingering discomfort like bloating, fatigue, or joint pain hours or days later.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Do I have to stop eating these foods forever?</h3>
                                <p className="text-slate-600 text-sm">Often, no. The primary goal is to isolate the trigger, remove it temporarily to allow the gut lining to structurally heal, and then systematically reintroduce it later to determine your personal threshold of tolerance.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">Does an elimination diet mean I will be starving?</h3>
                                <p className="text-slate-600 text-sm">Absolutely not. A properly guided elimination protocol simply shifts your caloric intake away from highly reactive foods directly toward nourishing, hypoallergenic alternatives to intentionally calm systemic inflammation.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
