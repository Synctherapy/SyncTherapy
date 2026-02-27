"use client";

import { ServiceSchema } from '@/components/ServiceSchema';
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";

export function MensHealthConsulting() {
    return (
        <div className="bg-background min-h-screen relative selection:bg-slate-200 selection:text-slate-900 overflow-hidden">
            <ServiceSchema
                type="service"
                name="Holistic Men's Health Consulting in Colwood"
                description="Direct, performance-focused, and preventative men's holistic health consulting."
                slug="mens-health-consulting"
                breadcrumbLabel="Men's Health Consulting"
                faqItems={[
                    {
                        question: "Why do I need specific consulting for men's health?",
                        answer: "Men often ignore early warning signs of joint stiffness or metabolic decline until it forces them to stop their sport. Our consulting is proactive, focusing on preserving strength, cardiovascular baselines, and testosterone-supporting nutrition."
                    },
                    {
                        question: "Does this involve lab work or blood tests?",
                        answer: "We do not diagnose or order blood work directly. We evaluate your physical baselines, metabolic habits, and nutritional intake. If we identify cardiovascular or hormonal red flags, we will refer you back to your doctor for specific blood panels."
                    },
                    {
                        question: "What is the primary focus of these sessions?",
                        answer: "Longevity and performance. We want to keep you active in your 40s, 50s, 60s, and beyond by addressing joint mobility restrictions and refining your dietary fueling strategies."
                    }
                ]}
            />

            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-slate-300/30 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-zinc-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 3. Hero Section */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-slate-300 text-slate-700 bg-slate-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Preventative Care
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Holistic Men's Health Consulting in Colwood
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                Direct, performance-focused strategies to keep you strong, mobile, and active as you age.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-slate-800 text-white hover:bg-slate-900 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Strategy Session</a>
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square flex items-center justify-center bg-slate-100">
                                <div className="text-center p-8">
                                    <span className="text-slate-400 font-medium text-lg">Performance & Longevity</span>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-slate-200 to-zinc-200 rounded-full blur-3xl opacity-60" />
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
                                    <span className="text-slate-700 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Declining energy or stamina during workouts.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-slate-700 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Ignoring chronic stiffness in the lower back and hips.</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-slate-700 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Seeking nutritional strategies to support healthy testosterone.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-slate-700 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Wanting proactive physical maintenance as you age.</span>
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
                                The Roadmap for Men's Longevity
                            </h2>
                            <p className="text-xl text-slate-700 leading-relaxed">
                                Age-associated physical decline isn't inevitable; it is largely dictated by how we manage our mechanical loads and fuel our metabolic systems. Ignoring low-level joint pain alters your biomechanics efficiently over time, leading to catastrophic injury later. Combined with undetected metabolic shifts, these factors rapidly diminish athletic capacity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. The Diagnostic Approach & 7. The Sync Difference */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <GlassCard className="p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Clinical Approach</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We conduct strength and mobility baseline evaluations alongside cardiovascular risk factor awareness and metabolic rate discussions to pinpoint areas where your engine is losing efficiency.
                                </p>
                            </GlassCard>
                            <GlassCard className="p-8 rounded-3xl bg-slate-100/50">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Sync Difference</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We combine Athletic Therapy assessments with Registered Holistic Nutrition consulting to deliver a direct, no-nonsense plan. It's about optimizing what works and discarding training or dietary dogma that no longer serves your body.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 bg-slate-100/50">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <Badge variant="outline" className="mb-4 border-slate-300 text-slate-800 bg-white">Clinical Tip</Badge>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Prioritize Mobility</h3>
                        <p className="text-lg text-slate-700">
                            Don't ignore your mobility. Adding just <strong>10 minutes of active stretching</strong> to your daily routine can prevent the chronic joint stiffness that forces many active men to abandon their favorite sports later in life.
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
                            <Link href="/services/athletic-therapy/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-slate-300 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700">
                                        Athletic Therapy →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/conditions/cardiovascular-health/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-slate-300 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700">
                                        Cardiovascular Health →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/services/dietary-consultation/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-slate-300 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700">
                                        Dietary Consultation →
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
                            <Link href="/our-team/daryl-stubbs/" className="text-slate-600 font-medium hover:text-slate-800 underline underline-offset-4">
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
                    description="Common questions about men's health consulting."
                    faqs={[
                        {
                            question: "Why do I need specific consulting for men's health?",
                            answer: "Men often ignore early warning signs of joint stiffness or metabolic decline until it forces them to stop their sport. Our consulting is proactive, focusing on preserving strength, cardiovascular baselines, and testosterone-supporting nutrition."
                        },
                        {
                            question: "Does this involve lab work or blood tests?",
                            answer: "We do not diagnose or order blood work directly. We evaluate your physical baselines, metabolic habits, and nutritional intake. If we identify cardiovascular or hormonal red flags, we will refer you back to your doctor for specific blood panels."
                        },
                        {
                            question: "What is the primary focus of these sessions?",
                            answer: "Longevity and performance. We want to keep you active in your 40s, 50s, 60s, and beyond by addressing joint mobility restrictions and refining your dietary fueling strategies."
                        }
                    ]}
                />

                <LocationSection />
            </div>
        </div>
    );
}
