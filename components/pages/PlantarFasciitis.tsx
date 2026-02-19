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

export function PlantarFasciitis() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Sync Therapy Plantar Fasciitis Treatment",
        "url": "https://synctherapy.ca/conditions/plantar-fasciitis/",
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
        "medicalSpecialty": "We treat the fascia, calves, and foot mechanics to stop the pain cycle.",
        "availableService": {
            "@type": "MedicalService",
            "name": "Plantar Fasciitis Treatment",
            "description": "Relief for Plantar Fasciitis and heel pain in Colwood & Langford. We treat the root cause: tight calves and foot immobility."
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
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-sky-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-cyan-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 1. Custom Hero Section - Side by Side */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column */}
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Foot Pain Relief
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Plantar Fasciitis & Foot Pain Treatment in Colwood
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                That "glass in the heel" feeling first thing in the morning isn't normal. We treat the fascia, calves, and foot mechanics to stop the pain cycle. Serving Langford and the West Shore.
                            </p>

                            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                                <p className="font-medium text-blue-900">
                                    Direct Billing to Pacific Blue Cross, Canada Life, Sun Life.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Assessment</a>
                                </Button>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/images/generated/plantar-fasciitis-relief.png"
                                    alt="Plantar fasciitis treatment in Colwood"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    unoptimized
                                />
                            </div>
                            {/* Decorative background blob behind image */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-60" />
                        </div>
                    </div>
                </div>

                {/* 2. Direct Billing Bar */}
                <div className="mt-16 lg:mt-24">
                    <DirectBillingBar />
                </div>

                {/* 3. Symptoms Checklist */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                Common Symptoms in Langford & Colwood
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-blue-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <strong className="block text-lg text-blue-900 mb-1">First Step Pain</strong>
                                        <span className="text-slate-600">Sharp pain when you first step out of bed.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-blue-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <strong className="block text-lg text-blue-900 mb-1">The "Galloping Goose" Flare</strong>
                                        <span className="text-slate-600">Heel throbbing after a run or long walk on the trails.</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-blue-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <strong className="block text-lg text-blue-900 mb-1">Retail Feet</strong>
                                        <span className="text-slate-600">Burning arches after a shift standing on concrete (common for retail workers in West Shore).</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-blue-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <strong className="block text-lg text-blue-900 mb-1">Tight Calves</strong>
                                        <span className="text-slate-600">A feeling that your Achilles tendon is pulling tight.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. Anatomy: Types of Foot Pain */}
                <section className="py-24 bg-white/50 border-y border-white/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                Types of Foot Pain We Treat
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">🦶</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">1. Classic Plantar Fasciitis</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Inflammation of the thick band of tissue running across the bottom of your foot. Usually causes heel pain.
                                </p>
                            </GlassCard>

                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">🏋️‍♂️</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">2. Achilles Tendonitis</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Pain at the back of the heel. The Achilles and Plantar Fascia are connected; tightness in one pulls the other.
                                </p>
                            </GlassCard>

                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">🏔️</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">3. Fallen Arches</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Mechanical collapse of the arch causing strain on the inner ankle and foot muscles. Common in Metchosin hikers.
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
                                Our Treatment Approach
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/myofascial-release/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                                        Myofascial Release →
                                    </h3>
                                    <p className="text-slate-600 text-sm font-medium">
                                        We manually release the tight fascia in the foot and the deep calf muscles pulling on the heel.
                                    </p>
                                </GlassCard>
                            </Link>

                            <Link href="/services/sports-injury-rehab/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                                        Gait Analysis (AT) →
                                    </h3>
                                    <p className="text-slate-600 text-sm font-medium">
                                        Our Athletic Therapists analyze <em>how</em> you run or walk to correct the root mechanical error.
                                    </p>
                                </GlassCard>
                            </Link>

                            <Link href="/services/physical-rehabilitation/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                                        Foot Strengthening →
                                    </h3>
                                    <p className="text-slate-600 text-sm font-medium">
                                        "Short foot" exercises to rebuild the arch and support the fascia naturally.
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

                <LocationSection />
            </div>
        </div>
    );
}
