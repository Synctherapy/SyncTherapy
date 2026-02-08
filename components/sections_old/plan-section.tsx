import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Book Your Appointment",
    description: "Schedule online in 60 seconds. No referral needed.",
  },
  {
    number: "02",
    title: "Get Assessed",
    description: "Your registered massage therapist will identify what's causing your pain and create a treatment plan.",
  },
  {
    number: "03",
    title: "Feel Better",
    description: "Experience relief and get back to doing what you love.",
  },
];

export function PlanSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground text-balance">
          Your Path to Pain-Free Living
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-border" />
              )}
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-serif text-2xl">
                  {step.number}
                </div>
                <h3 className="mt-5 font-semibold text-xl text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="https://www.synctherapy.ca/book" target="_blank" rel="noopener noreferrer">
              Book Your First Appointment →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
