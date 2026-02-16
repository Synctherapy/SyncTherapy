"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import {
  Activity,
  Brain,
  User,
  PersonStanding,
  Waves,
  Trophy,
  ArrowRight
} from "lucide-react";

export function ConditionsSection() {
  return (
    <section className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-sans uppercase mb-4">
          Conditions We Treat
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          It’s not just about "fixing" a body part. It’s about getting your life back.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="block h-full"
            aria-label={`Learn more about ${item.name} treatment`}
          >
            <ShineBorder
              className="relative flex flex-row items-start text-left p-6 h-full w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-neutral-800 gap-4"
              color={["#0d9488", "#2dd4bf", "#0f766e"]}
            >
              <div className="shrink-0 p-3 w-12 h-12 rounded-xl bg-teal-50/50 dark:bg-teal-900/10 flex items-center justify-center ring-1 ring-teal-100 dark:ring-teal-900 mt-1">
                <item.Icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold font-sans text-navy dark:text-white leading-tight">
                  {item.name}
                </h3>

                <p className="text-muted-foreground text-sm font-medium">
                  {item.emotional}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  <span className="font-semibold text-teal-600/80 dark:text-teal-400/80 uppercase tracking-wider text-[10px]">Treats:</span> {item.details}
                </p>

                <div className="mt-auto pt-2 flex items-center text-xs font-bold text-teal-600 dark:text-teal-400 group-hover:gap-2 transition-all">
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3 h-3 ml-1 transition-all" />
                </div>
              </div>
            </ShineBorder>
          </Link>
        ))}
      </div>
    </section>
  );
}

const items = [
  {
    name: "Back Pain",
    emotional: "Bend over pain-free to pick up your grandkids.",
    details: "Sciatica, herniated discs, lower back strain, and posture correction.",
    Icon: Activity,
    href: "/conditions/back-pain-relief-victoria",
    cta: "Relief Starts Here",
  },
  {
    name: "Neck Pain",
    emotional: "Check your blind spot without turning your whole body.",
    details: "Whiplash, stiff neck, tech-neck, and tension headaches.",
    Icon: Brain,
    href: "/conditions/neck-pain-relief-victoria",
    cta: "Move Freely",
  },
  {
    name: "Shoulder Pain",
    emotional: "Reach for the top shelf with confidence.",
    details: "Rotator cuff injuries, frozen shoulder, and impingement.",
    Icon: User,
    href: "/conditions/shoulder-pain-relief-victoria",
    cta: "Restore Range",
  },
  {
    name: "Hip & Knee Pain",
    emotional: "Squat down to garden or sit on the floor comfortably.",
    details: "Runner’s knee, IT band syndrome, arthritis, and hip flexor strain.",
    Icon: PersonStanding,
    href: "/conditions/sciatica-relief-victoria",
    cta: "Strengthen Now",
  },
  {
    name: "Chronic Pain",
    emotional: "Focus on your work without the constant distraction.",
    details: "Fibromyalgia, arthritis management, and long-standing injury patterns.",
    Icon: Waves,
    href: "/conditions/chronic-pain-relief-victoria",
    cta: "Clear The Fog",
  },
  {
    name: "Sports Injuries",
    emotional: "Get back to the starting line feeling stronger.",
    details: "Sprains, strains, tendonitis, and post-surgical rehab.",
    Icon: Trophy,
    href: "/conditions/conditions-sports-injuries",
    cta: "Return to Sport",
  },
];
