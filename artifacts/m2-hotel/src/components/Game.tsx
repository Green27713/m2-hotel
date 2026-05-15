import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, RefreshCw, ChevronRight } from "lucide-react";

const questions = [
  {
    q: "How far is Patong Beach from M2 Rooms & Stays?",
    options: ["30 seconds by car", "5-7 minute walk", "20 minute tuk-tuk ride", "1 hour drive"],
    answer: 1,
    fact: "You can smell the sea from our front door. Pack your flip-flops!",
  },
  {
    q: "What is Thailand's most famous style of martial art?",
    options: ["Karate", "Judo", "Muay Thai", "Taekwondo"],
    answer: 2,
    fact: "Muay Thai is called 'The Art of Eight Limbs' — fists, elbows, knees, and shins. You can watch live fights at Patong Boxing Stadium!",
  },
  {
    q: "What does 'Sawasdee' (สวัสดี) mean in Thai?",
    options: ["Goodbye", "Thank you", "Hello / Good day", "Excuse me"],
    answer: 2,
    fact: "Sawasdee krap (male) or Sawasdee ka (female) — say this with a slight bow and you'll earn instant smiles from locals.",
  },
  {
    q: "Which island group is Phuket closest to?",
    options: ["The Similan Islands", "The Phi Phi Islands", "The Surin Islands", "Koh Samui"],
    answer: 1,
    fact: "Phi Phi Islands are about 40km from Phuket — a popular day-trip by speedboat. The water is unforgettable!",
  },
  {
    q: "What is Thailand's national flower?",
    options: ["Jasmine", "Lotus", "Orchid", "Plumeria"],
    answer: 2,
    fact: "The Cassia fistula (Golden Shower tree) is actually the national tree and floral emblem. But orchids are Thailand's most famous bloom and a huge export!",
  },
  {
    q: "Approximately how many islands does Thailand have?",
    options: ["Over 30", "Over 250", "Over 1,400", "Over 6,000"],
    answer: 2,
    fact: "Thailand has over 1,400 islands — most of them uninhabited and absolutely stunning. Phuket is the largest!",
  },
];

type Phase = "intro" | "playing" | "done";

export function Game() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFact, setShowFact] = useState(false);

  const q = questions[current];

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowFact(true);
    if (idx === q.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setPhase("done");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowFact(false);
    }
  };

  const restart = () => {
    setPhase("intro");
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowFact(false);
  };

  const getScoreMessage = () => {
    if (score === questions.length) return "Perfect score! You're basically a local.";
    if (score >= 4) return "Impressive! Patong is lucky to have you.";
    if (score >= 2) return "Not bad! A little more exploring and you'll be an expert.";
    return "Time to explore more of Thailand! Come stay with us and learn from the locals.";
  };

  return (
    <section id="game" className="py-24 md:py-32 px-4 md:px-8 bg-card border-t border-border">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Just for Fun</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-medium">How Well Do You Know Patong?</h3>
          <p className="text-muted-foreground font-light mt-4 max-w-md mx-auto">
            Test your Thailand knowledge with our quick quiz. Perfect to play while you plan your trip.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-background border border-border p-10 text-center"
            >
              <div className="text-6xl mb-6 font-serif text-primary font-bold">6</div>
              <p className="font-medium text-lg mb-2">Questions about Thailand & Patong</p>
              <p className="text-muted-foreground font-light mb-8">Takes less than 2 minutes. No pressure!</p>
              <button
                data-testid="button-start-game"
                onClick={() => setPhase("playing")}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors"
              >
                Start the Quiz
              </button>
            </motion.div>
          )}

          {phase === "playing" && (
            <motion.div
              key={`question-${current}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-background border border-border p-8 md:p-10"
            >
              {/* Progress bar */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-muted-foreground tracking-wide">
                  {current + 1} / {questions.length}
                </span>
              </div>

              <h4 className="font-serif text-2xl font-medium mb-8 leading-snug">{q.q}</h4>

              <div className="space-y-3 mb-6">
                {q.options.map((opt, i) => {
                  let cls = "w-full text-left px-6 py-4 border transition-all duration-200 font-medium text-sm";
                  if (selected === null) {
                    cls += " border-border hover:border-primary hover:bg-primary/5 cursor-pointer";
                  } else if (i === q.answer) {
                    cls += " border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400";
                  } else if (i === selected) {
                    cls += " border-red-400 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400";
                  } else {
                    cls += " border-border/50 text-muted-foreground";
                  }
                  return (
                    <button
                      key={i}
                      data-testid={`option-${i}`}
                      className={cls}
                      onClick={() => handleAnswer(i)}
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>

              {showFact && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/5 border-l-4 border-primary p-4 mb-6 text-sm text-foreground/80 font-light italic"
                >
                  <strong className="not-italic font-semibold text-primary">Did you know? </strong>
                  {q.fact}
                </motion.div>
              )}

              {selected !== null && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  data-testid="button-next-question"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold tracking-[0.1em] uppercase text-sm hover:bg-primary/90 transition-colors"
                >
                  {current + 1 >= questions.length ? "See My Score" : "Next Question"}
                  <ChevronRight size={16} />
                </motion.button>
              )}
            </motion.div>
          )}

          {phase === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-background border border-border p-10 text-center"
            >
              <Trophy className="mx-auto mb-6 text-secondary" size={48} strokeWidth={1.5} />
              <h4 className="font-serif text-3xl font-medium mb-2">
                {score} / {questions.length}
              </h4>
              <p className="text-muted-foreground font-light mb-4">{getScoreMessage()}</p>
              <p className="text-sm font-medium text-primary mb-8">
                The best way to learn more? Come stay with us and explore Patong first-hand.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  data-testid="button-restart-game"
                  onClick={restart}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-border text-sm font-bold tracking-wide uppercase hover:bg-muted/50 transition-colors"
                >
                  <RefreshCw size={15} /> Play Again
                </button>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-bold tracking-wide uppercase hover:bg-primary/90 transition-colors"
                >
                  Book Your Stay
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
