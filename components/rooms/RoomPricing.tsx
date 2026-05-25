"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

import { Room } from "@/types/room";
import { formatCurrency } from "@/lib/formatters";
import Button from "@/components/common/Button";

interface RoomPricingProps {
  room: Room;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const INCLUSIONS = [
  "Daily breakfast for 2",
  "Evening tea & snacks",
  "Welcome bonfire",
  "Nature walk guide",
  "Free parking",
  "24/7 concierge",
];

const RoomPricing: FC<RoomPricingProps> = ({ room }) => {
  const basePricing = room.pricing[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
      className="sticky top-24 rounded-2xl bg-[#112211] p-8 text-white"
    >
      <div className="mb-6">
        <div className="mb-1 flex items-end gap-2">
          <span className="text-4xl font-bold">
            {formatCurrency(basePricing.pricePerNight)}
          </span>
          <span className="mb-1 text-sm text-white/60">/ night</span>
        </div>

        <p className="text-xs uppercase tracking-widest text-white/40">
          Minimum {basePricing.minNights} nights
        </p>
      </div>

      <div className="mb-6 border-t border-white/10 pt-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-white/60">
          Included with your stay
        </p>

        <ul className="space-y-3">
          {INCLUSIONS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-white/80"
            >
              <Check className="h-4 w-4 flex-shrink-0 text-[#6B7A52]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Link href={`/booking?room=${room.slug}`}>
        <Button variant="ochre" className="w-full justify-center py-4 text-base">
          Reserve This Room
        </Button>
      </Link>

      <p className="mt-4 text-center text-xs text-white/40">
        Free cancellation up to 48 hours before check-in
      </p>
    </motion.div>
  );
};

export default RoomPricing;