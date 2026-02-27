"use client";

import { ServiceSchema } from '@/components/ServiceSchema';
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";

export function BaseballInjuries() {
    return (
        <div className="bg-background min-h-screen relative selection:bg-red-100 selection:text-red-900 overflow-hidden">
            <ServiceSchema
                type="condition"
                name="Baseball Injury Rehab & Treatment in Colwood"
                description="Sport-specific, biomechanical rehab for baseball and softball players in Colwood."
                slug="baseball-injuries"
                breadcrumbLabel="Baseball Injuries"
                faqItems={[
                    {
                        question: "Why does my shoulder hurt only when throwing?",
                        answer: "Throwing places extreme eccentric loads on the rotator cuff as it acts as the 'brakes' for your arm. If your internal/external rotation ratio is off, or if your scapula lacks stability, this load strains the front of the shoulder."
                    },
                    {
                        question: "How do you test for a baseball-specific injury?",
                        answer: "We perform a throwing mechanics assessment, evaluate your shoulder's internal/external rotation balance, and use valgus stress testing to check the stability of your elbow's UCL."
                    },
                    {
                        question: "Can I keep playing while receiving treatment?",
                        answer: "It depends on the severity. Often, we can modify your load (pitch count or throwing intensity) and implement a progressive rehab plan that keeps you active while the tissues heal."
                    }
                ]}
            />

            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-100/40 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-zinc-200/50 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 3. Hero Section */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-red-200 text-red-700 bg-red-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Sport-Specific Care
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Baseball Injury Rehab & Treatment in Colwood
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                Progressive, biomechanical treatments to keep you throwing heat and swinging hard without the shoulder or elbow pain.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-red-700 text-white hover:bg-red-800 shadow-lg shadow-red-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Baseball Assessment</a>
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square flex items-center justify-center bg-slate-100">
                                <Image
                                    src="/images/heroes/hero-baseball.png"
                                    alt="Baseball Injury Rehab"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-100 to-zinc-200 rounded-full blur-3xl opacity-60" />
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
                                    <span className="text-red-700 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Sharp pinch in the front of the shoulder when throwing.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-red-700 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Inner elbow pain after pitching or during acceleration.</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="space-y-6">
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-red-700 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Rotator cuff fatigue or a "dead arm" feeling.</span>
                                    </div>
                                </li>
                                <li className="flex items-start bg-white/50 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm">
                                    <span className="text-red-700 mr-4 text-2xl">✓</span>
                                    <div>
                                        <span className="text-slate-700 font-medium">Core and oblique tightness from repetitive swinging.</span>
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
                                The Biomechanics of Throwing
                            </h2>
                            <p className="text-xl text-slate-700 leading-relaxed">
                                Baseball asks your body to generate massive rotational force and then abruptly stop it. A 90mph fastball puts incredible valgus stress on the elbow and demands extreme eccentric deceleration from the rotator cuff. When core stability is lost or the shoulder capsule becomes tight, the smaller tissues bear the brunt of the kinetic chain, leading to structural micro-tears.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. The Diagnostic Approach & 7. The Sync Difference */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <GlassCard className="p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-red-900 mb-4">Our Clinical Approach</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We analyze your throwing mechanics and assess your shoulder's internal-to-external rotation ratio. We also perform targeted ligamentous testing, including valgus stress tests on the inner elbow (UCL) to rule out serious laxity.
                                </p>
                            </GlassCard>
                            <GlassCard className="p-8 rounded-3xl bg-red-50/50">
                                <h3 className="text-2xl font-bold text-red-900 mb-4">The Sync Difference</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    As Athletic Therapists, we understand the specific demands of the sport. We don't just treat the inflamed tendon; we reconnect the kinetic chain from your hips, through your core, directly out to your fingertips for a true, progressive return-to-play.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 8. At-Home Tip */}
                <section className="py-16 bg-red-50/50">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <Badge variant="outline" className="mb-4 border-red-200 text-red-800 bg-white">Clinical Tip</Badge>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Eccentric Strengthening</h3>
                        <p className="text-lg text-slate-700">
                            Focus on eccentric (lowering) strengthening of the rotator cuff. The cuff muscles have to act as the <strong>"brakes"</strong> to slow your arm down after releasing the ball, which is where most tissue damage occurs.
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
                            <Link href="/conditions/rotator-cuff-injury/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-red-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-red-900 mb-3 group-hover:text-red-700">
                                        Rotator Cuff Injury →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/services/athletic-therapy/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-red-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-red-900 mb-3 group-hover:text-red-700">
                                        Athletic Therapy →
                                    </h3>
                                </GlassCard>
                            </Link>
                            <Link href="/services/sports-massage/" className="group">
                                <GlassCard className="p-8 rounded-3xl h-full hover:border-red-200 transition-all hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-red-900 mb-3 group-hover:text-red-700">
                                        Sports Massage →
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
                            <Link href="/our-team/daryl-stubbs/" className="text-red-600 font-medium hover:text-red-800 underline underline-offset-4">
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
                    description="Common questions about baseball injury rehab."
                    faqs={[
                        {
                            question: "Why does my shoulder hurt only when throwing?",
                            answer: "Throwing places extreme eccentric loads on the rotator cuff as it acts as the 'brakes' for your arm. If your internal/external rotation ratio is off, or if your scapula lacks stability, this load strains the front of the shoulder."
                        },
                        {
                            question: "How do you test for a baseball-specific injury?",
                            answer: "We perform a throwing mechanics assessment, evaluate your shoulder's internal/external rotation balance, and use valgus stress testing to check the stability of your elbow's UCL."
                        },
                        {
                            question: "Can I keep playing while receiving treatment?",
                            answer: "It depends on the severity. Often, we can modify your load (pitch count or throwing intensity) and implement a progressive rehab plan that keeps you active while the tissues heal."
                        }
                    ]}
                />

                <LocationSection />
            </div>
        </div>
    );
}
