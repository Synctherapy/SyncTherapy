
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ServiceItem {
    title: string;
    description: string;
    image: string;
    href: string;
    cta: string;
}

const services: ServiceItem[] = [
    {
        title: "Deep Tissue Massage",
        description: "When regular massage just isn't cutting it anymore, deep tissue work reaches the layers of muscle and connective tissue causing your problems. Great for chronic tension from repetitive movements.",
        image: "/images/generated/massage-deep-tissue-unique.png",
        href: "/services/deep-tissue-massage-victoria",
        cta: "Book Deep Tissue"
    },
    {
        title: "Neck Pain & Shoulder Relief",
        description: "Our most requested service. Whether from tech-neck or stress, we address the muscles pulling things out of alignment—not just rubbing where it hurts.",
        image: "/images/generated/massage-neck-pain-unique.png",
        href: "/conditions/headaches-and-neck-pain",
        cta: "Relieve Neck Pain"
    },
    {
        title: "Massage for Headaches & Migraines",
        description: "Reducing triggers that set off migraines by working on suboccipital muscles, jaw tension, and shoulder muscles. Many clients see less frequent and less severe headaches.",
        image: "/images/generated/massage-headache-unique.png",
        href: "/conditions/headaches-and-neck-pain",
        cta: "Get Headache Relief"
    },
    {
        title: "Therapeutic & Swedish Massage",
        description: "Therapeutic massage has a specific goal like reducing pain or improving range of motion. Swedish massage focuses on relaxation and general wellness. We offer both.",
        image: "/images/generated/massage-swedish-unique.png",
        href: "/services/swedish-relaxation-massage-victoria",
        cta: "Book Therapeutic Massage"
    },
    {
        title: "Stress Relief & Relaxation",
        description: "Calm your nervous system. When you're in constant stress mode, your body doesn't heal properly. Regular massage helps break that cycle and improve sleep.",
        image: "/images/generated/massage-stress-relief-unique.png",
        href: "/services/swedish-relaxation-massage-victoria",
        cta: "De-Stress Now"
    },
    {
        title: "Full Body Massage",
        description: "Addressing your whole system, because everything is connected. Foot pain can cause knee issues, which affect hips and back. Comprehensive care for your whole body.",
        image: "/images/generated/massage-full-body-unique.png",
        href: "/services/massage-therapy-victoria",
        cta: "Book Full Body"
    },
    {
        title: "Trigger Point & Myofascial Release",
        description: "Release those tender spots that refer pain elsewhere. We also focus on the connective tissue (fascia) to restore movement and reduce restriction.",
        image: "/images/generated/massage-trigger-point-unique.png",
        href: "/services/myofascial-release-massage",
        cta: "Release Tension"
    },
    {
        title: "Massage for Athletes",
        description: "Whether you're a trail runner, mountain biker, or gym-goer, we help you recover faster, address imbalances, and prevent injuries so you can keep doing what you love.",
        image: "/images/generated/massage-athletes-recovery-unique.png",
        href: "/services/sports-massage-therapy",
        cta: "Optimize Performance"
    },
    {
        title: "Chronic Pain Conditions",
        description: "Management strategies for fibromyalgia, arthritis, and persistent pain. Gentle, consistent treatment to improve quality of life and reduce daily discomfort.",
        image: "/images/generated/massage-chronic-pain-unique.png",
        href: "/conditions/chronic-pain-victoria",
        cta: "Manage Chronic Pain"
    },
    {
        title: "Posture Correction",
        description: "Modern life is hard on posture. We work on tight muscles pulling you out of alignment and help lengthen stuck areas. Combined with awareness, it makes a real difference.",
        image: "/images/generated/massage-posture-correction-unique.png",
        href: "/conditions/postural-imbalance-victoria",
        cta: "Improve Posture"
    },
    {
        title: "Visceral Manipulation",
        description: "Gentle, specific work for abdominal organs to help with digestive issues, post-surgical recovery, and chronic pelvic pain. A specialized technique for deep healing.",
        image: "/images/generated/massage-visceral-gentle.png",
        href: "/services/visceral-manipulation-victoria",
        cta: "Learn About Visceral"
    }
];

export function ColwoodServices() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background decoration - Fluid Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-multiply opacity-70 animate-blob will-change-transform" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none mix-blend-multiply opacity-70 animate-blob animation-delay-2000 will-change-transform" />
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply opacity-70 animate-blob animation-delay-4000 will-change-transform" />


            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <ScrollReveal>
                        <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
                            Comprehensive Care
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground font-sans tracking-tight">
                            Focused Treatments <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">for Colwood</span>
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed font-light">
                            From deep tissue to visceral manipulation, our treatments are tailored to your specific needs.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.05} className="h-full">
                            <GlassCard
                                variant="default"
                                className="flex flex-col gap-5 p-6 h-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/5 bg-white/60 backdrop-blur-xl border-white/40 hover:bg-white/80 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="bg-muted rounded-2xl aspect-[4/3] mb-2 overflow-hidden relative shadow-inner group-hover:shadow-md transition-shadow duration-500">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                </div>

                                <div className="flex flex-col gap-3 flex-grow relative z-10">
                                    <h3 className="text-2xl font-bold tracking-tight text-foreground font-sans group-hover:text-blue-700 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground text-base leading-relaxed font-normal flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="pt-4 mt-auto">
                                        <Link
                                            href={service.href}
                                            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-all group-hover:translate-x-1 duration-300 group/link"
                                        >
                                            Learn More
                                            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
