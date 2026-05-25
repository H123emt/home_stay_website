"use client";

import { Cloud, Droplets, Eye, Wind, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LUXURY_EASE } from "@/lib/constants";
import { useWeather } from "@/hooks/useWeather";
import { formatTemperature } from "@/lib/formatters";
import type { WeatherCondition } from "@/types/weather";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Loader from "@/components/common/Loader";

const conditionConfig: Record <
  WeatherCondition,
  { emoji: string; label: string; bg: string }
> = {
  mist: { emoji: "🌫", label: "Mountain Mist", bg: "from-slate-400/20 to-slate-300/10" },
  rain: { emoji: "🌧", label: "Rain", bg: "from-blue-400/20 to-blue-300/10" },
  drizzle: { emoji: "🌦", label: "Drizzle", bg: "from-blue-300/20 to-slate-200/10" },
  cloudy: { emoji: "☁️", label: "Overcast", bg: "from-gray-400/20 to-gray-300/10" },
  partlyCloudy: { emoji: "⛅", label: "Partly Cloudy", bg: "from-yellow-300/20 to-gray-200/10" },
  clear: { emoji: "☀️", label: "Clear", bg: "from-yellow-400/20 to-orange-200/10" },
  foggy: { emoji: "🌁", label: "Fog", bg: "from-slate-500/20 to-slate-300/10" },
  thunderstorm: { emoji: "⛈", label: "Thunderstorm", bg: "from-purple-400/20 to-slate-300/10" },
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
          "relative overflow-hidden border border-[#112211]/6 bg-gradient-to-br",
          config.bg,
          "backdrop-blur-sm min-h-[190px] p-6"
        )}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-[10px] font-light uppercase tracking-[0.3em] text-[#112211]/40">
              Live Weather
            </p>
            <p className="mt-0.5 text-xs font-light text-[#112211]/60">
              {data?.location ?? "Cherrapunji, Meghalaya"}
            </p>
          </div>
          <button
            onClick={refetch}
            className="text-[#112211]/30 hover:text-[#112211]/60 transition-colors duration-300"
            aria-label="Refresh weather"
          >
            <RefreshCw className={cn("w-3.5 h-3.5", loading && "animate-spin")} />
          </button>
        </div>

        {loading && !data ? (
          <div className="flex items-center justify-center py-8">
            <Loader size="sm" label="Fetching conditions" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
          >
            <div className="flex items-end gap-3 mb-4">
              <span className="text-5xl leading-none">{config.emoji}</span>
              <div>
                <p className="font-serif text-5xl font-light text-[#112211] leading-none">
                  {data ? formatTemperature(data.temperature) : "16°C"}
                </p>
                <p className="mt-1 text-xs font-light text-[#112211]/50">
                  {config.label} · Feels {data ? formatTemperature(data.feelsLike) : "13°C"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { icon: Droplets, label: "Humidity", value: `${data?.humidity ?? 94}%` },
                { icon: Wind, label: "Wind", value: `${data?.windSpeed ?? 8} km/h` },
                { icon: Eye, label: "Visibility", value: `${data?.visibility ?? 1.2} km` },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 p-2 bg-[#112211]/4 rounded"
                >
                  <Icon className="w-3 h-3 text-[#6B7A52]" />
                  <p className="text-[9px] font-light uppercase tracking-wider text-[#112211]/40">
                    {label}
                  </p>
                  <p className="text-xs font-light text-[#112211]">{value}</p>
                </div>
              ))}
            </div>

            {forecast.length > 0 && (
              <div className="flex gap-1 overflow-x-auto scrollbar-none">
                {forecast.map((day) => (
                  <div
                    key={day.day}
                    className="flex-shrink-0 flex flex-col items-center gap-1 px-2 py-1.5 bg-[#112211]/4 rounded min-w-[48px]"
                  >
                    <p className="text-[9px] font-light uppercase tracking-wider text-[#112211]/40">
                      {day.day}
                    </p>
                    <span className="text-sm">{conditionConfig[day.condition].emoji}</span>
                    <p className="text-[9px] font-light text-[#112211]/60">
                      {Math.round(day.high)}°
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {error && (
          <p className="mt-2 text-[9px] font-light text-amber-600/70">{error}</p>
        )}

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent" />
      </div>
    </ScrollReveal>
  );
}