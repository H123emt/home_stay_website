"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {  galleryImages  } from "@/data/gallery";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const CATEGORIES = ["All","property","Rooms", "Nature", "Experiences", "Food"] as const;
type Category = typeof CATEGORIES[number];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All"
    ?  galleryImages 
    :  galleryImages .filter((g) => g.category === active);

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };
  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Container>
        <ScrollReveal>
          <SectionTitle
            eyebrow="Visual Stories"
            title="Gallery"
            subtitle="Fragments of light, mist, and memory — captured at Misthaven."
            align="center"
          />
        </ScrollReveal>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-[#112211] text-white"
                  : "bg-[#112211]/8 text-[#112211] hover:bg-[#112211]/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-10 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid"
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#112211]/0 group-hover:bg-[#112211]/25 transition-colors duration-300 flex items-end p-4">
                  <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    {item.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#112211]/96 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative w-full max-w-4xl max-h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={filtered[lightbox].width}
                height={filtered[lightbox].height}
                className="w-full h-auto object-contain max-h-[80vh]"
                sizes="100vw"
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {lightbox + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}