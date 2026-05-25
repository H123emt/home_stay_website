"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { LUXURY_EASE } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const AUTOPLAY_MS = 8000;

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i < rating ? "fill-[#B08D57] text-[#B08D57]" : "text-[#F9FBF9]/20"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % testimonials.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const navigate = (dir: 1 | -1) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDirection(dir);
    setCurrent((p) => (p + testimonials.length + dir) % testimonials.length);
    startTimer();
  };

const slideVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
    filter: "blur(6px)",
  }),

  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },

  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    filter: "blur(4px)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

  const t = testimonials[current];

  return (
    <section className="py-24 sm:py-32 bg-[#2D3748] overflow-hidden">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-64 flex-shrink-0 flex flex-col justify-between gap-8">
            <SectionTitle
              eyebrow="Testimonials"
              title={
                <>
                  Heard
                  <br />
                  in the
                  <br />
                  <span className="text-[#B08D57]">mist.</span>
                </>
              }
              light
            />

            <ScrollReveal direction="up" delay={0.3} blur>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="w-10 h-10 border border-[#F9FBF9]/20 flex items-center justify-center text-[#F9FBF9]/60 hover:text-[#F9FBF9] hover:border-[#F9FBF9]/50 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-light text-[#F9FBF9]/30 tracking-wider">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => navigate(1)}
                  className="w-10 h-10 border border-[#F9FBF9]/20 flex items-center justify-center text-[#F9FBF9]/60 hover:text-[#F9FBF9] hover:border-[#F9FBF9]/50 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>

            <div className="hidden lg:flex flex-col gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (timerRef.current) clearInterval(timerRef.current);
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                    startTimer();
                  }}
                  className="flex items-center gap-2 group"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <motion.span
                    animate={{
                      height: i === current ? 24 : 4,
                      opacity: i === current ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3, ease: LUXURY_EASE }}
                    className="block w-px bg-[#B08D57] rounded-full"
                  />
                  <span
                    className={`text-[9px] font-light uppercase tracking-wider transition-colors duration-300 ${
                      i === current ? "text-[#F9FBF9]/60" : "text-[#F9FBF9]/20"
                    }`}
                  >
                    {testimonials[i].author.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 relative min-h-[360px] flex flex-col justify-center">
            <span
              className="absolute -top-8 left-0 font-serif text-[120px] leading-none text-[#F9FBF9]/4 select-none pointer-events-none"
              aria-hidden
            >
              "
            </span>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={t.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-6"
              >
                <StarRow rating={t.rating} />

                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F9FBF9] leading-snug">
                  "{t.title}"
                </h3>

                <p className="text-base font-light leading-relaxed text-[#F9FBF9]/55 max-w-2xl">
                  {t.body}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-[#F9FBF9]/10">
                  <div className="w-10 h-10 rounded-full bg-[#B08D57]/20 border border-[#B08D57]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-light text-[#B08D57]">
                      {t.avatarInitials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-light text-[#F9FBF9]">{t.author}</p>
                    <p className="text-[10px] font-light uppercase tracking-wider text-[#F9FBF9]/30">
                      {t.location} · {t.roomStayed} · {t.stayDate}
                    </p>
                  </div>
                  {t.verified && (
                    <div className="ml-auto">
                      <span className="text-[9px] font-light uppercase tracking-wider text-[#6B7A52] border border-[#6B7A52]/30 px-2 py-1">
                        Verified
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 h-px bg-[#F9FBF9]/10">
              <motion.div
                key={current}
                className="h-full bg-[#B08D57]/60"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}