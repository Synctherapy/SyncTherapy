import { ArrowRight, Sparkles, Activity, Trophy, Apple, HeartPulse } from "lucide-react";
import Link from "next/link";

const featuredServices = [
  {
    icon: Sparkles,
    title: "Massage Therapy",
    tag: "RMT",
    description: "Registered Massage Therapy for pain relief, stress reduction, and rehabilitation.",
    href: "/services/massage-therapy-victoria",
  },
  {
    icon: Activity,
    title: "Athletic Therapy",
    tag: "CAT(C)",
    description: "Injury assessment and rehabilitation for active individuals and athletes.",
    href: "/services/athletic-therapy",
  },
  {
    icon: Trophy,
    title: "Sports Massage",
    tag: "RMT",
    description: "Performance-focused treatment to prevent injury and enhance recovery.",
    href: "/services/sports-massage-victoria",
  },
  {
    icon: HeartPulse,
    title: "Pain Management",
    tag: "RMT / CAT(C)",
    description: "Comprehensive care for chronic pain, sciatica, and complex conditions.",
    href: "/services/pain-management",
  },
  {
    icon: Apple,
    title: "Nutrition & Health",
    tag: "Nutritionist",
    description: "Holistic nutritional consulting to support your recovery and wellness goals.",
    href: "/services/nutritionist",
  },
];

export function PopularServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground text-balance">
          Massage Therapy Services in Colwood
        </h2>

        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Comprehensive care for your body and health.
        </p>

        <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors h-full"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="mt-4 flex-1">
                <span className="inline-block text-xs font-bold text-accent mb-1 uppercase tracking-wider">
                  {service.tag}
                </span>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
            View All Services <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
