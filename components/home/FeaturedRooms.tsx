"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Maximize2, BedDouble } from "lucide-react";
import { getFeaturedRooms } from "@/data/rooms";
import { formatCurrency } from "@/lib/formatters";
import { LUXURY_EASE } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export default function FeaturedRooms() {
  const rooms = getFeaturedRooms();
  const [activeRoom, setActiveRoom] = useState(rooms[0].id);

  const active = rooms.find((r) => r.id === activeRoom) ?? rooms[0];

  return (
    <section className="py-24 sm:py-32 bg-[#112211] overflow-hidden">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionTitle
            eyebrow="Our Stays"
            title={
              <>
                Four ways to
                <br />
                <span className="text-[#B08D57]">disappear.</span>
              </>
            }
            subtitle="Each space is an architecture of solitude, built to disappear into the landscape."
            light
          />
          <ScrollReveal direction="up" delay={0.3} blur>
            <Button variant="outline" size="md" className="border-[#F9FBF9]/20 text-[#F9FBF9] hover:bg-[#F9FBF9]/8 hover:border-[#F9FBF9]/40 whitespace-nowrap">
              <Link href="/rooms" className="flex items-center gap-2">
                View All Rooms <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto scrollbar-none pb-2 lg:pb-0">
            {rooms.map((room, i) => (
              <ScrollReveal key={room.id} direction="left" delay={i * 0.08} blur>
                <motion.button
                  onClick={() => setActiveRoom(room.id)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: LUXURY_EASE }}
                  className={`relative flex-shrink-0 lg:w-full text-left p-4 sm:p-5 border transition-all duration-400 group ${
                    activeRoom === room.id
                      ? "border-[#B08D57]/40 bg-[#B08D57]/8"
                      : "border-[#F9FBF9]/8 bg-transparent hover:border-[#F9FBF9]/20"
                  }`}
                >
                  {activeRoom === room.id && (
                    <motion.div
                      layoutId="activeRoom"
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#B08D57]"
                      transition={{ duration: 0.4, ease: LUXURY_EASE }}
                    />
                  )}
                  <Badge                   
                    variant="light"
                    className={activeRoom === room.id ? "border-[#B08D57]/30 text-[#B08D57]" : ""}
                  >{room.category}</Badge>
                  <p className="mt-2 font-serif text-lg font-light text-[#F9FBF9] leading-tight">
                    {room.name}
                  </p>
                  <p className="mt-1 text-[10px] font-light text-[#F9FBF9]/40 uppercase tracking-wider">
                    {room.elevation} · {room.view}
                  </p>
                  <p className="mt-3 text-sm font-light text-[#B08D57]">
                    {formatCurrency(room.pricing[0].pricePerNight)}
                    <span className="text-[#F9FBF9]/30 text-xs"> / night</span>
                  </p>
                </motion.button>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoom}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: LUXURY_EASE }}
                className="flex flex-col gap-5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={active.images[0].src}
                    alt={active.images[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112211]/40 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-3">
                    {[
                      { icon: Users, value: `${active.maxGuests} guests` },
                      { icon: BedDouble, value: `${active.bedrooms} bed` },
                      { icon: Maximize2, value: `${active.sizeSqFt} sq ft` },
                    ].map(({ icon: Icon, value }) => (
                      <div
                        key={value}
                        className="flex items-center gap-1.5 bg-[#112211]/60 backdrop-blur-sm px-3 py-1.5"
                      >
                        <Icon className="w-3 h-3 text-[#B08D57]" />
                        <span className="text-[10px] font-light uppercase tracking-wider text-[#F9FBF9]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {active.images.slice(1, 4).map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="25vw"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <p className="font-serif text-2xl font-light text-[#F9FBF9]">
                      {active.name}
                    </p>
                    <p className="mt-1 text-sm font-light text-[#F9FBF9]/50 italic">
                      {active.tagline}
                    </p>
                    <p className="mt-3 text-sm font-light text-[#F9FBF9]/50 leading-relaxed max-w-lg line-clamp-2">
                      {active.description}
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-3">
                    <Link href={`/rooms/${active.slug}`}>
                      <Button variant="ghost" size="sm" className="border border-[#F9FBF9]/20 text-[#F9FBF9] hover:bg-[#F9FBF9]/8">
                        Details
                      </Button>
                    </Link>
                    <Link href={`/booking?room=${active.slug}`}>
                      <Button variant="ochre" size="sm">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}