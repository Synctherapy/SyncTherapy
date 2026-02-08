"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Star, CreditCard, ShieldCheck } from "lucide-react";

const trustIndicators = [
  { icon: Award, text: "6x Award Winner" },
  { icon: Star, text: "119+ Five-Star Reviews" },
  { icon: CreditCard, text: "Direct Billing Available" },
  { icon: ShieldCheck, text: "CCHPBC Registered RMT" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/massage-treatment.jpg"
          alt="Registered Massage Therapist treating patient in Colwood clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight text-balance">
            Your Massage Therapist in Colwood — Finally, Someone Who Actually Listens
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
            If you live on the West Shore — Colwood, Langford, Metchosin — you know how hard it is to find a massage therapist who actually takes the time. Not just someone who rushes through 60 minutes. Someone who looks at what's really going on.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
              asChild
            >
              <a href="https://www.synctherapy.ca/book" target="_blank" rel="noopener noreferrer">
                Book Your Appointment
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 bg-transparent"
              asChild
            >
              <a href="#services">View Services</a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustIndicators.map((item) => (
              <div 
                key={item.text} 
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
