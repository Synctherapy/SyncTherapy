"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
    Flame,
    Brain,
    Zap,
    Activity,
    Bone,
    Wrench,
    Shield,
    Repeat,
    Heart,
    Footprints,
    Search,
    Filter,
    ArrowRight,
    Phone,
    Calendar,
    CheckCircle2,
    MapPin,
    Star,
    Users,
    Award,
} from "lucide-react";

/* ─── Conditions Data ────────────────────────────────────────────────── */
const CONDITIONS = [
    {
        id: "back-pain",
        title: "Back Pain",
        description: "Comprehensive treatment for acute and chronic back pain, including lower back pain, upper back tension, and spinal dysfunction.",
        category: "Pain Management",
        severity: "High",
        commonality: "Very Common",
        treatmentTime: "4-8 sessions",
        symptoms: ["Lower back ache", "Upper back tension", "Muscle spasms", "Stiffness", "Radiating pain"],
        url: "/conditions/back-pain/",
        icon: Flame,
        featured: true,
    },
    {
        id: "headaches-neck-pain",
        title: "Headaches & Neck Pain",
        description: "Relief for tension headaches, cervical pain, and neck stiffness through targeted massage therapy.",
        category: "Pain Management",
        severity: "Medium",
        commonality: "Very Common",
        treatmentTime: "3-6 sessions",
        symptoms: ["Tension headaches", "Neck stiffness", "Shoulder tension", "Jaw pain", "Eye strain"],
        url: "/conditions/headaches-migraines/",
        icon: Brain,
        featured: true,
    },
    {
        id: "chronic-pain",
        title: "Chronic Pain",
        description: "Long-term pain management strategies for persistent conditions affecting daily life and mobility.",
        category: "Pain Management",
        severity: "High",
        commonality: "Common",
        treatmentTime: "Ongoing",
        symptoms: ["Persistent pain", "Fatigue", "Sleep disturbance", "Mood changes", "Reduced mobility"],
        url: "/conditions/chronic-pain/",
        icon: Zap,
        featured: true,
    },
    {
        id: "muscle-tension",
        title: "Muscle Tension Relief",
        description: "Treatment for muscle knots, trigger points, and general muscular tension throughout the body.",
        category: "Pain Management",
        severity: "Medium",
        commonality: "Very Common",
        treatmentTime: "2-4 sessions",
        symptoms: ["Muscle knots", "Trigger points", "Stiffness", "Reduced flexibility", "Aching muscles"],
        url: "/conditions/muscle-tension/",
        icon: Activity,
    },
    {
        id: "sciatica",
        title: "Sciatica Treatment",
        description: "Specialized care for sciatic nerve pain, leg numbness, and lower back radiating symptoms.",
        category: "Pain Management",
        severity: "High",
        commonality: "Common",
        treatmentTime: "6-10 sessions",
        symptoms: ["Leg pain", "Numbness", "Tingling", "Weakness", "Burning sensation"],
        url: "/conditions/sciatica-treatment/",
        icon: Zap,
    },
    {
        id: "arthritis-pain",
        title: "Arthritis Pain",
        description: "Gentle, effective treatment for arthritis-related joint pain and stiffness.",
        category: "Pain Management",
        severity: "Medium",
        commonality: "Common",
        treatmentTime: "Ongoing",
        symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced range of motion", "Morning stiffness"],
        url: "/conditions/arthritis-pain/",
        icon: Bone,
    },
    {
        id: "hip-knee-pain",
        title: "Hip & Knee Pain",
        description: "Treatment for hip dysfunction, knee pain, and lower extremity mobility issues.",
        category: "Musculoskeletal",
        severity: "Medium",
        commonality: "Common",
        treatmentTime: "4-8 sessions",
        symptoms: ["Hip pain", "Knee stiffness", "Limping", "Grinding sensation", "Weakness"],
        url: "/conditions/hip-and-knee-pain/",
        icon: Footprints,
        featured: true,
    },
    {
        id: "shoulder-pain",
        title: "Shoulder Pain",
        description: "Comprehensive shoulder treatment for rotator cuff injuries, frozen shoulder, and impingement.",
        category: "Musculoskeletal",
        severity: "Medium",
        commonality: "Common",
        treatmentTime: "6-12 sessions",
        symptoms: ["Shoulder pain", "Limited range of motion", "Weakness", "Clicking sounds", "Night pain"],
        url: "/conditions/shoulder-pain/",
        icon: Activity,
        featured: true,
    },
    {
        id: "postural-imbalance",
        title: "Postural Imbalance",
        description: "Correction of postural dysfunction and alignment issues affecting daily activities.",
        category: "Musculoskeletal",
        severity: "Medium",
        commonality: "Very Common",
        treatmentTime: "8-12 sessions",
        symptoms: ["Forward head posture", "Rounded shoulders", "Uneven hips", "Muscle imbalances", "Fatigue"],
        url: "/conditions/postural-imbalance/",
        icon: Activity,
    },
    {
        id: "joint-stiffness",
        title: "Joint Stiffness",
        description: "Treatment for reduced joint mobility and stiffness affecting movement quality.",
        category: "Musculoskeletal",
        severity: "Medium",
        commonality: "Common",
        treatmentTime: "4-8 sessions",
        symptoms: ["Stiff joints", "Reduced flexibility", "Morning stiffness", "Difficulty moving", "Aching"],
        url: "/conditions/joint-stiffness/",
        icon: Wrench,
    },
    {
        id: "sprains-strains",
        title: "Sprains & Strains",
        description: "Acute injury treatment for ligament sprains and muscle strains with rehabilitation focus.",
        category: "Sports Injuries",
        severity: "Medium",
        commonality: "Common",
        treatmentTime: "4-8 sessions",
        symptoms: ["Pain", "Swelling", "Bruising", "Limited movement", "Instability"],
        url: "/conditions/sprains-and-strains/",
        icon: Activity,
    },
    {
        id: "tendonitis",
        title: "Tendonitis Treatment",
        description: "Specialized care for inflamed tendons including tennis elbow, golfer's elbow, and Achilles tendonitis.",
        category: "Sports Injuries",
        severity: "Medium",
        commonality: "Common",
        treatmentTime: "6-10 sessions",
        symptoms: ["Tendon pain", "Stiffness", "Swelling", "Weakness", "Clicking sensation"],
        url: "/conditions/tendonitis-treatment/",
        icon: Activity,
    },
    {
        id: "bursitis",
        title: "Bursitis Treatment",
        description: "Treatment for inflamed bursae causing pain and swelling around joints.",
        category: "Sports Injuries",
        severity: "Medium",
        commonality: "Less Common",
        treatmentTime: "4-8 sessions",
        symptoms: ["Joint pain", "Swelling", "Warmth", "Limited movement", "Tenderness"],
        url: "/conditions/bursitis-treatment/",
        icon: Flame,
    },
    {
        id: "plantar-fasciitis",
        title: "Plantar Fasciitis",
        description: "Effective treatment for heel pain and plantar fascia inflammation.",
        category: "Sports Injuries",
        severity: "Medium",
        commonality: "Common",
        treatmentTime: "6-12 sessions",
        symptoms: ["Heel pain", "Morning stiffness", "Arch pain", "Difficulty walking", "Sharp pain"],
        url: "/conditions/plantar-fasciitis/",
        icon: Footprints,
    },
    {
        id: "shin-splints",
        title: "Shin Splints",
        description: "Treatment for medial tibial stress syndrome and lower leg pain in runners and athletes.",
        category: "Sports Injuries",
        severity: "Medium",
        commonality: "Common",
        treatmentTime: "4-8 sessions",
        symptoms: ["Shin pain", "Tenderness", "Swelling", "Pain during activity", "Aching"],
        url: "/conditions/shin-splints/",
        icon: Activity,
    },
    {
        id: "it-band-syndrome",
        title: "IT Band Syndrome",
        description: "Treatment for iliotibial band friction syndrome causing lateral knee and hip pain.",
        category: "Sports Injuries",
        severity: "Medium",
        commonality: "Common",
        treatmentTime: "6-10 sessions",
        symptoms: ["Lateral knee pain", "Hip pain", "Snapping sensation", "Pain during running", "Stiffness"],
        url: "/conditions/it-band-syndrome/",
        icon: Activity,
    },
    {
        id: "sports-injury-prevention",
        title: "Sports Injury Prevention",
        description: "Proactive care to prevent injuries and optimize athletic performance.",
        category: "Sports Injuries",
        severity: "Low",
        commonality: "Common",
        treatmentTime: "Ongoing",
        symptoms: ["Muscle tightness", "Fatigue", "Minor aches", "Reduced performance", "Stiffness"],
        url: "/conditions/sports-injuries-and-prevention/",
        icon: Shield,
    },
    {
        id: "overuse-injuries",
        title: "Overuse Injuries",
        description: "Treatment for repetitive strain injuries and chronic overuse conditions.",
        category: "Sports Injuries",
        severity: "Medium",
        commonality: "Common",
        treatmentTime: "6-12 sessions",
        symptoms: ["Gradual pain onset", "Stiffness", "Weakness", "Reduced performance", "Persistent aching"],
        url: "/conditions/sports-injuries-and-prevention/", // Note: Using sports injuries as fallback since overuse-injuries doesn't have a specific page in app/conditions
        icon: Repeat,
    },
    {
        id: "stress-anxiety-relief",
        title: "Stress & Anxiety Relief",
        description: "Therapeutic massage for stress reduction, anxiety management, and overall mental wellness.",
        category: "Wellness",
        severity: "Medium",
        commonality: "Very Common",
        treatmentTime: "Ongoing",
        symptoms: ["Muscle tension", "Headaches", "Sleep issues", "Fatigue", "Irritability"],
        url: "/services/relaxation-massage/", // Mapped to service 
        icon: Heart,
        featured: true,
    }
];

const CATEGORIES = ["All Conditions", "Pain Management", "Musculoskeletal", "Sports Injuries", "Wellness"];

/* ═══════════════════════════════════════════════════════════════════
   ConditionsPage Component
   ═══════════════════════════════════════════════════════════════════ */
export function ConditionsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Conditions");
    const [severityFilter, setSeverityFilter] = useState("All");
    const [commonalityFilter, setCommonalityFilter] = useState("All");

    const filteredConditions = useMemo(() => {
        return CONDITIONS.filter((condition) => {
            const matchesSearch =
                !searchTerm ||
                condition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                condition.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                condition.symptoms.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesCategory = activeCategory === "All Conditions" || condition.category === activeCategory;
            const matchesSeverity = severityFilter === "All" || condition.severity === severityFilter;
            const matchesCommonality = commonalityFilter === "All" || condition.commonality === commonalityFilter;

            return matchesSearch && matchesCategory && matchesSeverity && matchesCommonality;
        });
    }, [searchTerm, activeCategory, severityFilter, commonalityFilter]);

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
                                <span className="text-sm font-medium text-white">8,000+ Treatments</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 glass-panel rounded-full px-4 py-1.5 border-white/20 bg-white/5">
                                <Users className="w-4 h-4 text-blue-300" />
                                <span className="text-sm font-medium text-white">800+ Happy Clients</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.05}>
                        <h1 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight text-balance">
                            Conditions We Treat
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
                            Comprehensive treatment for a wide range of conditions using evidence-based massage therapy, athletic therapy, and clinical rehabilitation.
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
                            <h2 className="text-3xl font-bold text-foreground mb-4">Find Your Condition</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Search through our comprehensive list of treatable conditions or browse by category to find the right care plan for you.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <div className="max-w-4xl mx-auto">
                            {/* Search Bar */}
                            <div className="relative mb-8">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search conditions, symptoms, or causes..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-border focus:border-primary rounded-xl outline-none bg-background text-foreground transition-colors"
                                />
                            </div>

                            {/* Category Tabs */}
                            <div className="flex flex-wrap gap-2 justify-center mb-8">
                                {CATEGORIES.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 ${activeCategory === category
                                                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 focus:ring-primary/40 ring-offset-2"
                                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/40 ring-offset-2"
                                            }`}
                                    >
                                        {category}
                                        <span className="ml-2 opacity-70 text-xs">
                                            ({category === "All Conditions" ? CONDITIONS.length : CONDITIONS.filter(c => c.category === category).length})
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* Advanced Filters */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-secondary/30 p-4 rounded-xl border border-border">
                                <div className="flex-1 flex items-center gap-3">
                                    <Filter className="w-4 h-4 text-muted-foreground hidden sm:block" />
                                    <select
                                        value={severityFilter}
                                        onChange={(e) => setSeverityFilter(e.target.value)}
                                        className="w-full p-3.5 border border-border rounded-lg focus:border-primary outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground text-sm font-medium cursor-pointer transition-all duration-200"
                                    >
                                        <option value="All">All Severities</option>
                                        <option value="Low">Low Severity</option>
                                        <option value="Medium">Medium Severity</option>
                                        <option value="High">High Severity</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <select
                                        value={commonalityFilter}
                                        onChange={(e) => setCommonalityFilter(e.target.value)}
                                        className="w-full p-3.5 border border-border rounded-lg focus:border-primary outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground text-sm font-medium cursor-pointer transition-all duration-200"
                                    >
                                        <option value="All">All Commonalities</option>
                                        <option value="Very Common">Very Common</option>
                                        <option value="Common">Common</option>
                                        <option value="Less Common">Less Common</option>
                                    </select>
                                </div>
                                {(searchTerm || activeCategory !== "All Conditions" || severityFilter !== "All" || commonalityFilter !== "All") && (
                                    <Button
                                        variant="ghost"
                                        onClick={() => {
                                            setSearchTerm("");
                                            setActiveCategory("All Conditions");
                                            setSeverityFilter("All");
                                            setCommonalityFilter("All");
                                        }}
                                        className="text-muted-foreground hover:text-foreground cursor-pointer min-h-[44px] transition-all duration-200"
                                    >
                                        Clear Filters
                                    </Button>
                                )}
                            </div>

                            {/* Results Count */}
                            <div className="mb-6 font-medium text-muted-foreground text-sm">
                                Showing {filteredConditions.length} condition{filteredConditions.length !== 1 ? 's' : ''}
                                {searchTerm && ` for "${searchTerm}"`}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Results Grid */}
                    {filteredConditions.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
                            {filteredConditions.map((condition, index) => {
                                const severityColors = {
                                    High: "bg-red-50 text-red-700 border-red-200",
                                    Medium: "bg-amber-50 text-amber-700 border-amber-200",
                                    Low: "bg-green-50 text-green-700 border-green-200",
                                };

                                return (
                                    <ScrollReveal key={condition.id} delay={0.05 * (index % 6)}>
                                        <Link href={condition.url} className="block h-full focus:outline-none focus:ring-4 focus:ring-primary/40 rounded-2xl group cursor-pointer transition-all duration-200 ring-offset-2">
                                            <GlassCard className="h-full flex flex-col p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-200 border-border group-hover:border-primary/30 active:scale-[0.98]">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className={`p-3 rounded-xl inline-flex bg-digital-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200`}>
                                                        <condition.icon className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex flex-col gap-2 items-end">
                                                        {condition.featured && (
                                                            <span className="bg-digital-blue-100 text-digital-blue-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                                                                Featured
                                                            </span>
                                                        )}
                                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${severityColors[condition.severity as keyof typeof severityColors]}`}>
                                                            {condition.severity} Severity
                                                        </span>
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                    {condition.title}
                                                </h3>

                                                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                                    {condition.description}
                                                </p>

                                                <div className="space-y-4 mb-6 pt-4 border-t border-border">
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-muted-foreground font-semibold uppercase tracking-wider">Category</span>
                                                        <span className="text-foreground font-medium">{condition.category}</span>
                                                    </div>
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-muted-foreground font-semibold uppercase tracking-wider">Timeline</span>
                                                        <span className="text-foreground font-medium">{condition.treatmentTime}</span>
                                                    </div>
                                                </div>

                                                <div className="mb-6">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Key Symptoms</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {condition.symptoms.slice(0, 3).map((symptom) => (
                                                            <span key={symptom} className="bg-secondary/50 border border-border text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium">
                                                                {symptom}
                                                            </span>
                                                        ))}
                                                        {condition.symptoms.length > 3 && (
                                                            <span className="bg-secondary/50 border border-border text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium">
                                                                +{condition.symptoms.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

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
                                <h3 className="text-2xl font-bold text-foreground mb-2">No conditions found</h3>
                                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                    We couldn't find any conditions matching your current filters. Try removing some filters or adjusting your search term.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setSearchTerm("");
                                            setActiveCategory("All Conditions");
                                            setSeverityFilter("All");
                                            setCommonalityFilter("All");
                                        }}
                                        className="cursor-pointer min-h-[44px] transition-all duration-200"
                                    >
                                        Clear All Filters
                                    </Button>
                                    <Button asChild className="cursor-pointer min-h-[44px] transition-all duration-200">
                                        <a href="tel:+12508128698">
                                            <Phone className="w-4 h-4 mr-2" />
                                            Call to Discuss Your Condition
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
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Treatment Approach</h2>
                            <p className="text-lg text-muted-foreground">
                                Every condition is unique, and so is our approach to treating it. Here's how we ensure the best outcomes for our clients.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Search,
                                title: "Comprehensive Assessment",
                                desc: "Thorough evaluation of your condition, medical history, lifestyle factors, and treatment goals to create a personalized plan."
                            },
                            {
                                icon: Activity,
                                title: "Evidence-Based Treatment",
                                desc: "Using proven techniques and modalities backed by research and clinical experience for optimal results."
                            },
                            {
                                icon: Shield,
                                title: "Progress Monitoring",
                                desc: "Regular assessment of your progress with treatment plan adjustments to ensure continuous improvement."
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
                        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
                            <Activity className="w-4 h-4" />
                            Don't Let Your Condition Get Worse
                        </div>

                        <h2 className="font-sans text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Start Your Recovery?
                        </h2>

                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                            Early intervention leads to better outcomes. Book your assessment today and take the first step toward feeling better.
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
                                    Book Your Assessment
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
