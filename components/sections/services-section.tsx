import Image from "next/image";
import { ArrowRight, Dumbbell, HeartPulse, Stethoscope, RotateCcw, PersonStanding, ClipboardList, LucideIcon } from "lucide-react";

interface ServiceItem {
  title: string;
  tag?: string;
  description: string;
  image?: string; // For primary
  icon?: LucideIcon; // For secondary
  href: string;
}

interface ServicesSectionProps {
  id?: string;
  title?: string;
  description?: string;
  primaryServices?: ServiceItem[];
  secondaryServices?: ServiceItem[];
}

const defaultPrimaryServices = [
  {
    title: "Massage Therapy",
    tag: "RMT Service",
    description: "Most people in Colwood come to see us for one reason — something hurts. We look at how you move, where the tightness is, and build a plan for real relief that lasts.",
    image: "/images/service-massage.jpg",
    href: "/services/massage-therapy/",
  },
  {
    title: "Athletic Therapy",
    tag: "CAT(C) Service",
    description: "You don't have to be a pro athlete. If you play weekend hockey, hike the trails around Witty's Lagoon, or just stay active — we find what's not working right and put together a recovery plan.",
    image: "/images/service-athletic.jpg",
    href: "/services/athletic-therapy/",
  },
  {
    title: "Holistic Nutrition",
    tag: "Nutritionist Service",
    description: "What you eat plays a huge role in how much pain you're in. Inflammation, slow healing, chronic aches — a lot of that comes back to diet. I sit down with you, look at what you're eating, and figure out where the gaps are.",
    image: "/images/service-nutrition.jpg",
    href: "https://www.synctherapy.ca/services/nutritionist/",
  },
];

const defaultSecondaryServices = [
  {
    icon: Dumbbell,
    title: "Sports Massage Therapist",
    tag: "RMT Service",
    description: "If you're a runner, hockey player, or just someone who pushes your body — I can connect the dots between what your body is doing during sport and what it needs to recover.",
    href: "https://www.synctherapy.ca/services/sports-massage/",
  },
  {
    icon: HeartPulse,
    title: "Pain Control Clinic",
    tag: "RMT / CAT(C) Service",
    description: "Chronic pain messes with your sleep, your work, your relationships. I don't just mask the pain — I look at what's going on and build a plan around actually addressing it.",
    href: "https://www.synctherapy.ca/services/pain-management/",
  },
  {
    icon: Stethoscope,
    title: "Sports Medicine Clinic",
    tag: "CAT(C) Service",
    description: "Anyone who plays hockey, does CrossFit, runs, or bikes can end up hurt. I assess the injury, figure out what's going on, and put together a plan to get you back at it.",
    href: "https://www.synctherapy.ca/services/sports-medicine/",
  },
  {
    icon: RotateCcw,
    title: "Rehabilitation Center",
    tag: "CAT(C) / RMT Service",
    description: "After a car accident, sports injury, or surgery — I work with you to build a recovery plan that makes sense for where you are right now. Step by step. No rushing.",
    href: "https://www.synctherapy.ca/services/rehabilitation/",
  },
  {
    icon: PersonStanding,
    title: "Physical Rehabilitation",
    tag: "CAT(C) / RMT Service",
    description: "Physical rehabilitation isn't just for people recovering from surgery. It's for anyone who's been injured, lost mobility, or just needs to get their body working better again.",
    href: "https://www.synctherapy.ca/services/physical-rehab/",
  },
  {
    icon: ClipboardList,
    title: "Health Consultant",
    tag: "General Practice",
    description: "Sometimes you need someone to sit down with you and actually talk about your health — like a real person, not a robot reading off a checklist. That's part of what I bring to every visit.",
    href: "https://www.synctherapy.ca/services/health-consultant/",
  },
];

export function ServicesSection({
  id = "services",
  title = "Massage Therapist Services in Colwood",
  description = "As a registered massage therapist, certified athletic therapist, and holistic nutritionist, I offer complete care for pain relief, injury recovery, and wellness. All services available at our Colwood clinic serving Langford and Victoria.",
  primaryServices = defaultPrimaryServices,
  secondaryServices = defaultSecondaryServices
}: ServicesSectionProps) {
  return (
    <section id={id} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-card-foreground text-balance">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {/* Primary Services */}
        {primaryServices && primaryServices.length > 0 && (
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {primaryServices.map((service) => (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background rounded-lg overflow-hidden border border-border hover:border-amber-500/50 transition-colors flex flex-col"
              >
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  {service.tag && (
                    <span className="inline-block text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded mb-2 w-fit">
                      {service.tag}
                    </span>
                  )}
                  <h3 className="font-semibold text-xl text-foreground group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-amber-50 text-amber-700 text-sm font-medium group-hover:bg-amber-100 transition-colors">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Secondary Services */}
        {secondaryServices && secondaryServices.length > 0 && (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryServices.map((service) => (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 bg-background rounded-lg border border-border hover:border-amber-500/50 transition-colors h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  {service.icon && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-amber-600" />
                    </div>
                  )}
                  <div>
                    {service.tag && (
                      <span className="inline-block text-xs font-medium text-muted-foreground mb-1">
                        {service.tag}
                      </span>
                    )}
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-1 text-sm text-muted-foreground flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <span className="inline-flex items-center text-sm font-medium text-amber-600 group-hover:text-amber-700">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
