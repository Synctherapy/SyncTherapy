
import { LocationSection } from "@/components/sections/location-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { FirstVisitRoadmap } from "@/components/sections/first-visit-roadmap";
import { Pricing } from "@/components/ui/pricing";

export function HealthConsulting() {
    const pricingPlans = [
        {
            name: "Initial Health Strategy Audit",
            price: "150",
            period: "60 minutes",
            features: [
                "360-degree lifestyle audit",
                "Sleep & stress analysis",
                "Strategic health roadmap",
                "Supplement review",
                "Check Insurance (HSA)"
            ],
            description: "The starting point for optimizing your vitality.",
            buttonText: "Book Health Assessment",
            href: "https://synctherapy.janeapp.com/",
            isPopular: true,
        },
        {
            name: "Strategy Follow-Up",
            price: "95",
            period: "45 minutes",
            features: [
                "Roadmap adjustments",
                "Accountability check-in",
                "Tactical lifestyle changes",
                "Progress tracking"
            ],
            description: "Stay on track and refine your approach.",
            buttonText: "Book Follow-Up",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
        {
            name: "Total Wellness Package",
            price: "349",
            period: "package",
            features: [
                "Initial Audit + 2 Follow-ups",
                "Comprehensive lifestyle plan",
                "Priority email support",
                "Holistic toolset"
            ],
            description: "For those committed to total transformation.",
            buttonText: "Book Package",
            href: "https://synctherapy.janeapp.com/",
            isPopular: false,
        },
    ];

    const treatmentLinks = [
        { title: "Health Assessment", href: "/services/health-assessment/" },
        { title: "Wellness Consultation", href: "/services/wellness-consultation/" },
        { title: "Personalized Health Plan", href: "/services/personalized-health-plan/" },
        { title: "Chronic Disease Management", href: "/services/chronic-disease-management/" },
        { title: "Food Sensitivity Counseling", href: "/services/food-sensitivity-counseling/" },
        { title: "Women's Health Consulting", href: "/services/womens-health-consulting/" },
        { title: "Men's Health Consulting", href: "/services/mens-health-consulting/" },
        { title: "Cardiovascular Health", href: "/services/cardiovascular-health/" },
    ];

    return (
        <div className="bg-background min-h-screen relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
            {/* Global Fluid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[100px] animate-blob mix-blend-multiply filter will-change-transform" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-slate-100/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter will-change-transform" />
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-purple-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter will-change-transform" />
            </div>

            <div className="relative z-10 pt-[120px] pb-16 lg:pt-[180px] lg:pb-24">
                {/* 1. Custom Hero Section - Side by Side */}
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column */}
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm">
                                Voted Platinum Winner: Best Massage Therapy Clinic (2024 Community Votes)
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight tracking-tight text-balance">
                                Health Consulting & Wellness Strategy
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
                                The Lifestyle Strategist. Serving Colwood, Langford & West Shore.
                            </p>

                            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                                <p>
                                    A 360-degree audit of your health. Sleep, stress, environment, and lifestyle design to optimize your long-term vitality.
                                </p>
                                <p className="font-medium text-blue-900">
                                    Check with your insurance regarding Nutritionist Coverage or Health Spending Account (HSA) eligibility.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg px-8 py-6 h-auto rounded-xl"
                                    asChild
                                >
                                    <a href="https://synctherapy.janeapp.com/">Book Strategy Call</a>
                                </Button>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm bg-white/20 aspect-[4/3] lg:aspect-square">
                                <Image
                                    src="/images/generated/health_consulting_wellness_hero.jpg" // Using new filename
                                    alt="Health consulting session"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    unoptimized
                                />
                            </div>
                            {/* Decorative background blob behind image */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-slate-100 rounded-full blur-3xl opacity-60" />
                        </div>
                    </div>
                </div>

                {/* 2. Treatments Grid (The Hub) */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight mb-6">
                                Wellness Strategies
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Optimization aimed at longevity and quality of life.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {treatmentLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="group">
                                    <GlassCard className="p-8 rounded-3xl h-full hover:border-blue-200 transition-all hover:-translate-y-1">
                                        <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                                            {link.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm font-medium flex items-center gap-2">
                                            View Strategy <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </p>
                                    </GlassCard>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Differentiation / Expert Bio */}
                <section className="py-24 bg-white/50 border-y border-white/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                                    Design Your Health
                                </h2>
                                <p className="text-xl text-slate-700 leading-relaxed font-light">
                                    Health isn't just the absence of disease; it's the presence of vitality. We look at the big picture—your environment, your habits, your sleep, and your stress—to engineer a lifestyle that supports your goals.
                                </p>

                                <div className="bg-blue-50/80 p-8 rounded-2xl border border-blue-100 mt-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                                            <Image
                                                src="/images/daryl-stubbs-thumb.jpg"
                                                alt="Our Team"
                                                width={64}
                                                height={64}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-blue-900 text-lg">
                                                Health Consulting Team
                                            </h4>
                                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                                                "We act as the general contractors for your health. When you're overwhelmed by conflicting advice, we provide the blueprint."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">360°</div>
                                        <div className="text-sm font-medium text-slate-600">Lifestyle Audit</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">Sleep</div>
                                        <div className="text-sm font-medium text-slate-600">Optimization</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center col-span-2">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">Stress</div>
                                        <div className="text-sm font-medium text-slate-600">Mangement Strategy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Pricing (Centered) */}
                <section className="py-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                            Consulting Investment
                        </h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Invest in a strategy that pays dividends for life.
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
                    </div>
                </section>

                {/* 5. Testimonials */}
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

                {/* 6. Roadmap */}
                <FirstVisitRoadmap />

                {/* 7. FAQ */}
                <FaqSection
                    heading="Frequently Asked Questions"
                    description="Common questions about Health Consulting."
                    faqs={[
                        {
                            question: "What does a Health Consultant do?",
                            answer: "We act as your health project manager. We audit your current lifestyle, identify the biggest levers for change (sleep, stress, environment), and create a step-by-step strategy to optimize them."
                        },
                        {
                            question: "Is this different from seeing a doctor?",
                            answer: "Yes. Doctors are experts in diagnosing and treating disease. We focus on optimizing lifestyle factors that create health. We work alongside your medical team to support your overall vitality."
                        },
                        {
                            question: "How long are the sessions?",
                            answer: "Initial consultations are typically 60 minutes to allow for a deep dive into your history and goals. Follow-up sessions are 45 minutes to review progress and adjust the strategy."
                        }
                    ]}
                />

                {/* 8. Final CTA */}
                <section className="py-16 bg-white border-t border-slate-200">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Start Your Lifestyle Strategy</h2>
                        <div className="flex justify-center mb-12">
                            <Button
                                size="lg"
                                className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg px-8 py-6 rounded-xl text-lg"
                                asChild
                            >
                                <a href="https://synctherapy.janeapp.com/">Book Strategy Call</a>
                            </Button>
                        </div>
                        <div className="max-w-4xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5293.16543562527!2d-123.4704954927292!3d48.44534801448843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f74851cb74787%3A0xeacdf009885e6cb5!2sSync%20Massage%20Therapy!5e0!3m2!1sen!2sca!4v1771428978889!5m2!1sen!2sca" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </section>

                <LocationSection />
            </div>
        </div>
    );
}
