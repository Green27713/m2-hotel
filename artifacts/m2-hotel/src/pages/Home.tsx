import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { WeatherWidget } from "@/components/Weather";
import { Map } from "@/components/Map";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { Blog } from "@/components/Blog";
import { Game } from "@/components/Game";
import {
  Wifi, Wind, Clock, Plane,
  Map as MapIcon, ChevronRight, Star,
  MapPin, Phone, Mail, Tv, Refrigerator, Thermometer,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Real hotel photos (enhanced)
import heroSlide1 from "@/assets/M2_deluxe_balcony_enhanced.jpg";
import heroSlide2 from "@/assets/M2_superior_enhanced.jpg";
import heroSlide3 from "@/assets/M2_lobby_enhanced.jpg";
import heroSlide4 from "@/assets/M2_area_enhanced.jpg";
import heroSlide5 from "@/assets/hero.png";
import exteriorImg from "@/assets/M2_exterior_enhanced.jpg";
import lobbyImg from "@/assets/M2_lobby_enhanced.jpg";
import deluxeBalconyImg from "@/assets/M2_deluxe_balcony_enhanced.jpg";
import deluxeStandardImg from "@/assets/M2_deluxe_standard_enhanced.jpg";
import superiorImg from "@/assets/M2_superior_enhanced.jpg";
import superiorLampImg from "@/assets/M2_superior_lamp_enhanced.jpg";
import areaImg from "@/assets/M2_area_enhanced.jpg";
import moodImg from "@/assets/M2_room_mood_enhanced.jpg";

// AI-generated attraction images (kept as placeholders until real photos provided)
import attr1Img from "@/assets/attraction1.png";
import attr2Img from "@/assets/attraction2.png";
import attr3Img from "@/assets/attraction3.png";
import attr4Img from "@/assets/attraction4.png";

const heroSlides = [
  { img: heroSlide1, label: "Sun-drenched rooms with balcony views" },
  { img: heroSlide2, label: "Spacious, modern interiors" },
  { img: heroSlide3, label: "Warm lobby lounge — work or unwind" },
  { img: heroSlide4, label: "Steps from the streets of Patong" },
  { img: heroSlide5, label: "Tropical sunsets and crystal-clear waters — Patong Beach, Phuket" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Slide images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black/45 z-10" />
          <img
            src={heroSlides[current].img}
            alt={heroSlides[current].label}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-10 md:mt-20">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/70 mb-6"
        >
          Patong Beach · Phuket · Thailand
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium mb-6 drop-shadow-lg leading-tight"
        >
          A Secret <br className="md:hidden" /> By The Sea
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-lg md:text-2xl text-white/85 font-light mb-10 max-w-2xl mx-auto tracking-wide"
        >
          Intimate guesthouse warmth meets boutique-hotel polish,
          steps from the electric energy of Patong Beach.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#rooms"
            data-testid="button-explore-rooms"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-[0.2em] uppercase transition-all hover:bg-primary/90"
          >
            Explore Our Rooms
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white/15 border border-white/50 text-white text-sm font-bold tracking-[0.2em] uppercase transition-all hover:bg-white/25 backdrop-blur-sm"
          >
            Book Direct
          </a>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            data-testid={`dot-hero-${i}`}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 h-1 rounded-full ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* 1. Hero — Cinematic Slideshow */}
      <HeroSlideshow />

      {/* 2. About */}
      <section id="about" className="py-24 md:py-32 px-4 md:px-8 bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6">Welcome to M2</h2>
            <h3 className="font-serif text-3xl md:text-5xl font-medium leading-tight mb-8 text-foreground">
              Where local Thai warmth<br className="hidden md:inline" /> embraces modern comfort.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-6">
              Tucked just a five-minute stroll from the sun-drenched sands of Patong Beach, M2 Rooms & Stays is a sanctuary for the modern traveller. We believe you shouldn't have to choose between the personal touch of a guesthouse and the refined polish of a boutique hotel. Here, you get both.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-light mb-10">
              Known to locals as M2 Room For Rent, we've been welcoming guests with genuine Thai hospitality for years. Every room is thoughtfully designed, spotlessly maintained, and just steps from everything Patong has to offer.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-medium tracking-widest uppercase text-foreground/70">
              <span className="flex items-center gap-2"><MapPin size={17} className="text-secondary shrink-0" /> 5 Min to Beach</span>
              <span className="flex items-center gap-2"><Clock size={17} className="text-secondary shrink-0" /> On-Call Reception</span>
              <span className="flex items-center gap-2"><Wifi size={17} className="text-secondary shrink-0" /> Free Fast WiFi</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={exteriorImg}
              alt="M2 Room For Rent entrance"
              className="w-full object-cover shadow-xl"
              style={{ maxHeight: "520px" }}
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-4 hidden md:block">
              <p className="text-xs tracking-widest uppercase font-bold text-primary-foreground/70 mb-1">Also known as</p>
              <p className="font-serif text-lg font-medium">M2 Room For Rent</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Rooms */}
      <section id="rooms" className="py-24 md:py-32 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Our Spaces</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-medium">Rest & Recharge</h3>
            </div>
            <p className="text-muted-foreground max-w-md font-light">
              Every room is a clean, sun-filled retreat with modern furniture, crisp linens, and all the essentials.
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
                img: deluxeBalconyImg,
                badge: "With Balcony",
                features: ["Double Bed", "Private Balcony", "Air Conditioning", "Flat-screen TV", "Refrigerator", "Hot Water"],
                price: "฿1,100",
                note: "Smaller, cosy room — perfect for couples or solo travellers",
              },
              {
                name: "Deluxe Room",
                img: deluxeStandardImg,
                badge: "Standard",
                features: ["Double Bed", "En-suite Bathroom", "Air Conditioning", "Flat-screen TV", "Refrigerator", "Hot Water"],
                price: "฿1,100",
                note: "Clean, modern room with everything you need for a great stay",
              },
              {
                name: "Superior Room",
                img: superiorImg,
                badge: "Larger Room",
                features: ["King Bed", "Spacious Layout", "Air Conditioning", "Flat-screen TV", "Refrigerator", "Work Desk"],
                price: "฿1,500",
                note: "Our largest rooms — more space to relax and spread out",
              },
            ].map((room, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                data-testid={`card-room-${i}`}
                className="group relative bg-card border border-border/50 overflow-hidden"
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={room.img}
                    alt={`${room.name} – ${room.badge} at M2 Rooms & Stays Patong Beach, Phuket`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold tracking-[0.15em] uppercase">
                    {room.badge}
                  </div>
                  <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur px-3 py-1 text-sm font-medium tracking-wide">
                    From {room.price}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="font-serif text-2xl font-medium mb-1 group-hover:text-primary transition-colors">
                    {room.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-light mb-4 italic">{room.note}</p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-sm text-muted-foreground font-light">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-secondary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.1em] uppercase text-primary hover:text-secondary transition-colors"
                  >
                    Book Now <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Room gallery strip */}
          <div className="mt-12 grid grid-cols-3 gap-3">
            {[
              { img: superiorLampImg, alt: "Superior room interior lighting and decor, M2 Rooms & Stays Patong" },
              { img: moodImg,         alt: "Stylish room ambience at M2 Rooms & Stays Patong Beach, Phuket" },
              { img: lobbyImg,        alt: "M2 Rooms & Stays lobby and reception area, Patong Phuket" },
            ].map(({ img, alt }, i) => (
              <div key={i} className="aspect-video overflow-hidden">
                <img src={img} alt={alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Amenities */}
      <section id="amenities" className="py-24 px-4 md:px-8 bg-card border-y border-border">
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
              { icon: Wifi,         label: "Free High-Speed WiFi" },
              { icon: Wind,         label: "Air Conditioning" },
              { icon: Tv,           label: "Flat-screen TV" },
              { icon: Refrigerator, label: "Refrigerator" },
              { icon: Thermometer,  label: "Hot Water Shower" },
              { icon: Clock,        label: "On-Call Reception" },
              { icon: Plane,        label: "Airport Transfer (fee)" },
              { icon: Shield,       label: "Secure Key-Card Entry" },
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

      {/* 5. Location & Weather */}
      <section id="location" className="py-24 md:py-32 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Location</h2>
                <h3 className="font-serif text-4xl font-medium mb-6">Explore Patong</h3>
                <p className="text-muted-foreground font-light mb-8">
                  Perfectly positioned. Quiet enough for a peaceful sleep, just a short walk to Patong Beach, the night markets, and the heart of Phuket.
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

      {/* 6. Local Area */}
      <section id="attractions" className="py-24 md:py-32 px-4 md:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Local Guide</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-medium">Nearby Highlights</h3>
            </div>
            <p className="text-muted-foreground max-w-md font-light">
              Our team knows every corner of Patong. Ask us anything.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { img: attr1Img, name: "Patong Beach", desc: "5 min walk · The main beach strip" },
              { img: areaImg,  name: "Bangla Road & Town", desc: "10 min walk · Nightlife & street food" },
              { img: attr3Img, name: "Wat Chalong Temple", desc: "25 min drive · Sacred Buddhist temple" },
              { img: attr4Img, name: "Big Buddha Phuket", desc: "35 min drive · Stunning island views" },
            ].map((attr, i) => (
              <motion.div key={i} variants={fadeIn} data-testid={`card-attraction-${i}`} className="group cursor-pointer">
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

      {/* 7. Reviews Carousel */}
      <ReviewCarousel />

      {/* 8. Blog */}
      <Blog />

      {/* 9. Quiz Game */}
      <Game />

      {/* 10. FAQ & Owner Tips */}
      <section className="py-24 px-4 md:px-8 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full mb-20">
            {[
              {
                q: "What time is check-in and check-out?",
                a: "Check-in is from 2:00 PM and check-out is by 12:00 PM (noon). Early check-in or late check-out can be requested and we'll do our best to accommodate, subject to availability.",
              },
              {
                q: "Is there after-hours reception?",
                a: "Yes — our reception team is on call 24 hours. If you arrive late or need assistance outside regular hours, simply call the number provided at check-in and someone will be with you promptly.",
              },
              {
                q: "Can you arrange airport transfers?",
                a: "We can arrange a private taxi or minivan from Phuket International Airport directly to our door. A fee applies. Please contact us with your flight details and we'll organise everything.",
              },
              {
                q: "How far is the beach?",
                a: "Patong Beach is approximately a 5-7 minute walk from M2 Rooms & Stays. It's one of our favourite things about the location — close enough to pop back to the room between swims.",
              },
              {
                q: "Is the Wi-Fi reliable for remote work?",
                a: "Absolutely. We provide free high-speed internet throughout the property, suitable for video calls and remote work. The lobby lounge is a great spot to work with coffee nearby.",
              },
              {
                q: "What's included in the room?",
                a: "All rooms include air conditioning, flat-screen TV, refrigerator, hot water shower, wardrobe or closet, free WiFi, and fresh towels. Rooms with balconies have outdoor seating.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="text-left font-medium hover:text-primary transition-colors text-lg py-6"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Owner Tips */}
          <div className="mt-12 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 p-1">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="owner-tips" className="border-none">
                <AccordionTrigger className="text-left font-serif text-xl px-6 py-4 hover:no-underline text-amber-900 dark:text-amber-500">
                  For the Owner: Keeping Your Website Engaging
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-amber-800/80 dark:text-amber-200/80">
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>Use these tips to keep your site fresh and drive more direct bookings:</p>
                    <ul className="list-disc pl-5 space-y-3">
                      <li><strong>Update Rates Seasonally:</strong> Adjust prices in the Rooms section for High Season (Nov–Apr) and Low Season (May–Oct). Guests notice when prices look outdated.</li>
                      <li><strong>Add Promotions:</strong> During slow months, add a small banner at the top of the page (e.g., "Stay 3 nights, 4th night free"). Ask your developer to add a dismissible banner above the navbar.</li>
                      <li><strong>Refresh Photos:</strong> Every 6 months, update 1-2 room photos with fresh shots. Even small changes (new cushions, better lighting) photograph well and signal an active property.</li>
                      <li><strong>Update the Map:</strong> When a new restaurant or attraction opens nearby, update the <code>markers</code> array in <code>src/components/Map.tsx</code>. Just change the coordinates and label.</li>
                      <li><strong>Rotate Reviews:</strong> Update the reviews in <code>src/components/ReviewCarousel.tsx</code> every few months. Copy real reviews from Booking.com or Agoda — fresh dates build trust.</li>
                      <li><strong>Blog Posts:</strong> Adding a new blog post every 1-2 months helps with Google search ranking. Seasonal guides ("Best things to do in Patong in December") work very well.</li>
                      <li><strong>Social Media Tie-In:</strong> Ask every happy guest to tag @M2RoomsAndStays on Instagram. Update your footer Instagram link to point to your latest profile.</li>
                      <li><strong>SEO:</strong> Keep the About text rich with natural phrases like "Patong Beach guesthouse", "boutique hotel Phuket", "rooms near Patong Beach Thailand".</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 11. Contact */}
      <section id="contact" className="py-24 md:py-32 px-4 md:px-8 bg-background border-t border-border">
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
                  <MapPin className="text-primary mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-lg mb-1">M2 Room For Rent / M2 Rooms & Stays</h4>
                    <p className="text-muted-foreground font-light">
                      Patong, Phuket 83150<br />Thailand
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-lg mb-1">WhatsApp / Reservations</h4>
                    <a
                      href="https://wa.me/66982221682"
                      target="_blank"
                      rel="noreferrer"
                      data-testid="link-whatsapp"
                      className="text-muted-foreground font-light hover:text-primary transition-colors block"
                    >
                      +66 098 222 1682
                    </a>
                    <p className="text-xs text-muted-foreground/60 mt-1">WhatsApp or call</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Manager</h4>
                    <a
                      href="https://wa.me/66632686289"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground font-light hover:text-primary transition-colors block"
                    >
                      +66 063 268 6289
                    </a>
                    <p className="text-xs text-muted-foreground/60 mt-1">Text or WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <a
                      href="mailto:hello@m2rooms.com"
                      className="text-muted-foreground font-light hover:text-primary transition-colors"
                    >
                      hello@m2rooms.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">Also available on</p>
                <div className="flex gap-6 text-foreground/60 font-serif italic text-lg">
                  <a href="https://www.booking.com/hotel/th/m2-room-for-rent.html" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Booking.com</a>
                  <a href="#" className="hover:text-primary transition-colors">Agoda</a>
                  <a href="#" className="hover:text-primary transition-colors">Airbnb</a>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border/50 shadow-lg">
              <CardContent className="p-8 md:p-10">
                <h4 className="font-serif text-2xl font-medium mb-8">Send an Enquiry</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input data-testid="input-name" placeholder="Your name" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input data-testid="input-email" type="email" placeholder="your@email.com" className="bg-background" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Check-in / Check-out</label>
                      <Input data-testid="input-dates" type="text" placeholder="e.g. 10 Dec – 14 Dec" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Guests</label>
                      <Input data-testid="input-guests" type="number" placeholder="2" min="1" className="bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      data-testid="input-message"
                      placeholder="Any special requests or questions?"
                      className="bg-background min-h-[120px]"
                    />
                  </div>
                  <button
                    data-testid="button-submit-enquiry"
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground font-bold tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors"
                  >
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
            <span className="font-serif text-3xl font-bold tracking-tight mb-2 block text-white">
              M2 <span className="font-sans font-light text-2xl">Rooms & Stays</span>
            </span>
            <span className="text-xs tracking-widest uppercase text-background/40 mb-6 block">
              Also known as M2 Room For Rent
            </span>
            <p className="text-background/60 max-w-sm font-light leading-relaxed">
              Your personal sanctuary in Patong Beach. Unhurried, vibrant, and perfectly placed for your Thai adventure.
            </p>
          </div>
          <div>
            <h5 className="font-bold tracking-widest uppercase text-sm mb-6 text-white">Quick Links</h5>
            <ul className="space-y-4 text-background/60 font-light">
              {[["About", "#about"], ["Rooms", "#rooms"], ["Location", "#location"], ["Blog", "#blog"], ["Contact", "#contact"]].map(([label, href]) => (
                <li key={label}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold tracking-widest uppercase text-sm mb-6 text-white">Connect</h5>
            <ul className="space-y-4 text-background/60 font-light">
              <li><a href="https://www.instagram.com/m2rooms/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://www.booking.com/hotel/th/m2-room-for-rent.html" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Booking.com</a></li>
              <li><a href="https://wa.me/66982221682" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-background/40 text-xs">
          <p>© {new Date().getFullYear()} M2 Rooms & Stays · M2 Room For Rent. All rights reserved.</p>
          <p>Patong, Phuket 83150, Thailand</p>
        </div>
      </footer>
    </div>
  );
}
