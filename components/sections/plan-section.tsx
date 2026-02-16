import { Button } from "@/components/ui/button";
import { Calendar, ClipboardList, Activity } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book your Assessment",
    description: "Choose a time that works for you. New RMT and Athletic Therapy patients start with a thorough history and assessment.",
    icon: Calendar
  },
  {
    number: "02",
    title: "Get Treated",
    description: "We don't just guess. We use orthopedic testing to find the root cause, then treat it with targeted hands-on therapy.",
    icon: ClipboardList
  },
  {
    number: "03",
    title: "Live Pain-Free",
    description: "Leave with a clear plan. We give you the tools and knowledge to keep the pain away and get back to your life.",
    icon: Activity
  },
];

export function PlanSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground text-balance mb-16">
          Your Path to Pain-Free Living
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-background md:bg-transparent p-6 rounded-xl md:p-0 border md:border-none border-border">
              <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 relative z-10 shadow-sm">
                <step.icon className="w-10 h-10 text-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm border-2 border-background">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
