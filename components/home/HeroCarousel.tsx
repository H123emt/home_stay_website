"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { LUXURY_EASE } from "@/lib/constants";

interface HeroSlide {
  id: string;
  src: string;
  alt: string;
  credit?: string;
}

const slides: HeroSlide[] = [
  {
    id: "s1",
    src: "/images/home/home_stay2.png",
    alt: "Cloud sea filling the Khasi valley at dawn",
    credit: "Valley at Dawn",
  },
  {
    id: "s2",
    src: "/images/home/home_stay3.png",
    alt: "Forest Canopy Treehouse emerging from morning mist",
    credit: "Forest Canopy Treehouse",
  },
  {
    id: "s3",
    src: "/images/home/home_stay2.png",
    alt: "Ancient living root bridge deep in the forest",
    credit: "Living Root Bridge",
  },
  {
    id: "s4",
    src: "/images/home/home_stay3.png",
    alt: "Misty Pine Suite private deck overlooking the valley",
    credit: "Misty Pine Suite",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startTimer();
  };

  const slideVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    scale: dir > 0 ? 1.08 : 0.95,
    filter: "blur(8px)",
  }),

  center: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: LUXURY_EASE,
    },
  },

  exit: (dir: number) => ({
    opacity: 0,
    scale: dir > 0 ? 0.95 : 1.08,
    filter: "blur(4px)",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.06] }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority={current === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${slide.credit}`}
            className="group flex items-center"
          >
            <motion.span
              animate={{
                width: i === current ? 32 : 8,
                opacity: i === current ? 1 : 0.4,
              }}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              className="block h-px bg-[#F9FBF9] rounded-full"
            />
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 h-px bg-[#F9FBF9]/10">
        <motion.div
          key={current}
          className="h-full bg-[#B08D57]/60"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
        />
      </div>
    </div>
  );
}