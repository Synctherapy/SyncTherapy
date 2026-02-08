import { Activity, Zap, Brain } from "lucide-react";

const problems = [
  {
    icon: Activity,
    title: "Something Hurts",
    description: "Maybe it's been hurting for weeks. Maybe it's been hurting for years. You've tried everything but the pain keeps coming back.",
  },
  {
    icon: Zap,
    title: "Injuries That Won't Heal",
    description: "You don't have to be a pro athlete. Weekend hockey, hiking the trails, staying active day to day — injuries happen. And they don't just go away on their own.",
  },
  {
    icon: Brain,
    title: "Tension That Adds Up",
    description: "All day at a desk or after a long shift. Tension headaches, tight shoulders, chronic aches. A lot of that comes back to how your body moves — and what you're putting in it.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-card-foreground text-balance">
          That's What I Do Here at Sync Massage Therapy
        </h2>
        
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Whether you're stuck with a bad back, recovering from a sports injury, or just trying to feel better day to day — I've got real answers. Not just guesses.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div 
              key={problem.title}
              className="bg-background p-8 rounded-lg border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="mt-5 font-semibold text-xl text-foreground">
                {problem.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
