export type ExperienceCategory =
  | "adventure"
  | "wellness"
  | "cultural"
  | "nature"
  | "culinary";

export type DifficultyLevel = "easy" | "moderate" | "challenging";

export interface ExperienceImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: ExperienceCategory;
  duration: string;
  groupSize: string;
  difficulty: DifficultyLevel;
  price: number;
  pricingNote: string;
  images: ExperienceImage[];
  highlights: string[];
  includes: string[];
  bestSeason: string;
  featured: boolean;
}