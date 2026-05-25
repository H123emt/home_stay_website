"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface RoomGalleryProps {
  images: GalleryImage[];
  roomName: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const RoomGallery: FC<RoomGalleryProps> = ({ images, roomName }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, i) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: EASE,
            }}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${
              i === 0
                ? "col-span-2 row-span-2 h-72 md:h-96"
                : "h-40 md:h-44"
            }`}
            onClick={() => openLightbox(i)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-[#112211]/0 group-hover:bg-[#112211]/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#112211]/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-6 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-6 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RoomGallery;