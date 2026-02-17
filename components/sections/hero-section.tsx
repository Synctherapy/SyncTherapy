"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Star, CreditCard, ShieldCheck } from "lucide-react";

const STARS = [1, 2, 3, 4, 5];

const trustIndicators = [
  { icon: Award, text: "6x Award Winner" },
  { icon: Star, text: "120+ Five-Star Reviews" },
  { icon: CreditCard, text: "Direct Billing Available" },
  { icon: ShieldCheck, text: "CCHPBC Registered RMT" },
];

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  secondaryCtaSubtext?: string;
  tertiaryCtaText?: string;
  tertiaryCtaLink?: string;
  description?: React.ReactNode;
}

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HeroSection({
  title = "Award Winning Massage Therapist in Colwood",
  subtitle = "Sync Therapy: Where expert RMT care meets athletic therapy for comprehensive recovery.",
  image = "/images/massage-treatment.jpg",
  primaryCtaText = "Book Treatment",
  primaryCtaLink = "https://synctherapy.janeapp.com/",
  secondaryCtaText = "View Services",
  secondaryCtaLink = "#services",
  secondaryCtaSubtext,
  tertiaryCtaText,
  tertiaryCtaLink,
  description,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Registered Massage Therapist treating patient in Colwood clinic"
          fill
          className="object-cover animate-pulse-glow" // Subtle pulse animation on bg
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <ScrollReveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6 border-white/20">
              <div className="flex -space-x-1">
                {STARS.map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <span className="text-sm font-medium text-white">120+ Five-Star Reviews</span>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight text-balance tracking-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-6 text-xl md:text-2xl text-white/90 font-medium font-roboto">
                {subtitle}
              </p>
            )}

            {description && (
              <div className="glass-panel p-6 mt-8 rounded-2xl border-white/10 bg-white/5 backdrop-blur-md text-base md:text-lg text-white/90 leading-relaxed font-roboto">
                {description}
              </div>
            )}

            <div className="mt-10 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="premium"
                  className="text-base px-8 h-12 shadow-blue-900/20"
                  asChild
                >
                  <a href={primaryCtaLink} target="_blank" rel="noopener noreferrer">
                    {primaryCtaText}
                  </a>
                </Button>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 bg-transparent w-full sm:w-auto h-12"
                    asChild
                  >
                    <a href={secondaryCtaLink}>{secondaryCtaText}</a>
                  </Button>
                  {secondaryCtaSubtext && (
                    <span className="text-xs text-white/70 mt-1 max-w-[200px] leading-tight">
                      {secondaryCtaSubtext}
                    </span>
                  )}
                </div>
              </div>

              {tertiaryCtaText && tertiaryCtaLink && (
                <a
                  href={tertiaryCtaLink}
                  className="text-white/80 hover:text-white underline text-sm font-medium w-fit transition-colors"
                >
                  {tertiaryCtaText}
                </a>
              )}
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustIndicators.map((item, i) => (
                <ScrollReveal key={item.text} delay={i * 0.1}>
                  <div
                    className="flex items-center gap-2 text-white/90 glass-panel px-3 py-2 rounded-lg border-white/10 bg-white/5"
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0 text-blue-300" />
                    <span className="text-xs font-medium">{item.text}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
