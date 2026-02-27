"use client";

import { ServiceSchema } from '@/components/ServiceSchema';
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";

export function CardiovascularHealth() {
    return (
        <div className="bg-background min-h-screen relative selection:bg-rose-100 selection:text-rose-900 overflow-hidden">
            <ServiceSchema
                type="condition"
                name="Cardiovascular Health & Nutrition Support in Colwood"
                description="Preventative, heart-healthy support through nutrition and lifestyle in Colwood."
                slug="cardiovascular-health"
                breadcrumbLabel="Cardiovascular Health"
                faqItems={[
                    {
                        question: "How can nutrition support cardiovascular health?",
                        answer: "Nutrition plays a critical role in managing systemic inflammation, optimizing fat intake (balancing omega-3 to omega-6 ratios), and supplying enough soluble fiber to help remove excess cholesterol."
                    },
                    {
                        question: "Why is stress tracking important for the heart?",
                        answer: "Chronic stress keeps your sympathetic nervous system activated, which can negatively impact blood pressure. We help trace lifestyle stress to support nervous system regulation."
                    },
                    {
                        question: "Is this a medical treatment for heart disease?",
                        answer: "No, we do not diagnose or treat medical heart disease. We provide holistic nutritional consulting and safe exercise guidance that complement your primary medical care."
                    }
                ]}
            />

            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-100/30 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-orange-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 3. Hero Section */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-rose-200 text-rose-700 bg-rose-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Platinum Winner
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Cardiovascular Health & Nutrition Support in Colwood
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                Proactive, educational guidance to support your heart through balanced nutrition and safe exercise habits.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Assessment</a>
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square flex items-center justify-center bg-slate-100">
                                <Image
                                    src="/images/heroes/hero-cardio.png"
                                    alt="Cardiovascular Health"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-rose-100 to-orange-100 rounded-full blur-3xl opacity-60" />
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
                                    <span className="text-rose-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Looking to proactively support your heart health through diet.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-rose-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Wanting to incorporate more heart-healthy fats into your meals.</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-rose-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Seeking safe exercise guidelines for a healthy heart.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-rose-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Experiencing chronic stress that impacts your blood pressure.</span>
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
                                The Science of Heart Health
                            </h2>
                            <p className="text-xl text-slate-700 leading-relaxed">
                                Cardiovascular wellness is closely tied to systemic inflammation and lipid balance. By providing your body with optimal nutrients, managing the stress load on your nervous system, and maintaining active mechanics, we can create a supportive environment for your heart's long-term health.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. The Diagnostic Approach & 7. The Sync Difference */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <GlassCard className="p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-rose-900 mb-4">Our Clinical Approach</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We provide comprehensive dietary fat analysis, examining your omega-3 to omega-6 ratios. We also conduct a soluble fiber intake assessment and implement lifestyle stress tracking to build a clear picture of your current preventative habits.
                                </p>
                            </GlassCard>
                            <GlassCard className="p-8 rounded-3xl bg-rose-50/50">
                                <h3 className="text-2xl font-bold text-rose-900 mb-4">The Sync Difference</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Our approach bridges the gap between active rehab and holistic nutrition. By combining Athletic Therapy principles for safe exercise with Registered Holistic Nutrition guidelines, we provide a complete, supportive package for your heart.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 bg-rose-50/50">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <Badge variant="outline" className="mb-4 border-rose-200 text-rose-800 bg-white">Clinical Tip</Badge>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Soluble Fiber Intake</h3>
                        <p className="text-lg text-slate-700">
                            Increase your intake of soluble fiber (like oats, beans, and lentils). Soluble fiber naturally <strong>binds to excess cholesterol</strong> in the digestive tract, aiding in its safe removal from the body.
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
                            <Link href="/services/cholesterol-diet/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-rose-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-rose-900 mb-3 group-hover:text-rose-700">
                                        Cholesterol Management →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/services/nutrition-counseling/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-rose-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-rose-900 mb-3 group-hover:text-rose-700">
                                        Nutrition Counseling →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/services/exercise-therapy/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-rose-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-rose-900 mb-3 group-hover:text-rose-700">
                                        Exercise Therapy →
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
                            <Link href="/our-team/daryl-stubbs/" className="text-rose-600 font-medium hover:text-rose-800 underline underline-offset-4">
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
                    description="Common questions about cardiovascular health and nutrition support."
                    faqs={[
                        {
                            question: "How can nutrition support cardiovascular health?",
                            answer: "Nutrition plays a critical role in managing systemic inflammation, optimizing fat intake (balancing omega-3 to omega-6 ratios), and supplying enough soluble fiber to help remove excess cholesterol."
                        },
                        {
                            question: "Why is stress tracking important for the heart?",
                            answer: "Chronic stress keeps your sympathetic nervous system activated, which can negatively impact blood pressure. We help trace lifestyle stress to support nervous system regulation."
                        },
                        {
                            question: "Is this a medical treatment for heart disease?",
                            answer: "No, we do not diagnose or treat medical heart disease. We provide holistic nutritional consulting and safe exercise guidance that complement your primary medical care."
                        }
                    ]}
                />

                <LocationSection />
            </div>
        </div>
    );
}
