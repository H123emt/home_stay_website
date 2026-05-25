"use client";

import { useState, useEffect, useCallback } from "react";
import type { WeatherState, WeatherData, WeatherForecastDay } from "@/types/weather";
import { WEATHER_REFRESH_INTERVAL } from "@/lib/constants";

const FALLBACK_WEATHER: WeatherData = {
  location: "Cherrapunji, Meghalaya",
  temperature: 16,
  feelsLike: 13,
  humidity: 94,
  condition: "mist",
  conditionLabel: "Mountain Mist",
  windSpeed: 8,
  visibility: 1.2,
  updatedAt: new Date().toISOString(),
};

const FALLBACK_FORECAST: WeatherForecastDay[] = [
  { day: "Tomorrow", high: 17, low: 12, condition: "drizzle" },
  { day: "Wed", high: 15, low: 11, condition: "rain" },
  { day: "Thu", high: 18, low: 13, condition: "mist" },
  { day: "Fri", high: 20, low: 14, condition: "partlyCloudy" },
  { day: "Sat", high: 19, low: 13, condition: "cloudy" },
];

export function useWeather(): WeatherState & { refetch: () => void } {
  const [state, setState] = useState<WeatherState>({
    data: null,
    forecast: [],
    loading: true,
    error: null,
  });

  const fetchWeather = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      // In production, replace with real API call:
      // const res = await fetch(`/api/weather?lat=25.2744&lon=91.7197`);
      // Simulate network latency with fallback data
      await new Promise((resolve) => setTimeout(resolve, 600));
      setState({
        data: { ...FALLBACK_WEATHER, updatedAt: new Date().toISOString() },
        forecast: FALLBACK_FORECAST,
        loading: false,
        error: null,
      });
    } catch {
      setState({
        data: FALLBACK_WEATHER,
        forecast: FALLBACK_FORECAST,
        loading: false,
        error: "Could not fetch live weather. Showing recent data.",
      });
    }
  }, []);

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, WEATHER_REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchWeather]);

  return { ...state, refetch: fetchWeather };
}