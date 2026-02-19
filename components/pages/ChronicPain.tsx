"use client";

import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function ChronicPain() {
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
                "knowsAbout": ["Chronic Pain", "Pain Management", "Massage Therapy", "Visceral Manipulation", "Health Consulting"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/conditions/chronic-pain/#webpage",
                "url": "https://synctherapy.ca/conditions/chronic-pain/",
                "name": "Chronic Pain Management in Colwood & Langford",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "MedicalCondition",
                    "name": "Chronic Pain",
                    "alternateName": "Central Sensitization",
                    "possibleTreatment": {
                        "@type": "TherapeuticProcedure",
                        "name": "Pain Science Education & Nervous System Regulation"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why hasn't other therapy worked for my chronic pain?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many therapies only address the muscle (the hardware). Chronic pain often requires treating the nervous system (the software) to turn down the volume of the pain signals."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my pain all in my head?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The pain is 100% real. However, it is processed by the brain. In chronic pain, the brain becomes overprotective and amplifies signals. We treat this hypersensitivity."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to manage stress?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Stress hormones (cortisol) increase inflammation and pain sensitivity. Our health consulting approach helps you manage sleep and stress to aid recovery."
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
                    <span className="text-white">Chronic Pain</span>
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
                                Chronic Pain Management <br className="hidden md:block" />
                                <span className="text-blue-400">in Colwood & Langford</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Tried everything? Finding long-term solutions close to home in the West Shore so you don't have to commute while in pain. We treat the nervous system, not just the muscle.
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
                                    src="/images/generated/chronic-pain.png"
                                    alt="Chronic Pain Management in Colwood"
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
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">📅</span> 3+ Months</h3>
                            <p className="text-slate-700">Your pain has lasted longer than 3-6 months and persists longer than typical tissue healing times.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">⚡</span> Hypersensitivity</h3>
                            <p className="text-slate-700">Light touches, cold weather, or even emotional stress can trigger significant pain flare-ups.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">👻</span> Shifting Pain</h3>
                            <p className="text-slate-700">The pain seems to move or shift around your body, making it hard to pin down one specific "injured" spot.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">😩</span> Brain Fog & Fatigue</h3>
                            <p className="text-slate-700">Alongside the pain, you constantly feel exhausted, have trouble sleeping, and struggle to focus.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 ANATOMY SECTION */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">Central Sensitization</h2>
                        <p className="text-slate-600 text-lg">It's a software problem, not just hardware.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">The Alarm System</h3>
                        <p className="text-slate-600 leading-relaxed text-lg text-center">
                            When pain lasts for months, your nervous system essentially leaves the "alarm system" turned on. The brain begins amplifying normal signals into pain signals to protect you. This is called Central Sensitization. We have to treat the nervous system to turn down the alarm, not just treat the muscle, to get lasting relief.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. TREATMENT OPTIONS (Toolkit) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Our Chronic Pain Toolkit</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">A multi-faceted approach to calm the system.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services/pain-management/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🧠</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Neurological Dampening</h3>
                            <p className="text-sm text-slate-600">Specific manual techniques that signal safety to the brain, reducing the amplification of pain.</p>
                        </Link>
                        <Link href="/services/visceral-manipulation/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🌀</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Internal Release</h3>
                            <p className="text-sm text-slate-600">Removing internal stressors (like gut tension) that contribute to the total load on your nervous system.</p>
                        </Link>
                        <Link href="/services/health-consulting/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">😴</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Sleep & Stress</h3>
                            <p className="text-sm text-slate-600">Holistic consulting to improve sleep quality and stress management, crucial for breaking the pain cycle.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. PATIENT ROADMAP */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your Recovery Roadmap</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Validation</h3>
                            <p className="text-slate-600 text-sm">We listen to your full story. We understand the pain is real and affects your whole life.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Reset</h3>
                            <p className="text-slate-600 text-sm">Treatments focus on lowering the alarm, not just rubbing where it hurts.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Rebuild</h3>
                            <p className="text-slate-600 text-sm">Gradual return to activity to show your brain that movement is safe.</p>
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
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Why hasn't other therapy worked for my chronic pain?</h3>
                            <p className="text-slate-600 text-sm">Many therapies only address the muscle (the hardware). Chronic pain often requires treating the nervous system (the software) to turn down the volume of the pain signals.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Will I be on medication forever?</h3>
                            <p className="text-slate-600 text-sm">Not necessarily. As we successfully lower the nervous system's sensitivity, many patients find they can work with their doctor to reduce their reliance on pain medication.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Is it safe to exercise?</h3>
                            <p className="text-slate-600 text-sm">Gentle movement is actually one of the best painkillers. We help you find the "sweet spot" of activity that builds you up without causing a flare-up.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Take Back Control</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Assessment Now
                </a>
            </section>
        </div>
    );
}
