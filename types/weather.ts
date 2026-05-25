export type WeatherCondition =
  | "mist"
  | "rain"
  | "drizzle"
  | "cloudy"
  | "partlyCloudy"
  | "clear"
  | "foggy"
  | "thunderstorm";

export interface WeatherData {
  location: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  condition: WeatherCondition;
  conditionLabel: string;
  windSpeed: number;
  visibility: number;
  updatedAt: string;
}

export interface WeatherForecastDay {
  day: string;
  high: number;
  low: number;
  condition: WeatherCondition;
}

export interface WeatherState {
  data: WeatherData | null;
  forecast: WeatherForecastDay[];
  loading: boolean;
  error: string | null;
}