
import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function ITBandSyndrome() {
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
                "knowsAbout": ["IT Band Syndrome", "Runner's Knee", "Massage Therapy", "Athletic Therapy"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/conditions/it-band-syndrome/#webpage",
                "url": "https://synctherapy.ca/conditions/it-band-syndrome/",
                "name": "IT Band Syndrome & Runner's Knee Rehab in Colwood",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "MedicalCondition",
                    "name": "IT Band Syndrome",
                    "alternateName": "Iliotibial Band Friction Syndrome",
                    "possibleTreatment": {
                        "@type": "TherapeuticProcedure",
                        "name": "Myofascial Release & Glute Strengthening"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Should I foam roll my IT band?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, rolling the IT band directly often crushes the tissue and causes more inflammation. We work on the muscles attached to it (TFL and Glutes) instead."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I keep running with IT Band Syndrome?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It depends on the severity. In acute stages, rest is often required. We perform a gait analysis to see if your running form is contributing to the friction."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does IT Band Syndrome take to heal?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "With proper treatment (releasing the TFL and strengthening the glutes), most runners see significant relief in 4-6 weeks."
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
                    <span className="text-white">IT Band Syndrome</span>
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
                                IT Band Syndrome & <br className="hidden md:block" />
                                <span className="text-blue-400">Runner's Knee Rehab</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Sharp knee pain stopping your run at the 2km mark? Don't just blame your shoes. We fix the hip mechanics causing the friction so you can get back to the Galloping Goose.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                    Book Knee Assessment
                                </a>
                                <div className="text-sm text-gray-400 flex flex-col items-start pl-4 border-l border-gray-700">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-green-400">✓</span> <span>Direct Billing (Blue Cross, Canada Life)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Serving Colwood, Langford & West Shore</span>
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
                                    src="/images/generated/runner-knee-pain-realistic.png"
                                    alt="Runner's Knee Treatment in Colwood"
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
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Is Your Knee Stopping You from Running?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🏃</span> The "2km Curse"</h3>
                            <p className="text-slate-700">You start your run feeling great, but at exactly the same distance (e.g., 2km or 5km), a sharp pain stops you in your tracks.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">📉</span> The Downhill Dread</h3>
                            <p className="text-slate-600">Running downhill or going down stairs causes a stabbing pain on the outside of your knee.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🦵</span> The Outer Snap</h3>
                            <p className="text-slate-700">You feel a clicking, snapping, or rubbing sensation on the side of your knee when bending it.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🛌</span> The Morning Stiffness</h3>
                            <p className="text-slate-700">Your hip or outer thigh feels incredibly tight when you wake up, even if you didn't run the day before.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 ANATOMY SECTION (SEO Keywords) */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">The Real Cause of "Runner's Knee"</h2>
                        <p className="text-slate-600 text-lg">It's rarely just "tightness." It's usually a mechanical overload.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">1. The "Stabilizer" Trap</h3>
                            <p className="text-slate-600 leading-relaxed">The IT Band is a thick fascia, not a muscle. You can't just stretch it. It gets angry when your TFL (hip flexor) and Glutes are weak, forcing the IT Band to act as a primary stabilizer.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">2. Valgus Collapse</h3>
                            <p className="text-slate-600 leading-relaxed">If your knee caves inward (valgus) when you land, it increases tension on the IT Band. This is often caused by weak glute medius muscles or poor arch support.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">3. The Friction Zone</h3>
                            <p className="text-slate-600 leading-relaxed">At 30 degrees of knee flexion (when your foot hits the ground), the IT band snaps over the bony femoral condyle. Repetitive friction causes inflammation and sharp pain.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE "WHY IT FAILS" SECTION (The USP) */}
            <section className="py-20 px-4 bg-blue-950 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">The Sync Difference</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">Why Foam Rolling Doesn't Fix IT Band Syndrome</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Most runners spend hours foam rolling their IT band in agony. But biomechanically, the IT band is as tough as a steel cable. You cannot "stretch" it.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Rolling inflamed tissue just crushes it. We treat the muscles <strong>attached</strong> to the band (TFL and Glute Max) to reduce the tension at the source, without the bruising.
                        </p>
                        <Link href="/about" className="text-blue-400 font-bold border-b-2 border-blue-400 hover:text-white hover:border-white transition-all">
                            Read Our Rehab Philosophy →
                        </Link>
                    </div>
                    <div className="md:w-1/2 w-full">
                        {/* Comparison Table */}
                        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6 text-center text-blue-950">The Difference is Clear</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Approach</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Standard Physio</span>
                                    <span className="text-blue-900 font-bold text-center w-1/3">Sync Massage Therapy</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Assessment</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Quick Look</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Gait Analysis</span></span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Technique</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Ultrasound/Ice</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Myofascial Release</span></span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 font-medium w-1/3">Goal</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Pain Relief</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Return to Run</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE SOLUTION: Hub Links as "Tools" */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Our Runner's Rehab Toolkit</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">We use different tools to de-load the knee and strengthen the hip.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services/athletic-therapy/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">📐</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Gait Analysis</h3>
                            <p className="text-sm text-slate-600">We analyze how you run. Are your hips dropping? Knees caving? We correct the mechanics causing the stress.</p>
                        </Link>
                        <Link href="/services/myofascial-release/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🤲</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Fascial Decompression</h3>
                            <p className="text-sm text-slate-600">Hands-on work to unstick the TFL and Glute muscles from the IT band, restoring proper slide and glide.</p>
                        </Link>
                        <Link href="/services/sports-injury-rehab/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🏋️</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Glute Strengthening</h3>
                            <p className="text-sm text-slate-600">The "King" of runner's exercises. We build your lateral hip strength so your IT band doesn't have to do all the work.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. PATIENT ROADMAP: Reducing Friction */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your Road Back to Running</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Audit</h3>
                            <p className="text-slate-600 text-sm">We test your hip strength and watch you move to pinpoint the "leak" in your running mechanics.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Release</h3>
                            <p className="text-slate-600 text-sm">Immediate soft tissue work to reduce pain and restore hip mobility so you can walk without a limp.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Plan</h3>
                            <p className="text-slate-600 text-sm">A customized return-to-run program that slowly builds your mileage back up without flaring the knee.</p>
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
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Should I foam roll my IT band?</h3>
                            <p className="text-slate-600 text-sm">No, rolling the IT band directly often crushes the tissue and causes more inflammation. We work on the muscles attached to it (TFL and Glutes) instead to release the tension effectively.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Can I keep running with IT Band Syndrome?</h3>
                            <p className="text-slate-600 text-sm">It depends on the severity. In acute stages, rest is often required to let the inflammation subside. We perform a gait analysis to see if your running form is contributing to the friction and guide your return.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">How long does IT Band Syndrome take to heal?</h3>
                            <p className="text-slate-600 text-sm">With proper treatment (releasing the TFL and strengthening the glutes), most runners see significant relief in 4-6 weeks. Ignoring it can lead to chronicity that lasts months.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">Stop Knee Pain Before It Stops You</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Knee Assessment
                </a>
            </section>
        </div>
    );
}
