"use client";

import { Droplets, Eye, Wind, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LUXURY_EASE } from "@/lib/constants";
import { useWeather } from "@/hooks/useWeather";
import { formatTemperature } from "@/lib/formatters";
import type { WeatherCondition } from "@/types/weather";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Loader from "@/components/common/Loader";

const conditionConfig: Record<
  WeatherCondition,
  { emoji: string; label: string; bg: string }
> = {
  mist: {
    emoji: "🌫",
    label: "Mountain Mist",
    bg: "from-slate-200 to-slate-100",
  },
  rain: {
    emoji: "🌧",
    label: "Rain",
    bg: "from-blue-100 to-slate-50",
  },
  drizzle: {
    emoji: "🌦",
    label: "Drizzle",
    bg: "from-blue-50 to-slate-100",
  },
  cloudy: {
    emoji: "☁️",
    label: "Overcast",
    bg: "from-gray-100 to-slate-50",
  },
  partlyCloudy: {
    emoji: "⛅",
    label: "Partly Cloudy",
    bg: "from-yellow-50 to-slate-50",
  },
  clear: {
    emoji: "☀️",
    label: "Clear",
    bg: "from-yellow-100 to-orange-50",
  },
  foggy: {
    emoji: "🌁",
    label: "Fog",
    bg: "from-slate-200 to-slate-100",
  },
  thunderstorm: {
    emoji: "⛈",
    label: "Thunderstorm",
    bg: "from-slate-300 to-slate-100",
  },
};

export default function WeatherWidget() {
  const { data, forecast, loading, error, refetch } = useWeather();

  const config = data
    ? conditionConfig[data.condition]
    : conditionConfig["mist"];

  return (
    <ScrollReveal direction="up" blur delay={0.15}>
      <div
        className={cn(
          "relative overflow-hidden border border-[#1A1A1A]/10 bg-gradient-to-br",
          config.bg,
          "backdrop-blur-md min-h-[190px] p-6 rounded-2xl shadow-lg"
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#111111]">
              Live Weather
            </p>
            <p className="mt-1 text-xs font-medium text-[#2A2A2A]">
              {data?.location ?? "Cherrapunji, Meghalaya"}
            </p>
          </div>

          <button
            onClick={refetch}
            className="text-[#2A2A2A] hover:text-black transition-colors duration-300"
            aria-label="Refresh weather"
          >
            <RefreshCw
              className={cn("w-4 h-4", loading && "animate-spin")}
            />
          </button>
        </div>

        {/* Loader */}
        {loading && !data ? (
          <div className="flex items-center justify-center py-10">
            <Loader size="sm" label="Fetching conditions" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
          >
            {/* Temperature */}
            <div className="flex items-end gap-4 mb-5">
              <span className="text-5xl leading-none">{config.emoji}</span>

              <div>
                <p className="font-serif text-5xl font-medium text-[#111111] leading-none">
                  {data ? formatTemperature(data.temperature) : "16°C"}
                </p>

                <p className="mt-2 text-xs font-medium text-[#2A2A2A]">
                  {config.label} · Feels{" "}
                  {data ? formatTemperature(data.feelsLike) : "13°C"}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                {
                  icon: Droplets,
                  label: "Humidity",
                  value: `${data?.humidity ?? 94}%`,
                },
                {
                  icon: Wind,
                  label: "Wind",
                  value: `${data?.windSpeed ?? 8} km/h`,
                },
                {
                  icon: Eye,
                  label: "Visibility",
                  value: `${data?.visibility ?? 1.2} km`,
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 p-3 bg-white/85 border border-[#D9D9D9] shadow-sm rounded-xl"
                >
                  <Icon className="w-4 h-4 text-[#3E4A2E]" />

                  <p className="text-[9px] font-semibold uppercase tracking-wider text-[#555555]">
                    {label}
                  </p>

                  <p className="text-sm font-semibold text-[#111111]">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Forecast */}
            {forecast.length > 0 && (
              <div className="flex gap-2 overflow-x-auto scrollbar-none">
                {forecast.map((day) => (
                  <div
                    key={day.day}
                    className="flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 bg-white/80 border border-[#D9D9D9] rounded-xl min-w-[56px]"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-[#555555]">
                      {day.day}
                    </p>

                    <span className="text-base">
                      {conditionConfig[day.condition].emoji}
                    </span>

                    <p className="text-[10px] font-semibold text-[#111111]">
                      {Math.round(day.high)}°
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Error */}
        {error && (
          <p className="mt-3 text-[10px] font-medium text-red-700">
            {error}
          </p>
        )}

        {/* Bottom overlay glow */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />
      </div>
    </ScrollReveal>
  );
}