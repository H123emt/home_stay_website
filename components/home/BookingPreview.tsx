"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Users, ArrowRight } from "lucide-react";
import { rooms } from "@/data/rooms";
import { formatCurrency, formatDateShort } from "@/lib/formatters";
import { LUXURY_EASE } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function BookingPreview() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0].slug);
  const [guests, setGuests] = useState(2);
  const today = new Date();
  const checkIn = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const checkOut = new Date(checkIn.getTime() + 3 * 24 * 60 * 60 * 1000);

  const activeRoom = rooms.find((r) => r.slug === selectedRoom) ?? rooms[0];
  const nights = 3;
  const pricePerNight = activeRoom.pricing[0].pricePerNight;
  const subtotal = pricePerNight * nights;
  const taxes = Math.round(subtotal * 0.18);
  const total = subtotal + taxes;

  const bookingUrl = `/booking?room=${selectedRoom}&guests=${guests}`;

  return (
    <section className="py-24 sm:py-32 bg-[#F9FBF9]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-8">
            <ScrollReveal direction="up" blur delay={0}>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-light uppercase tracking-[0.35em] text-[#6B7A52]">
                  Reserve
                </span>
                <h2
                  className="font-serif font-light text-[#112211] leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  Your silence
                  <br />
                  <span className="text-[#B08D57]">awaits.</span>
                </h2>
                <p className="text-base font-light leading-relaxed text-[#2D3748]/60 max-w-md">
                  Every stay at Aranya is curated, not just booked. Tell us your
                  dates and we'll craft the ideal experience — from room selection
                  to private experiences.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" blur delay={0.15}>
              <ul className="flex flex-col gap-3">
                {[
                  "Free cancellation up to 14 days before arrival",
                  "Complimentary welcome experience for all guests",
                  "Private transfers from Shillong on request",
                  "Dedicated pre-arrival concierge service",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#B08D57] flex-shrink-0" />
                    <span className="text-sm font-light text-[#2D3748]/60">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="up" blur delay={0.25}>
              <div className="flex items-center gap-4">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  <Link href="/booking">Begin Reservation</Link>
                </Button>
                <Link
                  href="/contact"
                  className="text-xs font-light uppercase tracking-[0.2em] text-[#112211]/50 hover:text-[#112211] transition-colors duration-300 underline underline-offset-4"
                >
                  Ask a question
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" blur delay={0.2}>
            <motion.div
              className="border border-[#112211]/10 bg-white/70 backdrop-blur-sm p-6 sm:p-8 flex flex-col gap-6"
              whileHover={{ y: -4, boxShadow: "0 24px 60px rgba(17,34,17,0.08)" }}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-light uppercase tracking-[0.3em] text-[#6B7A52]">
                  Quick Estimate
                </p>
                <span className="text-[10px] font-light text-[#112211]/30">
                  Sample · 3 nights
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-light uppercase tracking-[0.2em] text-[#112211]/40">
                  Select Room
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {rooms.map((room) => (
                    <button
                      key={room.slug}
                      onClick={() => setSelectedRoom(room.slug)}
                      className={`flex items-center justify-between px-4 py-3 border text-left transition-all duration-300 ${
                        selectedRoom === room.slug
                          ? "border-[#112211] bg-[#112211]/3"
                          : "border-[#112211]/10 hover:border-[#112211]/30"
                      }`}
                    >
                      <span className="text-sm font-light text-[#112211]">{room.name}</span>
                      <span className="text-xs font-light text-[#B08D57]">
                        {formatCurrency(room.pricing[0].pricePerNight)}/night
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1 p-3 border border-[#112211]/10">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="w-3 h-3 text-[#6B7A52]" />
                    <span className="text-[9px] font-light uppercase tracking-wider text-[#112211]/40">Check-in</span>
                  </div>
                  <p className="text-sm font-light text-[#112211]">{formatDateShort(checkIn)}</p>
                </div>
                <div className="flex flex-col gap-1 p-3 border border-[#112211]/10">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="w-3 h-3 text-[#6B7A52]" />
                    <span className="text-[9px] font-light uppercase tracking-wider text-[#112211]/40">Check-out</span>
                  </div>
                  <p className="text-sm font-light text-[#112211]">{formatDateShort(checkOut)}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B7A52]" />
                  <span className="text-sm font-light text-[#112211]">Guests</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-7 h-7 border border-[#112211]/15 flex items-center justify-center text-[#112211]/50 hover:text-[#112211] hover:border-[#112211]/40 transition-colors"
                    aria-label="Decrease guests"
                  >
                    <span className="text-sm">−</span>
                  </button>
                  <span className="w-6 text-center text-sm font-light text-[#112211]">
                    {guests}
                  </span>
                  <button
                    onClick={() => setGuests(Math.min(activeRoom.maxGuests, guests + 1))}
                    className="w-7 h-7 border border-[#112211]/15 flex items-center justify-center text-[#112211]/50 hover:text-[#112211] hover:border-[#112211]/40 transition-colors"
                    aria-label="Increase guests"
                  >
                    <span className="text-sm">+</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-[#112211]/8">
                {[
                  { label: `${formatCurrency(pricePerNight)} × ${nights} nights`, value: formatCurrency(subtotal) },
                  { label: "Taxes & fees (18% GST)", value: formatCurrency(taxes) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-xs font-light text-[#112211]/40">{label}</span>
                    <span className="text-xs font-light text-[#112211]">{value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2 border-t border-[#112211]/8">
                  <span className="text-sm font-light text-[#112211] uppercase tracking-wider">Total</span>
                  <span className="font-serif text-xl font-light text-[#112211]">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              <Button variant="primary" size="lg" fullWidth icon={<ArrowRight className="w-4 h-4" />}>
                <Link href={bookingUrl}>Reserve This Stay</Link>
              </Button>

              <p className="text-center text-[9px] font-light uppercase tracking-wider text-[#112211]/30">
                No payment required to reserve · Free cancellation
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}