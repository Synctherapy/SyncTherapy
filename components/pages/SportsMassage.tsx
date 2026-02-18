"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { DirectBillingBar } from "@/components/sections/direct-billing-bar";
import { FirstVisitRoadmap } from "@/components/sections/first-visit-roadmap";
import { Pricing } from "@/components/ui/pricing";

export function SportsMassage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Sync Massage Therapy",
        "url": "https://synctherapy.ca/services/sports-massage-therapy",
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
        "medicalSpecialty": "SportsPhysicalTherapy",
        "availableService": {
            "@type": "MedicalService",
            "name": "Sports Massage Therapy",
            "description": "Sports massage for athletes, runners, and active individuals in Colwood & West Shore."
        }
    };

    const pricingPlans = [
        {
            name: "75 Minute Massage",
            price: "157.50",
            period: "per session",
            features: [
                "Extended recovery time",
                "Deep tissue & flushing focus",
                "Direct Billing Available",
                "Detailed assessment included"
            ],
            description: "Ideal for addressing multiple areas or complex conditions.",
            buttonText: "Book 75 Minutes",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
        {
            name: "Initial Assessment",
            price: "130",
            period: "60 minutes",
            features: [
                "Comprehensive health history review",
                "Orthopedic assessment",
                "Targeted treatment plan",
                "Hands-on treatment included",
                "Direct Billing Available"
            ],
            description: "Required for all new patients to establish a baseline for care.",
            buttonText: "Book Initial Visit",
            href: "https://synctherapy.janeapp.com/",
            isPopular: true,
        },
        {
            name: "90 Minute Massage",
            price: "178.50",
            period: "per session",
            features: [
                "Maximum hands-on time",
                "Full body restoration",
                "Combine deep tissue & relaxation",
                "Direct Billing Available",
                "Extended Recovery"
            ],
            description: "The ultimate session for deep recovery and relaxation.",
            buttonText: "Book 90 Minutes",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
    ];

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
                                Voted Best Rehab Clinic (2022, 2023, 2024 Community Votes)
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Sports Massage & Athletic Recovery in Colwood
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                Train harder and recover faster. Specialized RMT treatments for West Shore athletes, runners, and weekend warriors.
                            </p>

                            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                                <p className="font-medium text-blue-900">
                                    Located 1 min from Juan de Fuca Rec Centre & Starlight Stadium.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Your Recovery Session</a>
                                </Button>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/images/generated/massage-sports-recovery.png"
                                    alt="Sports massage therapy for athletic recovery in Colwood"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
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

                {/* 3. Who We Treat Grid */}
                <section id="problem-solution" className="py-24 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                Who We Treat
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1: The Endurance Athlete */}
                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">🏃</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">The Endurance Athlete</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Training for the Royal Victoria Marathon or running the Galloping Goose? We target <Link href="/services/myofascial-release" className="text-blue-600 underline">IT bands</Link>, calves, and hip flexors to keep your stride fluid.
                                </p>
                            </GlassCard>

                            {/* Card 2: The Team Player */}
                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-6">🏉</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">The Team Player</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Rugby, Soccer, or Hockey at Westhills? We flush out metabolic waste and treat impact-related stiffness to get you game-ready.
                                </p>
                            </GlassCard>

                            {/* Card 3: The Gym Goer */}
                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-6">🏋️</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">The Gym Goer</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Lifting at the Y or local CrossFit? We use Deep Tissue to release chest/shoulder tightness and improve your lifting mechanics.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 4. The Sync Massage Therapy Difference */}
                <section className="py-24 bg-white/50 border-y border-white/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                                    The Sync Massage Therapy Difference
                                </h2>
                                <p className="text-xl text-slate-700 leading-relaxed font-light">
                                    We treat athletes differently. Our approach combines PNF Stretching, Myofascial Release, and Trigger Point Therapy to restore range of motion.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Looking for acute injury rehab? Check out our Athletic Therapy program for specific injury assessment and field care.
                                </p>

                                <div className="bg-blue-50/80 p-8 rounded-2xl border border-blue-100 mt-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                                            <Image
                                                src="/images/daryl-stubbs-thumb.jpg"
                                                alt="Daryl Stubbs RMT"
                                                width={64}
                                                height={64}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-blue-900 text-lg">
                                                <Link href="/our-team/rmt-daryl-stubbs/" className="hover:underline hover:text-blue-700 transition-colors">
                                                    Meet the Expert: Daryl Stubbs, RMT & Clinic Owner
                                                </Link>
                                            </h4>
                                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                                                Daryl brings 7+ years of experience working with athletes of all levels. Whether you are prepping for a competition or recovering from a season, his goal is to keep you in the game.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Static Social Proof Grid - Reusing styling from Deep Tissue but with custom content */}
                            <div className="flex-1">
                                <div className="grid gap-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                                        <div className="flex gap-1 text-yellow-400 mb-2">★★★★★</div>
                                        <p className="text-slate-700 italic mb-2">"Supportive and so knowledgeable… the best experience I’ve had with a healthcare practitioner."</p>
                                        <div className="text-sm font-bold text-slate-900">– Jesse R.</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                                        <div className="flex gap-1 text-yellow-400 mb-2">★★★★★</div>
                                        <p className="text-slate-700 italic mb-2">"The most knowledgeable and effective massage therapist I’ve been treated by. Immediate and lasting relief."</p>
                                        <div className="text-sm font-bold text-slate-900">– Darby</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                                        <div className="flex gap-1 text-yellow-400 mb-2">★★★★★</div>
                                        <p className="text-slate-700 italic mb-2">"Daryl’s accurate diagnosis and prompt treatment were exactly what I needed to begin feeling better."</p>
                                        <div className="text-sm font-bold text-slate-900">– Steve</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Pricing */}
                <section className="py-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                            Pricing For Sports Massage
                        </h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Transparent pricing. No hidden fees. <Link href="/direct-billing/" className="text-blue-600 underline hover:text-blue-800">Direct Billing</Link> available for most insurance providers.
                        </p>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="flex justify-center">
                            <div className="w-full max-w-5xl">
                                <Pricing
                                    plans={pricingPlans}
                                    title=""
                                    description=""
                                />
                            </div>
                        </div>
                        <p className="pt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto italic">
                            * GST is included in all prices. Rates are subject to change. Covered by most insurance plans (Pacific Blue Cross, Canada Life, etc). See Direct Billing.
                        </p>
                    </div>
                </section>

                {/* 6. Testimonials Widget */}
                <section className="py-24 relative bg-blue-50/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                                What Colwood Locals Say
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "When should I get a massage: Before or After an event?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Pre-Event: 2-3 days before to prime muscles (not too deep). Post-Event: 24-48 hours after to flush waste and reduce soreness. Immediately after can sometimes be too intense."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is this different from Athletic Therapy?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes. Sports Massage focuses on tissue health, recovery, and maintenance. Athletic Therapy is a distinct profession focused on acute injury assessment, field care, and rehabilitation."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you treat non-athletes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Absolutely. If you have an active job or lifestyle, 'Sports Massage' is simply a focused, results-driven treatment style."
                                    }
                                }
                            ]
                        })
                    }}
                />
                <FaqSection
                    heading="Performance & Recovery FAQ"
                    description="Answers to common questions about sports massage."
                    faqs={[
                        {
                            question: "When should I get a massage: Before or After an event?",
                            answer: "Pre-Event: 2-3 days before to prime muscles (not too deep). Post-Event: 24-48 hours after to flush waste and reduce soreness. Immediately after can sometimes be too intense."
                        },
                        {
                            question: "Is this different from Athletic Therapy?",
                            answer: "Yes. Sports Massage focuses on tissue health, recovery, and maintenance. Athletic Therapy is a distinct profession focused on acute injury assessment, field care, and rehabilitation."
                        },
                        {
                            question: "Do you treat non-athletes?",
                            answer: "Absolutely. If you have an active job or lifestyle, 'Sports Massage' is simply a focused, results-driven treatment style."
                        }
                    ]}
                />

                {/* 9. Related Services Footer */}
                <section className="py-16 border-t border-slate-200 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-8">Related Services in the West Shore</h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            <Link href="/services/athletic-therapy/" className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all">
                                Athletic Therapy
                            </Link>
                            <Link href="/services/deep-tissue-massage/" className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all">
                                Deep Tissue Massage
                            </Link>
                            <Link href="/services/visceral-manipulation-victoria/" className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all">
                                Visceral Manipulation
                            </Link>
                        </div>
                    </div>
                </section>

                <LocationSection />
            </div>
        </div>
    );
}
