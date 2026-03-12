"use client";

import { ServiceSchema } from '@/components/ServiceSchema';
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import GoogleReviewWidget from "@/components/GoogleReviewWidget";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Pricing } from "@/components/ui/pricing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import NumberFlow from "@number-flow/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import {
    Calendar,
    ClipboardList,
    Activity,
    Award,
    Star,
    CreditCard,
    ShieldCheck,
    Phone,
    Zap,
    CircleSlash,
    Users,
    Banknote,
    Link2,
    RotateCcw,
    TrendingDown,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

/*
  Z-INDEX SCALE (documented per UI/UX audit)
  ───────────────────────────────────────────
  -10  Decorative lines (plan connector)
    0  Background blobs (fixed)
   10  Page content (sections, step circles)
   20  Elevated content (pricing popular card)
   50  Sticky CTA (mobile + desktop)
  100  Scroll progress bar
*/

const pricingPlans = [
    {
        name: "75 Minute Massage",
        price: "157.50",
        period: "per session",
        features: [
            "Extended hands-on time",
            "Deep tissue & relaxation combination",
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
        description: "Your first visit. Assessment + treatment in one session.",
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
            "Stress reduction focus"
        ],
        description: "The ultimate session for deep recovery and relaxation.",
        buttonText: "Book 90 Minutes",
        href: "https://synctherapy.janeapp.com/",
        isPopular: false,
    },
];

export function NewPatients() {
    return (
        <div className="bg-background min-h-screen relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
            <ServiceSchema
                type="service"
                name="New Patient Welcome | Sync Massage Therapy Colwood"
                description="Comprehensive assessment and treatment for chronic pain. RMT + Athletic Therapy + Holistic Nutrition. One therapist, three disciplines."
                slug="new-patients"
                breadcrumbLabel="New Patients"
                faqItems={[
                    { question: "Do you direct bill?", answer: "Yes. We direct bill Pacific Blue Cross, Canada Life, Sun Life, and more. Bring your insurance card and we handle the rest." },
                    { question: "What should I expect at my first visit?", answer: "Your initial 60-minute appointment includes a full health history, orthopedic assessment, and hands-on treatment. You'll leave with a clear diagnosis and plan." },
                    { question: "How is this different from a typical massage?", answer: "Most RMTs are trained in relaxation massage. Daryl specializes in clinical assessment and structural correction — Athletic Therapy meets Deep Tissue. If you want to fix something, that's where he shines." },
                    { question: "What if I've tried everything else?", answer: "Good — that means you've ruled things out. Daryl takes a multidisciplinary approach combining RMT, Athletic Therapy, and Nutrition. If soft tissue work won't fix it, he'll tell you and refer you to the right person." },
                    { question: "Do I need a doctor's referral?", answer: "No. You can book directly. However, some insurance plans require a referral for reimbursement — check your policy." },
                    { question: "What if you can't help me?", answer: "Then I'll tell you — on the first visit. No upselling, no stringing you along. If your issue is outside my scope, I'll refer you to the right specialist." },
                ]}
            />

            {/* Scroll Progress Indicator (z-100) */}
            <ScrollProgress />

            {/* Global Fluid Background (z-0) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[100px] animate-blob motion-reduce:animate-none mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 motion-reduce:animate-none mix-blend-multiply filter will-change-transform" />
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-teal-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000 motion-reduce:animate-none mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">

                {/* ═══════════════════════════════════════════════════════
                    SECTION 1 — HERO (StoryBrand: Character + Problem | Cialdini: Liking)
                ═══════════════════════════════════════════════════════ */}
                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column */}
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                6x Best Massage & Rehab Clinic (Community Votes)
                            </Badge>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Tired of Treatments That Don&apos;t Last?
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance max-w-prose">
                                Finally, a therapist who finds the root cause of your pain — not just the symptoms. One therapist. Three disciplines. No starting over.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer">Book Your 60-Min Assessment</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-slate-200 text-foreground hover:bg-slate-50 hover:border-slate-300 text-lg px-8 py-6 h-auto rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    asChild
                                >
                                    <a href="#problem">Not sure yet? See how we&apos;re different ↓</a>
                                </Button>
                            </div>

                            {/* Trust Indicators — min-h-[44px] for touch targets */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                                {[
                                    { icon: Award, text: "6x Award Winner" },
                                    { icon: Star, text: "120+ 5-Star Reviews" },
                                    { icon: CreditCard, text: "Direct Billing" },
                                    { icon: ShieldCheck, text: "CCHPBC Registered" },
                                ].map((item, i) => (
                                    <ScrollReveal key={item.text} delay={i * 0.1}>
                                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 px-3 py-2.5 min-h-[44px] rounded-lg">
                                            <item.icon className="w-4 h-4 flex-shrink-0 text-blue-600" />
                                            <span className="text-xs font-medium text-slate-800">{item.text}</span>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg"
                                    alt="Daryl Stubbs performing a clinical deep tissue massage assessment on a patient's shoulder at Sync Massage Therapy in Colwood, BC"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60" aria-hidden="true" />
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    SECTION 2 — THE PROBLEM / AGITATE (moved before reviews)
                ═══════════════════════════════════════════════════════ */}
                <section id="problem" className="py-24 mt-16 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                Does This Sound Familiar?
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-prose mx-auto">
                                If any of this hits home, you&apos;re not alone — and you&apos;re in the right place.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <GlassCard className="p-8 rounded-3xl">
                                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">The Pain Keeps Coming Back</h3>
                                <p className="text-slate-700 leading-relaxed max-w-prose">
                                    Your <Link href="/conditions/neck-shoulder-pain/" className="text-blue-600 hover:underline focus-visible:underline focus-visible:outline-none">neck and shoulders</Link> have been tight for months — maybe years. You&apos;ve tried massage, physio, maybe chiro. It feels great for a day or two, then you&apos;re right back where you started.
                                </p>
                            </GlassCard>

                            <GlassCard className="p-8 rounded-3xl">
                                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                                    <CircleSlash className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">Nobody Explains What&apos;s Actually Wrong</h3>
                                <p className="text-slate-700 leading-relaxed max-w-prose">
                                    You&apos;re frustrated because no one has done a real assessment. Rushed 15-minute sessions where the therapist barely listens. You leave with no explanation, no plan, no idea what&apos;s driving your <Link href="/conditions/chronic-pain/" className="text-blue-600 hover:underline focus-visible:underline focus-visible:outline-none">chronic pain</Link>.
                                </p>
                            </GlassCard>

                            <GlassCard className="p-8 rounded-3xl">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">Tired of Retelling Your Story Every Visit</h3>
                                <p className="text-slate-700 leading-relaxed max-w-prose">
                                    You see a different therapist each time and have to start from scratch. Nobody remembers your history. Nobody builds on the last session. At Sync Massage Therapy, you see <strong>one therapist</strong> who knows your body, tracks your progress, and adjusts your plan every visit.
                                </p>
                            </GlassCard>

                            <GlassCard className="p-8 rounded-3xl">
                                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Banknote className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">You Shouldn&apos;t Have to Keep Paying for Band-Aids</h3>
                                <p className="text-slate-700 leading-relaxed max-w-prose">
                                    Treatments that don&apos;t address the root cause aren&apos;t treatments — they&apos;re a subscription service for temporary relief. You deserve someone who actually investigates why the <Link href="/conditions/back-pain/" className="text-blue-600 hover:underline focus-visible:underline focus-visible:outline-none">pain</Link> keeps coming back.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    SECTION 3 — LIGHT SOCIAL PROOF (lighter widget, not full marquee)
                ═══════════════════════════════════════════════════════ */}
                <section className="py-24 relative bg-blue-50/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                                What Patients Say About Sync Massage Therapy
                            </h2>
                        </div>
                        <GoogleReviewWidget />
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    SECTION 4 — THE GUIDE (with risk reversal)
                ═══════════════════════════════════════════════════════ */}
                <section className="py-24 bg-white/50 border-y border-white/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                                    One Therapist. Three Disciplines. No Starting Over.
                                </h2>

                                <p className="text-xl text-slate-800 leading-relaxed font-light max-w-prose">
                                    I get it. When pain becomes part of your daily routine, it&apos;s exhausting. You start planning your life around what you can and can&apos;t do. That&apos;s why I don&apos;t just treat symptoms — I investigate.
                                </p>

                                <div className="bg-blue-50/80 p-8 rounded-2xl border border-blue-100">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                                            <Image
                                                src="/images/daryl-stubbs-thumb.jpg"
                                                alt="Headshot of Daryl Stubbs, founder of Sync Massage Therapy, smiling in clinical attire"
                                                width={64}
                                                height={64}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-blue-900 text-lg">
                                                <Link href="/our-team/daryl-stubbs/" className="hover:underline hover:text-blue-700 focus-visible:underline focus-visible:outline-none transition-colors">
                                                    Daryl Stubbs, RMT, CAT(C)
                                                </Link>
                                            </h3>
                                            <p className="text-slate-700 mt-1 text-sm">Founder, Sync Massage Therapy</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-slate-100">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-blue-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">Registered Massage Therapist (RMT)</h4>
                                            <p className="text-sm text-slate-700 mt-1 max-w-prose">Deep tissue and clinical massage that changes structure — not just a feel-good rub.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-slate-100">
                                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <Activity className="w-5 h-5 text-green-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">Certified Athletic Therapist — CAT(C)</h4>
                                            <p className="text-sm text-slate-700 mt-1 max-w-prose">Orthopedic assessment and movement analysis to find the actual root cause of your pain.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-slate-100">
                                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-5 h-5 text-purple-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">Holistic Nutritionist</h4>
                                            <p className="text-sm text-slate-700 mt-1 max-w-prose">Addresses gut health and systemic inflammation — because what&apos;s happening inside affects what you feel outside.</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-lg text-slate-700 leading-relaxed italic max-w-prose">
                                    This means I can assess your injury, treat it manually, <strong>and</strong> look at what&apos;s driving inflammation from the inside out — all in one place, with one person who actually knows your history.
                                </p>

                                {/* Risk Reversal */}
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-700 flex-shrink-0 mt-0.5" />
                                        <p className="text-green-900 font-medium leading-relaxed">
                                            If I can&apos;t help you, I&apos;ll tell you on the first visit — and refer you to someone who can. No upselling. No stringing you along.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="grid grid-cols-2 gap-4">
                                    <ScrollReveal delay={0}>
                                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                                <NumberFlow value={12} suffix="+" transformTiming={{ duration: 800, easing: "ease-out" }} willChange />
                                            </div>
                                            <div className="text-sm font-medium text-slate-700">Years Clinical Experience</div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.1}>
                                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                                <NumberFlow value={10000} suffix="+" format={{ notation: "compact" }} transformTiming={{ duration: 800, easing: "ease-out" }} willChange />
                                            </div>
                                            <div className="text-sm font-medium text-slate-700">Treatment Hours</div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.2}>
                                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                                <NumberFlow value={4.9} format={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }} suffix="/5" transformTiming={{ duration: 800, easing: "ease-out" }} willChange />
                                            </div>
                                            <div className="text-sm font-medium text-slate-700">Google Rating (120+ Reviews)</div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.3}>
                                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                                <NumberFlow value={6} suffix="x" transformTiming={{ duration: 800, easing: "ease-out" }} willChange />
                                            </div>
                                            <div className="text-sm font-medium text-slate-700">Best Rehab Clinic Winner</div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    SECTION 5 — THE PLAN (with light CTA after)
                ═══════════════════════════════════════════════════════ */}
                <section className="py-24 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="font-sans text-3xl md:text-5xl font-bold text-center text-foreground tracking-tight text-balance mb-16">
                            Your Path to Lasting Relief
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" aria-hidden="true" />

                            {[
                                {
                                    number: "01",
                                    icon: Calendar,
                                    title: "Pick a Time That Works",
                                    description: "Book online 24/7. Choose a 60-minute initial assessment — no referral needed, no pressure. We'll take it from there.",
                                },
                                {
                                    number: "02",
                                    icon: ClipboardList,
                                    title: "Find Out What's Actually Going On",
                                    description: "Your first visit includes a full health history, orthopedic testing, and movement analysis. Then we build a treatment plan that makes sense — not a guess.",
                                },
                                {
                                    number: "03",
                                    icon: Activity,
                                    title: "Start Moving and Living Better",
                                    description: "You'll leave with clear homework (stretches, posture cues) and a timeline. The goal isn't to keep you coming forever — it's to actually fix it.",
                                },
                            ].map((step, i) => (
                                <ScrollReveal key={step.number} delay={i * 0.15}>
                                    <div className="flex flex-col items-center text-center bg-background md:bg-transparent p-6 rounded-xl md:p-0 border md:border-none border-border">
                                        <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 relative z-10 shadow-sm">
                                            <step.icon className="w-10 h-10 text-primary" />
                                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm border-2 border-background">
                                                {step.number}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed max-w-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Light CTA after Plan */}
                        <div className="text-center mt-16">
                            <p className="text-lg text-muted-foreground mb-4">Sound reasonable?</p>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 h-auto rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                asChild
                            >
                                <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer">
                                    Book Your 60-Min Assessment
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    SECTION 6 — AVOID FAILURE / STAKES (rewritten concrete + price anchoring)
                ═══════════════════════════════════════════════════════ */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                What Happens If You Keep Putting It Off?
                            </h2>
                            <p className="text-lg text-muted-foreground italic max-w-prose mx-auto">
                                This isn&apos;t meant to scare you — it&apos;s clinical reality we see every week.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <ScrollReveal delay={0}>
                                <GlassCard className="p-8 rounded-3xl h-full">
                                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                                        <Link2 className="w-6 h-6 text-slate-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">One Problem Becomes Three</h3>
                                    <p className="text-slate-700 leading-relaxed max-w-prose">
                                        That tight hip you&apos;ve been ignoring? It starts pulling on your knee. Your neck tension turns into weekly headaches, then migraines. Your body compensates — and now you&apos;re dealing with pain in places that used to be fine.
                                    </p>
                                </GlassCard>
                            </ScrollReveal>

                            <ScrollReveal delay={0.15}>
                                <GlassCard className="p-8 rounded-3xl h-full">
                                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                                        <RotateCcw className="w-6 h-6 text-slate-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">It Gets Harder to Fix the Longer You Wait</h3>
                                    <p className="text-slate-700 leading-relaxed max-w-prose">
                                        Muscles that have been stuck for months start forming adhesions. Your nervous system rewires around the dysfunction. What could have been resolved in a few sessions now takes months of work to unwind.
                                    </p>
                                </GlassCard>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <GlassCard className="p-8 rounded-3xl h-full">
                                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                                        <TrendingDown className="w-6 h-6 text-slate-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">You Stop Doing What You Love</h3>
                                    <p className="text-slate-700 leading-relaxed max-w-prose">
                                        You skip the gym because your back can&apos;t handle it. You avoid picking up your kid because of your shoulder. You tell yourself &quot;this is just what getting older feels like.&quot; It doesn&apos;t have to be.
                                    </p>
                                </GlassCard>
                            </ScrollReveal>
                        </div>

                        <div className="text-center mt-16 space-y-4">
                            <p className="text-2xl font-bold text-foreground">
                                You don&apos;t have to keep living with this.
                            </p>
                            <p className="text-lg text-muted-foreground max-w-prose mx-auto">
                                Most patients see meaningful improvement within 1–2 sessions with <Link href="/services/visceral-manipulation/" className="text-blue-600 hover:underline focus-visible:underline focus-visible:outline-none font-medium">visceral manipulation</Link> and targeted manual therapy — often after years of temporary fixes elsewhere.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    SECTION 7 — SUCCESS / TRANSFORMATION (before/after + full marquee)
                ═══════════════════════════════════════════════════════ */}
                <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white border-t border-blue-100/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                What&apos;s Possible When You Actually Fix the Problem
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-prose mx-auto">
                                Imagine sleeping through the night without your shoulder waking you up. Getting back to the gym without dreading the next day. Picking up your kid without wincing.
                            </p>
                        </div>

                        {/* Before/After Transformation Stories */}
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                            <GlassCard className="p-8 rounded-3xl border-green-100">
                                <div className="flex items-center gap-1 mb-4">
                                    {[1,2,3,4,5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-red-50/60 rounded-xl p-4 border border-red-100">
                                        <p className="text-sm font-semibold text-red-900 mb-1">Before:</p>
                                        <p className="text-slate-700 text-sm leading-relaxed">
                                            &quot;2 years of shoulder and neck pain. Tried chiro, massage, acupuncture — only ever got temporary relief.&quot;
                                        </p>
                                    </div>
                                    <div className="bg-green-50/60 rounded-xl p-4 border border-green-100">
                                        <p className="text-sm font-semibold text-green-900 mb-1">After:</p>
                                        <p className="text-slate-700 text-sm leading-relaxed">
                                            &quot;Daryl pinpointed where I needed support in just one session. I no longer have chronic neck or shoulder pain.&quot;
                                        </p>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-800">— Michelle S.</p>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-8 rounded-3xl border-green-100">
                                <div className="flex items-center gap-1 mb-4">
                                    {[1,2,3,4,5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-red-50/60 rounded-xl p-4 border border-red-100">
                                        <p className="text-sm font-semibold text-red-900 mb-1">Before:</p>
                                        <p className="text-slate-700 text-sm leading-relaxed">
                                            &quot;Years of seeing specialists, surgeons, and osteopaths for knee pain that wouldn&apos;t go away.&quot;
                                        </p>
                                    </div>
                                    <div className="bg-green-50/60 rounded-xl p-4 border border-green-100">
                                        <p className="text-sm font-semibold text-green-900 mb-1">After:</p>
                                        <p className="text-slate-700 text-sm leading-relaxed">
                                            &quot;He relieved my knee pain of 4+ years — in just two sessions with visceral manipulation.&quot;
                                        </p>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-800">— Hannah A.</p>
                                </div>
                            </GlassCard>
                        </div>

                        {/* Full Google Reviews Marquee — min-h prevents CLS */}
                        <GlassCard className="bg-white/40 backdrop-blur-md border-white/60 shadow-xl p-8 rounded-3xl min-h-[550px]">
                            <GoogleReviewsColumns />
                        </GlassCard>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    SECTION 8 — MAIN CTA (moved to after transformation)
                ═══════════════════════════════════════════════════════ */}
                <section className="py-20 bg-blue-50/50 border-y border-blue-100/50">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-sans tracking-tight mb-6">
                            Ready to Find Out What&apos;s Really Going On?
                        </h2>
                        <p className="text-lg text-slate-700 mb-10 leading-relaxed max-w-prose mx-auto">
                            Your first 60-minute visit is $130 — assessment and treatment included. Most insurance plans cover it, and we direct bill.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Button
                                size="lg"
                                className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-xl px-10 py-7 h-auto rounded-xl focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
                                asChild
                            >
                                <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer">Book Your First Visit</a>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-slate-200 text-foreground hover:bg-white text-lg px-8 py-7 h-auto rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                asChild
                            >
                                <a href="tel:+12508128698">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call or Text (250) 812-8698
                                </a>
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground italic">
                            Book now and schedule a couple sessions upfront to lock in the times that work best for you — popular spots fill fast.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    SECTION 9 — PRICING
                ═══════════════════════════════════════════════════════ */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center">
                            <div className="w-full max-w-5xl">
                                <Pricing
                                    plans={pricingPlans}
                                    title="Transparent Pricing"
                                    description={"No hidden fees. Direct billing available for most insurance providers.\nMost patients see real improvement within 1–3 sessions."}
                                />
                            </div>
                        </div>
                        <p className="pt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto italic">
                            * GST is included in all prices. Direct billing available via <Link href="/direct-billing/" className="text-blue-600 hover:underline focus-visible:underline focus-visible:outline-none">Pacific Blue Cross, Canada Life, Sun Life</Link>, and more.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    SECTION 10 — FAQ / OBJECTION HANDLING
                ═══════════════════════════════════════════════════════ */}
                <FaqSection
                    badge="Your Questions, Answered"
                    heading="Everything You Need to Know Before Your First Visit"
                    description="We believe in transparency — here's all the info upfront so you can make an informed decision."
                    faqs={[
                        {
                            question: "Do you direct bill to insurance?",
                            answer: (
                                <>
                                    Yes. We direct bill Pacific Blue Cross, Canada Life, Sun Life, Manulife, and many others. Just bring your insurance card to your first appointment and we handle the rest. <Link href="/direct-billing/" className="text-blue-600 hover:underline focus-visible:underline focus-visible:outline-none font-medium">See all accepted providers</Link>.
                                </>
                            ),
                        },
                        {
                            question: "What should I expect at my first visit?",
                            answer: "Your initial 60-minute appointment includes a comprehensive health history review, orthopedic assessment, and hands-on treatment. You'll leave with a clear understanding of what's causing your pain and a treatment plan — not just a receipt.",
                        },
                        {
                            question: "How is this different from a typical massage?",
                            answer: "Most RMTs are trained in relaxation massage. Daryl specializes in clinical assessment and structural correction — think Athletic Therapy meets Deep Tissue. If you just want to relax, he can do that too. But if you want to actually fix something, that's where he shines.",
                        },
                        {
                            question: "What if I've tried everything else?",
                            answer: "Good — that means you've ruled things out. Daryl takes a multidisciplinary approach combining RMT, Athletic Therapy, and Holistic Nutrition. If soft tissue work won't fix it, he'll tell you honestly and refer you to the right person.",
                        },
                        {
                            question: "Do I need a doctor's referral?",
                            answer: "No. You can book directly without a referral. However, some insurance plans require one for reimbursement — it's worth checking your specific policy.",
                        },
                        {
                            question: "Will I see the same therapist every time?",
                            answer: "Yes. You'll see Daryl every visit. He knows your history, tracks your progress, and adjusts your treatment plan as you improve. No starting over with a new face each appointment.",
                        },
                        {
                            question: "What if you can't help me?",
                            answer: "Then I'll tell you — on the first visit. No upselling, no stringing you along. If your issue is outside my scope, I'll refer you to the right specialist. Honesty saves everyone's time and money.",
                        },
                    ]}
                />

                {/* ═══════════════════════════════════════════════════════
                    SECTION 11 — LOCATION
                ═══════════════════════════════════════════════════════ */}
                <LocationSection />
            </div>

        </div>
    );
}
