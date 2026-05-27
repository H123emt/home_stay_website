"use client";

import Image from "next/image";
import { Clock, Leaf, Flame, Utensils } from "lucide-react";
import type { DiningAmbience, RestaurantInfo } from "@/types/restaurant";

const featureIcons = [Leaf, Flame, Utensils, Clock, Leaf, Utensils];

interface DiningHighlightsProps {
  info: RestaurantInfo;
  ambienceImages: DiningAmbience[];
}

export default function DiningHighlights({
  info,
  ambienceImages,
}: DiningHighlightsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-8">
        <div>
          <h3 className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">
            Dining Hours
          </h3>
          <div className="space-y-3">
            {Object.entries(info.openingHours).map(([meal, time]) => (
              <div
                key={meal}
                className="flex items-center justify-between py-3 border-b border-stone-800"
              >
                <div className="flex items-center gap-3">
                  <Clock size={14} className="text-amber-500" />
                  <span className="text-black capitalize font-medium text-sm">
                    {meal}
                  </span>
                </div>
                <span className="text-black text-sm font-mono">{time}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">
            Our Promise
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {info.features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-900/50 border border-stone-800/50"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-amber-400" />
                  </div>
                  <span className="text-stone-300 text-xs leading-tight">
                    {feature}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-amber-700/30 bg-amber-950/20">
          <p className="text-black text-sm leading-relaxed italic">
            "Complimentary breakfast is included with every stay. In-room dining
            available from 7 AM to 10 PM. Please inform us of any dietary
            requirements at the time of booking."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {ambienceImages.map((item, index) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.parentElement!.style.background =
                  "linear-gradient(135deg, #292524 0%, #1c1917 100%)";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3">
              <p className="text-white text-xs font-semibold">{item.title}</p>
              <p className="text-stone-400 text-[10px] mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}