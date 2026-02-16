import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground leading-tight text-balance">
          Ready to Experience Professional Massage Therapy in Colwood?
        </h2>

        <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto leading-relaxed">
          I'm at 132, 328 Wale Rd #120, right here in Colwood. Easy to find, easy to park. If you're in Langford, Victoria, or anywhere on the West Shore — I'm closer than you think.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
            asChild
          >
            <a href="https://www.synctherapy.ca/book" target="_blank" rel="noopener noreferrer">
              Book Your Appointment Now
            </a>
          </Button>

          <span className="text-primary-foreground/70">or</span>

          <a
            href="tel:+12508128698"
            className="inline-flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 font-medium"
          >
            <Phone className="w-5 h-5" />
            (250) 812-8698
          </a>
        </div>
      </div>
    </section>
  );
}
