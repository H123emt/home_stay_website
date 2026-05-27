"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronDown, UtensilsCrossed } from "lucide-react";

import MenuCard from "@/components/restaurant/MenuCard";
import MenuTabs from "@/components/restaurant/MenuTabs";
import ChefSpecials from "@/components/restaurant/ChefSpecials";
import DiningHighlights from "@/components/restaurant/DiningHighlights";
import TableReservation from "@/components/restaurant/Tablereservation";

import {
  restaurantInfo,
  menuCategories,
  menuItems,
  chefSpecials,
  diningAmbienceImages,
} from "@/data/restaurant";
import type { MenuCategory } from "@/types/restaurant";


export default function RestaurantSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("breakfast");
  const menuRef = useRef<HTMLDivElement>(null);

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  const activeMeta = menuCategories.find((c) => c.id === activeCategory);

  return (
    <section id="restaurant" className="relative overflow-hidden">
      <div className="relative h-[85vh] min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/restaurant/restaurant3.avif"
            alt="The Cherapunji Table restaurant"
            fill
            priority
            className="object-cover"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.style.display = "none";
              t.parentElement!.style.background =
                "linear-gradient(to bottom, #1c1917 0%, #292524 50%, #0f0e0d 100%)";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/20" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 pb-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-px h-8 bg-amber-500/60" />
            <UtensilsCrossed size={18} className="text-amber-400" />
            <div className="w-px h-8 bg-amber-500/60" />
          </div>

          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            On-Site Restaurant
          </p>

          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-4 tracking-tight">
            {restaurantInfo.name}
          </h2>

          <p className="text-stone-300/80 text-lg md:text-xl italic mb-8 max-w-xl leading-relaxed">
            "{restaurantInfo.tagline}"
          </p>

          <p className="text-stone-400 text-sm leading-relaxed max-w-2xl mb-10">
            {restaurantInfo.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() =>
                menuRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold
                         text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-amber-500/30
                         hover:shadow-amber-500/50 hover:-translate-y-0.5"
            >
              View Menu
            </button>
            <a
              href="#reserve"
              className="px-8 py-3.5 rounded-full border border-stone-600 hover:border-amber-500/50 text-stone-300
                         hover:text-white font-medium text-sm tracking-widest uppercase transition-all duration-300"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={20} className="text-stone-600" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-14 max-w-6xl">
        <div className="mb-12">
   
          <h2 className="text-black text-3xl md:text-4xl font-bold leading-tight">
            Dishes that define us
          </h2>
          <p className="text-stone-500 text-sm mt-3 max-w-lg leading-relaxed">
            Curated by our head chef — each plate is a celebration of Meghalayan
            terroir and culinary tradition.
          </p>
        </div>
        <ChefSpecials specials={chefSpecials} />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
      </div>

      <div
        ref={menuRef}
        className="container mx-auto px-6 md:px-12 lg:px-16 py-14 max-w-6xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-black text-3xl md:text-4xl font-bold">
              Our Menu
            </h2>
            {activeMeta && (
              <p className="text-stone-500 text-sm mt-2 italic">
                {activeMeta.description}
              </p>
            )}
          </div>
          <p className="text-stone-600 text-xs tracking-widest uppercase">
            All prices in ₹ · Inclusive of taxes
          </p>
        </div>

        <MenuTabs
          categories={menuCategories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))
          ) : (
            <div className="col-span-full text-center py-16 text-stone-600">
              <UtensilsCrossed size={32} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">No items in this category yet.</p>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
     
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-14 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-black text-3xl md:text-4xl font-bold">
            Dining at The Cherapunji Table
          </h2>
        </div>
        <DiningHighlights info={restaurantInfo} ambienceImages={diningAmbienceImages} />
      </div>

      {/* Divider */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
      </div>

      <div
        id="reserve"
        className="container mx-auto px-6 md:px-12 lg:px-16 py-14 max-w-6xl"
      >
        <div className="mb-12">
          <h2 className="text-black text-3xl md:text-4xl font-bold">
            Make a Reservation
          </h2>
          <p className="text-stone-500 text-sm mt-3 max-w-lg leading-relaxed">
            Reserve your table and let us prepare an experience tailored to the
            occasion.
          </p>
        </div>
        <TableReservation />
      </div>

      {/* Bottom fade into footer */}
      <div className="h-px bg-gradient-to-r from-transparent via-stone-700/30 to-transparent" />
    </section>
  );
}