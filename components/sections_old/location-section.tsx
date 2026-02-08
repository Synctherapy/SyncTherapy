import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Car, Accessibility } from "lucide-react";

const hours = [
  { day: "Monday", time: "9:00 AM - 6:00 PM" },
  { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
  { day: "Thursday", time: "9:00 AM - 6:00 PM" },
  { day: "Friday", time: "9:00 AM - 5:00 PM" },
  { day: "Saturday", time: "10:00 AM - 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function LocationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground text-balance">
          Visit Our Colwood Massage Therapy Clinic
        </h2>
        
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Easy to find, easy to park. If you're in Langford, Victoria, or anywhere on the West Shore — I'm closer than you think.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.5!2d-123.4956!3d48.4356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f0c8b5a1b9e9d%3A0x9b8b8b8b8b8b8b8b!2s328%20Wale%20Rd%20%23120%2C%20Colwood%2C%20BC%20V9B%200J8!5e0!3m2!1sen!2sca!4v1600000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sync Massage Therapy Location Map"
            />
          </div>

          {/* Details */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="font-serif text-2xl text-card-foreground">
              Sync Massage Therapy
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground">132, 328 Wale Rd #120</p>
                  <p className="text-foreground">Colwood, BC V9B 0J8</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+12508128698" className="text-foreground hover:text-accent">
                  (250) 812-8698
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">Hours</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {hours.map((item) => (
                  <div key={item.day} className="flex justify-between col-span-2">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="text-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Car className="w-4 h-4" /> Free parking
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> 1 min from Juan De Fuca Rec
              </span>
              <span className="flex items-center gap-2">
                <Accessibility className="w-4 h-4" /> Wheelchair accessible
              </span>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Serving: Colwood, Langford, Victoria, Sooke, Metchosin, View Royal, and the Westshore
            </p>

            <div className="mt-6 flex gap-4">
              <Button asChild>
                <a 
                  href="https://www.google.com/maps/dir//328+Wale+Rd+%23120,+Colwood,+BC+V9B+0J8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.synctherapy.ca/book" target="_blank" rel="noopener noreferrer">
                  Book Online
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
