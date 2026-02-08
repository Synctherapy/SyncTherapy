import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoogleReviewWidget from "@/components/GoogleReviewWidget";

const testimonials = [
  {
    quote: "Daryl was able to fit me in on short notice and was great. Knowledgeable, courteous, asked a lot of questions and got me sorted very quickly. Would highly recommend!",
    author: "Chris R.",
    location: "Colwood",
  },
  {
    quote: "I've been going to Daryl for massage for about a year, and he is always excellent. Very skilled, professional, and knowledgeable and has been crucial in managing ongoing issues with pain.",
    author: "Melanie M.",
    location: "Langford",
  },
  {
    quote: "Daryl is personable, professional, compassionate, realistic, emotionally intelligent, encouraging, knowledgeable and talented. He was able to diagnose the issue and I felt better coming out of the session.",
    author: "L.B.",
    location: "Victoria",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-card-foreground text-balance">
          What Colwood Clients Say About Their RMT
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-border flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-foreground/80 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location} • Google Review</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <GoogleReviewWidget />
        </div>
      </div>
    </section>
  );
}
