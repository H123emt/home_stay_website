"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Maximize2 } from "lucide-react";

import { Room } from "@/types/room";
import Badge from "@/components/common/Badge";
import { formatCurrency } from "@/lib/formatters";

interface RoomCardProps {
  room: Room;
  index?: number;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const RoomCard: FC<RoomCardProps> = ({ room, index = 0 }) => {
  const primaryImage = room.images[0];
  const basePricing = room.pricing[0];

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
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={primaryImage.src}
          alt={primaryImage.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#112211]/60 to-transparent" />

        <div className="absolute left-4 top-4">
          <Badge variant="moss">{room.category}</Badge>
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {room.available ? "Available" : "Booked"}
        </div>
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#6B7A52]">
          {room.tagline}
        </p>

        <h3 className="mb-2 font-serif text-xl font-semibold text-[#112211]">
          {room.name}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#2D3748]">
          {room.description}
        </p>

        <div className="mb-5 flex items-center gap-4 text-sm text-[#6B7A52]">
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            {room.maxGuests} Guests
          </span>

          <span className="flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4" />
            {room.sizeSqFt} SqFt
          </span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity.id}
              className="rounded-full bg-[#6B7A52]/10 px-2.5 py-1 text-xs text-[#6B7A52]"
            >
              {amenity.label}
            </span>
          ))}

          {room.amenities.length > 3 && (
            <span className="rounded-full bg-[#B08D57]/10 px-2.5 py-1 text-xs text-[#B08D57]">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-[#112211]/8 pt-4">
          <div>
            <span className="text-2xl font-bold text-[#112211]">
              {formatCurrency(basePricing.pricePerNight)}
            </span>
            <span className="ml-1 text-sm text-[#6B7A52]">/ night</span>
          </div>

          <Link
            href={`/rooms/${room.slug}`}
            className="group/link flex items-center gap-2 text-sm font-medium text-[#112211]"
          >
            <span className="border-b border-transparent transition-all duration-300 group-hover/link:border-[#112211]">
              View Room
            </span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;