
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ClipboardList, HandHeart, Flag } from "lucide-react";

const steps = [
    {
        icon: ClipboardList,
        title: "1. Comprehensive Assessment",
        description: "We don't guess. We start with a full history and movement screen to identify the root cause of your pain—not just where it hurts."
    },
    {
        icon: HandHeart,
        title: "2. Hands-On Treatment",
        description: "Targeted soft tissue release, joint mobilization, and advanced manual therapy techniques designed to get you moving pain-free."
    },
    {
        icon: Flag,
        title: "3. Your Recovery Roadmap",
        description: "You leave with a clear plan. Specific exercises, home care advice, and a timeline for recovery so you're not dependent on therapy forever."
    }
];

export function FirstVisitRoadmap() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 font-sans">
                        Your First Visit Roadmap
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-roboto">
                        We've simplified the process so you know exactly what to expect. No hidden fees, no confusing jargon—just a clear path to feeling better.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                <step.icon className="w-10 h-10 text-primary group-hover:text-blue-600 transition-colors duration-300" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-3 font-sans">
                                {step.title.split(". ")[1]}
                            </h3>
                            <p className="text-slate-600 leading-relaxed max-w-sm font-roboto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
