import GoogleReviewWidget from "@/components/GoogleReviewWidget";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-foreground font-bold">What Colwood & Langford Clients Say</h2>

        <GoogleReviewWidget />

        <div className="mt-12 text-center">
          <a href="https://www.google.com/search?q=sync+therapy+reviews" target="_blank" rel="noopener" className="text-primary font-bold hover:underline">
            Read All Reviews
          </a>
        </div>
      </div>
    </section>
  );
}

