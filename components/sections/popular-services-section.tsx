import { ArrowRight, Sparkles, CreditCard, Hand } from "lucide-react";

const featuredServices = [
  {
    icon: Sparkles,
    title: "Deep Tissue Massage",
    tag: "RMT Service",
    description: "If you've ever had a deep tissue massage done right, you know it's completely different. It gets into the layers of muscle that are actually causing your pain. It should hurt a little, but it shouldn't feel like someone's trying to break you.",
    href: "https://www.synctherapy.ca/services/deep-tissue-massage/",
  },
  {
    icon: CreditCard,
    title: "Direct Billing Massage",
    tag: "RMT Service",
    description: "One of the biggest reasons people put off going to the massage therapist is the cost. I offer direct billing for most major insurance plans. You show up, get your treatment, and I handle the paperwork. Simple as that.",
    href: "https://www.synctherapy.ca/services/direct-billing-massage/",
  },
  {
    icon: Hand,
    title: "Visceral Manipulation",
    tag: "RMT Service",
    description: "A gentle, hands-on therapy that releases restrictions around your internal organs. It helps improve mobility and function when traditional massage isn't getting to the root of the problem.",
    href: "https://www.synctherapy.ca/services/visceral-manipulation/",
  },
];

export function PopularServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground text-balance">
          Popular Services
        </h2>
        
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          These are the services Colwood residents book most often.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <a
              key={service.title}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="mt-4 flex-1">
                <span className="inline-block text-xs font-medium text-muted-foreground mb-1">
                  {service.tag}
                </span>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
