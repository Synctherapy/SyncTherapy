"use client";

import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function MuscleTension() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalClinic",
                "@id": "https://synctherapy.ca/#organization",
                "name": "Sync Massage Therapy",
                "url": "https://synctherapy.ca",
                "logo": "https://synctherapy.ca/images/logo.png",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "328 Wale Rd #120",
                    "addressLocality": "Colwood",
                    "addressRegion": "BC",
                    "postalCode": "V9B 0J8",
                    "addressCountry": "CA"
                },
                "telephone": "+1-250-812-8698",
                "priceRange": "$$",
                "knowsAbout": ["Muscle Tension", "Deep Tissue Massage", "Myofascial Release", "Athletic Therapy"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/conditions/muscle-tension-relief/#webpage",
                "url": "https://synctherapy.ca/conditions/muscle-tension-relief/",
                "name": "Muscle Tension Relief & Deep Tissue Massage in Colwood",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "MedicalCondition",
                    "name": "Muscle Tension",
                    "alternateName": "Hypertonicity",
                    "possibleTreatment": {
                        "@type": "TherapeuticProcedure",
                        "name": "Deep Tissue Massage"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Will a deep tissue massage hurt?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It should feel like \"good pain.\" We communicate with you to find the exact pressure that releases the muscle without causing your body to tense up and fight the treatment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why do my knots keep coming back?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Knots return if the underlying cause (posture, stress, overuse) isn't addressed. We help identify these triggers so the relief lasts longer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How often should I come in?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For chronic tension, we often recommend a few sessions close together to 'reset' the muscle tone, followed by monthly maintenance."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white text-gray-900 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 0. BREADCRUMBS */}
            <div className="bg-blue-950 pt-4 px-4">
                <nav className="max-w-7xl mx-auto text-xs text-gray-400 flex gap-2">
                    <Link href="/" className="hover:text-white">Home</Link> /
                    <Link href="/conditions/" className="hover:text-white">Conditions</Link> /
                    <span className="text-white">Muscle Tension</span>
                </nav>
            </div>

            {/* 1. HERO SECTION */}
            <section className="bg-blue-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column */}
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                                <span className="text-yellow-400 text-sm">★</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-blue-100">4x Winner Best Massage Clinic & 3x Best Rehab Clinic</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                Muscle Tension Relief <br className="hidden md:block" />
                                <span className="text-blue-400">in Colwood & Langford</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Carrying the weight of the world on your shoulders? From West Shore commuters to heavy lifters, we provide direct, effective relief to flush out the tension and reset your muscles.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                    Book Assessment
                                </a>
                                <div className="text-sm text-gray-400 flex flex-col items-start pl-4 border-l border-gray-700">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-green-400">✓</span> <span>Direct Billing (Blue Cross, Canada Life)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>120+ 5-Star Reviews</span>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Factors Row */}
                            <div className="flex flex-wrap gap-6 text-sm text-blue-200/80 font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">🏆</span> Platinum Readers' Choice
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">🏥</span> Registered Therapists
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">⚡</span> Same-Week Appointments
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative mt-8 lg:mt-0">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/10 backdrop-blur-sm bg-white/5 aspect-[4/3] lg:aspect-square transform hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src="/images/generated/muscle-tension.png"
                                    alt="Muscle Tension Relief in Colwood"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent pointer-events-none"></div>
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-3xl opacity-60 animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SYMPTOM CHECKLIST */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Is This You?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🪢</span> The Knots</h3>
                            <p className="text-slate-700">You can feel hard, painful lumps in your upper back and shoulders that never seem to go away.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🤕</span> Tension Headaches</h3>
                            <p className="text-slate-700">The tightness in your neck travels up into the base of your skull, causing frequent headaches.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🫁</span> Chest tightness</h3>
                            <p className="text-slate-700">You feel like you can't take a full, deep breath because your chest and rib muscles are so tight.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🔥</span> Burning Ache</h3>
                            <p className="text-slate-700">A constant burning sensation between your shoulder blades after a long day at work.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 ANATOMY SECTION */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">The "Ischemia" Cycle</h2>
                        <p className="text-slate-600 text-lg">Why the pain keeps coming back.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Restricted Blood Flow</h3>
                        <p className="text-slate-600 leading-relaxed text-lg text-center">
                            Chronic muscle tension constricts the tiny blood vessels within the muscle. This restricts blood flow (Ischemia), leading to a buildup of metabolic waste like lactic acid. This acidic environment irritates the nerves, causing that burning ache. To fix it, we have to physically break the spasm cycle to flush the tissue with fresh, oxygenated blood.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. TREATMENT OPTIONS (Toolkit) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Our Relief Toolkit</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">We use specific pressure to melt the tension.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services/deep-tissue-massage/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">💪</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Deep Tissue</h3>
                            <p className="text-sm text-slate-600">Targeted, firm pressure to release adhered muscle fibers and knots.</p>
                        </Link>
                        <Link href="/services/sports-injury-rehab/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🔎</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Root Cause Analysis</h3>
                            <p className="text-sm text-slate-600">Identifying WHY the muscle is tense (e.g., weak stabilizers) so it doesn't just come back.</p>
                        </Link>
                        <Link href="/services/myofascial-release/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🕸️</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Myofascial Release</h3>
                            <p className="text-sm text-slate-600">Releasing the tight fascial web that might be restricting the muscle from the outside.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. PATIENT ROADMAP */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your Relief Roadmap</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Discovery</h3>
                            <p className="text-slate-600 text-sm">We find the "trigger points"—the specific spots referring pain elsewhere.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Flush</h3>
                            <p className="text-slate-600 text-sm">Deep, rhythmic strokes to increase circulation and flush out metabolic waste.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Release</h3>
                            <p className="text-slate-600 text-sm">You leave feeling lighter, taller, and able to take a full, deep breath.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. REVIEWS WIDGET */}
            <section className="py-16 px-4 bg-blue-50/50 text-center">
                <h2 className="text-2xl font-bold mb-8 text-blue-950">Trusted by 800+ West Shore Residents</h2>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-dashed border-blue-200">
                    <GoogleReviewsColumns />
                </div>
            </section>

            {/* 6. FAQ */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center text-blue-950">Common Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Will a deep tissue massage hurt?</h3>
                            <p className="text-slate-600 text-sm">It should feel like "good pain." We communicate with you to find the exact pressure that releases the muscle without causing your body to tense up and fight the treatment.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Why am I so sore the next day?</h3>
                            <p className="text-slate-600 text-sm">This is normal! It's called Delayed Onset Muscle Soreness (DOMS). It's a sign your body is repairing the tissue we worked on. Drink plenty of water to help flush the system.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Can I workout after my massage?</h3>
                            <p className="text-slate-600 text-sm">We usually recommend taking it easy for the rest of the day to let your body integrate the changes. A light walk is great, but skip the heavy lifting until tomorrow.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Drop the Weight of the World</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Assessment Now
                </a>
            </section>
        </div>
    );
}
