"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { ChefSpecial } from "@/types/restaurant";

interface ChefSpecialsProps {
  specials: ChefSpecial[];
}

export default function ChefSpecials({ specials }: ChefSpecialsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {specials.map((special, index) => (
        <div
          key={special.id}
          className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <Image
            src={special.image}
            alt={special.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const fallbackColors = [
                "from-amber-900 to-stone-900",
                "from-stone-800 to-amber-950",
                "from-green-950 to-stone-900",
              ];
              target.parentElement!.style.background = `linear-gradient(135deg, #292524, #1c1917)`;
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          <div className="absolute top-4 left-4">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-amber-500/90 text-stone-900 backdrop-blur-sm">
              <Sparkles size={10} />
              {special.highlight}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-xl font-bold mb-2 leading-tight">
              {special.name}
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {special.description}
            </p>
          </div>

          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-500/30 rounded-bl-3xl" />
        </div>
      ))}
    </div>
  );
}