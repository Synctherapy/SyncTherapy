"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function DetailedServicesSection() {
    return (
        <section className="py-16 bg-white dark:bg-neutral-900 border-t border-border/50">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-bold mb-8 text-center text-foreground font-sans uppercase tracking-wide">
                    More About Our Services
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="nutritionist">
                        <AccordionTrigger className="text-xl font-bold text-amber-700 dark:text-amber-500 hover:text-amber-600">
                            Nutritionist
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                Having a nutritionist on site at a massage therapy clinic in Colwood is pretty rare. Most places just focus on the hands on stuff and call it a day.
                            </p>
                            <p>
                                We think that's backwards. Your nutrition and your muscle health are connected in ways most people don't realize. Chronic pain, slow recovery, poor sleep — all of these can tie back to what you're putting in your body.
                            </p>
                            <p>
                                As a certified nutritionist, Bruce can work with you on real food changes that actually stick. Nothing extreme. Just smart, simple stuff that works alongside your massage and therapy treatments.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="health-consultant">
                        <AccordionTrigger className="text-xl font-bold text-amber-700 dark:text-amber-500 hover:text-amber-600">
                            Health Consultant
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                Sometimes you don't just need a massage. Sometimes you need someone to sit down with you and actually talk about your health — like a real person, not a robot reading off a checklist.
                            </p>
                            <p>
                                That's what a health consultant does, and that's part of what Bruce brings to every visit here in Colwood. Whether it's figuring out why your back keeps coming back, or helping you understand a injury that won't heal — we take the time.
                            </p>
                            <p>
                                A lot of people on the West Shore tell us they've never had a health care provider who actually listened. We hear that alot. And we take it seriously.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="pain-control">
                        <AccordionTrigger className="text-xl font-bold text-amber-700 dark:text-amber-500 hover:text-amber-600">
                            Pain Control Clinic
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                Chronic pain is no joke. If you've been living with it — back pain, neck pain, headaches, joint pain — you know how much it effects your daily life. It messes with your sleep, your work, your relationships. Everything.
                            </p>
                            <p>
                                Sync Massage Therapy works as a pain control clinic for a lot of people right here in Colwood. We don't just mask the pain. We look at the root cause and build a treatment plan around actually fixing it.
                            </p>
                            <p>
                                Between massage therapy, athletic therapy, and nutrition support, we have a lot of tools to work with. And we use all of them when they make sense.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rehabilitation">
                        <AccordionTrigger className="text-xl font-bold text-amber-700 dark:text-amber-500 hover:text-amber-600">
                            Rehabilitation Center
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                Recovering from a injury takes time. But it also takes the right kind of care. A lot of people in Colwood and Langford come to us after surgery, after a car accident, or after a sports injury that sidelined them for weeks.
                            </p>
                            <p>
                                As a rehabilitation center, we help you get your strength, mobility, and confidence back. Step by step. No rushing. Bruce works with you to build a plan that makes sense for where you are right now — not where you think you should be.
                            </p>
                            <p>
                                Recovery isn't a race. We treat it like that here.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="sports-medicine">
                        <AccordionTrigger className="text-xl font-bold text-amber-700 dark:text-amber-500 hover:text-amber-600">
                            Sports Medicine Clinic
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                You don't need to be on a team to need sports medicine. Anyone who plays hockey, does CrossFit, runs, bikes, or even just stays active on the weekends can end up with the kind of injuries that a sports medicine clinic handles.
                            </p>
                            <p>
                                Here in Colwood, Sync is the place a lot of active people turn to. Sports and exercise put real stress on the body, and getting it moving right again after something goes wrong is exactly what this clinic does.
                            </p>
                            <p>
                                From prevention to recovery, sports medicine is a big part of what keeps people on the West Shore doing what they love.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="sports-massage">
                        <AccordionTrigger className="text-xl font-bold text-amber-700 dark:text-amber-500 hover:text-amber-600">
                            Sports Massage Therapist
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                If your a runner, a hockey player, a hiker, or just someone who pushes your body more than average — sports massage is probably something you should be getting on a regular basis.
                            </p>
                            <p>
                                A good sports massage therapist knows the difference between helping an athlete recover and just giving a relaxing rub down. Bruce is both an RMT and a Certified Athletic Therapist, which means he understands how athletic bodies work and what they need.
                            </p>
                            <p>
                                Colwood and the West Shore have a lot of active people. And a lot of them end up at Sync when they need someone who actually gets it.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="physical-rehab">
                        <AccordionTrigger className="text-xl font-bold text-amber-700 dark:text-amber-500 hover:text-amber-600">
                            Physical Rehabilitation Center
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                Physical rehabilitation isn't just for people recovering from surgery. It's for anyone who's been injured, who's lost mobility, or who just needs to get their body working better again.
                            </p>
                            <p>
                                At Sync in Colwood, physical rehabilitation is a big part of what we do. We combine hands on therapy with a real recovery plan — something you can actually follow and stick to. No binders full of generic handouts.
                            </p>
                            <p>
                                If you've been putting off dealing with a old injury because it feels to hard to deal with — don't. We make it simple. We make it doable. And we make sure you actually get better.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

                <div className="mt-16 text-center border-t border-border pt-12">
                    <h3 className="text-2xl font-bold mb-4">Come See Us in Colwood</h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We're at 328 Wale Road, right here in Colwood. Easy to find, easy to park. If you're in Langford, Victoria, or anywhere on the West Shore — we're closer then you think.
                    </p>
                </div>
            </div>
        </section>
    );
}
