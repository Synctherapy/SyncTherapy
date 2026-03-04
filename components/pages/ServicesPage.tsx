"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
    Activity,
    Apple,
    ArrowRight,
    Award,
    Brain,
    Calendar,
    CheckCircle2,
    Dumbbell,
    Flame,
    Heart,
    MapPin,
    Phone,
    Search,
    Shield,
    Sparkles,
    Star,
    Users,
} from "lucide-react";

/* ─── Services Data ────────────────────────────────────────────────── */
const SERVICES = [
    // === High Priority Requested Services ===
    {
        id: "massage-therapy",
        title: "Massage Therapy",
        description: "Comprehensive therapeutic massage tailored to your specific needs, addressing everything from chronic pain to acute tension.",
        category: "Massage Therapy",
        url: "/services/massage-therapy/",
        icon: Heart,
        featured: true,
    },
    {
        id: "direct-billing-massage",
        title: "Direct Billing Massage",
        description: "Convenient massage therapy where we bill your extended health benefits provider directly on your behalf.",
        category: "Massage Therapy",
        url: "/direct-billing/",
        icon: Shield,
        featured: true,
    },
    {
        id: "athletic-therapy",
        title: "Athletic Therapy",
        description: "Comprehensive assessment, treatment, and dynamic rehabilitation for musculoskeletal injuries.",
        category: "Athletic Therapy",
        url: "/services/athletic-therapy/",
        icon: Dumbbell,
        featured: true,
    },
    {
        id: "nutrition-consulting",
        title: "Registered Nutrition Consulting",
        description: "Professional guidance to help you reach your health goals through practical, sustainable dietary changes.",
        category: "Holistic Nutrition",
        url: "/services/nutrition-consulting/",
        icon: Award,
        featured: true,
    },
    {
        id: "deep-tissue-massage",
        title: "Deep Tissue Massage",
        description: "Intense, focused pressure to reach deeper layers of muscle tissue and relieve stubborn, chronic tension.",
        category: "Massage Therapy",
        url: "/services/deep-tissue-massage/", // Based on the standard markdown filename in content/pages
        icon: Activity,
        featured: true,
    },
    {
        id: "visceral-manipulation",
        title: "Visceral Manipulation",
        description: "Gentle manual therapy encouraging normal mobility, tone, and intrinsic movement of internal organs.",
        category: "Massage Therapy",
        url: "/services/visceral-manipulation/",
        icon: Heart,
        featured: true,
    },

    // === Massage Therapy ===
    {
        id: "relaxation-massage",
        title: "Relaxation Massage",
        description: "Gentle, soothing techniques to reduce stress, calm the nervous system, and promote overall wellness.",
        category: "Massage Therapy",
        url: "/services/relaxation-massage/",
        icon: Heart,
    },
    {
        id: "injury-rehab-massage",
        title: "Injury Rehab Massage",
        description: "Targeted therapy to accelerate healing from acute or chronic injuries, reducing scar tissue and restoring mobility.",
        category: "Massage Therapy",
        url: "/services/injury-rehab-massage/",
        icon: Activity,
    },
    {
        id: "muscle-recovery-massage",
        title: "Muscle Recovery Massage",
        description: "Specialized massage focused on flushing toxins and metabolic waste to speed up recovery after intense physical activity.",
        category: "Massage Therapy",
        url: "/services/muscle-recovery-massage/",
        icon: Flame,
    },
    {
        id: "muscle-tension-relief",
        title: "Muscle Tension Relief",
        description: "Deep, focused work to alleviate chronic tightness and knots caused by stress, posture, or repetitive motion.",
        category: "Massage Therapy",
        url: "/services/muscle-tension-relief/",
        icon: Activity,
    },
    {
        id: "myofascial-release",
        title: "Myofascial Release",
        description: "Slow, sustained pressure to release restrictions in the fascial connective tissue, restoring proper movement.",
        category: "Massage Therapy",
        url: "/services/myofascial-release/",
        icon: Brain,
    },
    {
        id: "post-event-massage",
        title: "Post-Event Massage",
        description: "Recovery-focused massage applied shortly after an athletic event to minimize soreness and prevent cramping.",
        category: "Massage Therapy",
        url: "/services/post-event-massage/",
        icon: Activity,
    },
    {
        id: "pre-event-massage",
        title: "Pre-Event Massage",
        description: "Invigorating, fast-paced techniques to warm up muscles and prepare the body for peak athletic performance.",
        category: "Massage Therapy",
        url: "/services/pre-event-massage/",
        icon: Zap,
    },
    {
        id: "rotator-cuff-release",
        title: "Rotator Cuff Release",
        description: "Precise treatment addressing shoulder complex restrictions, improving mobility, and decreasing impingement pain.",
        category: "Massage Therapy",
        url: "/services/rotator-cuff-release/",
        icon: Target,
    },
    {
        id: "trigger-point-therapy",
        title: "Trigger Point Therapy",
        description: "Neuromuscular therapy designed to locate and deactivate hyper-irritable spots in the muscle belly.",
        category: "Massage Therapy",
        url: "/services/trigger-point-therapy/",
        icon: Activity,
    },
    {
        id: "pain-management",
        title: "Pain Management Massage",
        description: "Customized clinical massage integrating various modalities to systematically reduce chronic or acute pain signals.",
        category: "Massage Therapy",
        url: "/services/pain-management/",
        icon: Flame,
    },

    // === Athletic Therapy ===
    {
        id: "exercise-therapy",
        title: "Exercise Therapy",
        description: "Prescribed movement strategies to correct imbalances, restore function, and build resilient strength.",
        category: "Athletic Therapy",
        url: "/services/exercise-therapy/",
        icon: Activity,
    },
    {
        id: "home-exercise-plans",
        title: "Home Exercise Plans",
        description: "Customized, progressive programs you can perform at home to accelerate your clinical recovery.",
        category: "Athletic Therapy",
        url: "/services/home-exercise-plans/",
        icon: Dumbbell,
    },
    {
        id: "physical-rehabilitation",
        title: "Physical Rehabilitation",
        description: "Structured progressive loading and mobility training for post-surgical or severe injury recovery.",
        category: "Athletic Therapy",
        url: "/services/physical-rehabilitation/",
        icon: Activity,
    },
    {
        id: "sports-injury-rehab",
        title: "Sports Injury Rehab",
        description: "Sport-specific rehabilitation protocols aimed at safely returning athletes to play at their highest level.",
        category: "Athletic Therapy",
        url: "/services/sports-injury-rehab/",
        icon: Shield,
    },
    {
        id: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Acute clinical management of sports injuries involving taping, manual therapy, and inflammation control.",
        category: "Athletic Therapy",
        url: "/services/sports-injury-treatment/",
        icon: Heart,
    },
    {
        id: "sports-medicine",
        title: "Sports Medicine Approach",
        description: "Integrative approach to athletic health combining advanced manual therapy and active rehabilitation.",
        category: "Athletic Therapy",
        url: "/services/sports-medicine/",
        icon: Target,
    },

    // === Holistic Nutrition ===
    {
        id: "cholesterol-diet",
        title: "Cholesterol Management",
        description: "Evidence-based dietary protocols to naturally optimize your lipid profile and heart health.",
        category: "Holistic Nutrition",
        url: "/services/cholesterol-diet/",
        icon: Heart,
    },
    {
        id: "diabetes-nutrition",
        title: "Diabetes Nutrition Support",
        description: "Strategic macronutrient balancing to stabilize blood glucose and improve insulin sensitivity.",
        category: "Holistic Nutrition",
        url: "/services/diabetes-nutrition/",
        icon: Apple,
    },
    {
        id: "dietary-consultation",
        title: "Dietary Consultation",
        description: "In-depth clinical assessment of your current eating habits to identify gaps and opportunities for better health.",
        category: "Holistic Nutrition",
        url: "/services/dietary-consultation/",
        icon: Apple,
    },
    {
        id: "food-sensitivity-counseling",
        title: "Food Sensitivity Counseling",
        description: "Guided elimination and reintroduction protocols to identify hidden triggers causing inflammation or discomfort.",
        category: "Holistic Nutrition",
        url: "/services/food-sensitivity-counseling/",
        icon: Search,
    },
    {
        id: "gut-health-optimization",
        title: "Gut Health Optimization",
        description: "Programs focused on microbiome diversity, intestinal permeability repair, and optimal digestion.",
        category: "Holistic Nutrition",
        url: "/services/gut-health-optimization/",
        icon: Sparkles,
    },
    {
        id: "ibs-diet-counseling",
        title: "IBS Diet Counseling",
        description: "Targeted nutritional interventions to manage Irritable Bowel Syndrome symptoms and flare-ups.",
        category: "Holistic Nutrition",
        url: "/services/ibs-diet-counseling/",
        icon: Activity,
    },
    {
        id: "immune-support-nutrition",
        title: "Immune Support Nutrition",
        description: "Nutrient-dense protocols designed to bolster your immune system's resilience and function.",
        category: "Holistic Nutrition",
        url: "/services/immune-support-nutrition/",
        icon: Shield,
    },
    {
        id: "low-fodmap-diet",
        title: "Low FODMAP Guidance",
        description: "Professional supervision through the clinical Low FODMAP diet for significant digestive symptom relief.",
        category: "Holistic Nutrition",
        url: "/services/low-fodmap-diet/",
        icon: Apple,
    },
    {
        id: "nutrition-counseling",
        title: "Nutrition Counseling",
        description: "Ongoing support and accountability to develop a healthier relationship with food and your body.",
        category: "Holistic Nutrition",
        url: "/services/nutrition-counseling/",
        icon: Heart,
    },
    {
        id: "personalized-health-plan",
        title: "Personalized Health Plan",
        description: "A comprehensive, highly customized blueprint combining nutrition, lifestyle, and supplement recommendations.",
        category: "Holistic Nutrition",
        url: "/services/personalized-health-plan/",
        icon: Target,
    },
    {
        id: "supplements-advice",
        title: "Clinical Supplement Advice",
        description: "Evidence-based recommendations for therapeutic supplementation to address specific deficiencies or goals.",
        category: "Holistic Nutrition",
        url: "/services/supplements-advice/",
        icon: Sparkles,
    },

    // === Wellness & Consulting ===
    {
        id: "health-consulting",
        title: "Integrative Health Consulting",
        description: "A holistic overview of your complete health profile, integrating physical, nutritional, and lifestyle factors.",
        category: "Consulting & Wellness",
        url: "/services/health-consulting/",
        icon: Brain,
    },
    {
        id: "mens-health-consulting",
        title: "Men's Health Consulting",
        description: "Specialized guidance addressing male-specific hormonal, metabolic, and physical health concerns.",
        category: "Consulting & Wellness",
        url: "/services/mens-health-consulting/",
        icon: Activity,
    },
    {
        id: "womens-health-consulting",
        title: "Women's Health Consulting",
        description: "Targeted support for female hormonal balance, life-stage transitions, and general preventive care.",
        category: "Consulting & Wellness",
        url: "/services/womens-health-consulting/",
        icon: Heart,
    },
    {
        id: "wellness-consultation",
        title: "General Wellness Consultation",
        description: "Preventative strategies and lifestyle optimization to help you maintain peak physical and mental well-being.",
        category: "Consulting & Wellness",
        url: "/services/wellness-consultation/",
        icon: Sparkles,
    }
];

// Reusable icons because they weren't all imported in my initial mental list
import { Target, Zap } from "lucide-react";

const CATEGORIES = ["All Services", "Massage Therapy", "Athletic Therapy", "Holistic Nutrition", "Consulting & Wellness"];

/* ═══════════════════════════════════════════════════════════════════
   ServicesPage Component
   ═══════════════════════════════════════════════════════════════════ */
export function ServicesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Services");

    // Memoize the filtered services for performance
    const filteredServices = useMemo(() => {
        return SERVICES.filter((service) => {
            const matchesSearch =
                !searchTerm ||
                service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory = activeCategory === "All Services" || service.category === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeCategory]);

    return (
        <main className="bg-background min-h-screen">
            {/* ── Hero Section ─────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-navy via-digital-blue-900 to-digital-blue-800">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-digital-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-digital-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 container mx-auto px-4 py-20 md:py-28 text-center">
                    <ScrollReveal>
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                            <div className="inline-flex items-center gap-1.5 glass-panel rounded-full px-4 py-1.5 border-white/20 bg-white/5">
                                <Star className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                                <span className="text-sm font-medium text-white">4.9★ Rating</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 glass-panel rounded-full px-4 py-1.5 border-white/20 bg-white/5">
                                <Award className="w-4 h-4 text-blue-300" />
                                <span className="text-sm font-medium text-white">Multi-Disciplinary Care</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 glass-panel rounded-full px-4 py-1.5 border-white/20 bg-white/5">
                                <Users className="w-4 h-4 text-blue-300" />
                                <span className="text-sm font-medium text-white">800+ Happy Clients</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.05}>
                        <h1 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight text-balance">
                            Our Complete Services
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
                            A fully integrated, multi-disciplinary clinic offering Massage Therapy, Athletic Therapy, and Holistic Nutrition in one place.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <div className="mt-10 max-w-2xl mx-auto bg-green-900/40 border border-green-500/30 rounded-xl p-4 flex items-center justify-center gap-3 backdrop-blur-sm">
                            <Shield className="text-green-400 w-5 h-5 flex-shrink-0" />
                            <span className="text-white font-medium">Direct Billing Available</span>
                            <span className="text-white/60 hidden sm:inline">• Most Insurance Providers</span>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Search & Filter Section ──────────────────────────────────── */}
            <section className="py-16 md:py-24 bg-card border-b border-border relative z-20">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Explore Our Therapies</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Search for a specific service or browse by category to find the perfect treatment for your needs.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <div className="max-w-4xl mx-auto mb-16">
                            {/* Search Bar */}
                            <div className="relative mb-8">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search services (e.g., 'deep tissue', 'nutrition', 'injury')..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-border focus:border-primary rounded-xl outline-none bg-background text-foreground transition-colors shadow-sm"
                                    aria-label="Search services"
                                />
                            </div>

                            {/* Category Tabs */}
                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                                {CATEGORIES.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 ${activeCategory === category
                                            ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 focus:ring-primary/40 ring-offset-2"
                                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/40 ring-offset-2"
                                            }`}
                                        aria-pressed={activeCategory === category}
                                    >
                                        {category}
                                        <span className="ml-2 opacity-70 text-xs">
                                            ({category === "All Services" ? SERVICES.length : SERVICES.filter(s => s.category === category).length})
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Results Grid - Note: All links are fully present in the SSR output for SEO. */}
                    {filteredServices.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10" role="list">
                            {filteredServices.map((service, index) => {
                                // Subtle styling difference per category
                                const categoryStyles: Record<string, string> = {
                                    "Massage Therapy": "bg-blue-50 text-blue-700 border-blue-200",
                                    "Athletic Therapy": "bg-indigo-50 text-indigo-700 border-indigo-200",
                                    "Holistic Nutrition": "bg-emerald-50 text-emerald-700 border-emerald-200",
                                    "Consulting & Wellness": "bg-purple-50 text-purple-700 border-purple-200",
                                };

                                const catStyle = categoryStyles[service.category] || "bg-secondary text-secondary-foreground";

                                return (
                                    <ScrollReveal key={service.id} delay={0.05 * (index % 6)}>
                                        {/* Link is used for semantic HTML and SEO. It's fully rendered by Next.js SSR. */}
                                        <Link href={service.url} className="block h-full focus:outline-none focus:ring-4 focus:ring-primary/40 rounded-2xl group cursor-pointer transition-all duration-200 ring-offset-2">
                                            <GlassCard className="h-full flex flex-col p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-200 border-border group-hover:border-primary/30 active:scale-[0.98]">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="p-3 rounded-xl inline-flex bg-digital-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                                                        <service.icon className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex flex-col gap-2 items-end">
                                                        {service.featured && (
                                                            <span className="bg-digital-blue-100 text-digital-blue-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                                                                Featured
                                                            </span>
                                                        )}
                                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${catStyle}`}>
                                                            {service.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                    {service.title}
                                                </h3>

                                                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                                                    {service.description}
                                                </p>

                                                <div className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-primary/5 text-primary font-semibold py-3 px-4 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                                    Learn More
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </GlassCard>
                                        </Link>
                                    </ScrollReveal>
                                );
                            })}
                        </div>
                    ) : (
                        <ScrollReveal>
                            <div className="text-center py-16 px-4 bg-secondary/30 rounded-2xl border border-dashed border-border max-w-3xl mx-auto">
                                <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-foreground mb-2">No services found</h3>
                                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                    We couldn't find any services matching your current filters. Try removing some filters or adjusting your search term.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setSearchTerm("");
                                            setActiveCategory("All Services");
                                        }}
                                        className="cursor-pointer min-h-[44px] transition-all duration-200"
                                    >
                                        Clear Filters
                                    </Button>
                                    <Button asChild className="cursor-pointer min-h-[44px] transition-all duration-200">
                                        <a href="tel:+12508128698">
                                            <Phone className="w-4 h-4 mr-2" />
                                            Call to Discuss
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </ScrollReveal>
                    )}
                </div>
            </section>

            {/* ── Treatment Approach ───────────────────────────────────────── */}
            <section className="py-20 bg-background relative z-10">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Sync Therapy Difference</h2>
                            <p className="text-lg text-muted-foreground">
                                We believe in resolving the root cause, not just treating symptoms.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Search,
                                title: "Root Cause Diagnosis",
                                desc: "We comprehensively evaluate biomechanics and habits to find the exact reason you are in pain."
                            },
                            {
                                icon: Users,
                                title: "1-on-1 Dedicated Time",
                                desc: "No double-booking, no rushing. You get your therapist's absolute undivided attention for your entire appointment."
                            },
                            {
                                icon: Activity,
                                title: "Customized Recovery",
                                desc: "Your tailored plan combines manual therapy in-clinic with prescriptive exercises you can do at home."
                            }
                        ].map((item, i) => (
                            <ScrollReveal key={item.title} delay={0.1 * i} className="h-full">
                                <GlassCard className="h-full p-8 text-center hover:-translate-y-1 transition-transform">
                                    <div className="w-16 h-16 bg-digital-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                </GlassCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Section ──────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-r from-navy via-digital-blue-900 to-digital-blue-800 py-20 md:py-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,102,255,0.15),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal>
                        <h2 className="font-sans text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Book Your Treatment?
                        </h2>

                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                            Experience clinical excellence and tailored care in Colwood.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button
                                size="lg"
                                variant="premium"
                                className="text-base px-10 h-14 shadow-xl cursor-pointer min-h-[56px] transition-all duration-200"
                                asChild
                            >
                                <a
                                    href="https://synctherapy.janeapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Calendar className="w-5 h-5 mr-1" />
                                    Book Your Appointment
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 bg-transparent h-14 cursor-pointer min-h-[56px] transition-all duration-200"
                                asChild
                            >
                                <a href="tel:+12508128698">
                                    <Phone className="w-5 h-5 mr-1" />
                                    Call (250) 812-8698
                                </a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                <span className="font-medium">Same-day appointments</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Shield className="w-4 h-4 text-blue-300" />
                                <span className="font-medium">Direct billing</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4 text-orange-400" />
                                <span className="font-medium">Convenient location</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}

