import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredItems = [
  {
    title: "Deep Tissue Massage",
    description: "Targeted release for chronic tension and muscle pain. Effective for postural issues and long-standing discomfort.",
    image: "/images/service-massage.jpg",
    href: "/services/deep-tissue-massage-victoria",
    cta: "Book Deep Tissue"
  },
  {
    title: "Direct Billing Massage",
    description: "We handle the paperwork for you. Direct billing available for most major insurance providers including Pacific Blue Cross, Canada Life, and more.",
    image: "/images/service-athletic.jpg", // Using existing image for now
    href: "/services/direct-billing-massage-victoria",
    cta: "Learn More"
  },
  {
    title: "Sports Injury Treatment",
    description: "Specialized assessment and treatment for sports-related injuries. Get back to your activity safely and stronger than before.",
    image: "/images/service-nutrition.jpg", // Using existing image for now
    href: "/services/sports-massage-victoria",
    cta: "Book Sports Rehab"
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground text-balance mb-12">
          Most Popular Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-background rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col border-none"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <span className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300">
                  {service.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
