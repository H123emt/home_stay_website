"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  Wind,
  Coffee,
  Tv,
  Bath,
  Utensils,
  Mountain,
  Flame,
  Car,
  Shield,
  Droplets,
  Leaf,
} from "lucide-react";

interface Amenity {
  id: string;
  label: string;
  icon: string;
}

interface RoomAmenitiesProps {
  amenities: Amenity[];
}

const AMENITY_ICONS: Record<string, React.ElementType> = {
  wifi: Wifi,
  wind: Wind,
  coffee: Coffee,
  tv: Tv,
  bath: Bath,
  utensils: Utensils,
  mountain: Mountain,
  fire: Flame,
  car: Car,
  shield: Shield,
  droplets: Droplets,
  leaf: Leaf,
};

const EASE = [0.16, 1, 0.3, 1] as const;

const RoomAmenities: FC<RoomAmenitiesProps> = ({ amenities }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {amenities.map((amenity, i) => {
        const Icon = AMENITY_ICONS[amenity.icon] ?? Shield;

        return (
          <motion.div
            key={amenity.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
            className="flex items-center gap-3 p-4 bg-[#F9FBF9] border border-[#112211]/8 rounded-xl"
          >
            <div className="w-9 h-9 rounded-lg bg-[#6B7A52]/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-[#6B7A52]" />
            </div>

            <span className="text-[#2D3748] text-sm font-medium">
              {amenity.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default RoomAmenities;