
import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function SprainsAndStrains() {
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
                "knowsAbout": ["Sprains", "Strains", "Ankle Sprain", "Hamstring Strain", "Massage Therapy"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/conditions/sprains-and-strains/#webpage",
                "url": "https://synctherapy.ca/conditions/sprains-and-strains/",
                "name": "Sprains, Strains & Acute Injury Rehab in Colwood",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "MedicalCondition",
                    "name": "Acute Injury",
                    "alternateName": "Soft Tissue Injury",
                    "possibleTreatment": {
                        "@type": "TherapeuticProcedure",
                        "name": "PEACE & LOVE Protocol"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Should I put ice on my sprain?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ice can actually delay long-term healing by stopping the natural inflammatory repair process. We guide you on when to use movement instead of ice (The PEACE & LOVE protocol)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What's the difference between a sprain and a strain?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Sprain is a stretched ligament (bone to bone), common in ankles. A Strain is a torn muscle or tendon (muscle to bone), common in hamstrings or calves."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How soon should I come in after an injury?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We recommend coming in within 48-72 hours. We need to rule out fractures and start early mobilization to prevent scar tissue from forming incorrectly."
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
                    <span className="text-white">Sprains & Strains</span>
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
                                Sprains, Strains & <br className="hidden md:block" />
                                <span className="text-blue-400">Acute Injury Rehab</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Rolled your ankle on Mt. Finlayson? Pulled a hamstring at the game? Don't just ice it and wait. We accelerate your healing with the modern P.E.A.C.E. & L.O.V.E. protocol.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                    Book Emergency Assessment
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
                                    src="/images/generated/ankle-sprain.png"
                                    alt="Ankle Sprain Treatment Colwood"
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
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Did You Just Get Hurt?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🔊</span> The Pop</h3>
                            <p className="text-slate-700">You heard or felt a distinct "pop" or "snap" followed by immediate pain, causing you to stop your activity instantly.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🎈</span> The Balloon</h3>
                            <p className="text-slate-700">Within an hour, the area (ankle, knee, wrist) puffed up like a balloon and feels hot and thumping.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🟣</span> The Bruise</h3>
                            <p className="text-slate-700">Dark purple or blue bruising has started to appear, indicating a torn blood vessel deep in the tissue.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🚫</span> Weight Bearing</h3>
                            <p className="text-slate-700">You can't put full weight on the limb without instability or sharp, shooting pain.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 ANATOMY SECTION (SEO Keywords) */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">What Did I Break?</h2>
                        <p className="text-slate-600 text-lg">Knowing the difference determines the treatment.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">1. Ligament Sprain</h3>
                            <p className="text-slate-600 leading-relaxed">A sprain is a stretch or tear of a Ligament (the tough band connecting bone to bone). Common in ankles and knees. It affects stability.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">2. Muscle Strain</h3>
                            <p className="text-slate-600 leading-relaxed">A strain is a tear in the Muscle fibers or Tendon. Common in hamstrings, calves, and groins. It affects power and movement.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">3. The Healing Glue</h3>
                            <p className="text-slate-600 leading-relaxed">Your body patches tears with scar tissue. If you don't move it correctly during healing, the patch forms like a messy clump of glue, leading to chronic weakness.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE "WHY IT FAILS" SECTION (The USP) */}
            <section className="py-20 px-4 bg-blue-950 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">The Protocol Update</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">Why R.I.C.E. is Outdated</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            For decades, we were told to Rest, Ice, Compress, and Elevate. But science has advanced. Ice actually <strong>stops</strong> the inflammation required to signal repair cells to the site.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            We use the <strong>P.E.A.C.E. & L.O.V.E.</strong> protocol. Specifically, "Optimism" and "Vascularization" (cardio movement) accelerate healing faster than ice ever did.
                        </p>
                        <Link href="/about" className="text-blue-400 font-bold border-b-2 border-blue-400 hover:text-white hover:border-white transition-all">
                            Read About The New Protocol →
                        </Link>
                    </div>
                    <div className="md:w-1/2 w-full">
                        {/* Comparison Table */}
                        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6 text-center text-blue-950">The Difference is Clear</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Protocol</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">R.I.C.E.</span>
                                    <span className="text-blue-900 font-bold text-center w-1/3">PEACE & LOVE</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Ice?</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Yes (Freeze it)</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">No (Move it)</span></span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Movement</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Avoid it</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Early Loading</span></span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 font-medium w-1/3">Result</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Stiff Scar</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Strong Tissue</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE SOLUTION: Hub Links as "Tools" */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Our Acute Injury Toolkit</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">We manage the swelling without stopping the healing.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services/sports-injury-treatment/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🩸</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Acute Management</h3>
                            <p className="text-sm text-slate-600">Specialized compression and elevation techniques (not ice!) to move old fluid out and bring new blood in.</p>
                        </Link>
                        <Link href="/services/athletic-therapy/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🩹</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Functional Taping</h3>
                            <p className="text-sm text-slate-600">We tape the injury to support the ligament, allowing you to walk sooner without doing further damage.</p>
                        </Link>
                        <Link href="/services/deep-tissue-massage/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🛡️</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Protective Guard Release</h3>
                            <p className="text-sm text-slate-600">When you sprain an ankle, your calf tightens up to protect it. We release that protective tension so you can move.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. PATIENT ROADMAP: Reducing Friction */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">The Timeline of Repair</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Days 1-3</h3>
                            <p className="text-slate-600 text-sm">Protection & Elevation. We assess severity and ensure no fracture. Gentle non-painful motion begins.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Days 4-14</h3>
                            <p className="text-slate-600 text-sm">Load & Align. We perform manual therapy to align fibers and add load to strengthen the new tissue.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Weeks 3-6</h3>
                            <p className="text-slate-600 text-sm">Return to Sport. Dynamic stability, proprioception, and plyometrics to ensure it doesn't happen again.</p>
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
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Should I put ice on my sprain?</h3>
                            <p className="text-slate-600 text-sm">Ice is great for numbing pain, but it constricts blood vessels and delays the arrival of healing factors. We generally recommend compression and elevation over ice for faster healing.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">How do I know if it's broken?</h3>
                            <p className="text-slate-600 text-sm">If you cannot bear weight for 4 steps immediately after injury, or if there is tenderness on specific bony points (Ottawa Ankle Rules), we refer you for an X-ray immediately.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">When can I play sports again?</h3>
                            <p className="text-slate-600 text-sm">Once you have full range of motion, equal strength to the uninjured side, and can pass our hop tests without pain. Returning too early is the main cause of chronic instability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Heal It Right The First Time</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Injury Assessment
                </a>
            </section>
        </div>
    );
}
