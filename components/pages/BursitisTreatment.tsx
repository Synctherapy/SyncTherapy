
import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function BursitisTreatment() {
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
                "knowsAbout": ["Bursitis", "Joint Pain", "Massage Therapy", "Physical Rehabilitation"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/conditions/bursitis-treatment/#webpage",
                "url": "https://synctherapy.ca/conditions/bursitis-treatment/",
                "name": "Bursitis Treatment & Joint Pain Relief in Colwood & Langford",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "MedicalCondition",
                    "name": "Bursitis",
                    "possibleTreatment": {
                        "@type": "TherapeuticProcedure",
                        "name": "Joint Mobilization & Decompression"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Do I need a cortisone shot for bursitis?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While injections reduce acute swelling, if you don't use Manual Therapy to fix the tight muscles causing the friction, the bursitis often returns. We treat the compression causing the inflammation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does my bursitis keep coming back?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Bursitis recurs because the mechanical pressure (tight muscle or poor joint tracking) hasn't been resolved. Treating the inflammation without treating the cause is a temporary fix."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can massage help bursitis?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, but we don't massage the inflamed bursa directly. We release the tight muscles squeezing the bursa to allow it to drain and heal naturally."
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
                    <span className="text-white">Bursitis Treatment</span>
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
                                Bursitis Treatment & <br className="hidden md:block" />
                                <span className="text-blue-400">Joint Relief</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Hot, swollen shoulder or hip keeping you up at night? We stop the compression that's crushing your joint cushions so you can move without the sharp pinch.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                    Book Joint Assessment
                                </a>
                                <div className="text-sm text-gray-400 flex flex-col items-start pl-4 border-l border-gray-700">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-green-400">✓</span> <span>Direct Billing (Blue Cross, Canada Life)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Serving Metchosin & West Shore</span>
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
                                    src="/images/generated/shoulder-pain.png"
                                    alt="Shoulder Bursitis Treatment"
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
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Is Your Joint "On Fire"?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🔥</span> Hot & Swollen</h3>
                            <p className="text-slate-700">You can feel and see a visible puffy swelling on the tip of your elbow, knee, or side of your hip that feels hot to the touch.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🛌</span> The Sleepless Side</h3>
                            <p className="text-slate-700">Lying on that side is impossible. The pressure sends a sharp, intense pain through the joint that wakes you up.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">📌</span> The Pinched Arc</h3>
                            <p className="text-slate-700">You have full range of motion, but there's a specific "pinch point" in the middle of a movement (like lifting your arm) that hurts.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🛠️</span> The Kneeling Pain</h3>
                            <p className="text-slate-700">For knee bursitis (Housemaid's Knee), putting any weight on your kneecap is excruciating.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 ANATOMY SECTION (SEO Keywords) */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">What is Bursitis, Really?</h2>
                        <p className="text-slate-600 text-lg">It's a friction problem, not a disease.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">1. The Biological Cushion</h3>
                            <p className="text-slate-600 leading-relaxed">Bursa sacs are fluid-filled cushions that act as friction reducers between bone and tendon. You have them all over your body (shoulders, hips, knees).</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">2. The Compression</h3>
                            <p className="text-slate-600 leading-relaxed">When surrounding muscles are overly tight or joint mechanics are poor, the bursa gets crushed. It swells up to protect the bone, causing inflammation and pain.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">3. The Cycle</h3>
                            <p className="text-slate-600 leading-relaxed">Swelling takes up more space, which causes more rubbing, which causes more swelling. We break this cycle by creating space in the joint.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE "WHY IT FAILS" SECTION (The USP) */}
            <section className="py-20 px-4 bg-blue-950 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">The Sync Difference</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">Why Injections Are Often a Temporary Fix</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Cortisone shots are powerful anti-inflammatories. They shrink the bursa rapidly. But they <strong>do not</strong> fix the reason why the bursa was being pinched in the first place.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            If you have tight hips compressing your trochanteric bursa, the pain will return once the injection wears off. We fix the compression mechanically through soft tissue release.
                        </p>
                        <Link href="/about" className="text-blue-400 font-bold border-b-2 border-blue-400 hover:text-white hover:border-white transition-all">
                            Our Approach to Inflammation →
                        </Link>
                    </div>
                    <div className="md:w-1/2 w-full">
                        {/* Comparison Table */}
                        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6 text-center text-blue-950">The Difference is Clear</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Approach</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Medical Model</span>
                                    <span className="text-blue-900 font-bold text-center w-1/3">Sync Massage Therapy</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Treatment</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Injection</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Decompression</span></span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Target</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Symptoms</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Biomechanics</span></span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 font-medium w-1/3">Side Effects</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Tissue Weakening</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Better Movement</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE SOLUTION: Hub Links as "Tools" */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Our Bursitis Relief Toolkit</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">We stop the squeeze to stop the swelling.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services/pain-management/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🧊</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Inflammation Control</h3>
                            <p className="text-sm text-slate-600">Strategies to flush out excess fluid and reduce the acute heat in the joint immediately.</p>
                        </Link>
                        <Link href="/services/athletic-therapy/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">📐</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Joint Centration</h3>
                            <p className="text-sm text-slate-600">We restore proper joint tracking (e.g., how the humerus sits in the socket) so it stops rubbing against the bursa.</p>
                        </Link>
                        <Link href="/services/nutrition-consulting/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🥑</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Systemic Support</h3>
                            <p className="text-sm text-slate-600">Chronic inflammation is often systemic. We can guide you on anti-inflammatory nutritional support.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. PATIENT ROADMAP: Reducing Friction */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your Path to Relief</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Audit</h3>
                            <p className="text-slate-600 text-sm">We palpate the joint to differentiate between tendon pain, muscle pain, and true bursitis.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Decompression</h3>
                            <p className="text-slate-600 text-sm">We release the tightness around the joint to create physical space for the bursa to heal.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Movement</h3>
                            <p className="text-slate-600 text-sm">Corrective exercises to ensure you use your joint without grinding the bursa again.</p>
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
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Do I need a cortisone shot for bursitis?</h3>
                            <p className="text-slate-600 text-sm">While injections reduce acute swelling, if you don't use Manual Therapy to fix the tight muscles causing the friction, the bursitis often returns. We help treat the root compression.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Should I put heat or ice on it?</h3>
                            <p className="text-slate-600 text-sm">For bursitis (which is active inflammation), ice is generally better for pain relief in the acute stage. Heat can increase swelling if the area is already hot and puffy.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">How long does it take to heal?</h3>
                            <p className="text-slate-600 text-sm">With proper mechanical decompression, symptoms often improve significantly in 3-4 treatments. Complete resolution depends on correcting the movement habits that caused it.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Sleep on Your Side Again</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Joint Assessment
                </a>
            </section>
        </div>
    );
}
