
import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function JointStiffness() {
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
                "knowsAbout": ["Joint Stiffness", "Mobility", "Massage Therapy", "Athletic Therapy", "Nutrition"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/conditions/joint-stiffness/#webpage",
                "url": "https://synctherapy.ca/conditions/joint-stiffness/",
                "name": "Joint Stiffness & Mobility Relief in Colwood",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "MedicalCondition",
                    "name": "Joint Stiffness",
                    "alternateName": "Reduced Range of Motion",
                    "possibleTreatment": {
                        "@type": "TherapeuticProcedure",
                        "name": "Mobilization & Myofascial Release"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Will cracking my joints help?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Joint manipulation provides temporary relief, but if the surrounding muscles remain tight, the joint will simply compress again. We focus on soft tissue release."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why are my joints so stiff in the morning?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Synovial fluid (joint oil) thickens when you are inactive. Movement warms it up, but if you have chronic tension, the joint stays compressed and 'dry' longer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this arthritis?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Stiffness can be a sign of early osteoarthritis, but it is often just soft tissue restriction. We can help determine if it's muscular or skeletal."
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
                    <span className="text-white">Joint Stiffness</span>
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
                                Joint Stiffness & <br className="hidden md:block" />
                                <span className="text-blue-400">Mobility Relief</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Feeling like the "Tin Man" in the morning? Don't let the damp West Coast weather lock you up. We help Colwood's active community stay moving fluidly.
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
                                    src="/images/generated/joint-stiffness.png"
                                    alt="Joint Stiffness Relief in Colwood"
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
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🤖</span> The Tin Man</h3>
                            <p className="text-slate-700">You wake up feeling stiff and rusty, needing 30 minutes just to get moving properly.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🔒</span> Locked Hips</h3>
                            <p className="text-slate-700">After sitting at your desk or in your car, your hips feel "locked" and painful to straighten.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🧦</span> Sock Struggle</h3>
                            <p className="text-slate-700">Putting on your socks or tying your shoes has become surprisingly difficult.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🧱</span> Heavy Legs</h3>
                            <p className="text-slate-700">Your limbs feel heavy and resistant to movement, like wading through molasses.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 ANATOMY SECTION */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">"Motion is Lotion"</h2>
                        <p className="text-slate-600 text-lg">Why your joints feel dry and rusty.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Joint Lubrication 101</h3>
                        <p className="text-slate-600 leading-relaxed text-lg text-center">
                            Joint capsules create synovial fluid (natural lubrication) when they move. When muscles around the joint are chronically tight, the joint compresses. This compression prevents the fluid from circulating, drying out the cartilage and causing that stiff, "rusty" feeling. To fix it, we have to decompress the joint so the fluid can flow again.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. TREATMENT OPTIONS (Toolkit) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Our Mobility Toolkit</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">We focus on decompression and active range of motion.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services/myofascial-release/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🔓</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Decompression</h3>
                            <p className="text-sm text-slate-600">Using Myofascial Release to gently create space within the joint capsule.</p>
                        </Link>
                        <Link href="/services/sports-injury-rehab/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🤸</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Active Mobility</h3>
                            <p className="text-sm text-slate-600">Coaching you through specific movements to "pump" synovial fluid into the joint.</p>
                        </Link>
                        <Link href="/services/nutrition-consulting/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">💧</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Hydration Strategy</h3>
                            <p className="text-sm text-slate-600">Dietary changes to improve systemic hydration and fluid retention in specific tissues.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. PATIENT ROADMAP */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your Mobility Roadmap</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Assessment</h3>
                            <p className="text-slate-600 text-sm">We test your range of motion to see exactly where the "lock" is.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Mobilization</h3>
                            <p className="text-slate-600 text-sm">Specific manual techniques to restore glide and slide to the joint surfaces.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Maintenance</h3>
                            <p className="text-slate-600 text-sm">A customized routine to keep the fluid moving every single morning.</p>
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
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Will cracking my joints help?</h3>
                            <p className="text-slate-600 text-sm">Joint manipulation provides temporary relief, but if the surrounding muscles remain tight, the joint will simply compress again. We focus on soft tissue release.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Why does it get worse when it rains?</h3>
                            <p className="text-slate-600 text-sm">Changes in barometric pressure can cause inflamed tissues to expand slightly. In a tight space like a stiff joint, this expansion increases pressure and pain.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Do I just need to stretch more?</h3>
                            <p className="text-slate-600 text-sm">Not always. Stretching a compressed joint can sometimes irritate it. Often you need localized release work first, before stretching becomes effective.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Move Fluidly Again</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Assessment Now
                </a>
            </section>
        </div>
    );
}
