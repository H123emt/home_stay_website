"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users } from "lucide-react";
import { getFeaturedExperiences } from "@/data/experiences";
import { formatCurrency } from "@/lib/formatters";
import { LUXURY_EASE } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

const categoryColors: Record<string, string> = {
  adventure: "ochre",
  wellness: "moss",
  cultural: "default",
  nature: "moss",
  culinary: "ochre",
};

export default function ExperienceSection() {
  const experiences = getFeaturedExperiences();

  return (
    <section className="py-24 sm:py-32 bg-[#F9FBF9]">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionTitle
            eyebrow="Experiences"
            title={
              <>
                Beyond the
                <br />
                <em className="not-italic text-[#6B7A52]">room.</em>
              </>
            }
            subtitle="Encounters with the forest, the culture, and the silence that surrounds us."
          />
          <ScrollReveal direction="up" delay={0.3} blur>
            <Button variant="outline" size="md" className="whitespace-nowrap">
              <Link href="/experiences" className="flex items-center gap-2">
                All Experiences <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} direction="up" delay={i * 0.1} blur>
              <Link href={`/experiences/${exp.slug}`} className="group block">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: LUXURY_EASE }}
                  className="flex flex-col border border-[#112211]/8 bg-white/50 overflow-hidden h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={exp.images[0].src}
                      alt={exp.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112211]/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge                       
                        variant={
                          (categoryColors[exp.category] as "ochre" | "moss" | "default") ?? "default"
                        }
                        className="bg-[#F9FBF9]/90 backdrop-blur-sm"
                      >{exp.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F9FBF9]/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#B08D57]">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F9FBF9]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 p-6 flex-1">
                    <div>
                      <h3 className="font-serif text-xl font-light text-[#112211] leading-snug group-hover:text-[#6B7A52] transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="mt-1 text-xs font-light text-[#112211]/40 italic">
                        {exp.subtitle}
                      </p>
                    </div>
                    <p className="text-sm font-light text-[#2D3748]/60 leading-relaxed line-clamp-2 flex-1">
                      {exp.description}
                    </p>

                    <div className="flex items-center gap-4 pt-2 border-t border-[#112211]/6">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#6B7A52]" />
                        <span className="text-[10px] font-light uppercase tracking-wider text-[#112211]/40">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3 h-3 text-[#6B7A52]" />
                        <span className="text-[10px] font-light uppercase tracking-wider text-[#112211]/40">
                          {exp.groupSize}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-serif text-lg font-light text-[#112211]">
                          {formatCurrency(exp.price)}
                        </span>
                        <span className="text-xs font-light text-[#112211]/40"> / person</span>
                      </div>
                      <Badge
                       
                        variant={
                          exp.difficulty === "easy"
                            ? "moss"
                            : exp.difficulty === "moderate"
                            ? "ochre"
                            : "dark"
                        }
                      > {exp.difficulty}</Badge>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.4} blur>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: "12+", label: "Curated Experiences" },
              { number: "500yr", label: "Living Root Bridges" },
              { number: "100%", label: "Local Guides" },
              { number: "∞", label: "Moments of Stillness" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 py-8 border border-[#112211]/8 text-center"
              >
                <p className="font-serif text-3xl sm:text-4xl font-light text-[#112211]">
                  {stat.number}
                </p>
                <p className="text-[10px] font-light uppercase tracking-[0.25em] text-[#6B7A52]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}