
import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function ShinSplints() {
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
                "knowsAbout": ["Shin Splints", "Medial Tibial Stress Syndrome", "Massage Therapy", "Athletic Therapy"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/conditions/shin-splints/#webpage",
                "url": "https://synctherapy.ca/conditions/shin-splints/",
                "name": "Shin Splints Treatment & Lower Leg Rehab in Langford & Colwood",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "MedicalCondition",
                    "name": "Shin Splints",
                    "alternateName": "Medial Tibial Stress Syndrome",
                    "possibleTreatment": {
                        "@type": "TherapeuticProcedure",
                        "name": "Deep Tissue Massage & Gait Correction"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can I keep running with shin splints?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Usually no, but we provide cross-training alternatives while we build your tissue capacity back up. Continuing to run on painful shins can lead to stress fractures."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need new shoes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Maybe. Worn-out shoes or shoes with insufficient arch support can contribute to the issue, but they aren't usually the sole cause. We check your foot mechanics first."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do you treat shin splints?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We use deep tissue release on the deep calf muscles (Soleus, Tib Posterior) to stop them from pulling on the bone, and strengthen the foot arch to prevent collapse."
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
                    <span className="text-white">Shin Splints</span>
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
                                Shin Splints Rehab in <br className="hidden md:block" />
                                <span className="text-blue-400">Langford & Colwood</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Does every step feel like your shins are splitting? Whether you're a Starlight Stadium athlete or hitting the pavement, we treat the deep muscle tension pulling on your bone.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                    Book Leg Assessment
                                </a>
                                <div className="text-sm text-gray-400 flex flex-col items-start pl-4 border-l border-gray-700">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-green-400">✓</span> <span>Direct Billing (Blue Cross, Canada Life)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Serving the West Shore</span>
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
                                    src="/images/generated/shin-splints-pain.png"
                                    alt="Shin Splints Treatment in Langford"
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
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Is Your Training Causing You Pain?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🦴</span> Inner Bone Ache</h3>
                            <p className="text-slate-700">A deep, throbbing ache along the inner edge of your shin bone that gets worse after impact activities.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🦵</span> The "Lead Calves"</h3>
                            <p className="text-slate-700">Your calves feel incredibly tight and cramped, like heavy blocks of lead, especially in the morning.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">👉</span> Pinpoint Pain</h3>
                            <p className="text-slate-700">You can point to a specific spot on the bone that sends a sharp zap of pain when you press on it.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🦶</span> The Flat Earth</h3>
                            <p className="text-slate-700">You notice your feet flattening out or your ankles rolling inward (pronation) when you walk or run.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 ANATOMY SECTION (SEO Keywords) */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">Understanding "Shim Splints"</h2>
                        <p className="text-slate-600 text-lg">It's officially called Medial Tibial Stress Syndrome (MTSS).</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">1. The Tug-of-War</h3>
                            <p className="text-slate-600 leading-relaxed">It's not just a tight muscle; it's the tibialis posterior muscle pulling repeatedly on the periosteum (the connective tissue covering the bone) every time you step.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">2. Arch Collapse</h3>
                            <p className="text-slate-600 leading-relaxed">If your arch collapses (over-pronation), it stretches the tibialis posterior muscle like a rubber band, increasing the force on the bone insertion point.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">3. The Stress Limit</h3>
                            <p className="text-slate-600 leading-relaxed">Bone needs time to remodel. If you increase training volume too fast, the breakdown exceeds the repair, leading to inflammation and potentially stress fractures.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE "WHY IT FAILS" SECTION (The USP) */}
            <section className="py-20 px-4 bg-blue-950 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">The Sink Difference</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">Why Rest Alone Fails Shin Splints</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Resting makes the pain go away temporarily. But it doesn't fix <strong>why</strong> the muscle was pulling on the bone in the first place.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            If you return to the same running mechanics with the same weak arches, the pain returns instantly. We rebuild your tissue tolerance and foot mechanics.
                        </p>
                        <Link href="/about" className="text-blue-400 font-bold border-b-2 border-blue-400 hover:text-white hover:border-white transition-all">
                            Learn About Our Approach →
                        </Link>
                    </div>
                    <div className="md:w-1/2 w-full">
                        {/* Comparison Table */}
                        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6 text-center text-blue-950">The Difference is Clear</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Approach</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">General Physio</span>
                                    <span className="text-blue-900 font-bold text-center w-1/3">Sync Massage Therapy</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Assessment</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Palpation</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Run Assessment</span></span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Technique</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Calf Stretching</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Deep Compartment Release</span></span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 font-medium w-1/3">Goal</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Less Pain</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Tissue Resilience</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE SOLUTION: Hub Links as "Tools" */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Our Shin Splint Toolkit</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Specific tools to offload the bone and strengthen the foot.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services/sports-injury-treatment/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🩸</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Acute Management</h3>
                            <p className="text-sm text-slate-600">Immediate pain reduction strategies to manage inflammation and assess for stress fracture risk.</p>
                        </Link>
                        <Link href="/services/athletic-therapy/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">👣</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Run Mechanics</h3>
                            <p className="text-sm text-slate-600">We analyze your strike pattern. Are you over-striding? Landing heavy? We correct the mechanics loading the bone.</p>
                        </Link>
                        <Link href="/services/deep-tissue-massage/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">💆</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Calf Release</h3>
                            <p className="text-sm text-slate-600">Deep manual work to release the Soleus and Tibialis Posterior muscles that adhere to the shin bone.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. PATIENT ROADMAP: Reducing Friction */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your Recovery Roadmap</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Audit</h3>
                            <p className="text-slate-600 text-sm">We palpate the bone edge and assess foot mechanics to confirm it's MTSS and not a fracture.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Treatment</h3>
                            <p className="text-slate-600 text-sm">Targeted deep tissue work to peel the tight muscle away from the painful bone edge.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Rebuild</h3>
                            <p className="text-slate-600 text-sm">We guide you through a cross-training block and a slow return-to-run program.</p>
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
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Can I keep running with shin splints?</h3>
                            <p className="text-slate-600 text-sm">Usually no, but we provide cross-training alternatives (like cycling or swimming) while we build your tissue capacity back up. Continuing to run on painful shins is the #1 cause of stress fractures.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Do I need new running shoes?</h3>
                            <p className="text-slate-600 text-sm">Maybe. Worn-out shoes or shoes with insufficient arch support for your specific foot type can contribute to the issue. We check your foot mechanics first before recommending a $200 purchase.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">How do you treat shin splints?</h3>
                            <p className="text-slate-600 text-sm">We use deep tissue release on the deep calf muscles (Soleus, Tib Posterior) to stop them from pulling on the bone, and perform joint mobilizations to ensure the ankle moves correctly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Run Without the Pain</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Leg Assessment
                </a>
            </section>
        </div>
    );
}
