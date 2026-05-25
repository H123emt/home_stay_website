export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "property" | "rooms" | "experiences" | "nature" | "food";
  caption?: string;
  span?: "wide" | "tall" | "normal";
}

export const galleryImages: GalleryImage[] = [
  { id: "g001", src: "/images/gallery/home_stay.jpg", alt: "Aerial view of the property in morning mist", width: 1920, height: 1080, category: "property", caption: "Above the clouds", span: "wide" },
  { id: "g002", src: "/images/gallery/home_stay.jpg", alt: "Treehouse at first light", width: 1080, height: 1440, category: "rooms", caption: "First light on the canopy", span: "tall" },
  { id: "g003", src: "/images/gallery/home_stay.jpg", alt: "Double-decker living root bridge", width: 1920, height: 1080, category: "experiences", caption: "500 years of living architecture", span: "normal" },
  { id: "g004", src: "/images/gallery/home_stay.jpg", alt: "Cloud sea filling the valley at dawn", width: 1920, height: 1080, category: "nature", caption: "The valley fills at 5am", span: "wide" },
  { id: "g005", src: "/images/gallery/home_stay.jpg", alt: "Misty Pine Suite interior", width: 1080, height: 1350, category: "rooms", caption: "Timber and mist", span: "normal" },
  { id: "g006", src: "/images/gallery/home_stay.jpg", alt: "Traditional Khasi cooking on open fire", width: 1920, height: 1080, category: "food", caption: "Fire and forest flavours", span: "normal" },
  { id: "g007", src: "/images/gallery/home_stay.jpg", alt: "Hidden waterfall in deep forest", width: 1080, height: 1440, category: "nature", caption: "Where the forest opens", span: "tall" },
  { id: "g008", src: "/images/gallery/home_stay.jpg", alt: "Slate cottage private garden at golden hour", width: 1920, height: 1080, category: "rooms", caption: "The garden at dusk", span: "normal" },
  { id: "g009", src: "/images/gallery/home_stay.jpg", alt: "Cloud forest meditation at dawn", width: 1920, height: 1080, category: "experiences", caption: "Dissolve into silence", span: "normal" },
  { id: "g010", src: "/images/gallery/home_stay.jpg", alt: "Ridge Top Villa infinity pool at sunset", width: 1920, height: 1080, category: "rooms", caption: "The edge of the world", span: "wide" },
  { id: "g011", src: "/images/gallery/home_stay.jpg", alt: "Traditional Khasi weaving workshop", width: 1080, height: 1080, category: "experiences", caption: "Threads of a civilisation", span: "normal" },
  { id: "g012", src: "/images/gallery/home_stay.jpg", alt: "Ancient forest trail in monsoon green", width: 1080, height: 1440, category: "nature", caption: "Every path leads deeper", span: "normal" },
];