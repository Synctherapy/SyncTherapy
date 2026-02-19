"use client";

import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function MyofascialRelease() {
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
                "knowsAbout": ["Myofascial Release", "Massage Therapy", "Chronic Pain", "Scar Tissue"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/services/myofascial-release/#webpage",
                "url": "https://synctherapy.ca/services/myofascial-release/",
                "name": "Myofascial Release Therapy Colwood & Langford",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "TherapeuticProcedure",
                    "name": "Myofascial Release",
                    "description": "A safe and effective hands-on technique that involves applying gentle sustained pressure into the Myofascial connective tissue restrictions to eliminate pain and restore motion."
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does myofascial release hurt?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, it is generally very relaxing. Unlike deep tissue massage, it uses sustained, slow pressure to stretch the fascial web safely without forcing the muscle."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this covered by RMT benefits?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, myofascial release performed by our Registered Massage Therapists is fully covered under standard extended health benefits."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you use oil for this?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Typically, no. We need a slight 'drag' on the skin to engage the fascial layer properly, so it is often performed with little to no lotion."
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
                    <span className="text-white">Myofascial Release</span>
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
                                Myofascial Release Therapy <br className="hidden md:block" />
                                <span className="text-blue-400">in Colwood & Langford</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Serving Colwood, Langford & the West Shore. Relief for the "tight all over" feeling when deep tissue massage just isn't enough.
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
                                    src="/images/generated/myofascial-release.png"
                                    alt="Myofascial Release Therapy"
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
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Is Myofascial Release For You?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🕸️</span> The "Shrink-Wrap" Feeling</h3>
                            <p className="text-slate-700">You feel physically restricted in your own skin, like you're wearing a suit that's two sizes too small.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🩹</span> Post-Surgical Scars</h3>
                            <p className="text-slate-700">Tightness pulling from old C-sections, appendectomies, or joint surgeries that limits your movement.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🔒</span> Chronic Posture Lock</h3>
                            <p className="text-slate-700">Desk workers who can't stand up straight without effort because their front line is glued short.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">😫</span> Deep Aches</h3>
                            <p className="text-slate-700">Widespread tension and aching that standard massage can't seem to reach or resolve.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE SCIENCE / HOW IT WORKS */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">How It Works</h2>
                        <p className="text-slate-600 text-lg">Restoring the "Glide" to your body.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Unsticking the Web</h3>
                        <p className="text-slate-600 leading-relaxed text-lg text-center">
                            Fascia is the 3D web of connective tissue that wraps every muscle, bone, and organ. When traumatized by injury, surgery, or poor posture, it hardens and glues together. We use sustained, slow pressure without oil to gently melt and stretch this web, restoring "glide" to your body so you can move freely again.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. THE SYNC DIFFERENCE */}
            <section className="py-20 px-4 bg-blue-950 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">The Sync Difference</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">More Than Just Stretching</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Many clinics treat fascia in isolation. At Sync, we combine myofascial release with movement assessment. We don't just release the restriction; we re-integrate it into your movement patterns so the "glue" doesn't just stick back together.
                        </p>
                        <Link href="/about" className="text-blue-400 font-bold border-b-2 border-blue-400 hover:text-white hover:border-white transition-all">
                            Learn About Our Philosophy →
                        </Link>
                    </div>
                    <div className="md:w-1/2 w-full">
                        {/* Comparison Table */}
                        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6 text-center text-blue-950">The Difference is Clear</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Focus</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Muscles Only</span>
                                    <span className="text-blue-900 font-bold text-center w-1/3">The Whole Web</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Touch</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Fast & Oily</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Slow & Dry</span></span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 font-medium w-1/3">Goal</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Temporary Relief</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Structural Change</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CONDITIONS TREATED (Internal Linking Grid) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">What Can Myofascial Release Help?</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">This technique is particularly effective for:</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/conditions/plantar-fasciitis/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">👣</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Plantar Fasciitis</h3>
                            <p className="text-sm text-slate-600">Releasing the thick connective tissue on the bottom of the foot and the calf to stop the morning pain.</p>
                        </Link>
                        <Link href="/conditions/postural-imbalance/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🧘</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Postural Imbalance</h3>
                            <p className="text-sm text-slate-600">Unlocking the chest and shoulders to allow you to stand tall without fighting your own body.</p>
                        </Link>
                        <Link href="/conditions/joint-stiffness/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🦾</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Joint Stiffness</h3>
                            <p className="text-sm text-slate-600">Restoring mobility by freeing the "wrapper" (fascia) around the stiff joint.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. PATIENT ROADMAP */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your Path to Freedom</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Audit</h3>
                            <p className="text-slate-600 text-sm">We assess your fascial lines to find where the "suit" is too tight.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Treatment</h3>
                            <p className="text-slate-600 text-sm">Gentle, sustained pressure melts restrictions without pain.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Plan</h3>
                            <p className="text-slate-600 text-sm">You leave moving freely with a plan to keep it that way.</p>
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
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Does myofascial release hurt?</h3>
                            <p className="text-slate-600 text-sm">No, it is generally very relaxing. Unlike deep tissue massage, it uses sustained, slow pressure to stretch the fascial web safely without forcing the muscle.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Is this covered by RMT benefits?</h3>
                            <p className="text-slate-600 text-sm">Yes, myofascial release performed by our Registered Massage Therapists is fully covered under standard extended health benefits.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Do you use oil for this?</h3>
                            <p className="text-slate-600 text-sm">Typically, no. We need a slight "drag" on the skin to engage the fascial layer properly, so it is often performed with little to no lotion.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Unstick Your Body Today</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Treatment
                </a>
            </section>
        </div>
    );
}
