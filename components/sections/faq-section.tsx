"use client";

import { Badge } from "@/components/ui/badge";

import { ReactNode } from "react";

export interface FaqItem {
  question: string;
  answer: string | ReactNode;
}

export interface FaqProps {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "Do you offer direct billing to insurance?",
    answer: "Yes, we direct bill to most major insurance providers, including Pacific Blue Cross, Canada Life, Manulife, Sun Life, and many others. Please bring your insurance card to your first appointment."
  },
  {
    question: "What is the difference between RMT and Athletic Therapy?",
    answer: "RMT (Registered Massage Therapy) focuses on soft tissue manipulation to relieve pain and tension. Athletic Therapy [CAT(C)] specializes in musculoskeletal injury assessment and rehabilitation, often involving more active rehab and orthopedic testing. Daryl is dual-certified in both."
  },
  {
    question: "Do I need a doctor's referral?",
    answer: "You do not need a referral to see an RMT or Athletic Therapist at Sync Therapy. However, some insurance plans may require one for reimbursement. It's best to check your specific plan details."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your initial appointment includes a comprehensive history taking and physical assessment to understand the root cause of your issue. This is followed by hands-on treatment and a discussion of your care plan."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, there is ample free parking available at our Colwood location (328 Wale Rd). The clinic is easily accessible."
  },
  {
    question: "How long are the treatments?",
    answer: "We offer 60-minute and 75-minute appointments. For an initial assessment and treatment, we recommend a 60-minute session."
  }
];

export function FaqSection({
  badge = "FAQ",
  heading = "Common Questions & Answers",
  description = "Find out all the essential details about our platform and how it can serve your needs.",
  faqs = defaultFaqs,
}: FaqProps) {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Badge className="text-xs font-medium" variant="outline">{badge}</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif text-center text-foreground text-balance font-semibold">{heading}</h2>
          <p className="mt-6 font-medium text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-screen-md">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4 items-start">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary/10 font-mono text-xs text-primary font-bold mt-1">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium text-lg text-foreground">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
