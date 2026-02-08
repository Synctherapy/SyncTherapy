"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Waves,
  AlignRight,
  Clipboard,
  Bone,
  Pencil,
  Columns,
  Car,
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
          Evidence-based therapies for a wide range of physical conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="group relative flex flex-col p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-border/50 hover:border-amber-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-5 h-5 text-amber-600" />
            </div>

            <div className="mb-6 p-4 w-14 h-14 rounded-full bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:text-amber-600 transition-all duration-300">
              <item.Icon className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
              {item.name}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-amber-700/80 dark:text-amber-500/80">
              <span>{item.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const items = [
  {
    name: "Back & Neck Pain",
    description: "Relief from chronic tension, sciatica, and postural strain.",
    Icon: Clipboard,
    href: "https://synctherapy.janeapp.com/",
    cta: "Book Assessment",
  },
  {
    name: "Sports Injuries",
    description: "Rehabilitation for sprains, strains, and athletic trauma.",
    Icon: Bone,
    href: "https://synctherapy.janeapp.com/",
    cta: "Book Assessment",
  },
  {
    name: "Headaches & Migraines",
    description: "Targeted therapy to reduce frequency and intensity.",
    Icon: Pencil,
    href: "https://synctherapy.janeapp.com/",
    cta: "Book Assessment",
  },
  {
    name: "Post-Surgical Rehab",
    description:
      "Accelerate recovery and restore mobility after orthopedic surgeries.",
    Icon: Columns,
    href: "https://synctherapy.janeapp.com/",
    cta: "Book Assessment",
  },
  {
    name: "TMJ Dysfunction",
    description: "Specialized treatment for jaw pain and dysfunction.",
    Icon: Waves,
    href: "https://synctherapy.janeapp.com/",
    cta: "Book Assessment",
  },
  {
    name: "Pregnancy Support",
    description: "Safe, effective care for expectant mothers.",
    Icon: AlignRight,
    href: "https://synctherapy.janeapp.com/",
    cta: "Book Assessment",
  },
  {
    name: "Motor Vehicle Accidents",
    description: "ICBC approved treatment for whiplash and crash injuries.",
    Icon: Car,
    href: "https://synctherapy.janeapp.com/",
    cta: "Book Assessment",
  },
];
