import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    text: "A hidden gem in Patong! The staff were incredibly friendly and the room was spotless and beautifully designed. The location is perfect — quiet enough to sleep well but a short walk to everything.",
    name: "Sarah Jenkins",
    loc: "Australia",
    date: "Oct 2024",
    stars: 5,
  },
  {
    text: "Perfect for solo travellers. Super clean, great WiFi for working remotely, and the reception team were so helpful with tips about the area. Felt like a home away from home.",
    name: "Marco Rossi",
    loc: "Italy",
    date: "Jan 2025",
    stars: 5,
  },
  {
    text: "The best guesthouse experience I've had in Thailand. Felt like a boutique hotel but with the personal warmth you only get from smaller properties. Would stay again in a heartbeat.",
    name: "Emma Wood",
    loc: "United Kingdom",
    date: "Feb 2025",
    stars: 5,
  },
  {
    text: "Fantastic value for Patong. The room was large, modern, and had everything we needed — AC, TV, hot water, refrigerator. Five minutes walk to the beach. Could not ask for more.",
    name: "David Chen",
    loc: "Singapore",
    date: "Mar 2025",
    stars: 5,
  },
  {
    text: "We stayed for 10 nights and loved every minute. The reception staff went above and beyond helping us arrange scooter rentals and trips. Room was immaculate throughout.",
    name: "Kirsten Müller",
    loc: "Germany",
    date: "Apr 2025",
    stars: 5,
  },
  {
    text: "Excellent location, clean and comfortable rooms, and genuinely warm hospitality. M2 understands what travellers actually need. Already booked again for November!",
    name: "Jake Thompson",
    loc: "Canada",
    date: "May 2025",
    stars: 5,
  },
];

export function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = [
    current,
    (current + 1) % reviews.length,
    (current + 2) % reviews.length,
  ];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.4 } }),
  };

  return (
    <section id="reviews" className="py-24 md:py-32 px-4 md:px-8 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Guest Book</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-medium text-primary-foreground">
              What Our Guests Say
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              data-testid="button-reviews-prev"
              onClick={prev}
              className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              data-testid="button-reviews-next"
              onClick={next}
              className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards — desktop shows 3, tablet 2, mobile 1 */}
        <div className="relative">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visible.map((idx) => {
                const r = reviews[idx];
                return (
                  <div
                    key={idx}
                    data-testid={`card-review-${idx}`}
                    className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 backdrop-blur-sm flex flex-col"
                  >
                    <div className="flex gap-1 text-secondary mb-5">
                      {[...Array(r.stars)].map((_, j) => (
                        <Star key={j} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <p className="font-serif italic text-lg leading-relaxed flex-1 mb-6">
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <div className="border-t border-primary-foreground/10 pt-5">
                      <p className="font-bold text-sm tracking-wide">{r.name}</p>
                      <p className="text-xs text-primary-foreground/60 mt-1">
                        {r.loc} &nbsp;&middot;&nbsp; {r.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              data-testid={`dot-review-${i}`}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-secondary w-6" : "bg-primary-foreground/30"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
