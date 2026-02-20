
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

interface ServiceItem {
    title: string;
    description: string;
    image: string;
    href: string;
    cta: string;
}

const modalities: ServiceItem[] = [
    {
        title: "Deep Tissue Massage",
        description: "Targeted pressure to release chronic muscle tension, break up adhesions, and recover from sports injuries in Colwood & Langford.",
        image: "/images/generated/massage-deep-tissue-unique.png",
        href: "/services/deep-tissue-massage/",
        cta: "Book Deep Tissue"
    },
    {
        title: "Myofascial Release & Trigger Point Therapy",
        description: "Eliminate painful \"knots\" and restore flexibility by targeting the connective tissue (fascia) and hyper-irritable muscle spots.",
        image: "/images/generated/myofascial-release.png",
        href: "/services/myofascial-release/",
        cta: "Release Tension"
    },
    {
        title: "Visceral Manipulation & Abdominal Massage",
        description: "Gentle manual therapy to restore organ mobility, release internal restrictions, and improve core digestion and pelvic health.",
        image: "/images/generated/massage-visceral-gentle.png",
        href: "/services/visceral-manipulation/",
        cta: "Learn About Visceral"
    },
    {
        title: "Relaxation Massage & Swedish Massage",
        description: "Improve circulation and de-stress with long, gliding strokes designed to down-regulate the nervous system and lower cortisol.",
        image: "/images/generated/relaxation-massage.png",
        href: "/services/relaxation-massage/",
        cta: "De-Stress Now"
    },
    {
        title: "Therapeutic Massage & Full Body Massage",
        description: "A total body reset addressing tension from head to toe to improve circulation, mobility, and injury recovery.",
        image: "/images/generated/massage-full-body-unique.png",
        href: "/services/massage-therapy/",
        cta: "Book Full Body"
    },
    {
        title: "Direct Billing - Pacific Blue Cross",
        description: "Skip the paperwork. We offer direct billing for Pacific Blue Cross, Canada Life, Sun Life, and Manulife.",
        image: "/images/generated/direct-billing.png",
        href: "/direct-billing/",
        cta: "View Insurers"
    }
];

const treatableConditions = [
    { text: "Massage for Chronic Pain", href: "/conditions/chronic-pain/" },
    { text: "Neck Pain Massage Therapy", href: "/conditions/neck-shoulder-pain/" },
    { text: "Neck and Shoulder Massage", href: "/conditions/neck-shoulder-pain/" },
    { text: "Massage for Headaches", href: "/conditions/neck-shoulder-pain/" },
    { text: "Migraine Relief Massage", href: "/conditions/neck-shoulder-pain/" },
    { text: "Massage for Athletes", href: "/conditions/sports-injuries-and-prevention/" },
    { text: "Massage for Arthritis", href: "/conditions/arthritis-pain/" },
    { text: "Massage for Posture Correction", href: "/conditions/postural-imbalance/" },
    { text: "Massage for Fibromyalgia", href: "/conditions/chronic-pain/" },
    { text: "Stress Relief Massage", href: "/conditions/muscle-tension/" },
    { text: "Back Pain Relief", href: "/conditions/back-pain/" },
    { text: "Sciatica & Nerve Pain Relief", href: "/conditions/sciatica-treatment/" }
];

export function MassageTherapyServices() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-multiply opacity-70 animate-blob will-change-transform" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none mix-blend-multiply opacity-70 animate-blob animation-delay-2000 will-change-transform" />

            <div className="container mx-auto px-4 relative z-10">

                {/* LIST A: OUR MODALITIES */}
                <div className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <ScrollReveal>
                            <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                                Our Methods
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground font-sans tracking-tight">
                                Therapeutic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">Modalities</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed font-light">
                                Specialized techniques tailored to your specific recovery needs.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                        {modalities.map((service, index) => (
                            <ScrollReveal key={index} delay={index * 0.05} className="h-full">
                                <Link href={service.href} className="block h-full cursor-pointer">
                                    <GlassCard
                                        variant="default"
                                        className="flex flex-col gap-4 p-6 h-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-xl bg-white/60 backdrop-blur-xl border-white/40 hover:bg-white/80 relative overflow-hidden"
                                    >
                                        <div className="bg-muted rounded-xl aspect-[4/3] mb-2 overflow-hidden relative shadow-inner group-hover:shadow-md transition-shadow duration-500">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2 flex-grow">
                                            <h3 className="text-xl font-bold tracking-tight text-foreground font-sans group-hover:text-blue-700 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                                                {service.description}
                                            </p>
                                            <div className="pt-4 mt-auto">
                                                <span
                                                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-all group-hover:translate-x-1"
                                                >
                                                    {service.cta} <ArrowRight className="ml-1 w-3 h-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* LIST B: CONDITIONS WE TREAT */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <ScrollReveal>
                            <Badge variant="secondary" className="mb-6 bg-green-50 text-green-700 hover:bg-green-100 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                                What We Treat
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground font-sans tracking-tight">
                                Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Conditions</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed font-light">
                                Expert care for pain relief and long-term recovery.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {treatableConditions.map((condition, index) => (
                                <ScrollReveal key={index} delay={index * 0.03}>
                                    <Link href={condition.href} className="block group">
                                        <div className="bg-white/50 hover:bg-white border border-white/60 hover:border-green-200 shadow-sm hover:shadow-md rounded-xl p-4 transition-all duration-300 flex items-center justify-between">
                                            <span className="text-lg font-medium text-slate-700 group-hover:text-green-700 transition-colors flex items-center">
                                                <CheckCircle2 className="w-5 h-5 mr-3 text-green-500/50 group-hover:text-green-600 transition-colors" />
                                                {condition.text}
                                            </span>
                                            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
