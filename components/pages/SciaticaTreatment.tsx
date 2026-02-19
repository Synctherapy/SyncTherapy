"use client";

import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { DirectBillingBar } from "@/components/sections/direct-billing-bar";
import { FirstVisitRoadmap } from "@/components/sections/first-visit-roadmap";

export function SciaticaTreatment() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Sync Therapy Sciatica Treatment",
        "url": "https://synctherapy.ca/conditions/sciatica/",
        "logo": "https://synctherapy.ca/images/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-250-812-8698",
            "contactType": "customer service"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "328 Wale Rd #120",
            "addressLocality": "Colwood",
            "addressRegion": "BC",
            "postalCode": "V9B 0J8",
            "addressCountry": "CA"
        },
        "medicalSpecialty": "To treat sciatica, we identify where the nerve is pinched and relieve the pressure.",
        "availableService": {
            "@type": "MedicalService",
            "name": "Sciatica Treatment",
            "description": "Sciatica relief in Colwood & Langford. We treat piriformis syndrome, disc herniations, and shooting leg pain."
        }
    };

    return (
        <div className="bg-background min-h-screen relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-teal-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 1. Custom Hero Section - Side by Side */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column */}
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Nerve Pain Relief
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Sciatica & Leg Pain Treatment in Colwood & Langford
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                Is shooting pain down your leg making it impossible to drive or sit? We identify where the nerve is pinched and relieve the pressure. Serving the West Shore.
                            </p>

                            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                                <p className="font-medium text-blue-900">
                                    Direct Billing to Pacific Blue Cross, Canada Life, Sun Life.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Sciatica Assessment</a>
                                </Button>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/images/generated/sciatica-relief-colwood.png"
                                    alt="Sciatica treatment in Colwood"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    unoptimized
                                />
                            </div>
                            {/* Decorative background blob behind image */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60" />
                        </div>
                    </div>
                </div>

                {/* 2. Direct Billing Bar */}
                <div className="mt-16 lg:mt-24">
                    <DirectBillingBar />
                </div>

                {/* 3. Symptoms Checklist (The "Is this you?" Hook) */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                Signs of Sciatic Nerve Irritation
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-blue-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <strong className="block text-lg text-blue-900 mb-1">The "Electric Shock"</strong>
                                        <span className="text-slate-600">Sharp, shooting pain traveling from the glute down the thigh to the foot.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-blue-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <strong className="block text-lg text-blue-900 mb-1">Numbness & Tingling</strong>
                                        <span className="text-slate-600">Pins and needles in the toes or calf.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-blue-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <strong className="block text-lg text-blue-900 mb-1">The "Colwood Crawl" Ache</strong>
                                        <span className="text-slate-600">Deep, throbbing pain that gets worse while driving or sitting for long periods.</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-blue-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <strong className="block text-lg text-blue-900 mb-1">Morning Stiffness</strong>
                                        <span className="text-slate-600">Difficulty standing up straight first thing in the morning.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-blue-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <strong className="block text-lg text-blue-900 mb-1">Weakness</strong>
                                        <span className="text-slate-600">Feeling like your leg might "give out" or difficulty lifting your toes (drop foot).</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. Anatomy: Types of Sciatica */}
                <section className="py-24 bg-white/50 border-y border-white/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                It's Not Always the Spine: Types of Sciatica
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">🍑</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">1. Piriformis Syndrome</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    The sciatic nerve runs directly under (or through) the Piriformis muscle in your glute. When this muscle is tight, it strangles the nerve. Very common in Langford office workers.
                                </p>
                            </GlassCard>

                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">🦴</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">2. Disc Herniation</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    A bulging disc in the lower back (L4-L5 or L5-S1) presses on the nerve root exiting the spine. This typically causes pain that worsens when bending forward.
                                </p>
                            </GlassCard>

                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">⏳</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">3. Spinal Stenosis</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    A narrowing of the spinal canal (often age-related) that compresses the nerves. This pain usually improves when sitting or leaning forward.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 5. The Solution (Hub Links) */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                How We Treat Sciatica
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                We use a "Hybrid Approach" combining soft tissue release with nerve flossing exercises.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/deep-tissue-massage/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                                        Deep Tissue Decompression →
                                    </h3>
                                    <p className="text-slate-600 text-sm font-medium">
                                        Releasing the Piriformis and Glute muscles to take pressure off the nerve immediately.
                                    </p>
                                </GlassCard>
                            </Link>

                            <Link href="/services/visceral-manipulation/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                                        Visceral Manipulation →
                                    </h3>
                                    <p className="text-slate-600 text-sm font-medium">
                                        Reducing pelvic congestion. Sometimes the pressure comes from organs sitting on the pelvic floor.
                                    </p>
                                </GlassCard>
                            </Link>

                            <Link href="/services/physical-rehabilitation/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                                        Nerve Flossing Rehab →
                                    </h3>
                                    <p className="text-slate-600 text-sm font-medium">
                                        Specific exercises to help the nerve "glide" freely again without snagging.
                                    </p>
                                </GlassCard>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 6. Testimonials */}
                <section className="py-24 relative bg-blue-50/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                                What Locals Say
                            </h2>
                        </div>
                        <GlassCard className="bg-white/40 backdrop-blur-md border-white/60 shadow-xl p-8 rounded-3xl">
                            <GoogleReviewsColumns />
                        </GlassCard>
                    </div>
                </section>

                {/* 7. Roadmap */}
                <FirstVisitRoadmap />

                {/* 8. FAQ */}
                <FaqSection
                    heading="Common Questions"
                    description="Answers to your questions about sciatica treatment."
                    faqs={[
                        {
                            question: "Do you see patients from Langford?",
                            answer: "Yes! We are located in the Coastal Offices in Colwood, just minutes from Langford and Westhills."
                        },
                        {
                            question: "Should I stretch it?",
                            answer: "Be careful. If it's a disc issue, aggressive stretching can make it worse. We recommend 'Nerve Flossing' instead of static stretching."
                        },
                        {
                            question: "Do you direct bill?",
                            answer: "Yes, we bill directly to Pacific Blue Cross, Canada Life, and most major insurers for West Shore residents."
                        }
                    ]}
                />

                <LocationSection />
            </div>
        </div>
    );
}
