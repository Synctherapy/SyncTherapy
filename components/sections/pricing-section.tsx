import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    duration: "60 Minute Session",
    price: "$130",
    features: [
      "Complete assessment",
      "Targeted treatment",
      "Take-home recommendations",
      "Direct billing available",
    ],
    popular: false,
  },
  {
    duration: "90 Minute Session",
    price: "$178.50",
    features: [
      "Comprehensive assessment",
      "Multi-area treatment",
      "Detailed home care plan",
      "Direct billing available",
    ],
    popular: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-card-foreground text-balance">
          Colwood Massage Therapist Pricing
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.duration}
              className={`relative p-8 rounded-lg border ${
                plan.popular
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  Most Popular
                </span>
              )}
              
              <div className="text-center">
                <p className={`font-serif text-4xl ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.price}
                </p>
                <p className={`mt-2 font-semibold ${plan.popular ? "text-primary-foreground/90" : "text-foreground"}`}>
                  {plan.duration}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-primary-foreground" : "text-accent"}`} />
                    <span className={plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full mt-8 ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                asChild
              >
                <a href="https://www.synctherapy.ca/book" target="_blank" rel="noopener noreferrer">
                  Book {plan.duration.split(" ")[0]} Min Session
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Direct billing available to most insurance providers including Pacific Blue Cross, Sun Life, Manulife, Canada Life, and more.
        </p>
      </div>
    </section>
  );
}
