
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
import { DirectBillingBar } from "@/components/sections/direct-billing-bar"; // Keep this as context
import { FirstVisitRoadmap } from "@/components/sections/first-visit-roadmap";
import { Pricing } from "@/components/ui/pricing";

export function DeepTissueMassage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Sync Massage Therapy",
        "url": "https://synctherapy.ca/services/deep-tissue-massage",
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
        "medicalSpecialty": "PhysicalTherapy",
        "availableService": {
            "@type": "MedicalService",
            "name": "Deep Tissue Massage",
            "description": "Clinical deep tissue massage focusing on chronic tension and sports injuries."
        }
    };

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
                "Stress reduction focus"
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
                                Clinical Deep Tissue Massage in Colwood & Langford
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                Relieve chronic tension and sports injuries without the downtown commute. Voted Best Rehab Clinic in the West Shore.
                            </p>

                            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                                <p>
                                    Stop chasing temporary relief. We target the root cause of chronic tension, back pain, and sports injuries. Serving the <strong>West Shore, Langford, and Greater Victoria</strong>.
                                </p>
                                <p className="font-medium text-blue-900">
                                    Located 1 min from Juan de Fuca Rec Centre.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Clinical Massage</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-slate-200 text-foreground hover:bg-slate-50 hover:border-slate-300 text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <Link href="#problem-solution">See Who We Help</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/images/generated/shoulder_pain_hero_v3.png"
                                    alt="Woman holding her shoulder in pain, indicating a need for deep tissue massage therapy"
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

                {/* 3. Problem/Solution Grid */}
                <section id="problem-solution" className="py-24 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                Targeted Relief For...
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1: The Desk Worker */}
                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">💻</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">The Desk Worker</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Chronic 'Tech Neck' and upper back tension from the Langford commute or sitting all day? We restore posture and mobility.
                                </p>
                                <Link href="/services/neck-pain-massage/" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
                                    Treat Tech Neck <span className="text-lg">→</span>
                                </Link>
                            </GlassCard>

                            {/* Card 2: The Weekend Warrior */}
                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-6">🏔️</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">The Weekend Warrior</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Recovering from hiking the Galloping Goose or lifting heavy? We break down scar tissue to speed up recovery.
                                </p>
                                <Link href="/services/sports-massage/" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
                                    Sports Recovery <span className="text-lg">→</span>
                                </Link>
                            </GlassCard>

                            {/* Card 3: The Chronic Pain Sufferer */}
                            <GlassCard className="p-8 rounded-3xl hover:border-blue-200 transition-colors">
                                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-6">⚡</div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">The Chronic Pain Sufferer</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Standard massage not enough? We use <Link href="/services/myofascial-release/" className="text-blue-600 underline">Myofascial Release</Link> and deep pressure to resolve long-standing adhesions.
                                </p>
                                <Link href="/services/chronic-pain-victoria/" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
                                    Pain Solutions <span className="text-lg">→</span>
                                </Link>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 4. Differentiation / Expert Bio */}
                <section className="py-24 bg-white/50 border-y border-white/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                                    Why Sync Massage Therapy?
                                </h2>
                                <p className="text-xl text-slate-700 leading-relaxed font-light">
                                    Unlike a spa relaxation massage, our Registered Massage Therapists (RMTs) use advanced orthopedic assessment to identify <em>why</em> you are tight.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    We don't just treat symptoms; we restore sliding surfaces between muscles using <Link href="/services/trigger-point-therapy/" className="text-blue-600 hover:underline font-medium">Trigger Point Therapy</Link> and Neuromuscular Techniques.
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
                                                    Meet the Expert: Daryl Stubbs, RMT
                                                </Link>
                                            </h4>
                                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                                                With 12+ years of clinical experience, Daryl specializes in complex pain cases. His approach combines deep tissue work with movement education to ensure long-term relief.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                                        <div className="text-sm font-medium text-slate-600">Clinical Years Experience</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">10000+</div>
                                        <div className="text-sm font-medium text-slate-600">Hours Treated</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center col-span-2">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5 Stars</div>
                                        <div className="text-sm font-medium text-slate-600">Google Reviews (Loved by Locals)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Pricing (Centered) */}
                <section className="py-24">
                    {/* Using the Pricing component but customized for centering */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                            Pricing For Massage Therapy
                        </h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Transparent pricing. No hidden fees. <Link href="/direct-billing/" className="text-blue-600 underline hover:text-blue-800">Direct Billing</Link> available for most insurance providers.
                        </p>
                    </div>

                    <div className="container mx-auto px-4">
                        {/* Centered Pricing Container */}
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
                            * GST is included in all prices. Rates are subject to change. Direct billing available via <Link href="/direct-billing/" className="text-blue-600 hover:underline">Pacific Blue Cross, Canada Life, Sun Life</Link>, and more.
                        </p>
                    </div>
                </section>

                {/* 6. Testimonials */}
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
                                    "name": "Will deep tissue massage hurt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "It should feel like a 'good hurt,' not sharp pain. Our RMTs work within your tolerance to release tension without causing guarding."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How is Deep Tissue different from Swedish massage?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Swedish massage focuses on relaxation and circulation. Deep Tissue focuses on structural changes, breaking down scar tissue and releasing chronic knots."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is deep tissue massage covered by insurance?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes. All treatments at Sync Therapy are performed by Registered Massage Therapists (RMTs) and are covered by most plans. We direct bill Pacific Blue Cross, Canada Life, and Sun Life."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How often should I get a deep tissue massage?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "For acute pain, we recommend 3-4 sessions spaced 1-2 weeks apart. For maintenance, once every 4-6 weeks is standard."
                                    }
                                }
                            ]
                        })
                    }}
                />
                <FaqSection
                    heading="Frequently Asked Questions About Deep Tissue Massage"
                    description="Common questions about our treatments and billing."
                    faqs={[
                        {
                            question: "Will deep tissue massage hurt?",
                            answer: "It should feel like a \"good hurt,\" not sharp pain. Our RMTs in Colwood work within your personal tolerance level. We use slow, deep strokes to release tension without causing your body to \"guard\" or tense up. Communication is key—if the pressure is ever too much, let us know immediately, and we will adjust."
                        },
                        {
                            question: "How is this different from a Swedish or Relaxation massage?",
                            answer: "The main difference is the goal. Swedish Massage focuses on relaxation and increasing circulation using lighter strokes. Deep Tissue focuses on structural changes—breaking down scar tissue (adhesions) and releasing chronic knots that restrict your movement."
                        },
                        {
                            question: "What conditions do you treat with deep tissue?",
                            answer: (
                                <>
                                    It is highly effective for chronic pain issues, including:
                                    <br /><br />
                                    • &quot;Tech Neck&quot; and upper back tension from desk work.<br />
                                    • Lower back pain and sciatica.<br />
                                    • Sports injuries (IT band tightness, hamstring strains).<br />
                                    • Tennis Elbow and repetitive strain injuries.
                                </>
                            )
                        },
                        {
                            question: "How often should I get a deep tissue massage?",
                            answer: "For acute pain or a specific injury, we typically recommend 3–4 sessions spaced 1–2 weeks apart to make structural changes. For maintenance and injury prevention (especially for active West Shore residents), once every 4–6 weeks is usually sufficient."
                        },
                        {
                            question: "Is deep tissue massage covered by insurance?",
                            answer: "Yes. At Sync Therapy, all deep tissue treatments are performed by Registered Massage Therapists (RMTs). This means they are covered by most extended health plans. We offer direct billing for Pacific Blue Cross, Canada Life, Sun Life, and more."
                        },
                        {
                            question: "What should I expect after my appointment?",
                            answer: "Some muscle soreness (similar to a post-workout feeling) is normal for 24–48 hours after a deep tissue session. This is a sign that the muscles are releasing toxins and realigning. Drinking plenty of water helps flush these metabolic wastes and reduce soreness."
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
                            <Link href="/services/sports-massage-therapy/" className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all">
                                Sports Massage
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
