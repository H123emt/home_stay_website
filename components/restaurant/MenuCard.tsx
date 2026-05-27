"use client";

import Image from "next/image";
import { Flame } from "lucide-react";
import type { MenuItem } from "@/types/restaurant";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  return (
    <div
      className="group relative bg-stone-900/60 border border-stone-700/40 rounded-2xl overflow-hidden
                 hover:border-amber-600/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl
                 hover:shadow-amber-900/20"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.parentElement!.style.background =
              "linear-gradient(135deg, #292524 0%, #1c1917 100%)";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {item.isSignature && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-amber-500 text-stone-900">
              Signature
            </span>
          )}
          {item.isVegetarian && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-green-600/90 text-white">
              Veg
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="text-white font-semibold text-base leading-tight group-hover:text-amber-300 transition-colors duration-300">
            {item.name}
          </h4>
          <span className="text-amber-400 font-bold text-base shrink-0">
            ₹{item.price}
          </span>
        </div>

        <p className="text-stone-400 text-sm leading-relaxed line-clamp-2 mb-3">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {item.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-stone-800 text-stone-400 border border-stone-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
            <div className="flex items-center gap-0.5">
              {Array.from({ length: item.spiceLevel }).map((_, i) => (
                <Flame
                  key={i}
                  size={12}
                  className="text-orange-500 fill-orange-500"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}