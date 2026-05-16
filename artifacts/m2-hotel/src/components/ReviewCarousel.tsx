import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    text: "I had an absolutely amazing stay at M2 Room for Rent. The room was more than beautiful and spotlessly clean — it honestly exceeded my expectations. The owner was incredibly friendly, welcoming, and helpful. I rarely felt as comfortable and well looked after anywhere.",
    name: "Patrick",
    loc: "Switzerland",
    date: "2024",
    stars: 5,
    source: "Booking.com",
  },
  {
    text: "We stayed at M2 twice — 4 nights each time. After the first stay, we came back because we loved everything about this place. The rooms were very clean and the manager and his staff were always there to help and support us. Everybody was very warm and welcoming.",
    name: "Hubert",
    loc: "Switzerland",
    date: "2024",
    stars: 5,
    source: "Booking.com",
  },
  {
    text: "Very nice hotel — new, very clean. The guy in reception is very friendly and helpful. It's situated on a walking street, so also very quiet. Recommended!",
    name: "L.",
    loc: "Italy",
    date: "2024",
    stars: 5,
    source: "Booking.com",
  },
  {
    text: "Comfortable bedding, very clean room, very helpful staff. Great location — close to the centre and very quiet. Excellent value for money. Staff were also very helpful arranging an airport transfer.",
    name: "Arnaud",
    loc: "France",
    date: "2025",
    stars: 5,
    source: "Booking.com",
  },
  {
    text: "Excellent welcome from our host. The room is spacious and completely renovated recently. Excellent value for money. Top location — right near Bangla Road.",
    name: "Florian",
    loc: "France",
    date: "2025",
    stars: 5,
    source: "Booking.com",
  },
  {
    text: "Very clean room, great hosts and a very good location. Quiet at night. Fast WiFi! Everything was perfect.",
    name: "Philipp",
    loc: "Germany",
    date: "2025",
    stars: 5,
    source: "Booking.com",
  },
  {
    text: "Everything was genuinely great. The person at reception is a really kind and helpful person.",
    name: "Gotzon",
    loc: "Spain",
    date: "2025",
    stars: 5,
    source: "Booking.com",
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
            <p className="text-primary-foreground/60 text-sm mt-3">
              Real reviews from Booking.com &nbsp;·&nbsp; Rated <span className="text-secondary font-semibold">8.7 Excellent</span> &nbsp;·&nbsp; Location <span className="text-secondary font-semibold">9.5 / 10</span>
            </p>
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
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex gap-1 text-secondary">
                        {[...Array(r.stars)].map((_, j) => (
                          <Star key={j} size={15} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-xs text-primary-foreground/40 font-medium tracking-wide uppercase">
                        {r.source}
                      </span>
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
