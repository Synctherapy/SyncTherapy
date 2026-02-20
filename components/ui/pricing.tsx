"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import NumberFlow from "@number-flow/react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface PricingPlan {
    name: string;
    price: string;
    period: string;
    features: string[];
    description: string;
    buttonText: string;
    href: string;
    isPopular: boolean;
}

interface PricingProps {
    plans: PricingPlan[];
    title?: string;
    description?: string;
}

export function Pricing({
    plans,
    title = "Pricing For Massage Therapy In Colwood",
    description = "Choose the plan that works for you",
}: PricingProps) {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="container py-24 relative">
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <ScrollReveal>
                <div className="text-center space-y-4 mb-16 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-sans text-center text-foreground text-balance font-bold tracking-tight">
                        {title}
                    </h2>
                    <p className="text-slate-600 text-lg whitespace-pre-line max-w-2xl mx-auto font-roboto">
                        {description}
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 relative z-10">
                {plans.map((plan, index) => (
                    <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                        <div className={cn(
                            "h-full transition-all duration-300",
                            plan.isPopular ? "md:-mt-8 md:mb-8 z-20" : "z-10"
                        )}>
                            <GlassCard
                                variant={plan.isPopular ? "strong" : "default"}
                                className={cn(
                                    "h-full flex flex-col relative",
                                    plan.isPopular ? "border-blue-200 shadow-xl bg-white/80" : "bg-white/40 hover:bg-white/60"
                                )}
                            >
                                {plan.isPopular && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 py-1 px-4 rounded-bl-xl rounded-tr-xl flex items-center shadow-lg transform translate-x-px -translate-y-px">
                                        <Star className="text-white h-3.5 w-3.5 fill-current" />
                                        <span className="text-white ml-2 font-sans font-bold text-xs uppercase tracking-wider">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="flex-1 flex flex-col p-2">
                                    <p className={cn(
                                        "text-sm font-bold uppercase tracking-widest mb-4",
                                        plan.isPopular ? "text-blue-600" : "text-slate-500"
                                    )}>
                                        {plan.name}
                                    </p>
                                    <div className="flex items-baseline gap-x-1 mb-2">
                                        <span className="text-5xl font-bold tracking-tight text-navy font-sans">
                                            <NumberFlow
                                                value={Number(plan.price)}
                                                format={{
                                                    style: "currency",
                                                    currency: "CAD",
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 2,
                                                }}
                                                transformTiming={{
                                                    duration: 500,
                                                    easing: "ease-out",
                                                }}
                                                willChange
                                                className="font-variant-numeric: tabular-nums"
                                            />
                                        </span>
                                        <span className="text-muted-foreground font-medium">/ {plan.period}</span>
                                    </div>

                                    <p className="text-sm text-slate-600 mb-6 leading-relaxed min-h-[40px]">
                                        {plan.description}
                                    </p>

                                    <hr className="border-border/50 mb-6" />

                                    <ul className="gap-4 flex flex-col text-left mb-8 flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className={cn(
                                                    "p-0.5 rounded-full mt-0.5",
                                                    plan.isPopular ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"
                                                )}>
                                                    <Check className="h-3.5 w-3.5 flex-shrink-0" />
                                                </div>
                                                <span className="text-sm text-slate-700 font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto">
                                        <Button
                                            asChild
                                            variant={plan.isPopular ? "premium" : "outline"}
                                            size="lg"
                                            className={cn(
                                                "w-full rounded-full h-12 text-base font-bold",
                                                !plan.isPopular && "border-blue-200 text-blue-700 hover:text-blue-800 hover:bg-blue-50"
                                            )}
                                        >
                                            <Link href={plan.href}>
                                                {plan.buttonText}
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
