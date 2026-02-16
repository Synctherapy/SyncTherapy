import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MapPin, Phone, Clock, Mail, Car } from "lucide-react";
import { ReactNode } from "react";

interface LocationSectionProps {
  mapSrc?: string;
  children?: ReactNode;
}

export function LocationSection({
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.576413270557!2d-123.46992150000001!3d48.445469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f74851cb74787%3A0xeacdf009885e6cb5!2sSync%20Massage%20Therapy!5e0!3m2!1sen!2sca!4v1770962969395!5m2!1sen!2sca",
  children
}: LocationSectionProps) {
  return (
    <section className="py-24 bg-background border-t border-border relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="font-sans text-3xl md:text-5xl text-center text-foreground text-balance font-bold">
            Where is Sync Massage Therapy Located
          </h2>

          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto font-roboto text-lg">
            Sync Massage Therapy is located inside the Coastal Offices at the end of the Holiday Inn parking lot.
          </p>

          {children && (
            <div className="mt-4 max-w-2xl mx-auto text-center">
              {children}
            </div>
          )}
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-stretch">
          {/* Details */}
          <ScrollReveal delay={0.2} className="w-full h-full">
            <GlassCard variant="strong" className="flex flex-col h-full p-8 space-y-8">
              <div className="space-y-8 flex-grow">
                <div>
                  <h3 className="font-serif text-2xl text-navy font-bold mb-6">
                    Sync Massage Therapy
                  </h3>

                  <div className="space-y-6 text-base">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                        <MapPin className="w-5 h-5 flex-shrink-0" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Address</h4>
                        <p className="text-muted-foreground">
                          132, 328 Wale Rd #120<br />
                          Colwood, BC V9B 1J2
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                        <Phone className="w-5 h-5 flex-shrink-0" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Phone</h4>
                        <a href="tel:+12508128698" className="text-muted-foreground hover:text-primary transition-colors">
                          (250) 812-8698
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                        <Mail className="w-5 h-5 flex-shrink-0" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Email</h4>
                        <a href="mailto:info@synctherapy.ca" className="text-muted-foreground hover:text-primary transition-colors">
                          info@synctherapy.ca
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4 text-navy">
                    <Clock className="w-5 h-5" />
                    <span className="font-bold">Hours</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-medium">Monday</span>
                      <span className="text-foreground font-semibold">9:00am - 5:00pm</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-medium">Tue - Thu</span>
                      <span className="text-foreground font-semibold">8:00am - 8:00pm</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-medium">Friday</span>
                      <span className="text-foreground font-semibold">9:00am - 5:00pm</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-medium">Sat - Sun</span>
                      <span className="text-foreground font-semibold">Closed</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="flex items-center gap-2 text-sm text-green-700 font-medium bg-green-50 w-fit px-3 py-1 rounded-full">
                    <Car className="w-4 h-4" /> Free parking available on site.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 flex-col sm:flex-row pt-4 mt-auto">
                <Button asChild size="lg" className="flex-1 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                  <a href="https://synctherapy.janeapp.com/">
                    Book Appointment
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1 w-full sm:w-auto hover:bg-slate-50">
                  <a
                    href="https://www.google.com/maps/dir//132,+328+Wale+Rd+%23120,+Colwood,+BC+V9B 1J2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Map */}
          <div className="w-full h-full min-h-[500px] lg:min-h-0">
            <div className="rounded-2xl overflow-hidden glass-panel p-2 shadow-xl relative group h-full w-full flex flex-col">
              <div className="w-full flex-1 rounded-xl overflow-hidden relative">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sync Massage Therapy Location Map"
                  className="absolute inset-0 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
