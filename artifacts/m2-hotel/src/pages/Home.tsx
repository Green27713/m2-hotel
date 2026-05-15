import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { WeatherWidget } from "@/components/Weather";
import { Map } from "@/components/Map";
import { 
  Wifi, Waves, Wind, Clock, ConciergeBell, Plane, 
  Map as MapIcon, Coffee, ChevronRight, Star, 
  MapPin, Phone, Mail, ChevronDown
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Images
import heroImg from "@/assets/hero.png";
import room1Img from "@/assets/room1.png";
import room2Img from "@/assets/room2.png";
import room3Img from "@/assets/room3.png";
import attr1Img from "@/assets/attraction1.png";
import attr2Img from "@/assets/attraction2.png";
import attr3Img from "@/assets/attraction3.png";
import attr4Img from "@/assets/attraction4.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={heroImg} 
            alt="M2 Rooms & Stays" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium mb-6 drop-shadow-lg"
          >
            A Secret <br className="md:hidden" /> By The Sea
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto tracking-wide"
          >
            Intimate guesthouse warmth meets boutique-hotel polish, steps from the electric energy of Patong Beach.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#rooms" 
              className="inline-block px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-[0.2em] uppercase transition-all hover:bg-primary/90 hover:scale-105"
            >
              Explore Our Rooms
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
        </motion.div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-24 md:py-32 px-4 md:px-8 bg-card">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6">Welcome to M2</h2>
          <h3 className="font-serif text-3xl md:text-5xl font-medium leading-tight mb-8 text-foreground">
            Where local Thai warmth embraces modern comfort.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed font-light mb-12">
            Tucked just a five-minute stroll from the sun-drenched sands of Patong Beach, M2 Rooms & Stays is a sanctuary for the modern traveller. We built this space because we believe you shouldn't have to choose between the personal touch of a guesthouse and the refined polish of a boutique hotel. Here, you get both. Unhurried, vibrant, and perfectly placed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-medium tracking-widest uppercase text-foreground/70">
            <span className="flex items-center gap-2"><MapPin size={18} className="text-secondary" /> 5 Min to Beach</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2"><Clock size={18} className="text-secondary" /> 24hr Reception</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2"><Coffee size={18} className="text-secondary" /> Thai Breakfast</span>
          </div>
        </motion.div>
      </section>

      {/* 3. Rooms Section */}
      <section id="rooms" className="py-24 md:py-32 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Our Spaces</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-medium">Rest & Recharge</h3>
            </div>
            <p className="text-muted-foreground max-w-md font-light">
              Each room is a sun-filled retreat designed with rich textures, crisp linens, and thoughtful amenities.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Deluxe Room",
                img: room1Img,
                features: ["King Bed", "En-suite", "Air Con", "City View"],
                price: "฿1,200"
              },
              {
                name: "Superior Room",
                img: room2Img,
                features: ["Queen Bed", "Balcony", "Air Con", "Mini-bar"],
                price: "฿1,500"
              },
              {
                name: "Family Suite",
                img: room3Img,
                features: ["2 Bedrooms", "Lounge Area", "En-suite", "Balcony"],
                price: "฿2,800"
              }
            ].map((room, i) => (
              <motion.div key={i} variants={fadeIn} className="group relative bg-card border border-border/50 overflow-hidden">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={room.img} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur px-3 py-1 text-sm font-medium tracking-wide">
                    From {room.price}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="font-serif text-2xl font-medium mb-3 group-hover:text-primary transition-colors">{room.name}</h4>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-sm text-muted-foreground font-light">
                    {room.features.map(f => (
                      <li key={f} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-secondary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.1em] uppercase text-primary hover:text-secondary transition-colors">
                    Book Now <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Amenities Section */}
      <section className="py-24 px-4 md:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Thoughtful Touches</h2>
            <p className="text-muted-foreground font-light">Everything you need for a seamless stay.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center">
            {[
              { icon: Wifi, label: "Fast Free WiFi" },
              { icon: Waves, label: "Swimming Pool" },
              { icon: Wind, label: "Air Conditioning" },
              { icon: Clock, label: "24hr Reception" },
              { icon: ConciergeBell, label: "Room Service" },
              { icon: Plane, label: "Airport Transfer" },
              { icon: MapIcon, label: "Rooftop Terrace" },
              { icon: Coffee, label: "Thai Breakfast" }
            ].map((amenity, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-2 transition-transform hover:scale-110">
                  <amenity.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-medium text-sm tracking-wide">{amenity.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. Location & Weather */}
      <section id="location" className="py-24 md:py-32 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Location</h2>
                <h3 className="font-serif text-4xl font-medium mb-6">Explore Patong</h3>
                <p className="text-muted-foreground font-light mb-8">
                  Perfectly positioned. Quiet enough for a peaceful sleep, but just a short walk to the vibrant heart of Phuket.
                </p>
              </div>
              <WeatherWidget />
            </div>
            
            <div className="lg:col-span-8 shadow-sm">
              <Map />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Local Guide */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center">Nearby Highlights</h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { img: attr1Img, name: "Patong Beach", desc: "5 mins walk" },
              { img: attr2Img, name: "Bangla Road", desc: "10 mins walk" },
              { img: attr3Img, name: "Wat Chalong", desc: "25 mins drive" },
              { img: attr4Img, name: "Big Buddha", desc: "35 mins drive" }
            ].map((attr, i) => (
              <motion.div key={i} variants={fadeIn} className="group cursor-pointer">
                <div className="overflow-hidden mb-4 relative aspect-[4/3]">
                  <img 
                    src={attr.img} 
                    alt={attr.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>
                <h4 className="font-serif text-xl font-medium mb-1">{attr.name}</h4>
                <p className="text-sm text-muted-foreground">{attr.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Reviews */}
      <section id="reviews" className="py-24 md:py-32 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-16">Guest Book</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                text: "An absolute gem! The staff went out of their way to make us feel at home. The room was spotless and beautifully designed. Will definitely return.",
                name: "Sarah Jenkins",
                loc: "Australia",
                date: "Oct 2023"
              },
              {
                text: "Perfect location. It's tucked away just enough to be quiet at night, but a quick walk to the beach and Bangla Road. The rooftop terrace is lovely at sunset.",
                name: "Marco Rossi",
                loc: "Italy",
                date: "Jan 2024"
              },
              {
                text: "The best guesthouse experience I've had in Thailand. Felt like a luxury hotel but with the personal warmth you only get from smaller properties.",
                name: "Emma Wood",
                loc: "UK",
                date: "Feb 2024"
              },
              {
                text: "Unbeatable value. The Thai breakfast alone was worth it! Highly recommend the Deluxe rooms with the city view.",
                name: "David Chen",
                loc: "Singapore",
                date: "Mar 2024"
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-foreground/5 p-8 text-left backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="flex gap-1 text-secondary mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg font-serif italic leading-relaxed mb-6">"{review.text}"</p>
                <div>
                  <p className="font-bold text-sm tracking-wide">{review.name}</p>
                  <p className="text-xs text-primary-foreground/70">{review.loc} • {review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 & 10. FAQ & Owner Tips */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full mb-20">
            {[
              { q: "What time is check-in and check-out?", a: "Check-in is from 2:00 PM, and check-out is until 12:00 PM (noon). Early check-in or late check-out can be requested, subject to availability." },
              { q: "Is breakfast included?", a: "Yes, a complimentary authentic Thai or Continental breakfast is included with all direct bookings." },
              { q: "Do you arrange airport transfers?", a: "We certainly do. We can arrange a private taxi or minivan from Phuket International Airport directly to our door. Please contact us with your flight details." },
              { q: "How far is the beach?", a: "Patong Beach is approximately a 5-7 minute walk from M2 Rooms & Stays. We provide complimentary beach towels." },
              { q: "Is the Wi-Fi reliable for working?", a: "Absolutely. We offer free high-speed fiber internet throughout the property, suitable for video calls and remote work." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors text-lg py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* 10. Owner Tips Section */}
          <div className="mt-12 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 p-1">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="owner-tips" className="border-none">
                <AccordionTrigger className="text-left font-serif text-xl px-6 py-4 hover:no-underline text-amber-900 dark:text-amber-500">
                  <span className="flex items-center gap-2">
                    For the Owner: Keeping Your Website Engaging
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-amber-800/80 dark:text-amber-200/80">
                  <div className="space-y-4">
                    <p>Use these actionable tips to keep your site fresh and drive more direct bookings:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Update Rates Seasonally:</strong> Adjust the prices in the <em>Rooms</em> section to reflect High Season (Nov–Apr) and Low Season (May–Oct).</li>
                      <li><strong>Promote Offers:</strong> Add a banner to the top of the site during slow months (e.g., "Stay 3 Nights, Get 1 Free").</li>
                      <li><strong>Refresh Photography:</strong> Every 6 months, update the hero image with new sunny shots of the property to show it's actively maintained.</li>
                      <li><strong>Map Updates:</strong> If a new popular restaurant opens nearby, update the <code>markers</code> array in the <code>Map.tsx</code> file to feature it.</li>
                      <li><strong>Guest Reviews:</strong> Rotate the guest testimonials every few months. Fresh dates show potential guests that people love staying here <em>right now</em>.</li>
                      <li><strong>Social Media:</strong> Ensure your Instagram link in the footer points to your latest posts. Remind guests at checkout to tag you!</li>
                      <li><strong>SEO Tip:</strong> Keep your written content (About section) rich with keywords like "Patong Beach guesthouse", "Phuket boutique hotel", without sounding unnatural.</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 11. Contact & Booking */}
      <section id="contact" className="py-24 md:py-32 px-4 md:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Get in Touch</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-medium mb-6">Book Direct for Best Rate</h3>
              <p className="text-muted-foreground font-light mb-12 max-w-md">
                We guarantee the lowest price when you book directly with us. Reach out for availability, special requests, or group bookings.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-medium text-lg mb-1">M2 Rooms and Stays</h4>
                    <p className="text-muted-foreground font-light">
                      Patong, Phuket 83150<br />Thailand
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-medium text-lg mb-1">WhatsApp / Phone</h4>
                    <a href="https://wa.me/66XXXXXXXXX" target="_blank" rel="noreferrer" className="text-muted-foreground font-light hover:text-primary transition-colors">
                      +66 XX XXX XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <a href="mailto:hello@m2rooms.com" className="text-muted-foreground font-light hover:text-primary transition-colors">
                      hello@m2rooms.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">Also available on</p>
                <div className="flex gap-6 text-foreground/60 font-serif italic text-lg">
                  <span className="hover:text-primary transition-colors cursor-pointer">Booking.com</span>
                  <span className="hover:text-primary transition-colors cursor-pointer">Agoda</span>
                  <span className="hover:text-primary transition-colors cursor-pointer">Airbnb</span>
                </div>
              </div>
            </div>

            <Card className="bg-background border-border/50 shadow-lg">
              <CardContent className="p-8 md:p-10">
                <h4 className="font-serif text-2xl font-medium mb-8">Send an Enquiry</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="John Doe" className="bg-card" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="john@example.com" className="bg-card" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Dates</label>
                      <Input type="text" placeholder="Check-in - Check-out" className="bg-card" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Guests</label>
                      <Input type="number" placeholder="2" min="1" className="bg-card" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Any special requests or questions?" 
                      className="bg-card min-h-[120px]" 
                    />
                  </div>

                  <button className="w-full py-4 bg-primary text-primary-foreground font-bold tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors">
                    Send Request
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-foreground text-background py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="font-serif text-3xl font-bold tracking-tight mb-6 block text-white">
              M2 <span className="font-sans font-light text-2xl">Rooms & Stays</span>
            </span>
            <p className="text-background/60 max-w-sm font-light leading-relaxed">
              Your personal sanctuary in Patong Beach. Unhurried, vibrant, and perfectly placed for your Thai adventure.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold tracking-widest uppercase text-sm mb-6 text-white">Quick Links</h5>
            <ul className="space-y-4 text-background/60 font-light">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Our Rooms</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Guest Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold tracking-widest uppercase text-sm mb-6 text-white">Connect</h5>
            <ul className="space-y-4 text-background/60 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TripAdvisor</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/40 font-light">
          <p>&copy; {new Date().getFullYear()} M2 Rooms & Stays. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
