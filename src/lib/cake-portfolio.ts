export type CakeCategory =
  | "All"
  | "Premium Cakes"
  | "Chocolate Cakes"
  | "Celebration Cakes"
  | "Birthday Cakes"
  | "Anniversary Cakes"
  | "Custom Cakes"
  | "Kids Cakes"
  | "Designer Cakes";

export interface CakePortfolioItem {
  id: string;
  name: string;
  category: CakeCategory;
  categories: CakeCategory[];
  image: string;
  weight?: string;
  tag: string;
  description: string;
  inscriptions: string;
  featuredHome?: boolean;
}

/**
 * Karshni Baker's — Scalable Cake Portfolio Data.
 * Prices omitted per brand direction.
 */
export const CAKE_PORTFOLIO: CakePortfolioItem[] = [
  {
    id: "cake-karshni-royale",
    name: "Artisan Chocolate Drip & Macaron Royale",
    category: "Chocolate Cakes",
    categories: ["Chocolate Cakes", "Premium Cakes", "Celebration Cakes", "Designer Cakes"],
    image: "/images/bakery-hero-cinematic.jpg",
    weight: "1.5 Kg+",
    tag: "Karshni Signature",
    description:
      "A rich dark chocolate ganache drip creation topped with artisanal French macarons, hand-crafted Belgian chocolate shards, and fresh berries.",
    inscriptions: "Personalized golden celebration plaque & message ribbon available",
    featuredHome: true,
  },
  {
    id: "cake-tulip-bow",
    name: "Luxury Tulip Ribbon Bow Cake",
    category: "Designer Cakes",
    categories: ["Designer Cakes", "Premium Cakes", "Celebration Cakes"],
    image: "/images/cakes/cake-luxury-tulip-bow.jpg",
    weight: "1 Kg+",
    tag: "Designer Signature",
    description:
      "Pristine satin white finish elegantly draped in a grand handcrafted fondant bow, accented with delicate hand-piped miniature pink tulip buds on a golden base.",
    inscriptions: "Custom name or message ribbon available on request",
    featuredHome: true,
  },
  {
    id: "cake-heart-calendar",
    name: "Romantic Heart & Milestone Calendar Cake",
    category: "Anniversary Cakes",
    categories: ["Anniversary Cakes", "Celebration Cakes", "Premium Cakes"],
    image: "/images/cakes/cake-romantic-heart-calendar.jpg",
    weight: "1 Kg+",
    tag: "Anniversary Special",
    description:
      "Heart-shaped textured vanilla cake with golden lettering, fresh crimson roses with ribbon, edible milestone calendar date plaque, and heartfelt message card.",
    inscriptions: "Includes custom date plaque & anniversary/birthday message card",
    featuredHome: true,
  },
  {
    id: "cake-supercar-7",
    name: "Blue McLaren Supercar Track Cake",
    category: "Kids Cakes",
    categories: ["Kids Cakes", "Custom Cakes"],
    image: "/images/cakes/cake-racing-supercar-7.jpg",
    weight: "1.5 Kg+",
    tag: "Action Theme",
    description:
      "Tiered sky-blue fondant masterpiece with racing chequered flags, hand-crafted road track, customizable golden race number, and premium toy supercar topper.",
    inscriptions: "Custom birthday age number & driver name plaque",
    featuredHome: true,
  },
  {
    id: "cake-masha-bear",
    name: "Masha & The Bear Forest Cake",
    category: "Kids Cakes",
    categories: ["Kids Cakes", "Custom Cakes"],
    image: "/images/cakes/cake-masha-bear-vamika.jpg",
    weight: "2 Kg+",
    tag: "Custom Character Theme",
    description:
      "Double-tier cartoon themed cake featuring handcrafted Masha and the Bear figures, woodland tree stump detailing, delicate butterflies, and floral accents.",
    inscriptions: "Hand-piped child's name plaque & custom birthday number",
    featuredHome: true,
  },
  {
    id: "cake-kanish-toybox",
    name: "Football & Playful Toybox Theme Cake",
    category: "Kids Cakes",
    categories: ["Kids Cakes", "Custom Cakes"],
    image: "/images/cakes/cake-kanish-toybox-football.jpg",
    weight: "2 Kg+",
    tag: "Sports & Toys",
    description:
      "Vibrant green sports grass themed cake topped with edible textured football, miniature playground ball pit, and cheerful celebratory banners.",
    inscriptions: "Custom sports club emblem & celebrant's name banner",
    featuredHome: false,
  },
];
