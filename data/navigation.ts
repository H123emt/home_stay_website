export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export const primaryNav: NavLink[] = [
  { label: "Home" , href: "/"},
  { label: "Stays", href: "/rooms" },
  { label: "Experiences", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Restaurant", href: "/restaurant" },
];

export const footerNav: NavSection[] = [
  {
    title: "Stays",
    links: [
      { label: "Misty Pine Suite", href: "/rooms/misty-pine-suite" },
      { label: "Forest Canopy Treehouse", href: "/rooms/forest-canopy-treehouse" },
      { label: "Slate Valley Cottage", href: "/rooms/slate-valley-cottage" },
      { label: "Ridge Top Villa", href: "/rooms/ridge-top-villa" },
    ],
  },
  {
    title: "Experiences",
    links: [
      { label: "Living Root Bridge Trek", href: "/experiences/living-root-bridge-trek" },
      { label: "Cloud Forest Meditation", href: "/experiences/cloud-forest-meditation" },
      { label: "Khasi Culinary Journey", href: "/experiences/khasi-culinary-journey" },
      { label: "Waterfall Rappelling", href: "/experiences/waterfall-rappelling" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Book a Stay", href: "/booking" },
      { label: "Contact Us", href: "/contact" },
      { label: "Getting Here", href: "/contact#getting-here" },
    ],
  },
];