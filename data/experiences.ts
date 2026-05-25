import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "e001",
    slug: "living-root-bridge-trek",
    title: "Living Root Bridge Trek",
    subtitle: "Walk on centuries of living architecture",
    description:
      "Descend into the ancient forest valleys to witness Meghalaya's most extraordinary feat of bioengineering — bridges grown from the aerial roots of rubber fig trees over 500 years. Our expert Khasi guides lead you through trails unchanged for generations.",
    category: "nature",
    duration: "6–8 hours",
    groupSize: "2–8 guests",
    difficulty: "moderate",
    price: 4500,
    pricingNote: "per person, includes guide, lunch & transport",
    images: [
      { src: "/images/experiences/home_stay2.png", alt: "Double-decker living root bridge", width: 1920, height: 1080 },
      { src: "/images/experiences/home_stay3.png", alt: "Forest trail leading to bridge", width: 1920, height: 1080 },
    ],
    highlights: [
      "Double-decker root bridge at Nongriat",
      "Hidden natural pools for swimming",
      "Traditional Khasi village visit",
      "Rare orchid and fern identification",
    ],
    includes: ["Expert guide", "Forest-to-table packed lunch", "Return transport", "Trekking poles"],
    bestSeason: "October – April",
    featured: true,
  },
  {
    id: "e002",
    slug: "cloud-forest-meditation",
    title: "Cloud Forest Meditation",
    subtitle: "Dissolve into the mist at 1,900m",
    description:
      "Begin before dawn and ascend to our private cloud forest clearing as the valley fills with mist. A certified meditation and breathwork facilitator guides a 90-minute immersive session as clouds roll through the forest around you. Includes post-session herbal tea ceremony.",
    category: "wellness",
    duration: "3 hours",
    groupSize: "1–6 guests",
    difficulty: "easy",
    price: 3200,
    pricingNote: "per person, includes facilitator & tea ceremony",
    images: [
      { src: "/images/experiences/home_stay2.png", alt: "Meditation clearing in cloud forest", width: 1920, height: 1080 },
      { src: "/images/experiences/home_stay3.png", alt: "Morning mist through pine trees", width: 1920, height: 1080 },
    ],
    highlights: [
      "Pre-dawn ascent through forest",
      "Cloud immersion meditation",
      "Breathwork with certified facilitator",
      "Traditional Khasi herbal tea ceremony",
    ],
    includes: ["Certified facilitator", "Meditation mats & props", "Herbal tea ceremony", "Post-session journal"],
    bestSeason: "Year-round (best Oct–Feb)",
    featured: true,
  },
  {
    id: "e003",
    slug: "khasi-culinary-journey",
    title: "Khasi Culinary Journey",
    subtitle: "Learn the fire and forest flavors of the hills",
    description:
      "Join our resident chef and a local Khasi elder in a full-day immersive cooking experience. Begin at the organic garden harvesting ingredients, then learn traditional Khasi cooking techniques — from smoked pork preparation to jadoh rice, all cooked over open wood fire.",
    category: "culinary",
    duration: "Full day (8 hours)",
    groupSize: "2–6 guests",
    difficulty: "easy",
    price: 6800,
    pricingNote: "per person, all inclusive",
    images: [
      { src: "/images/experiences/home_stay2.png", alt: "Traditional Khasi cooking over fire", width: 1920, height: 1080 },
      { src: "/images/experiences/home_stay3.png", alt: "Garden harvest with local elder", width: 1920, height: 1080 },
    ],
    highlights: [
      "Organic garden harvest at dawn",
      "Traditional smoked pork preparation",
      "Jadoh & tungrymbai cooking lesson",
      "Full feast dining experience",
    ],
    includes: ["Resident chef", "Khasi elder guide", "All ingredients", "Full feast lunch", "Recipe booklet"],
    bestSeason: "Year-round",
    featured: true,
  },
  {
    id: "e004",
    slug: "waterfall-rappelling",
    title: "Waterfall Rappelling",
    subtitle: "Descend into the heart of the falls",
    description:
      "Meghalaya is home to some of India's most dramatic waterfalls. Our certified adventure guides lead you on a single and double-drop rappel down a pristine 60m waterfall hidden deep in the forest. Suitable for beginners with full safety certification.",
    category: "adventure",
    duration: "5 hours",
    groupSize: "2–8 guests",
    difficulty: "moderate",
    price: 5500,
    pricingNote: "per person, full safety equipment included",
    images: [
      { src: "/images/experiences/home_stay2.png", alt: "Waterfall rappelling descent", width: 1920, height: 1080 },
      { src: "/images/experiences/home_stay3.png", alt: "Natural pool at base of falls", width: 1920, height: 1080 },
    ],
    highlights: [
      "60m two-drop waterfall descent",
      "Natural plunge pool swim",
      "Certified safety equipment",
      "Beginner-friendly with full training",
    ],
    includes: ["Certified guide", "Full safety gear", "Transport to site", "Energy lunch pack"],
    bestSeason: "November – March",
    featured: false,
  },
  {
    id: "e005",
    slug: "tribal-weaving-workshop",
    title: "Tribal Weaving Workshop",
    subtitle: "Threads of a matrilineal civilisation",
    description:
      "Spend a morning with master weavers from the Khasi and Jaintia communities learning the intricate art of traditional loom weaving. Create your own small textile using centuries-old patterns and natural dyes sourced from the forest. Take your creation home.",
    category: "cultural",
    duration: "4 hours",
    groupSize: "1–10 guests",
    difficulty: "easy",
    price: 2800,
    pricingNote: "per person, take-home textile included",
    images: [
      { src: "/images/experiences/home_stay2.png", alt: "Traditional loom weaving workshop", width: 1920, height: 1080 },
      { src: "/images/experiences/home_stay3.png", alt: "Natural dye preparation", width: 1920, height: 1080 },
    ],
    highlights: [
      "Traditional loom technique",
      "Natural forest dye preparation",
      "Master weaver instruction",
      "Take-home woven textile",
    ],
    includes: ["Master weaver guide", "All materials", "Natural dyes", "Take-home textile", "Cultural context talk"],
    bestSeason: "Year-round",
    featured: false,
  },
];

export const getFeaturedExperiences = (): Experience[] =>
  experiences.filter((e) => e.featured);
export const getExperienceBySlug = (slug: string): Experience | undefined =>
  experiences.find((e) => e.slug === slug);