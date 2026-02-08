import { Award, Star, BadgeCheck, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "6x Award Winner",
    description: "Voted Best Massage & Rehab Clinic by Community Votes Victoria six years running (2019-2024).",
  },
  {
    icon: Star,
    title: "119+ Five-Star Reviews",
    description: "4.9/5 rating on Google. Read what our Colwood, Langford, and Victoria clients say.",
  },
  {
    icon: BadgeCheck,
    title: "Triple Certified",
    description: "RMT, Certified Athletic Therapist CAT(C), and Holistic Nutritionist for complete care.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "1 minute from Juan De Fuca Rec Centre. Free parking. Serving the Westshore.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground text-balance">
          Why Colwood Chooses Sync Massage Therapy
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="mt-5 font-semibold text-lg text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
