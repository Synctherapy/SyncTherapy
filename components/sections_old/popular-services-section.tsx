"use client";

import { cn } from "@/lib/utils";
import {
  Activity,
  CreditCard,
  Calendar,
  MonitorCheck,
  HelpingHand,
  FileText,
  Dumbbell,
  UserCheck,
} from "lucide-react";

export function PopularServicesSection() {
  const features = [
    {
      title: "Registered Massage Therapy",
      description:
        "Most people in Colwood come to see us for one reason — something hurts. We look at how you move, where the tightness is, and build a plan for real relief that lasts.",
      icon: <HelpingHand className="w-8 h-8" />,
    },
    {
      title: "Athletic Therapy",
      description:
        "You don't have to be a pro athlete. If you play weekend hockey near Langford or hike Witty's Lagoon, we get you back to doing what you love with a recovery plan that's actually realistic.",
      icon: <Activity className="w-8 h-8" />,
    },
    {
      title: "Deep Tissue",
      description:
        "We adjust the pressure to match what your body needs. Designed for tight shoulders, stubborn back pain, and knots that won't quit. No guessing, no 'just relax' nonsense.",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "Direct Billing",
      description:
        "One of the biggest reasons people put off care is cost. We offer direct billing for most major plans. No upfront costs, no fighting with insurance. Simple as that.",
      icon: <CreditCard className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-sans uppercase mb-4">
          Our Services
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive wellness solutions tailored to your unique needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-amber-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
