"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, MapPin } from "lucide-react";

import { BookingFormData } from "@/types/booking";
import { rooms } from "@/data/rooms";
import {
  formatCurrency,
  formatDate,
  getNightsBetween,
} from "@/lib/formatters";

interface BookingSummaryProps {
  form: BookingFormData;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const BookingSummary: FC<BookingSummaryProps> = ({ form }) => {
  const room = rooms.find((r) => r.id === form.roomId);

  const basePricing = room?.pricing?.[0];

  const nights =
    form.dates.checkIn && form.dates.checkOut
      ? getNightsBetween(form.dates.checkIn, form.dates.checkOut)
      : 0;

  const subtotal =
    basePricing && nights > 0
      ? basePricing.pricePerNight * nights
      : 0;

  const taxes = Math.round(subtotal * 0.12);

  const total = subtotal + taxes;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="sticky top-24 rounded-2xl bg-[#112211] p-6 text-white"
    >
      <h3 className="mb-6 border-b border-white/10 pb-4 font-serif text-lg">
        Booking Summary
      </h3>

      {room && basePricing ? (
        <>
          <div className="mb-5 rounded-xl bg-white/5 p-4">
            <p className="mb-1 text-xs uppercase tracking-widest text-[#B08D57]">
              Room
            </p>

            <p className="font-semibold text-white">{room.name}</p>

            <p className="text-sm capitalize text-white/50">
              {room.category}
            </p>
          </div>

          <div className="mb-5 space-y-3">
            {form.dates.checkIn && (
              <div className="flex items-center gap-3 text-sm">
                <CalendarDays className="h-4 w-4 flex-shrink-0 text-[#6B7A52]" />
                <div>
                  <span className="block text-xs text-white/50">
                    Check-in
                  </span>
                  <span className="text-white">
                    {formatDate(form.dates.checkIn)}
                  </span>
                </div>
              </div>
            )}

            {form.dates.checkOut && (
              <div className="flex items-center gap-3 text-sm">
                <CalendarDays className="h-4 w-4 flex-shrink-0 text-[#6B7A52]" />
                <div>
                  <span className="block text-xs text-white/50">
                    Check-out
                  </span>
                  <span className="text-white">
                    {formatDate(form.dates.checkOut)}
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 text-sm">
              <Users className="h-4 w-4 flex-shrink-0 text-[#6B7A52]" />
              <div>
                <span className="block text-xs text-white/50">
                  Guests
                </span>

                <span className="text-white">
                  {form.guests.adults} Adult
                  {form.guests.adults !== 1 ? "s" : ""}

                  {form.guests.children > 0 &&
                    `, ${form.guests.children} Child${
                      form.guests.children !== 1 ? "ren" : ""
                    }`}

                  {form.guests.infants > 0 &&
                    `, ${form.guests.infants} Infant${
                      form.guests.infants !== 1 ? "s" : ""
                    }`}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 flex-shrink-0 text-[#6B7A52]" />
              <div>
                <span className="block text-xs text-white/50">
                  Location
                </span>
                <span className="text-white">
                  Cherrapunjee, Meghalaya
                </span>
              </div>
            </div>
          </div>

          {nights > 0 && (
            <div className="space-y-2 border-t border-white/10 pt-5">
              <div className="flex justify-between text-sm text-white/70">
                <span>
                  {formatCurrency(basePricing.pricePerNight)} × {nights} nights
                </span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between text-sm text-white/70">
                <span>Taxes & fees (12%)</span>
                <span>{formatCurrency(taxes)}</span>
              </div>

              <div className="flex justify-between border-t border-white/10 pt-3 text-base font-bold">
                <span>Total</span>
                <span className="text-[#B08D57]">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="py-8 text-center text-sm text-white/30">
          Select a room to see pricing
        </div>
      )}
    </motion.div>
  );
};

export default BookingSummary;