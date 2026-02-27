"use client";

import { ServiceSchema } from '@/components/ServiceSchema';
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";

export function FibromyalgiaTreatment() {
    return (
        <div className="bg-background min-h-screen relative selection:bg-purple-100 selection:text-purple-900 overflow-hidden">
            <ServiceSchema
                type="condition"
                name="Fibromyalgia Support & Management in Colwood"
                description="Highly empathetic, gentle, nervous-system focused support for Fibromyalgia."
                slug="fibromyalgia"
                breadcrumbLabel="Fibromyalgia Support"
                faqItems={[
                    {
                        question: "Is deep tissue massage safe for fibromyalgia?",
                        answer: "For many people with fibromyalgia, deep tissue massage can trigger severe flare-ups. We focus on gentle, nervous-system calming techniques (like myofascial release) to avoid overloading your pain receptors."
                    },
                    {
                        question: "How do you evaluate autonomic nervous system tone?",
                        answer: "We assess your breathing patterns, resting muscle tension, and overall subjective stress levels. This tells us how 'wound up' your fight-or-flight system is, so we can adjust our pressure accordingly."
                    },
                    {
                        question: "Can nutrition play a role in fibromyalgia management?",
                        answer: "Yes, nutrition can influence systemic inflammation and energy levels. While it doesn't 'cure' fibromyalgia, resolving nutritional deficits can help mitigate factors that worsen 'fibro fog' and fatigue."
                    }
                ]}
            />

            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-100/40 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 3. Hero Section */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Gentle & Empathetic Care
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Fibromyalgia Support & Management in Colwood
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                We focus on down-regulating an overactive nervous system using highly empathetic, gentle therapeutic techniques.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-purple-700 text-white hover:bg-purple-800 shadow-lg shadow-purple-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Gentle Assessment</a>
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square flex items-center justify-center bg-slate-100">
                                <Image
                                    src="/images/heroes/hero-fibromyalgia.png"
                                    alt="Fibromyalgia Treatment"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-60" />
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
                                    <span className="text-purple-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Experiencing widespread, unpredictable muscle pain.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-purple-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Dealing with extreme fatigue that doesn't improve with sleep.</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-purple-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Struggling with cognitive difficulties, often called "fibro fog."</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-purple-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Fearful that deep tissue massage will trigger a severe flare-up.</span>
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
                                Understanding the Nervous System
                            </h2>
                            <p className="text-xl text-slate-700 leading-relaxed">
                                Fibromyalgia involves central sensitization—your brain and spinal cord become highly reactive to signals that aren't normally painful. Instead of trying to "force" muscles to relax with deep pressure (which often backfires), our goal is to gently guide your autonomic nervous system from an active 'fight-or-flight' state down into a restoring 'rest-and-digest' rhythm.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. The Diagnostic Approach & 7. The Sync Difference */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <GlassCard className="p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-purple-900 mb-4">Our Clinical Approach</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We start with active pain scale monitoring, precise tender point awareness, and an evaluation of your autonomic nervous system tone. Your comfort dictates everything we do during the session.
                                </p>
                            </GlassCard>
                            <GlassCard className="p-8 rounded-3xl bg-purple-50/50">
                                <h3 className="text-2xl font-bold text-purple-900 mb-4">The Sync Difference</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    By bridging RMT, Athletic Therapy for mobility maintenance, and Nutritional guidance to address systemic inflammation, we offer a comprehensive support layer designed specifically to respect your sensitive threshold.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 bg-purple-50/50">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <Badge variant="outline" className="mb-4 border-purple-200 text-purple-800 bg-white">Clinical Tip</Badge>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Diaphragmatic Breathing</h3>
                        <p className="text-lg text-slate-700">
                            Practice diaphragmatic breathing for 5 minutes before bed. This manually stimulates the <strong>vagus nerve</strong>, shifting your body out of the 'fight or flight' state and calming an overactive nervous system.
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
                            <Link href="/services/myofascial-release/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-purple-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-purple-900 mb-3 group-hover:text-purple-700">
                                        Myofascial Release →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/services/relaxation-massage/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-purple-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-purple-900 mb-3 group-hover:text-purple-700">
                                        Relaxation Massage →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/services/nutrition-counseling/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-purple-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-purple-900 mb-3 group-hover:text-purple-700">
                                        Nutrition Counseling →
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
                            <Link href="/our-team/daryl-stubbs/" className="text-purple-600 font-medium hover:text-purple-800 underline underline-offset-4">
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
                    description="Common questions about fibromyalgia support and management."
                    faqs={[
                        {
                            question: "Is deep tissue massage safe for fibromyalgia?",
                            answer: "For many people with fibromyalgia, deep tissue massage can trigger severe flare-ups. We focus on gentle, nervous-system calming techniques (like myofascial release) to avoid overloading your pain receptors."
                        },
                        {
                            question: "How do you evaluate autonomic nervous system tone?",
                            answer: "We assess your breathing patterns, resting muscle tension, and overall subjective stress levels. This tells us how 'wound up' your fight-or-flight system is, so we can adjust our pressure accordingly."
                        },
                        {
                            question: "Can nutrition play a role in fibromyalgia management?",
                            answer: "Yes, nutrition can influence systemic inflammation and energy levels. While it doesn't 'cure' fibromyalgia, resolving nutritional deficits can help mitigate factors that worsen 'fibro fog' and fatigue."
                        }
                    ]}
                />

                <LocationSection />
            </div>
        </div>
    );
}
