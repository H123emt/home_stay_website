export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tags: string[];
  image: string;
  isSignature?: boolean;
  isVegetarian?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3;
}

export type MenuCategory =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snacks"
  | "beverages"
  | "desserts";

export interface MenuCategoryMeta {
  id: MenuCategory;
  label: string;
  icon: string;
  description: string;
}

export interface ChefSpecial {
  id: string;
  name: string;
  description: string;
  image: string;
  highlight: string;
}

export interface DiningAmbience {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  openingHours: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  features: string[];
}