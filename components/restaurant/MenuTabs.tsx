"use client";

import { useState, useRef, useEffect } from "react";
import type { MenuCategory, MenuCategoryMeta } from "@/types/restaurant";

interface MenuTabsProps {
  categories: MenuCategoryMeta[];
  activeCategory: MenuCategory;
  onChange: (category: MenuCategory) => void;
}

export default function MenuTabs({
  categories,
  activeCategory,
  onChange,
}: MenuTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeCategory]);

  return (
    <div
      ref={scrollRef}
      className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mb-2"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {categories.map((cat) => {
        const isActive = cat.id === activeCategory;
        return (
          <button
            key={cat.id}
            ref={isActive ? activeRef : null}
            onClick={() => onChange(cat.id)}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
              whitespace-nowrap transition-all duration-300 border shrink-0
              ${
                isActive
                  ? "bg-amber-500 text-stone-900 border-amber-500 shadow-lg shadow-amber-500/25 scale-105"
                  : "bg-stone-900/60 text-stone-400 border-stone-700/40 hover:border-amber-600/40 hover:text-stone-200"
              }
            `}
          >
            <span className="text-base">{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}