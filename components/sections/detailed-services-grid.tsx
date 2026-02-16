"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Massage Therapy",
        label: "RMT",
        description: "Most people in Colwood come to see me for one reason—something hurts. Massage therapy is one of the best ways to deal with that kind of pain.",
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
        href: "/services",
        cta: "View Massage Therapy Services"
    },
    {
        title: "Athletic Therapy",
        label: "CAT(C)",
        description: "You don't have to be a pro athlete. I look at how your body moves, find what's not working right, and put together a recovery plan.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
        href: "/services",
        cta: "View Athletic Therapy Services"
    },
    {
        title: "Holistic Nutrition",
        label: "Nutritionist",
        description: "What you eat plays a huge role in pain and inflammation. I sit down with you to figure out where the gaps are.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
        href: "/services",
        cta: "View Nutrition Services"
    },
    {
        title: "Direct Billing Massage",
        label: "RMT",
        description: "No upfront costs, no fighting with your insurance company. You show up, you get your treatment, and I handle the paperwork.",
        image: "/images/services/direct-billing.png",
        href: "/services",
        cta: "Learn About Direct Billing"
    },
    {
        title: "Deep Tissue Massage",
        label: "RMT",
        description: "It gets into the layers of muscle that are actually causing your pain. Good deep tissue work should hurt a little.",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
        href: "/services",
        cta: "Book Deep Tissue Massage"
    },
    {
        title: "Nutritionist",
        label: "Nutritionist",
        description: "Chronic pain, slow recovery, poor sleep—all can tie back to nutrition. I work with you on real food changes.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
        href: "/services",
        cta: "View Nutrition Consulting"
    },
    {
        title: "Health Consultant",
        label: "General Practice",
        description: "Sometimes you need someone to sit down and talk about your health—like a real person. I help you understand an injury.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        href: "/contact",
        cta: "Book a Consultation"
    },
    {
        title: "Pain Management Clinic",
        label: "RMT / CAT(C)",
        description: "I separate the root cause from the symptoms. Between massage, athletic therapy, and nutrition, I use every tool.",
        image: "/images/services/pain-management.png",
        href: "/services",
        cta: "Get Pain Relief"
    },
    {
        title: "Rehabilitation Center",
        label: "CAT(C) / RMT",
        description: "Recovering from surgery or an accident? I help you get your strength, mobility, and confidence back. Step by step.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
        href: "/services",
        cta: "Start Your Recovery"
    },
    {
        title: "Sports Injury Clinic",
        label: "CAT(C) / RMT",
        description: "Getting it moving right again after something goes wrong is exactly what this clinic does. From prevention to recovery.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
        href: "/services",
        cta: "Book Sports Injury Assessment"
    },
    {
        title: "Sports Massage Therapist",
        label: "RMT",
        description: "I understand how athletic bodies work. Helping an athlete recover vs just giving a relaxing rub down.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
        href: "/services",
        cta: "Book Sports Massage"
    },
    {
        title: "Physical Rehabilitation",
        label: "CAT(C) / RMT",
        description: "I combine hands-on therapy with a real recovery plan—something you can actually follow. No binders full of generic handouts.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
        href: "/services",
        cta: "Start Physical Rehab"
    }
];

import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function DetailedServicesGrid() {
    return (
        <div className="w-full py-20 lg:py-24 bg-background relative">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 flex-col items-start max-w-3xl">
                        <div>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                Complete Care
                            </Badge>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h2 className="font-sans text-3xl md:text-5xl tracking-tight text-left text-foreground font-bold">
                                One Clinic. One Therapist. Complete Care.
                            </h2>
                            <p className="text-lg leading-relaxed text-muted-foreground text-left font-roboto">
                                Managing your health shouldn't be complicated. Whether it's chronic pain, sports recovery, or nutrition—I've got you covered right here in Colwood.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollReveal key={index} delay={index * 0.05} className="h-full">
                                <GlassCard variant="hover" className="flex flex-col gap-4 p-5 h-full group">
                                    <div className="bg-muted rounded-xl aspect-video mb-2 overflow-hidden relative shadow-sm">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-300" />
                                    </div>

                                    <div className="flex flex-col gap-2 flex-grow">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold tracking-tight text-foreground font-inter">
                                                {service.title}
                                            </h3>
                                            <Badge variant="outline" className="text-[10px] uppercase font-bold text-slate-500 border-slate-200">
                                                {service.label}
                                            </Badge>
                                        </div>

                                        <p className="text-muted-foreground text-base leading-relaxed font-roboto flex-grow">
                                            {service.description}
                                        </p>

                                        <Link
                                            href={service.href}
                                            className="mt-4 inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors self-start group-hover:translate-x-1 duration-300"
                                        >
                                            {service.cta} <ArrowRight className="ml-1 w-4 h-4" />
                                        </Link>
                                    </div>
                                </GlassCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
