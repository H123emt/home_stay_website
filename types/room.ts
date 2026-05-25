export type RoomCategory = "suite" | "cottage" | "villa" | "treehouse";

export type AmenityIcon =
  | "wifi"
  | "coffee"
  | "bath"
  | "mountain"
  | "fire"
  | "leaf"
  | "wind"
  | "droplets";

export interface Amenity {
  id: string;
  label: string;
  icon: AmenityIcon;
}

export interface RoomImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface RoomPricingTier {
  label: string;
  pricePerNight: number;
  minNights: number;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: RoomCategory;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  sizeSqFt: number;
  images: RoomImage[];
  amenities: Amenity[];
  pricing: RoomPricingTier[];
  featured: boolean;
  available: boolean;
  elevation: string;
  view: string;
}