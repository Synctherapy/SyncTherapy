"use client";

import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function TendonitisTreatment() {
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
                "knowsAbout": ["Tendonitis", "Tennis Elbow", "Achilles Tendonitis", "Massage Therapy"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/conditions/tendonitis-treatment/#webpage",
                "url": "https://synctherapy.ca/conditions/tendonitis-treatment/",
                "name": "Tendonitis Treatment & Joint Rehab in Colwood",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "MedicalCondition",
                    "name": "Tendinopathy",
                    "alternateName": "Tendonitis",
                    "possibleTreatment": {
                        "@type": "TherapeuticProcedure",
                        "name": "Progressive Loading & Deep Cross-Friction Massage"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why isn't resting helping my tendonitis?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Tendons require mechanical load to heal. While rest reduces acute pain, it weakens the tendon structure. Progressive, heavy-slow resistance training is needed to rebuild healthy collagen fibers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does massage help tendonitis?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We use deep friction techniques to break down scar tissue alignment and release the tight muscles pulling on the tendon attachment point."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it Tendonitis or Tendinosis?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most chronic cases (pain > 3 months) are Tendinosis (degeneration), not Tendonitis (inflammation). This distinction changes the treatment plan completely from 'rest/ice' to 'load/heat'."
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
                    <span className="text-white">Tendonitis Treatment</span>
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
                                Tendonitis Treatment & <br className="hidden md:block" />
                                <span className="text-blue-400">Joint Rehab in Colwood</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Elbow screaming after a day on the tools? Achilles stiff every morning? Stop "resting and hoping." We rebuild your tendon strength so you can lift without fear.
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
                                        <span className="text-green-400">✓</span> <span>Serving Colwood & Langford</span>
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
                                    src="/images/generated/tendonitis-pain.png"
                                    alt="Tennis Elbow Treatment in Colwood"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent pointer-events-none"></div>
                            </div>
                            {/* Decorative background blob behind image */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-3xl opacity-60 animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE "IS THIS YOU?" CHECKLIST (Empathy) */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Signs Your Tendons are Overloaded</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🤖</span> The Morning Creek</h3>
                            <p className="text-slate-700">Your elbow, knee, or heel feels excessively stiff and achy when you first wake up, but "warms up" as you move.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">☕</span> The Coffee Lifting Pain</h3>
                            <p className="text-slate-700">Simple tasks like picking up a coffee cup, turning a doorknob, or gripping a tool cause a sharp pain.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🎾</span> The Backhand Zap</h3>
                            <p className="text-slate-700">Specific sports movements (like a backhand in tennis/pickleball) trigger an immediate, localized pain on the bone.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🧊</span> Ice Doesn't Help</h3>
                            <p className="text-slate-700">You've tried resting and icing for weeks, but the moment you return to activity, the pain comes right back.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 ANATOMY SECTION (SEO Keywords) */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">Why "Rest" is the Wrong Advice</h2>
                        <p className="text-slate-600 text-lg">Understanding the difference between Inflammation and Degeneration.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">1. The Rusted Spring</h3>
                            <p className="text-slate-600 leading-relaxed">Think of a chronic tendon injury (Tendinopathy) as a rusted spring. If you just leave it alone (rest), it stays rusted. You need to move it to restore its elasticity.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">2. Load Management</h3>
                            <p className="text-slate-600 leading-relaxed">Tendons love "steady" load but hate "surprise" load (spikes in activity). We calculate the exact amount of load your tendon can handle to stimulate repair without damage.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">3. Muscle Drag</h3>
                            <p className="text-slate-600 leading-relaxed">If the muscle belly (e.g., forearm or calf) is perpetually tight, it acts like a constant tensile load on the tendon attachment. We release the muscle to slacken the rope.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE "WHY IT FAILS" SECTION (The USP) */}
            <section className="py-20 px-4 bg-blue-950 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">The Sync Difference</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">Total Rest Actually Makes Tendons Weaker</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            It sounds counter-intuitive, but tendons need <strong>stress</strong> to maintain their strength. When you rest completely, the tendon fibers become disorganized and weaker.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Our approach combines manual therapy to fix the tissue with progressive loading to fix the structure. We don't just treat the pain; we make the tendon stronger than it was before.
                        </p>
                        <Link href="/about" className="text-blue-400 font-bold border-b-2 border-blue-400 hover:text-white hover:border-white transition-all">
                            How We Rehab Tendons →
                        </Link>
                    </div>
                    <div className="md:w-1/2 w-full">
                        {/* Comparison Table */}
                        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6 text-center text-blue-950">The Difference is Clear</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Advice</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">"Stop Moving"</span>
                                    <span className="text-blue-900 font-bold text-center w-1/3">"Move Correctly"</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Treatment</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Cortisone Shot</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Load & Release</span></span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Long Term</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Recurrence</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Resilience</span></span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 font-medium w-1/3">Goal</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Wait it out</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Active Rehab</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE SOLUTION: Hub Links as "Tools" */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Our Tendon Repair Toolkit</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Specific protocols for tennis elbow, golfer's elbow, Achilles, and patellar tendonitis.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services/physical-rehabilitation/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🏋️</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Loading Protocols</h3>
                            <p className="text-sm text-slate-600">Heavy Slow Resistance (HSR) and Isometric holds are statistically proven to reduce tendon pain and rebuild collagen.</p>
                        </Link>
                        <Link href="/services/athletic-therapy/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">📐</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Biomechanics Correction</h3>
                            <p className="text-sm text-slate-600">We check your swing, your lift, or your run. If your technique is off, you're constantly overloading the tendon.</p>
                        </Link>
                        <Link href="/services/deep-tissue-massage/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🤲</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Tension Release</h3>
                            <p className="text-sm text-slate-600">Manual therapy to relax the muscle belly upstream of the injury, immediately reducing the pull on the painful tendon.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. PATIENT ROADMAP: Reducing Friction */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your Path to Pain-Free Movement</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Audit</h3>
                            <p className="text-slate-600 text-sm">We determine if it's inflammatory (active) or degenerative (chronic) to set the right load tolerance.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Release</h3>
                            <p className="text-slate-600 text-sm">Hands-on work to break up adhesions and improve blood flow to the avascular tendon tissue.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Loading</h3>
                            <p className="text-slate-600 text-sm">A specific, progressive exercise plan that strengthens the tendon without flaring it up.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. REVIEWS WIDGET */}
            <section className="py-16 px-4 bg-blue-50/50 text-center">
                <h2 className="text-2xl font-bold mb-8 text-blue-950">Trusted by 800+ West Shore Residents</h2>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-dashed border-blue-200">
                    {/* Replaced placeholder with actual component */}
                    <GoogleReviewsColumns />
                </div>
            </section>

            {/* 7. FAQ: Addressing Objections */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center text-blue-950">Common Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Why isn't resting helping my tendonitis?</h3>
                            <p className="text-slate-600 text-sm">Tendons require mechanical load to heal. While rest reduces acute pain, it weakens the tendon structure. Progressive, heavy-slow resistance training is needed to rebuild healthy collagen fibers.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Does massage help tendonitis?</h3>
                            <p className="text-slate-600 text-sm">Yes. We use deep friction techniques to break down scar tissue alignment and release the tight muscles pulling on the tendon attachment point.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Can I keep playing my sport?</h3>
                            <p className="text-slate-600 text-sm">Usually yes, but with modifications. We might reduce the volume or intensity while you rehab, but complete cessation is rarely necessary unless the pain is severe.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Rebuild Your Strength</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Rehab Assessment
                </a>
            </section>
        </div>
    );
}
