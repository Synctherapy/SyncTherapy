"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a referral for massage therapy in Colwood?",
    answer: "No referral is required for massage therapy in British Columbia. You can book directly online or by calling our Colwood clinic at (250) 812-8698. However, checking your extended health plan is always a good idea.",
  },
  {
    question: "Where is your massage therapy clinic located?",
    answer: "I'm at 132, 328 Wale Rd #120, right here in Colwood. Easy to find, easy to park. It's a convenient location whether you're coming from Langford, Victoria, or anywhere on the West Shore.",
  },
  {
    question: "Do you provide massage therapy for Langford and Victoria residents?",
    answer: "Yes. While the clinic is physically in Colwood, I provide massage therapy for clients throughout Langford, Victoria, Sooke, Metchosin, View Royal, and the entire Westshore area.",
  },
  {
    question: "Is direct billing available for massage therapy?",
    answer: "Yes. You show up, get your massage therapy treatment, and I handle the paperwork. No upfront costs, no fighting with your insurance company after the fact.",
  },
  {
    question: "What conditions does massage therapy treat?",
    answer: "Massage therapy effectively treats back pain, neck pain, headaches, chronic pain, sports injuries, sciatica, arthritis, muscle tension, and more. It's not just about relaxation; it's about addressing the root cause of your pain.",
  },
  {
    question: "How long is a massage therapy appointment?",
    answer: "I offer 60-minute and 90-minute massage therapy sessions. I'll recommend the best session length based on your specific needs to ensure you get real relief that lasts.",
  },
  {
    question: "What makes your massage therapy approach different?",
    answer: "My approach to massage therapy combines hands-on treatment with my background as a Certified Athletic Therapist and Holistic Nutritionist. This allows me to look at your health from multiple angles—structural, functional, and nutritional.",
  }
];

export function FaqSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-card-foreground text-balance">
          Frequently Asked Questions About Massage Therapy
        </h2>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
