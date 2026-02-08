"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a referral to see a registered massage therapist in Colwood?",
    answer: "No referral is required to see an RMT in British Columbia. You can book directly online or by calling our Colwood clinic at (250) 812-8698.",
  },
  {
    question: "Where is your Colwood massage therapy clinic located?",
    answer: "I'm at 328 Wale Road, right here in Colwood. Easy to find, easy to park. If you're in Langford, Victoria, or anywhere on the West Shore — I'm closer than you think.",
  },
  {
    question: "Do you serve Langford and Victoria?",
    answer: "Yes. While my clinic is located in Colwood, I serve clients throughout Langford, Victoria, Sooke, Metchosin, View Royal, and the entire Westshore area.",
  },
  {
    question: "Is direct billing available for massage therapy?",
    answer: "Yes. You show up, get your treatment, and I handle the paperwork. No upfront costs, no fighting with your insurance company after the fact. If you're not sure if your plan covers massage therapy, just give me a call — I can check for you before your appointment.",
  },
  {
    question: "What conditions does a registered massage therapist treat?",
    answer: "As an RMT, I commonly treat back pain, neck pain, headaches, chronic pain, sports injuries, sciatica, arthritis, muscle tension, and more. A lot of people on the West Shore tell me they've never had a health care provider who actually listened. I take that seriously.",
  },
  {
    question: "Are you a registered massage therapist?",
    answer: "Yes. I'm Daryl Stubbs — a Registered Massage Therapist, a Certified Athletic Therapist, and a Holistic Nutritionist. That means depending on what you need, I can help from a couple of different angles.",
  },
  {
    question: "How long is a massage therapy appointment?",
    answer: "I offer 60-minute and 90-minute sessions. Good massage therapy in Colwood means more than just feeling relaxed for an hour. It means getting real relief that lasts. I'll recommend the best session length based on your needs.",
  },
  {
    question: "What should I expect at my first RMT appointment?",
    answer: "Sometimes you don't just need a massage. Sometimes you need someone to sit down with you and actually talk about your health. That's part of what I bring to every visit. I'll be upfront about what I can help with and when it makes sense to refer you somewhere else.",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-card-foreground text-balance">
          Frequently Asked Questions About Our Colwood RMT
        </h2>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5">
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
