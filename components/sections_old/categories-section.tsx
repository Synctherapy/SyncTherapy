"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
    IconActivity,
    IconBarbell,
    IconBuildingHospital,
    IconFirstAidKit,
    IconHeartbeat,
    IconMassage,
    IconSalad,
    IconStethoscope,
} from "@tabler/icons-react";

const categories = [
    {
        title: "Massage Therapist",
        description: "We look at what's really going on with your body and make a real plan. Not just a 60-minute rush job.",
        icon: <IconMassage className="w-8 h-8 text-amber-600 dark:text-amber-500" />,
        href: "/services/massage-therapy/",
    },
    {
        title: "Nutritionist",
        description: "Your nutrition and muscle health are connected. We work with you on real food changes that actually stick.",
        icon: <IconSalad className="w-8 h-8 text-amber-600 dark:text-amber-500" />,
        href: "/services/nutritionist/",
    },
    {
        title: "Health Consultant",
        description: "Sometimes you need someone to sit down and actually talk about your health — not a robot reading off a checklist.",
        icon: <IconStethoscope className="w-8 h-8 text-amber-600 dark:text-amber-500" />,
        href: "/services/health-consultant/",
    },
    {
        title: "Pain Control Clinic",
        description: "We don't just mask the pain. We look at the root cause and build a treatment plan around actually fixing it.",
        icon: <IconFirstAidKit className="w-8 h-8 text-amber-600 dark:text-amber-500" />,
        href: "/services/pain-management/",
    },
    {
        title: "Rehabilitation Center",
        description: "We help you get your strength, mobility, and confidence back. Step by step. No rushing.",
        icon: <IconBuildingHospital className="w-8 h-8 text-amber-600 dark:text-amber-500" />,
        href: "/services/rehabilitation/",
    },
    {
        title: "Sports Medicine Clinic",
        description: "From prevention to recovery, we help active people on the West Shore get back to doing what they love.",
        icon: <IconActivity className="w-8 h-8 text-amber-600 dark:text-amber-500" />,
        href: "/services/sports-medicine/",
    },
    {
        title: "Sports Massage Therapist",
        description: "Bruce is both an RMT and Certified Athletic Therapist. We understand how athletic bodies work.",
        icon: <IconBarbell className="w-8 h-8 text-amber-600 dark:text-amber-500" />,
        href: "/services/sports-massage/",
    },
    {
        title: "Physical Rehab Center",
        description: "We combine hands on therapy with a real recovery plan — something you can actually follow and stick to.",
        icon: <IconHeartbeat className="w-8 h-8 text-amber-600 dark:text-amber-500" />,
        href: "/services/physical-rehab/",
    },
];

export function CategoriesSection() {
    return (
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-sans text-foreground">
                        Massage Therapy & Wellness Services
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Explore our specialized departments tailored to your health needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href={category.href}
                            className="group relative flex flex-col p-6 bg-background rounded-2xl border border-border/50 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="w-5 h-5 text-amber-600" />
                            </div>

                            <div className="mb-4 p-3 w-fit rounded-xl bg-amber-50 dark:bg-amber-950/30 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40 transition-colors">
                                {category.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                                {category.title}
                            </h3>

                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                {category.description}
                            </p>

                            <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-amber-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Explore Hub
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
