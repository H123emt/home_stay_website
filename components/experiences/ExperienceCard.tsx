"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, ArrowRight, Mountain } from "lucide-react";

import { Experience } from "@/types/experience";
import { formatCurrency } from "@/lib/formatters";
import Badge from "@/components/common/Badge";

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
  featured?: boolean;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ExperienceCard: FC<ExperienceCardProps> = ({
  experience,
  index = 0,
  featured = false,
}) => {
  const primaryImage = experience.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: EASE,
      }}
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl ${
        featured ? "md:flex" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          featured ? "h-64 md:h-auto md:w-1/2" : "h-56"
        }`}
      >
        <Image
          src={primaryImage.src}
          alt={primaryImage.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#112211]/50 to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <Badge variant="ochre">{experience.category} </Badge> 
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md">
          <Mountain className="h-3 w-3 text-[#B08D57]" />
          <span className="text-xs font-medium capitalize text-white">
            {experience.difficulty}
          </span>
        </div>
      </div>

      <div
        className={`p-6 ${
          featured ? "md:flex md:w-1/2 md:flex-col md:justify-center" : ""
        }`}
      >
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#6B7A52]">
          {experience.subtitle}
        </p>

        <h3
          className={`mb-2 font-serif font-semibold text-[#112211] ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {experience.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#2D3748]">
          {experience.description}
        </p>

        <div className="mb-5 flex items-center gap-4 text-sm text-[#6B7A52]">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {experience.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            {experience.groupSize}
          </span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {experience.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-[#6B7A52]/10 px-2.5 py-1 text-xs text-[#6B7A52]"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-[#112211]/8 pt-4">
          <div>
            <span className="text-xl font-bold text-[#112211]">
              {formatCurrency(experience.price)}
            </span>
            <span className="ml-1 text-sm text-[#6B7A52]">
              {experience.pricingNote}
            </span>
          </div>

          <Link
            href={`/experiences/${experience.slug}`}
            className="group/btn flex items-center gap-2 text-sm font-medium text-[#112211]"
          >
            <span className="border-b border-transparent transition-all duration-300 group-hover/btn:border-[#112211]">
              Explore
            </span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;