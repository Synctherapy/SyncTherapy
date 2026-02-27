"use client";

import { ServiceSchema } from '@/components/ServiceSchema';
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";

export function ChronicDiseaseManagement() {
    return (
        <div className="bg-background min-h-screen relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
            <ServiceSchema
                type="condition"
                name="Chronic Disease Lifestyle Management in Colwood"
                description="Holistic support and lifestyle management for chronic conditions at Sync Massage Therapy in Colwood."
                slug="chronic-disease-management"
                breadcrumbLabel="Chronic Disease Management"
                faqItems={[
                    {
                        question: "How can lifestyle management help with chronic disease?",
                        answer: "By reviewing dietary habits and establishing safe physical activity thresholds, we help manage systemic inflammation and prevent flare-ups, supporting your overall medical treatments."
                    },
                    {
                        question: "Is this safe if I'm already receiving medical care?",
                        answer: "Yes. Our approach is designed to support and complement your existing medical treatments by focusing on safe mobility, pacing, and holistic nutrition."
                    },
                    {
                        question: "How do you avoid causing flare-ups?",
                        answer: "We use the 'traffic light' system to monitor subjective energy and carefully pace physical activity. Our clinical approach focuses on maintaining mobility without exhausting your body's reserves."
                    }
                ]}
            />

            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-teal-100/30 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 3. Hero Section */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-teal-200 text-teal-700 bg-teal-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Award-Winning Care
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Chronic Disease Lifestyle Management in Colwood
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                Focusing on root-cause biomechanics and holistic health to support your body naturally, without adding extra stress.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Assessment</a>
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square flex items-center justify-center bg-slate-100">
                                {/* Placeholder for Hero Image */}
                                <div className="text-center p-8">
                                    <span className="text-slate-400 font-medium text-lg">Supportive & Safe Care</span>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-100 to-blue-100 rounded-full blur-3xl opacity-60" />
                        </div>
                    </div>
                </div>

                {/* 4. Symptoms Checklist */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                Is This You?
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-teal-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Diagnosed with a chronic condition and feeling overwhelmed.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-teal-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Looking for natural ways to support your medical treatments.</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-teal-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Struggling with the physical fatigue of chronic illness.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-teal-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Seeking gentle ways to maintain mobility without causing pain.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 5. The Anatomy / Root Cause */}
                <section className="py-24 bg-white/50 border-y border-white/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                The Science of Chronic Management
                            </h2>
                            <p className="text-xl text-slate-700 leading-relaxed">
                                Living with a chronic condition places a heavy burden on your body's systems. Systemic inflammation, prolonged sympathetic nervous system activation, and muscular guarding can compound your fatigue. By addressing these physiological loads gently, we can help preserve your energy and optimize your body's functional capacity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. The Diagnostic Approach & 7. The Sync Difference */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <GlassCard className="p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Clinical Approach</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We start by reviewing your dietary habits and identifying systemic inflammatory triggers. We then establish safe physical activity thresholds that support your body without causing exhausting flare-ups.
                                </p>
                            </GlassCard>
                            <GlassCard className="p-8 rounded-3xl bg-blue-50/50">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">The Sync Difference</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We combine soft tissue support (RMT), movement adaptation (Athletic Therapy), and nutritional guidance (RHN) into one comprehensive plan. This integrated method resolves complex symptoms better than any single approach on its own.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 bg-teal-50/50">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <Badge variant="outline" className="mb-4 border-teal-200 text-teal-800 bg-white">Clinical Tip</Badge>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Pacing is Critical</h3>
                        <p className="text-lg text-slate-700">
                            Use the <strong>"traffic light" system</strong> to monitor your daily energy reserves. The goal is to avoid the boom-and-bust cycle by resting <em>before</em> you are completely exhausted.
                        </p>
                    </div>
                </section>

                {/* 9. The SEO Silo */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground tracking-tight">Supportive Care Services</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <Link href="/services/wellness-consultation/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700">
                                        Wellness Consultation →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/services/dietary-consultation/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700">
                                        Dietary Consultation →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/services/massage-therapy/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700">
                                        Massage Therapy →
                                    </h3>
                                </GlassCard>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 10. Practitioner Bio Block */}
                <section className="py-16 bg-white/50 border-y border-white/50">
                    <div className="container mx-auto px-4 max-w-3xl text-center flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-6 relative border-4 border-white shadow-lg">
                            <Image
                                src="/images/team/daryl-stubbs-headshot.jpg"
                                alt="Daryl Stubbs"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Clinical care provided by Daryl Stubbs, RMT, CAT(C) & RHN</h3>
                        <div className="mt-4">
                            <Link href="/our-team/daryl-stubbs/" className="text-blue-600 font-medium hover:text-blue-800 underline underline-offset-4">
                                Read Full Bio
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 11. Reviews Placeholder */}
                <section className="py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-12">Patient Experiences</h2>
                        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 max-w-4xl mx-auto shadow-xl">
                            {/* <!-- INSERT GOOGLE REVIEW WIDGET HERE --> */}
                            <p className="text-slate-500 italic">Google Reviews Widget Loading...</p>
                        </div>
                    </div>
                </section>

                {/* 12. FAQ */}
                <FaqSection
                    heading="Frequently Asked Questions"
                    description="Common questions about chronic disease lifestyle management."
                    faqs={[
                        {
                            question: "How can lifestyle management help with chronic disease?",
                            answer: "By reviewing dietary habits and establishing safe physical activity thresholds, we help manage systemic inflammation and prevent flare-ups, supporting your overall medical treatments."
                        },
                        {
                            question: "Is this safe if I'm already receiving medical care?",
                            answer: "Yes. Our approach is designed to support and complement your existing medical treatments by focusing on safe mobility, pacing, and holistic nutrition."
                        },
                        {
                            question: "How do you avoid causing flare-ups?",
                            answer: "We use the 'traffic light' system to monitor subjective energy and carefully pace physical activity. Our clinical approach focuses on maintaining mobility without exhausting your body's reserves."
                        }
                    ]}
                />

                <LocationSection />
            </div>
        </div>
    );
}
