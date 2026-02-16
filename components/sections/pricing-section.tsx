import { Pricing } from "@/components/ui/pricing";

export function PricingSection() {
  const plans = [
    {
      name: "75 Minute Massage",
      price: "157.50",
      period: "per session",
      features: [
        "Extended hands-on time",
        "Deep tissue & relaxation focus",
        "Direct Billing Available",
        "Detailed assessment included"
      ],
      description: "Ideal for addressing multiple areas or complex conditions.",
      buttonText: "Book 75 Minutes",
      href: "https://synctherapy.janeapp.com/",
      isPopular: false,
    },
    {
      name: "Initial Assessment",
      price: "130",
      period: "60 minutes",
      features: [
        "Comprehensive health history review",
        "Orthopedic assessment",
        "Targeted treatment plan",
        "Hands-on treatment included",
        "Direct Billing Available"
      ],
      description: "Required for all new patients to establish a baseline for care.",
      buttonText: "Book Initial Visit",
      href: "https://synctherapy.janeapp.com/",
      isPopular: true,
    },
    {
      name: "90 Minute Massage",
      price: "178.50",
      period: "per session",
      features: [
        "Maximum hands-on time",
        "Full body restoration",
        "Combine deep tissue & relaxation",
        "Direct Billing Available",
        "Stress reduction focus"
      ],
      description: "The ultimate session for deep recovery and relaxation.",
      buttonText: "Book 90 Minutes",
      href: "https://synctherapy.janeapp.com/",
      isPopular: false,
    },
  ];

  return (
    <section className="bg-slate-50 dark:bg-slate-900/20">
      <Pricing
        plans={plans}
        title="Pricing For Massage Therapy In Colwood"
        description="Transparent pricing. No hidden fees. Direct billing available for most insurance providers."
      />
      <p className="pb-24 text-center text-sm text-muted-foreground max-w-2xl mx-auto italic px-4">
        * GST is included in all prices. Rates are subject to change. Direct billing available to most insurance providers including Pacific Blue Cross, Sun Life, Manulife, Canada Life, and more.
      </p>
    </section>
  );
}
