"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CloudRain, Leaf, Mountain } from "lucide-react";
import { LUXURY_EASE } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/common/Container";
import WeatherWidget from "./WeatherWidget";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  delay?: number;
}

function BentoCard({ children, className = "", href, delay = 0 }: BentoCardProps) {
  const inner = (
    <ScrollReveal delay={delay} direction="up" blur>
      <motion.div
        whileHover={href ? { y: -4 } : {}}
        transition={{ duration: 0.4, ease: LUXURY_EASE }}
        className={`relative overflow-hidden bg-white/60 backdrop-blur-sm border border-[#112211]/6 ${className}`}
      >
        {children}
        {href && (
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#112211]/8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-3.5 h-3.5 text-[#112211]" />
          </div>
        )}
      </motion.div>
    </ScrollReveal>
  );

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}

export default function BentoGrid() {
  return (
    <section id="bento-section" className="py-24 sm:py-32 bg-[#F9FBF9]">
      <Container size="xl">
        <ScrollReveal direction="up" blur delay={0}>
          <div className="mb-12 flex flex-col gap-2">
            <span className="text-[10px] font-light uppercase tracking-[0.35em] text-[#6B7A52]">
              The retreat
            </span>
            <h2
              className="font-serif font-light text-[#112211] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              A world apart,
              <br />
              <span className="text-[#B08D57]">yet entirely complete.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-auto gap-4">
          <div className="lg:col-span-7 lg:row-span-2 min-h-[380px] sm:min-h-[460px]">
            <BentoCard href="/rooms" delay={0.1} className="h-full">
              <div className="relative h-full min-h-[380px] sm:min-h-[460px]">
                <Image
                  src="/images/gallery/home_stay2.png"
                  alt="Aerial view of the Aranya retreat in morning mist"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112211]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="text-[10px] font-light uppercase tracking-[0.3em] text-[#F9FBF9]/60">
                    Our Stays
                  </span>
                  <p className="mt-1 font-serif text-2xl sm:text-3xl font-light text-[#F9FBF9] leading-tight">
                    Four ways to
                    <br />
                    disappear
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#B08D57]">
                    <span className="text-xs font-light uppercase tracking-[0.2em]">
                      Explore rooms
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>

          <div className="lg:col-span-5">
            <WeatherWidget />
          </div>

          <div className="lg:col-span-2">
            <BentoCard delay={0.2} className="h-full p-6 flex flex-col justify-between min-h-[140px]">
              <Mountain className="w-5 h-5 text-[#6B7A52]" />
              <div>
                <p className="font-serif text-4xl font-light text-[#112211]">2,050</p>
                <p className="mt-1 text-[10px] font-light uppercase tracking-[0.25em] text-[#112211]/40">
                  Metres elevation
                </p>
              </div>
            </BentoCard>
          </div>

          <div className="lg:col-span-3">
            <BentoCard delay={0.25} className="h-full p-6 flex flex-col justify-between min-h-[140px]">
              <CloudRain className="w-5 h-5 text-[#6B7A52]" />
              <div>
                <p className="font-serif text-4xl font-light text-[#112211]">11,871</p>
                <p className="mt-1 text-[10px] font-light uppercase tracking-[0.25em] text-[#112211]/40">
                  mm annual rainfall · wettest on Earth
                </p>
              </div>
            </BentoCard>
          </div>

          <div className="sm:col-span-1 lg:col-span-4 min-h-[300px]">
            <BentoCard href="/experiences" delay={0.3} className="h-full min-h-[300px]">
              <div className="relative h-full min-h-[300px]">
                <Image
                  src="/images/gallery/home_stay2.png"
                  alt="Ancient forest trail in Meghalaya"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112211]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif text-xl font-light text-[#F9FBF9]">
                    Ancient forest experiences
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-[#B08D57]">
                    <span className="text-[10px] font-light uppercase tracking-[0.2em]">
                      Explore
                    </span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>

          <div className="sm:col-span-1 lg:col-span-4">
            <BentoCard delay={0.35} className="h-full p-6 sm:p-8 flex flex-col gap-5 bg-[#112211] min-h-[220px]">
              <Leaf className="w-5 h-5 text-[#6B7A52]" />
              <div className="flex flex-col gap-3">
                <p className="text-[16px] font-medium uppercase tracking-[0.3em] text-[#2E4A2E]">
                  Sustainability
                </p>
                <p className="font-serif text-xl font-light text-dark leading-snug">
                  Carbon-negative since 2021. Every structure built with local
                  hands, local materials.
                </p>
              </div>
              <p className="text-xs font-light text-dark leading-relaxed">
                Rainwater harvesting · Solar power · Zero single-use plastics ·
                Direct community employment
              </p>
            </BentoCard>
          </div>

          <div className="sm:col-span-2 lg:col-span-4 min-h-[220px]">
            <BentoCard href="/experiences/living-root-bridge-trek" delay={0.4} className="h-full min-h-[220px]">
              <div className="relative h-full min-h-[220px]">
                <Image
                  src="/images/gallery/home_stay2.png"
                  alt="Double-decker living root bridge"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112211]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] font-light uppercase tracking-[0.25em] text-[#F9FBF9]/60">
                    Featured experience
                  </p>
                  <p className="mt-1 font-serif text-lg font-light text-[#F9FBF9]">
                    Living Root Bridge Trek
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </Container>
    </section>
  );
}