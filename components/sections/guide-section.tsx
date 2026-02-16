import Image from "next/image";
import { CheckCircle2, Award, Star } from "lucide-react";

const credentials = [
  "Registered Massage Therapist (RMT) — Since 2017",
  "Certified Athletic Therapist CAT(C) — Since 2013",
  "Holistic Nutritionist — Since 2018",
  "CCHPBC Registered",
];

export function GuideSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-16 text-balance">
          One Clinic. One Therapist. Real Answers.
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden">
                <Image
                  src="/images/daryl-stubbs.jpg"
                  alt="Daryl Stubbs, RMT - Registered Massage Therapist in Colwood"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl text-foreground">
                Daryl Stubbs, RMT, CAT(C)
              </h3>
              <p className="text-muted-foreground font-medium mt-1">
                Registered Massage Therapist in Colwood
              </p>
              
              <p className="mt-4 text-foreground/80 leading-relaxed">
                I run one clinic. I'm one therapist. My name is Daryl, and I'm a Registered Massage Therapist, a Certified Athletic Therapist, and a Holistic Nutritionist. That means depending on what you need, I can help from a couple of different angles. I've been helping people in this community since 2013.
              </p>

              <p className="mt-3 text-foreground/80 leading-relaxed">
                Sync has won Best Massage and Rehab Clinic six times in a row. But honestly, I don't care about awards. I care that you feel better when you walk out.
              </p>

              <ul className="mt-6 space-y-3">
                {credentials.map((credential) => (
                  <li key={credential} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{credential}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://www.synctherapy.ca/about" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-accent hover:text-accent/80 font-medium text-sm"
              >
                Read Full Bio →
              </a>
            </div>
          </div>

          {/* Right - Awards */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-background rounded-lg">
                <Award className="w-12 h-12 text-accent mx-auto" />
                <p className="mt-4 font-serif text-3xl text-foreground">6x</p>
                <p className="mt-1 font-semibold text-foreground">Best Massage & Rehab Clinic</p>
                <p className="mt-1 text-sm text-muted-foreground">Community Votes Victoria 2019-2024</p>
              </div>
              
              <div className="text-center p-6 bg-background rounded-lg">
                <Star className="w-12 h-12 text-accent mx-auto" />
                <p className="mt-4 font-serif text-3xl text-foreground">4.9/5</p>
                <p className="mt-1 font-semibold text-foreground">Google Rating</p>
                <p className="mt-1 text-sm text-muted-foreground">119+ Verified Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
