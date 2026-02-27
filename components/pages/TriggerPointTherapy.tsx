"use client";

import { ServiceSchema } from '@/components/ServiceSchema';
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";

export function TriggerPointTherapy() {
    return (
        <div className="bg-background min-h-screen relative selection:bg-orange-100 selection:text-orange-900 overflow-hidden">
            <ServiceSchema
                type="service"
                name="Clinical Trigger Point Therapy in Colwood"
                description="Targeted clinical relief for muscle knots and referred pain at Sync Massage Therapy."
                slug="trigger-point-therapy"
                breadcrumbLabel="Trigger Point Therapy"
                faqItems={[
                    {
                        question: "What is a trigger point?",
                        answer: "A trigger point is a hyperirritable spot within a taut band of skeletal muscle. Commonly called a 'knot', it can cause localized pain or refer pain to other areas of the body when pressed."
                    },
                    {
                        question: "Does trigger point therapy hurt?",
                        answer: "It can be uncomfortable, often described as a 'good pain'. The pressure applied is firm and targeted, and you should quickly feel the muscle softening and the referred pain dissipating."
                    },
                    {
                        question: "How is this different from a regular massage?",
                        answer: "Instead of broad strokes over the entire muscle, we use sustained, targeted pressure on specific points to chemically alter the muscle tissue and force a reflex relaxation (the local twitch response)."
                    }
                ]}
            />

            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-100/40 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-yellow-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 3. Hero Section */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-orange-200 text-orange-700 bg-orange-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Clinical Relief
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Clinical Trigger Point Therapy in Colwood
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                Highly targeted, educational, and relieving therapy for the stubborn knots that just won't go away.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Targeted Treatment</a>
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square flex items-center justify-center bg-slate-100">
                                <Image
                                    src="/images/heroes/hero-trigger-point.png"
                                    alt="Trigger Point Therapy"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-full blur-3xl opacity-60" />
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
                                    <span className="text-orange-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">A deep 'knot' that sends pain into another area (e.g., shoulder knot causing a headache).</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-orange-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Muscle twitching when a specific spot is pressed.</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-orange-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Restricted range of motion in your neck, back, or shoulders.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-orange-600 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">A persistent, localized ache that foam rolling can't fix.</span>
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
                                The Anatomy of a Knot
                            </h2>
                            <p className="text-xl text-slate-700 leading-relaxed">
                                Trigger points form when muscle fibers get locked in a state of continuous contraction. This creates a miniature crisis in the tissue: blood flow is restricted, waste products build up, and the area becomes starved for oxygen. This chemical irritation sends pain signals both locally and to distant areas (referred pain).
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. The Diagnostic Approach & 7. The Sync Difference */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <GlassCard className="p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-orange-900 mb-4">Our Clinical Approach</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We don't just guess where it hurts. We use precise palpation for taut bands, local twitch response testing, and detailed referred pain mapping to trace your pain back to its true source.
                                </p>
                            </GlassCard>
                            <GlassCard className="p-8 rounded-3xl bg-orange-50/50">
                                <h3 className="text-2xl font-bold text-orange-900 mb-4">The Sync Difference</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    By combining RMT and Athletic Therapy skills, we don't just eliminate the trigger point—we assess the mechanical overload that caused it in the first place, giving you long-term resolution instead of temporary relief.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 bg-orange-50/50">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <Badge variant="outline" className="mb-4 border-orange-200 text-orange-800 bg-white">Clinical Tip</Badge>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">The Lacrosse Ball Rule</h3>
                        <p className="text-lg text-slate-700">
                            If you use a lacrosse ball at home, hold it on the tender spot for <strong>30-45 seconds until the pain naturally fades</strong>. Do not aggressively roll back and forth, as this creates friction and more inflammation.
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
                            <Link href="/conditions/neck-shoulder-pain/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-orange-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-orange-900 mb-3 group-hover:text-orange-700">
                                        Neck & Shoulder Pain →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/conditions/muscle-tension/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-orange-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-orange-900 mb-3 group-hover:text-orange-700">
                                        Muscle Tension →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/services/massage-therapy/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-orange-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-orange-900 mb-3 group-hover:text-orange-700">
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
                            <Link href="/our-team/daryl-stubbs/" className="text-orange-600 font-medium hover:text-orange-800 underline underline-offset-4">
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
                    description="Common questions about clinical trigger point therapy."
                    faqs={[
                        {
                            question: "What is a trigger point?",
                            answer: "A trigger point is a hyperirritable spot within a taut band of skeletal muscle. Commonly called a 'knot', it can cause localized pain or refer pain to other areas of the body when pressed."
                        },
                        {
                            question: "Does trigger point therapy hurt?",
                            answer: "It can be uncomfortable, often described as a 'good pain'. The pressure applied is firm and targeted, and you should quickly feel the muscle softening and the referred pain dissipating."
                        },
                        {
                            question: "How is this different from a regular massage?",
                            answer: "Instead of broad strokes over the entire muscle, we use sustained, targeted pressure on specific points to chemically alter the muscle tissue and force a reflex relaxation (the local twitch response)."
                        }
                    ]}
                />

                <LocationSection />
            </div>
        </div>
    );
}
