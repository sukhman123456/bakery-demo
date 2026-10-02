export type CakeCategory =
  | "All"
  | "Birthday Cakes"
  | "Anniversary Cakes"
  | "Custom Cakes"
  | "Kids Cakes"
  | "Designer Cakes"
  | "Premium Cakes"
  | "Theme Cakes"
  | "Dessert Cakes";

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
 * Scalable Cake Portfolio Data.
 * Add new uploaded cake images to this array and they will automatically
 * appear in the homepage showcase, category filters, and collection pages.
 * Note: Prices are omitted per brand direction.
 */
export const CAKE_PORTFOLIO: CakePortfolioItem[] = [
  {
    id: "cake-tulip-bow",
    name: "Luxury Tulip Ribbon Bow Cake",
    category: "Designer Cakes",
    categories: ["Designer Cakes", "Premium Cakes", "Birthday Cakes"],
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
    categories: ["Anniversary Cakes", "Birthday Cakes", "Premium Cakes"],
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
    categories: ["Kids Cakes", "Theme Cakes", "Birthday Cakes"],
    image: "/images/cakes/cake-racing-supercar-7.jpg",
    weight: "1.5 Kg+",
    tag: "Milestone Birthday",
    description:
      "Vibrant sky-blue cake styled with electric blue McLaren supercar topper, bold number 7 age marker, checkered race flags, edible tires, and cascading balloon pearl garland.",
    inscriptions: "Custom age number topper & racer name plate",
    featuredHome: true,
  },
  {
    id: "cake-masha-bear",
    name: "Masha & The Bear Cartoon Theme Cake",
    category: "Kids Cakes",
    categories: ["Kids Cakes", "Theme Cakes", "Custom Cakes"],
    image: "/images/cakes/cake-masha-bear-vamika.jpg",
    weight: "1.5 Kg+",
    tag: "Kids Celebration",
    description:
      "Playful celebration cake featuring custom wooden banner inscription 'Vamika', Masha and friendly bear character cutouts, woodland apple tree, and garden fence.",
    inscriptions: "Personalized wooden banner name inscription",
    featuredHome: true,
  },
  {
    id: "cake-kanish-toybox",
    name: "Personalized Toybox & Football Cake",
    category: "Custom Cakes",
    categories: ["Custom Cakes", "Kids Cakes", "Birthday Cakes"],
    image: "/images/cakes/cake-kanish-toybox-football.jpg",
    weight: "1.5 Kg+",
    tag: "3D Figurine",
    description:
      "Celebration cake personalized with bold 3D blue fondant lettering 'KANISH', hand-sculpted boy figurine holding a soccer ball, toy airplane, car, and cute teddy bear.",
    inscriptions: "Custom 3D fondant child's name & 'Happy Birthday' banner ribbon",
    featuredHome: true,
  },
];

export const CAKE_CATEGORIES_LIST: {
  id: CakeCategory;
  name: string;
  description: string;
  image: string;
  count: string;
}[] = [
  {
    id: "Birthday Cakes",
    name: "Birthday Cakes",
    description: "Milestone celebrations, custom number toppers, and decadent flavors crafted for every age.",
    image: "/images/cakes/cake-racing-supercar-7.jpg",
    count: "Bespoke Orders",
  },
  {
    id: "Anniversary Cakes",
    name: "Anniversary Cakes",
    description: "Romantic heart silhouettes, milestone calendar dates, and fresh rose floral adornments.",
    image: "/images/cakes/cake-romantic-heart-calendar.jpg",
    count: "Romantic Edit",
  },
  {
    id: "Custom Cakes",
    name: "Custom Cakes",
    description: "Bespoke 3D sculpted figurines, personalized nameplates, and custom theme interpretations.",
    image: "/images/cakes/cake-kanish-toybox-football.jpg",
    count: "100% Customized",
  },
  {
    id: "Kids Cakes",
    name: "Kids Cakes",
    description: "Cartoon worlds, sports cars, enchanted forests, and playful character celebrations.",
    image: "/images/cakes/cake-masha-bear-vamika.jpg",
    count: "Kids Favorites",
  },
  {
    id: "Designer Cakes",
    name: "Designer Cakes",
    description: "Haute patisserie aesthetics, delicate fondant drapery, ribbon bows, and minimalist finesse.",
    image: "/images/cakes/cake-luxury-tulip-bow.jpg",
    count: "Haute Design",
  },
  {
    id: "Premium Cakes",
    name: "Premium Cakes",
    description: "Multi-tiered centerpieces, gold leaf accents, and luxurious gourmet chocolate ganache.",
    image: "/images/cakes/cake-luxury-tulip-bow.jpg",
    count: "Luxury Reserve",
  },
  {
    id: "Theme Cakes",
    name: "Theme Cakes",
    description: "Tailored themes ranging from automotive tracks to magical fairy garden concepts.",
    image: "/images/cakes/cake-racing-supercar-7.jpg",
    count: "Theme Specials",
  },
  {
    id: "Dessert Cakes",
    name: "Dessert Cakes",
    description: "Rich layered gateaux, classic European sponges, and daily patisserie indulgences.",
    image: "/images/bakery-display-angle.jpg",
    count: "Daily Patisserie",
  },
];
