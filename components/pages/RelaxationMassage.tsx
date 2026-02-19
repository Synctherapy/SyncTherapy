"use client";

import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function RelaxationMassage() {
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
                "knowsAbout": ["Relaxation Massage", "Swedish Massage", "Stress Relief", "Burnout Recovery"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/services/relaxation-massage/#webpage",
                "url": "https://synctherapy.ca/services/relaxation-massage/",
                "name": "Relaxation & Swedish Massage Colwood",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "TherapeuticProcedure",
                    "name": "Relaxation Massage",
                    "description": "A gentle, therapeutic massage designed to reduce stress, lower cortisol levels, and promote deep relaxation using Swedish techniques."
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can I still get a relaxation massage if I have an injury?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. Relaxation massage is incredibly effective at calming the nervous system, which actually helps the body heal injuries faster by reducing systemic stress."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the difference between Swedish and Deep Tissue?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Swedish focuses on calming the nervous system and improving superficial circulation using lighter, sweeping strokes. Deep Tissue targets specific muscular knots and adhesions with firmer, sustained pressure."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will this help me sleep better?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes! By down-regulating your nervous system and lowering cortisol levels, many patients report significantly deeper, more restorative sleep after a session."
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
                    <Link href="/services/" className="hover:text-white">Services</Link> /
                    <span className="text-white">Relaxation Massage</span>
                </nav>
            </div>

            {/* 1. HERO SECTION: High Urgency & Trust */}
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
                                Relaxation & Swedish Massage <br className="hidden md:block" />
                                <span className="text-blue-400">in Colwood</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Serving Colwood, Langford & the West Shore. Restorative therapy for stressed professionals, tired parents, and anyone needing a nervous system reset.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                    Book Treatment
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
                                    src="/images/generated/relaxation-massage.png"
                                    alt="Relaxation Massage Therapy"
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

            {/* 2. IS THIS THERAPY FOR YOU? (The Hook) */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Is Relaxation Massage For You?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🤯</span> Mental Burnout</h3>
                            <p className="text-slate-700">High-stress jobs or life situations leading to physical exhaustion where you just can't "turn off."</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">😴</span> Sleep Deprivation</h3>
                            <p className="text-slate-700">Waking up tired, trouble falling asleep, or unable to get deep, restorative rest.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">😩</span> General Aches</h3>
                            <p className="text-slate-700">Soreness from everyday life—carrying kids, yard work, or just the weight of the day.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">⚡</span> Nervous System Overdrive</h3>
                            <p className="text-slate-700">Feeling constantly "wired and tired," anxious, or on edge.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE SCIENCE / HOW IT WORKS */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">How It Works</h2>
                        <p className="text-slate-600 text-lg">Resetting your internal alarm system.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Parasympathetic Shift</h3>
                        <p className="text-slate-600 leading-relaxed text-lg text-center">
                            Stress locks your body into a "Fight or Flight" (Sympathetic) state, flooding your muscles with cortisol and tension. Swedish massage uses smooth, rhythmic, gliding strokes to manually shift your nervous system into "Rest and Digest" (Parasympathetic), lowering heart rate, improving circulation, and reducing muscle tone.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. THE SYNC DIFFERENCE */}
            <section className="py-20 px-4 bg-blue-950 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">The Sync Difference</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">Intentional Relaxation</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            We don't just "rub lotion on." Our relaxation treatments are clinically designed to lower systemic inflammation. We combine spa-level comfort with orthopedic knowledge, ensuring you leave not just relaxed, but physically better.
                        </p>
                        <Link href="/about" className="text-blue-400 font-bold border-b-2 border-blue-400 hover:text-white hover:border-white transition-all">
                            About Our Clinic →
                        </Link>
                    </div>
                    <div className="md:w-1/2 w-full">
                        {/* Comparison Table */}
                        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6 text-center text-blue-950">The Difference is Clear</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Environment</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Noisy/Busy</span>
                                    <span className="text-blue-900 font-bold text-center w-1/3">Calm & Private</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Technique</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Routine</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Responsive</span></span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 font-medium w-1/3">Outcome</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Short-term Nap</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Systemic Reset</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CONDITIONS TREATED (Internal Linking Grid) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Benefits of Relaxation Massage</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">More than just a treat—it's therapy.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/conditions/muscle-tension-relief/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🚿</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Muscle Flushing</h3>
                            <p className="text-sm text-slate-600">Improving circulation to flush out metabolic waste and reduce soreness.</p>
                        </Link>
                        <Link href="/conditions/neck-pain/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🧣</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Neck & Shoulder Relief</h3>
                            <p className="text-sm text-slate-600">Gently releasing the stress-holding patterns in your upper traps and neck.</p>
                        </Link>
                        <Link href="/conditions/chronic-pain/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🕊️</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Chronic Pain</h3>
                            <p className="text-sm text-slate-600">Calming a sensitized nervous system so your body stops sending "danger" signals.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. PATIENT ROADMAP */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your Reset Button</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Audit</h3>
                            <p className="text-slate-600 text-sm">We briefly check in to see where you are holding your stress.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Reset</h3>
                            <p className="text-slate-600 text-sm">60-90 minutes of rhythmic, calming therapy to lower your heart rate.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Calm</h3>
                            <p className="text-slate-600 text-sm">You leave feeling grounded, rested, and ready to face the week.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. REVIEWS WIDGET */}
            <section className="py-16 px-4 bg-blue-50/50 text-center">
                <h2 className="text-2xl font-bold mb-8 text-blue-950">Trusted by 800+ West Shore Residents</h2>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-dashed border-blue-200">
                    <GoogleReviewsColumns />
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center text-blue-950">Common Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Can I still get a relaxation massage if I have an injury?</h3>
                            <p className="text-slate-600 text-sm">Absolutely. Relaxation massage is incredibly effective at calming the nervous system, which actually helps the body heal injuries faster by reducing systemic stress.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">What is the difference between Swedish and Deep Tissue?</h3>
                            <p className="text-slate-600 text-sm">Swedish focuses on calming the nervous system and improving superficial circulation using lighter, sweeping strokes. Deep Tissue targets specific muscular knots and adhesions with firmer, sustained pressure.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Will this help me sleep better?</h3>
                            <p className="text-slate-600 text-sm">Yes! By down-regulating your nervous system and lowering cortisol levels, many patients report significantly deeper, more restorative sleep after a session.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Hit the Reset Button</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Treatment
                </a>
            </section>
        </div>
    );
}
