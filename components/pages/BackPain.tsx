
import React from 'react';
import Link from 'next/link';
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import Image from "next/image";

export function BackPain() {
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
                "knowsAbout": ["Back Pain", "Sciatica", "Massage Therapy", "Physical Rehabilitation"]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://synctherapy.ca/conditions/back-pain/#webpage",
                "url": "https://synctherapy.ca/conditions/back-pain/",
                "name": "Back Pain Treatment Colwood & Langford",
                "isPartOf": { "@id": "https://synctherapy.ca/#website" },
                "about": {
                    "@type": "MedicalCondition",
                    "name": "Back Pain",
                    "alternateName": "Lower Back Pain",
                    "possibleTreatment": {
                        "@type": "TherapeuticProcedure",
                        "name": "Deep Tissue Massage & Visceral Manipulation"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is massage safe if my back is in spasm?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, but we treat it differently. We don't force deep pressure into a spasm (that makes it worse). We use gentle release techniques on surrounding muscles to convince the nervous system to let go."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What's the difference between you and a Chiropractor?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Chiropractors focus on skeletal alignment and joint manipulation. We focus on the soft tissue (muscles, fascia, tendons) that pulls those joints out of place. Often, the best results come from combining both!"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many sessions will I need?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most acute back pain sees significant relief in 3-5 sessions. Chronic issues (lasting months/years) may require a longer maintenance plan combined with strengthening exercises."
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
                    <span className="text-white">Back Pain</span>
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
                                Stop Just "Managing" Your <br className="hidden md:block" />
                                <span className="text-blue-400">Back Pain</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Waking up stiff? Spasms after the Colwood commute? We don't just rub the sore spot. We treat the mechanical and visceral roots of your pain so it actually stays away.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-10">
                                <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                                    Book Back Assessment
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
                                    src="/images/generated/back-pain-prevention-realistic.png"
                                    alt="Back Pain Relief at Sync Massage Therapy"
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
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Is Your Back Trying to Tell You Something?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">⚡</span> The "Sock Struggle"</h3>
                            <p className="text-slate-700">You have to sit down or hold your breath just to put on your socks in the morning because bending forward feels dangerous.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🚗</span> The Commuter Ache</h3>
                            <p className="text-slate-700">A deep, dull throbbing in your lower back that sets in after sitting in traffic on the Colwood Crawl.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">🧍</span> The Grocery Line Stand</h3>
                            <p className="text-slate-700">You can't stand still for more than 5 minutes without needing to shift your weight or lean on a cart.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center text-blue-900"><span className="text-blue-600 text-2xl mr-2">💥</span> The Sudden "Grab"</h3>
                            <p className="text-slate-700">Moving the wrong way sends a sharp spasm through your spine that leaves you breathless.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 ANATOMY SECTION (SEO Keywords) */}
            <section className="py-16 px-4 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-blue-950">It's Not Just "Bad Posture"</h2>
                        <p className="text-slate-600 text-lg">We identify the specific type of back pain you are experiencing.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">1. QL Muscle Spasm</h3>
                            <p className="text-slate-600 leading-relaxed">The Quadratus Lumborum (QL) is a deep stabilizing muscle. When it spasms, it can pull your pelvis out of alignment and mimic disc pain.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">2. SI Joint Dysfunction</h3>
                            <p className="text-slate-600 leading-relaxed">The Sacroiliac Joint connects your spine to your pelvis. If it gets "stuck" or too loose, it causes sharp, pinpoint pain on one side of the tailbone.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">3. Visceral Referral</h3>
                            <p className="text-slate-600 leading-relaxed">The Hidden Cause: Inflammation in the gut (intestines) or kidneys can refer dull, aching pain to the lower back. We check this first.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE "WHY IT FAILS" SECTION (The USP) */}
            <section className="py-20 px-4 bg-blue-950 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">The Sync Difference</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">Why Standard Massage Often Fails Back Pain</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Most treatments focus on the symptom: the tight back muscles. But <strong>why</strong> are they tight? Usually, they are hanging on for dear life because your core is weak or your hips are locked.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            If you just rub the sore spot, the pain returns in 3 days. We treat the <strong>System</strong>, not just the Symptom.
                        </p>
                        <Link href="/about" className="text-blue-400 font-bold border-b-2 border-blue-400 hover:text-white hover:border-white transition-all">
                            Read Our Clinical Philosophy →
                        </Link>
                    </div>
                    <div className="md:w-1/2 w-full">
                        {/* Comparison Table */}
                        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6 text-center text-blue-950">The Difference is Clear</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Approach</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Typical Spa</span>
                                    <span className="text-blue-900 font-bold text-center w-1/3">Sync Massage Therapy</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Assessment</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">None/Basic</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Orthopedic</span></span>
                                </div>
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <span className="text-gray-500 font-medium w-1/3">Technique</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">General Rubbing</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Specific Release</span></span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 font-medium w-1/3">Goal</span>
                                    <span className="text-gray-400 text-sm text-center w-1/3">Relaxation</span>
                                    <span className="text-blue-600 font-bold text-center w-1/3 flex justify-center"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Correction</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE SOLUTION: Hub Links as "Tools" */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Our Back Pain Toolkit</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">We use different tools depending on the <em>type</em> of back pain you have.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services/deep-tissue-massage/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🛠️</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Deep Tissue Release</h3>
                            <p className="text-sm text-slate-600">Best for "QL Spasms" and muscular tightness. We release the muscles clamping down on your spine.</p>
                        </Link>
                        <Link href="/services/visceral-manipulation/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🌀</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Visceral Mobilization</h3>
                            <p className="text-sm text-slate-600">Best for "Mystery Pain." We release tension in the abdomen (from the front) that pulls on the spine.</p>
                        </Link>
                        <Link href="/services/pain-management/" className="block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">🧠</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">Chronic Pain Program</h3>
                            <p className="text-sm text-slate-600">Best for pain lasting 3+ months. A gentle, neurological approach to calm a sensitized system.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. PATIENT ROADMAP: Reducing Friction */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Your First Visit Roadmap</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Audit</h3>
                            <p className="text-slate-600 text-sm">We don't guess. We screen your spine, hips, and core to find the root cause.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 border-4 border-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Release</h3>
                            <p className="text-slate-600 text-sm">Targeted hands-on work to stop the spasm cycle and restore mobility immediately.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-2 text-blue-900">The Plan</h3>
                            <p className="text-slate-600 text-sm">You leave with a clear recovery timeline and 1-2 simple home exercises.</p>
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
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Is massage safe if my back is in spasm?</h3>
                            <p className="text-slate-600 text-sm">Yes, but we treat it differently. We don't force deep pressure into a spasm (that makes it worse). We use gentle release techniques on surrounding muscles (glutes, hamstrings) to convince the nervous system to let go.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">What's the difference between you and a Chiropractor?</h3>
                            <p className="text-slate-600 text-sm">Chiropractors focus on skeletal alignment and joint manipulation. We focus on the soft tissue (muscles, fascia, tendons) that pulls those joints out of place. Often, the best results come from combining both!</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">How many sessions will I need?</h3>
                            <p className="text-slate-600 text-sm">Most acute back pain sees significant relief in 3-5 sessions. Chronic issues (lasting months/years) may require a longer maintenance plan combined with strengthening exercises.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-950 text-white">
                <h2 className="text-3xl font-bold mb-6">You Don't Have to Live in Pain</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Appointments often available same-week.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition-all text-lg shadow-xl">
                    Book Assessment Now
                </a>
            </section>
        </div>
    );
}
