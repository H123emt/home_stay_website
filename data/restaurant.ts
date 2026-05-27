import type {
  MenuItem,
  MenuCategoryMeta,
  ChefSpecial,
  DiningAmbience,
  RestaurantInfo,
} from "@/types/restaurant";

export const restaurantInfo: RestaurantInfo = {
  name: "The Cherapunji Table",
  tagline: "Where the clouds descend to dine",
  description:
    "Nestled amidst the mists of the world's wettest place, our kitchen celebrates the rich culinary heritage of Meghalaya — slow-cooked meats, foraged herbs, and mountain-fresh produce. Every plate tells a story of the land.",
  openingHours: {
    breakfast: "7:00 AM – 10:30 AM",
    lunch: "12:30 PM – 3:00 PM",
    dinner: "7:00 PM – 10:00 PM",
  },
  features: [
    "Farm-to-Table Ingredients",
    "Traditional Khasi Recipes",
    "Wood-fired Cooking",
    "In-room Dining Available",
    "Complimentary Breakfast",
    "Curated Local Wines",
  ],
};

export const menuCategories: MenuCategoryMeta[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    icon: "☀️",
    description: "Start your morning with mountain freshness",
  },
  {
    id: "lunch",
    label: "Lunch",
    icon: "🌿",
    description: "Hearty midday meals from local harvests",
  },
  {
    id: "dinner",
    label: "Dinner",
    icon: "🕯️",
    description: "An intimate evening feast by candlelight",
  },
  {
    id: "snacks",
    label: "Snacks",
    icon: "🫙",
    description: "Light bites for misty afternoon cravings",
  },
  {
    id: "beverages",
    label: "Beverages",
    icon: "🍵",
    description: "Teas, tonics, and warm local brews",
  },
  {
    id: "desserts",
    label: "Desserts",
    icon: "🍮",
    description: "Sweet endings from the hills",
  },
];

export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: "b1",
    name: "Khasi Jadoh & Egg",
    description:
      "Traditional red rice cooked with pork and aromatic spices, served with a farm-fresh fried egg",
    price: 320,
    category: "breakfast",
    tags: ["Traditional", "Hearty"],
    image: "/images/restaurant/restaurant2.jpg",
    isSignature: true,
    isVegetarian: false,
    spiceLevel: 1,
  },
  {
    id: "b2",
    name: "Forest Mushroom Omelette",
    description:
      "Wild mushrooms foraged from nearby forests folded into a fluffy three-egg omelette with fresh herbs",
    price: 260,
    category: "breakfast",
    tags: ["Vegetarian", "Local Produce"],
    image: "/images/restaurant/restaurant2.jpg",
    isVegetarian: true,
    spiceLevel: 0,
  },
  {
    id: "b3",
    name: "Putharo with Honey Butter",
    description:
      "Steamed rice cakes — a Khasi breakfast staple — served warm with local wildflower honey and butter",
    price: 180,
    category: "breakfast",
    tags: ["Traditional", "Vegetarian"],
    image: "/images/restaurant/restaurant2.jpg",
    isVegetarian: true,
    spiceLevel: 0,
  },
  {
    id: "b4",
    name: "Mountain Granola Bowl",
    description:
      "House-made granola with fresh seasonal fruits, local yogurt, and a drizzle of pine honey",
    price: 240,
    category: "breakfast",
    tags: ["Healthy", "Vegetarian"],
    image: "/images/restaurant/restaurant2.jpg",
    isVegetarian: true,
    spiceLevel: 0,
  },

  // Lunch
  {
    id: "l1",
    name: "Dohkhlieh Salad",
    description:
      "Chilled pork mince tossed with onions, green chillies, and fresh ginger — a Khasi classic, served with rice",
    price: 380,
    category: "lunch",
    tags: ["Traditional", "Signature"],
    image: "/images/restaurant/restaurant2.jpg",
    isSignature: true,
    isVegetarian: false,
    spiceLevel: 2,
  },
  {
    id: "l2",
    name: "Valley Vegetable Curry",
    description:
      "Seasonal vegetables from nearby farms simmered in a fragrant coconut and ginger broth with steamed rice",
    price: 290,
    category: "lunch",
    tags: ["Vegetarian", "Comfort"],
    image: "/images/restaurant/restaurant2.jpg",
    isVegetarian: true,
    spiceLevel: 1,
  },
  {
    id: "l3",
    name: "Smoked Trout Platter",
    description:
      "Locally caught trout, cold-smoked in-house and served with pickled vegetables, mustard cream, and artisan bread",
    price: 520,
    category: "lunch",
    tags: ["Local Catch", "Chef's Pick"],
    image: "/images/restaurant/restaurant2.jpg",
    isSignature: true,
    isVegetarian: false,
    spiceLevel: 0,
  },

  // Dinner
  {
    id: "d1",
    name: "Slow-Roasted Pork Ribs",
    description:
      "Pork ribs marinated overnight in Khasi spices and slow-roasted over wood fire for six hours",
    price: 680,
    category: "dinner",
    tags: ["Signature", "Wood-fired"],
    image: "/images/restaurant/restaurant1.jpg",
    isSignature: true,
    isVegetarian: false,
    spiceLevel: 2,
  },
  {
    id: "d2",
    name: "Misty Hills Chicken",
    description:
      "Free-range chicken braised in a sauce of local herbs, wild mushrooms, and rice wine reduction",
    price: 580,
    category: "dinner",
    tags: ["Chef's Pick", "Local Herbs"],
    image: "/images/restaurant/restaurant1.jpg",
    isVegetarian: false,
    spiceLevel: 1,
  },
  {
    id: "d3",
    name: "Stone-baked Mushroom Tart",
    description:
      "A rustic tart of caramelised wild mushrooms on house-made pastry with aged local cheese and truffle oil",
    price: 420,
    category: "dinner",
    tags: ["Vegetarian", "Gourmet"],
    image: "/images/restaurant/restaurant2.jpg",
    isVegetarian: true,
    spiceLevel: 0,
  },

  // Snacks
  {
    id: "s1",
    name: "Tungrymbai Fritters",
    description:
      "Crispy fermented soybean fritters with a tangy tamarind chutney — the perfect afternoon bite",
    price: 160,
    category: "snacks",
    tags: ["Traditional", "Vegan"],
    image: "/images/restaurant/restaurant2.jpg",
    isVegetarian: true,
    spiceLevel: 1,
  },
  {
    id: "s2",
    name: "Bamboo Shoot Chaat",
    description:
      "Tender bamboo shoots tossed with mustard seeds, chillies, and fresh lime — a local street-food tribute",
    price: 140,
    category: "snacks",
    tags: ["Vegan", "Local Produce"],
    image: "/images/restaurant/restaurant2.jpg",
    isVegetarian: true,
    spiceLevel: 2,
  },

  // Beverages
  {
    id: "bv1",
    name: "Mist & Lemon Ginger Tea",
    description:
      "House-blended green tea with fresh ginger, lemon, and a hint of local honey — served hot or iced",
    price: 120,
    category: "beverages",
    tags: ["Herbal", "Signature Blend"],
    image: "/images/restaurant/restaurant1.jpg",
    isVegetarian: true,
    spiceLevel: 0,
  },
  {
    id: "bv2",
    name: "Khasi Rice Beer (Kyiad)",
    description:
      "Traditional fermented rice beer brewed locally — a cultural experience in a glass",
    price: 180,
    category: "beverages",
    tags: ["Traditional", "Local Brew"],
    image: "/images/restaurant/restaurant2.jpg",
    isVegetarian: true,
    spiceLevel: 0,
  },
  {
    id: "bv3",
    name: "Forest Berry Lassi",
    description:
      "Thick yogurt blended with seasonal wild berries, a touch of cardamom and rose water",
    price: 150,
    category: "beverages",
    tags: ["Vegetarian", "Refreshing"],
    image: "/images/restaurant/restaurant2.jpg",
    isVegetarian: true,
    spiceLevel: 0,
  },

  // Desserts
  {
    id: "ds1",
    name: "Black Sesame Panna Cotta",
    description:
      "Silky panna cotta infused with black sesame and topped with a mango-chilli coulis",
    price: 220,
    category: "desserts",
    tags: ["Signature", "Gourmet"],
    image: "/images/restaurant/restaurant1.jpg",
    isSignature: true,
    isVegetarian: true,
    spiceLevel: 0,
  },
  {
    id: "ds2",
    name: "Warm Rice Pudding",
    description:
      "Creamy red rice pudding simmered with coconut milk, jaggery, and green cardamom",
    price: 180,
    category: "desserts",
    tags: ["Traditional", "Comfort"],
    image: "/images/restaurant/restaurant2.jpg",
    isVegetarian: true,
    spiceLevel: 0,
  },
];

export const chefSpecials: ChefSpecial[] = [
  {
    id: "cs1",
    name: "Jadoh Feast Platter",
    description:
      "Our most celebrated dish — a generous sharing platter of slow-cooked pork Jadoh with seasonal sides, traditional chutneys, and bamboo pickle",
    image: "/images/restaurant/restaurant1.jpg",
    highlight: "Most Ordered",
  },
  {
    id: "cs2",
    name: "Wood-fire Trout",
    description:
      "Whole river trout seasoned with mountain herbs, wrapped in banana leaf, and cooked directly on embers — a dish of extraordinary simplicity",
    image: "/images/restaurant/restaurant2.jpg",
    highlight: "Chef's Favourite",
  },
  {
    id: "cs3",
    name: "Monsoon Tasting Menu",
    description:
      "A curated five-course journey through Meghalayan flavours — changes weekly with the season. Perfect for two guests seeking the full experience.",
    image: "/images/restaurant/restaurant2.jpg",
    highlight: "Seasonal",
  },
];

export const diningAmbienceImages: DiningAmbience[] = [
  {
    id: "da1",
    title: "The Main Hall",
    description: "Stone walls, warm lanterns, and panoramic valley views",
    image: "/images/restaurant/restaurant1.jpg",
  },
  {
    id: "da2",
    title: "The Terrace",
    description: "Open-air dining above the clouds",
    image: "/images/restaurant/restaurant1.jpg",
  },
  {
    id: "da3",
    title: "The Kitchen Garden",
    description: "Farm-fresh herbs steps from your plate",
    image: "/images/restaurant/restaurant1.jpg",
  },
  {
    id: "da4",
    title: "Evening Candlelight",
    description: "Intimate dinners under a starlit Cherapunji sky",
    image: "/images/restaurant/restaurant2.jpg",
  },
];