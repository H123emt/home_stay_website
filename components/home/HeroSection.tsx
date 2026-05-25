"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { LUXURY_EASE, SITE_NAME } from "@/lib/constants";
import HeroCarousel from "./HeroCarousel";
import Button from "@/components/common/Button";

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    const el = document.getElementById("bento-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: LUXURY_EASE },
    },
  };

  return (
    <section ref={scrollRef} className="relative h-screen min-h-[600px] max-h-[1200px] w-full overflow-hidden">
      <HeroCarousel />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#112211]/60 via-[#112211]/20 to-[#112211]/70 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#112211]/40 via-transparent to-transparent pointer-events-none" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 max-w-3xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#B08D57]/60" />
              <span className="text-[10px] font-light uppercase tracking-[0.4em] text-[#F9FBF9]/70">
                Meghalaya · East Khasi Hills · 1,800m
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif font-light leading-[1.05] text-[#F9FBF9]"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Where the clouds
              <br />
              <em className="not-italic text-[#B08D57]">come to rest.</em>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-lg text-base sm:text-lg font-light leading-relaxed text-[#F9FBF9]/60"
            >
              A private wilderness retreat in the wettest place on Earth.
              Ancient forest, living architecture, and absolute silence.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="ochre" size="lg">
                <Link href="/booking">Reserve a Stay</Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border border-[#F9FBF9]/30 text-[#F9FBF9] hover:bg-[#F9FBF9]/10 hover:border-[#F9FBF9]/60"
              >
                <Link href="/experiences">Our Experiences</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: LUXURY_EASE }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#F9FBF9]/50 hover:text-[#F9FBF9] transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="text-[9px] font-light uppercase tracking-[0.35em]">Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <div className="absolute bottom-8 right-8 sm:right-16 z-20 hidden sm:flex flex-col items-end gap-1">
        <span className="text-[9px] font-light uppercase tracking-[0.3em] text-[#F9FBF9]/40">
          {SITE_NAME} · Est. 2019
        </span>
        <span className="h-px w-16 bg-[#B08D57]/40" />
      </div>
    </section>
  );
}