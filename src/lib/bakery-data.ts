export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Cakes" | "Pastries & Bakes" | "Café Specials" | "Ambience";
  src: string;
  aspect: "landscape" | "portrait" | "wide";
  description: string;
}

export const BRAND = {
  name: "Karshni Baker's",
  fullName: "Karshni Baker's — Artisanal Bakery & Custom Cakes",
  shortName: "Karshni",
  category: "Artisanal Bakery & Custom Cakes",
  tagline: "A Little Sweetness in Every Moment",
  heroEyebrow: "BAKED WITH LOVE • DINANAGAR",
  heroTitle: "A Little Sweetness in Every Moment",
  heroSubtitle: "Cakes • Pastries • Desserts • More",
  heroDescription:
    "Beautiful cakes, fresh bakes & unforgettable moments — made with love.",
  aboutHeading: "Made With Passion. Crafted With Detail.",
  aboutDescription:
    "Karshni Baker's creates handcrafted celebration cakes and artisanal desserts for birthdays, anniversaries, weddings, and special milestones. Every creation is conceived as a piece of edible art—combining refined aesthetics, time-honored artisanal baking techniques, and pure ingredients to make life's milestones unforgettable.",
  address: "Shree Ram Market, Near Punjab & Sind Bank, Dinanagar JT Road, Dinanagar, Punjab 143531",
  landmark: "Shree Ram Market, Near Punjab & Sind Bank",
  city: "Dinanagar, Punjab",
  pincode: "143531",
  phone: "+91 98885 26072",
  phoneDisplay: "098885 26072",
  phoneRaw: "+919888526072",
  whatsapp: "919888526072",
  founder: "Manoj Kumar",
  founderTitle: "Founder & Master Craftsman",
  founderPhoto: "/images/owner-manoj-kumar.jpg",
  founderBio:
    "Founder and master craftsman behind Karshni Bakers & Cafe, Dinanagar. Dedicated to 100% pure dairy butter, artisanal European patisserie methods, and handcrafted milestone celebration cakes.",
  instagram: "@karshni_bakers",
  instagramUrl: "https://www.instagram.com/karshni_bakers/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Karshni+Bakers+Shree+Ram+Market+Dinanagar+Punjab",
  hours: "9:00 AM – 9:30 PM",
  days: "Open 7 Days a Week",
  servicesList: [
    {
      title: "Custom Orders",
      tagline: "Celebration Cakes",
      description:
        "Bespoke designer cakes for birthdays, anniversaries, weddings, and theme parties.",
    },
    {
      title: "Fresh Counter Pickup",
      tagline: "Shree Ram Market, Dinanagar",
      description:
        "Oven-fresh pastries, muffins, biscuits, breads, and treats ready daily on our bakery counter.",
    },
    {
      title: "Careful Delivery",
      tagline: "Safe & On-Time",
      description:
        "Handled with utmost care for special milestone celebration cakes across Dinanagar & nearby areas.",
    },
  ],
};

export const REAL_PHOTOS = {
  ownerManoj: "/images/owner-manoj-kumar.jpg",
  logo: "/images/karshni-logo.jpg",
  hero: "/images/karshni-hero-master.jpg",
  storeInterior: "/images/cafe-seating.jpg",
  bakeryDisplay: "/images/bakery-display-angle.jpg",
  bakeryCounter: "/images/bakery-counter-logo.jpg",
  bakeryWide: "/images/bakery-showcase-wide.jpg",
  // Real Cake Assets:
  cakeTulipBow: "/images/cakes/cake-luxury-tulip-bow.jpg",
  cakeRomanticHeart: "/images/cakes/cake-romantic-heart-calendar.jpg",
  cakeMashaBear: "/images/cakes/cake-masha-bear-vamika.jpg",
  cakeSupercar: "/images/cakes/cake-racing-supercar-7.jpg",
  cakeKanishToybox: "/images/cakes/cake-kanish-toybox-football.jpg",
  // Bakery Product Assets:
  muffins: "/images/bakery/muffins.jpg",
  homemadeBiscuits: "/images/bakery/homemade-biscuits.jpg",
  brownies: "/images/bakery/brownies.jpg",
  donuts: "/images/bakery/donuts.jpg",
  creamRolls: "/images/bakery/cream-rolls.jpg",
  garlicBread: "/images/bakery/garlic-bread.jpg",
  tarts: "/images/bakery/tarts.jpg",
  celebrationHamper: "/images/bakery/celebration-hamper.jpg",
  cakePops: "/images/bakery/cake-pops.jpg",
  freshBread: "/images/bakery/fresh-bread.jpg",
};

/**
 * 4. BAKERY SERVICES
 * - Custom Birthday Cakes
 * - Wedding Cakes
 * - Designer Cakes
 * - Fresh Pastries
 * - Cupcakes
 * - Cookies & Biscuits
 * - Fresh Bread
 * - Dessert Boxes
 * - Party & Event Orders
 */
export interface BakeryServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  badge: string;
  categoryTarget: string;
}

export const BAKERY_SERVICES: BakeryServiceItem[] = [
  {
    id: "serv-birthday-cakes",
    title: "Custom Birthday Cakes",
    shortDescription:
      "Handcrafted themed cakes, milestone number designs, and character creations baked fresh to make birthdays unforgettable.",
    image: REAL_PHOTOS.cakeRomanticHeart,
    badge: "Personalized",
    categoryTarget: "Cakes",
  },
  {
    id: "serv-wedding-cakes",
    title: "Wedding Cakes",
    shortDescription:
      "Stately multi-tiered masterpieces draped in satin fondant, edible pearl lace, and handcrafted floral sugarcraft.",
    image: REAL_PHOTOS.cakeTulipBow,
    badge: "Grand Masterpiece",
    categoryTarget: "Cakes",
  },
  {
    id: "serv-designer-cakes",
    title: "Designer Cakes",
    shortDescription:
      "Bespoke artistic centerpieces featuring rich chocolate drips, French macarons, and gold-leaf accents.",
    image: REAL_PHOTOS.hero,
    badge: "Artisan Signature",
    categoryTarget: "Cakes",
  },
  {
    id: "serv-fresh-pastries",
    title: "Fresh Pastries",
    shortDescription:
      "Flaky European fruit gateaux slices, Belgian truffle pastries, and crispy custard-filled tarts baked daily.",
    image: REAL_PHOTOS.tarts,
    badge: "Daily Fresh Cut",
    categoryTarget: "Pastries",
  },
  {
    id: "serv-cupcakes",
    title: "Cupcakes",
    shortDescription:
      "Moist vanilla, red velvet, and Belgian chocolate cupcakes crowned with whipped swirl buttercream frosting.",
    image: REAL_PHOTOS.muffins,
    badge: "Sweet Delights",
    categoryTarget: "Cupcakes",
  },
  {
    id: "serv-cookies-biscuits",
    title: "Cookies & Biscuits",
    shortDescription:
      "Crunchy traditional bakery biscuits, rich butter cookies, and chocolate chip treats made with heritage recipes.",
    image: REAL_PHOTOS.homemadeBiscuits,
    badge: "Heritage Bakes",
    categoryTarget: "Cookies",
  },
  {
    id: "serv-fresh-bread",
    title: "Fresh Bread",
    shortDescription:
      "Artisan sourdough, golden sandwich loaves, herb-buttered garlic breads, and soft dinner rolls fresh from the oven.",
    image: REAL_PHOTOS.freshBread,
    badge: "Oven Hot",
    categoryTarget: "Breads",
  },
  {
    id: "serv-dessert-boxes",
    title: "Dessert Boxes",
    shortDescription:
      "Curated luxury gift hampers and assorted pastry boxes ideal for festive gifting and family celebrations.",
    image: REAL_PHOTOS.celebrationHamper,
    badge: "Gift Hampers",
    categoryTarget: "Desserts",
  },
  {
    id: "serv-party-event-orders",
    title: "Party & Event Orders",
    shortDescription:
      "Complete dessert catering for gatherings, including hand-dipped cake pops, mini pastries, and custom dessert tables.",
    image: REAL_PHOTOS.cakePops,
    badge: "Event Catering",
    categoryTarget: "Cakes",
  },
];

/**
 * 6. PRODUCTS & MENU
 */
export interface BakeryProductItem {
  id: string;
  name: string;
  category: "Cakes" | "Pastries" | "Cupcakes" | "Cookies" | "Breads" | "Desserts";
  description: string;
  image: string;
  dietary?: "Vegetarian" | "Eggless Available" | "Chef Special" | "Bestseller";
  tag: string;
  priceNote: string;
}

export const PRODUCT_CATEGORIES = [
  "Cakes",
  "Pastries",
  "Cupcakes",
  "Cookies",
  "Breads",
  "Desserts",
] as const;

export const BAKERY_PRODUCTS: BakeryProductItem[] = [
  // 1. Cakes
  {
    id: "prod-cake-1",
    name: "Belgian Chocolate Drip Cake",
    category: "Cakes",
    description: "Layers of moist chocolate sponge drizzled with rich ganache, topped with macarons and fresh berries.",
    image: "/images/cakes/cake-belgian-drip-clean.jpg",
    dietary: "Chef Special",
    tag: "Signature",
    priceNote: "Inquire / Custom Order",
  },
  {
    id: "prod-cake-2",
    name: "Luxury Tulip Ribbon Bow Cake",
    category: "Cakes",
    description: "Pristine white finish draped in a handcrafted fondant ribbon bow with delicate miniature tulip buds.",
    image: REAL_PHOTOS.cakeTulipBow,
    dietary: "Eggless Available",
    tag: "Designer",
    priceNote: "Inquire / Custom Order",
  },
  {
    id: "prod-cake-3",
    name: "Romantic Heart Calendar Cake",
    category: "Cakes",
    description: "Heart-shaped vanilla cream cake with golden lettering, fresh crimson roses, and custom date plaque.",
    image: REAL_PHOTOS.cakeRomanticHeart,
    dietary: "Bestseller",
    tag: "Anniversary",
    priceNote: "Inquire / Custom Order",
  },
  {
    id: "prod-cake-4",
    name: "McLaren Supercar Track Cake",
    category: "Cakes",
    description: "Sky-blue fondant racetrack cake with chequered flags, custom age number, and supercar topper.",
    image: REAL_PHOTOS.cakeSupercar,
    dietary: "Eggless Available",
    tag: "Kids Theme",
    priceNote: "Inquire / Custom Order",
  },
  {
    id: "prod-cake-5",
    name: "Masha & Bear Character Cake",
    category: "Cakes",
    description: "Woodland cartoon birthday cake with handcrafted character figures, tree stump detailing, and floral accents.",
    image: REAL_PHOTOS.cakeMashaBear,
    dietary: "Chef Special",
    tag: "Kids Special",
    priceNote: "Inquire / Custom Order",
  },

  // 2. Pastries
  {
    id: "prod-pastry-1",
    name: "Artisan Fruit & Ganache Tarts",
    category: "Pastries",
    description: "Crisp golden shortcrust pastry filled with dark Belgian chocolate ganache or seasonal fruit compote.",
    image: REAL_PHOTOS.tarts,
    dietary: "Vegetarian",
    tag: "Fresh Cut",
    priceNote: "Fresh Daily",
  },
  {
    id: "prod-pastry-2",
    name: "Flaky Crème Horn Rolls",
    category: "Pastries",
    description: "Crispy puff pastry horns rolled in granulated sugar and generously filled with whipped vanilla cream.",
    image: REAL_PHOTOS.creamRolls,
    dietary: "Vegetarian",
    tag: "Bakery Classic",
    priceNote: "Fresh Daily",
  },
  {
    id: "prod-pastry-3",
    name: "Golden Butter Croissants",
    category: "Pastries",
    description: "Multi-layered European butter croissants baked each morning to a light, flaky golden crust.",
    image: "/images/bakery/croissant-clean.jpg",
    dietary: "Vegetarian",
    tag: "Oven Hot",
    priceNote: "Fresh Daily",
  },

  // 3. Cupcakes
  {
    id: "prod-cupcake-1",
    name: "Frosted Berry Vanilla Cupcakes",
    category: "Cupcakes",
    description: "Fluffy vanilla sponge piped with rich buttercream swirls and garnished with fresh berries.",
    image: REAL_PHOTOS.muffins,
    dietary: "Vegetarian",
    tag: "Bestseller",
    priceNote: "Fresh Daily",
  },
  {
    id: "prod-cupcake-2",
    name: "Belgian Chocolate Fudge Cupcakes",
    category: "Cupcakes",
    description: "Moist dark cocoa sponge crowned with decadent chocolate frosting and chocolate flakes.",
    image: "/images/bakery/cupcakes-clean.jpg",
    dietary: "Vegetarian",
    tag: "Indulgent",
    priceNote: "Fresh Daily",
  },

  // 4. Cookies
  {
    id: "prod-cookie-1",
    name: "Traditional Homemade Biscuits",
    category: "Cookies",
    description: "Crunchy golden bakery biscuits prepared using heritage dairy butter and aromatic cardamom.",
    image: REAL_PHOTOS.homemadeBiscuits,
    dietary: "Vegetarian",
    tag: "Heritage",
    priceNote: "Fresh Daily",
  },
  {
    id: "prod-cookie-2",
    name: "Chunky Chocolate Chip Cookies",
    category: "Cookies",
    description: "Crisp on the outside and soft inside, packed with Belgian chocolate chips and brown sugar.",
    image: REAL_PHOTOS.homemadeBiscuits,
    dietary: "Vegetarian",
    tag: "Bestseller",
    priceNote: "Fresh Daily",
  },

  // 5. Breads
  {
    id: "prod-bread-1",
    name: "Fresh Handcrafted Bread Loaf",
    category: "Breads",
    description: "Slow-fermented artisan sandwich bread loaf baked daily with a golden crust and tender crumb.",
    image: REAL_PHOTOS.freshBread,
    dietary: "Vegetarian",
    tag: "Daily Bread",
    priceNote: "Fresh Daily",
  },
  {
    id: "prod-bread-2",
    name: "Herb Toasted Garlic Bread",
    category: "Breads",
    description: "Crusty golden baguette brushed with roasted garlic butter, parsley, and Italian herbs.",
    image: REAL_PHOTOS.garlicBread,
    dietary: "Vegetarian",
    tag: "Savory",
    priceNote: "Fresh Daily",
  },

  // 6. Desserts
  {
    id: "prod-dessert-1",
    name: "Belgian Dark Chocolate Brownies",
    category: "Desserts",
    description: "Ultra-fudgy dark chocolate squares with a shiny crackly crust and melted chocolate pockets.",
    image: REAL_PHOTOS.brownies,
    dietary: "Vegetarian",
    tag: "Bestseller",
    priceNote: "Fresh Daily",
  },
  {
    id: "prod-dessert-2",
    name: "Celebration Dessert Gift Box",
    category: "Desserts",
    description: "Curated luxury gift box containing assorted brownies, macarons, cookies, and fine pastries.",
    image: REAL_PHOTOS.celebrationHamper,
    dietary: "Chef Special",
    tag: "Gift Hamper",
    priceNote: "Custom Box",
  },
  {
    id: "prod-dessert-3",
    name: "Artisan Cake Pops",
    category: "Desserts",
    description: "Rich cake truffles dipped in white and dark chocolate, decorated with colorful party sprinkles.",
    image: REAL_PHOTOS.cakePops,
    dietary: "Vegetarian",
    tag: "Party Favorite",
    priceNote: "Fresh Daily",
  },
];

/**
 * 7. VISUAL GALLERY
 */
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Freshly Baked With Love — Karshni Baker's",
    category: "Cakes",
    src: REAL_PHOTOS.hero,
    aspect: "wide",
    description:
      "Our signature master showcase: artisanal chocolate drip cake, golden croissants, and handcrafted cupcakes.",
  },
  {
    id: "gal-2",
    title: "Luxury Tulip Ribbon Bow Cake",
    category: "Cakes",
    src: REAL_PHOTOS.cakeTulipBow,
    aspect: "portrait",
    description:
      "Handcrafted sugarcraft ribbon bow with miniature tulip buds on satin smooth fondant.",
  },
  {
    id: "gal-3",
    title: "Belgian Fudge Chocolate Brownies",
    category: "Pastries & Bakes",
    src: REAL_PHOTOS.brownies,
    aspect: "landscape",
    description:
      "Dense Belgian dark chocolate squares baked fresh daily with a crackly glaze top.",
  },
  {
    id: "gal-4",
    title: "Romantic Heart Milestone Cake",
    category: "Cakes",
    src: REAL_PHOTOS.cakeRomanticHeart,
    aspect: "portrait",
    description:
      "Heart-shaped anniversary creation with golden calligraphy, fresh red roses, and date plaque.",
  },
  {
    id: "gal-5",
    title: "Artisan Patisserie Tarts & Pastries",
    category: "Pastries & Bakes",
    src: REAL_PHOTOS.tarts,
    aspect: "landscape",
    description:
      "Flaky tart shells filled with dark chocolate ganache and seasonal fruit compote.",
  },
  {
    id: "gal-6",
    title: "Fresh Baked Artisan Bread Loaves",
    category: "Pastries & Bakes",
    src: REAL_PHOTOS.freshBread,
    aspect: "landscape",
    description:
      "Golden crust hand-kneaded artisan breads, buns, and garlic loaves fresh from the oven.",
  },
  {
    id: "gal-7",
    title: "McLaren Supercar Themed Cake",
    category: "Cakes",
    src: REAL_PHOTOS.cakeSupercar,
    aspect: "portrait",
    description:
      "Custom racetrack cake designed for celebrations with racing flags and supercar topper.",
  },
  {
    id: "gal-8",
    title: "Karshni Bakery Display & Ambiance",
    category: "Ambience",
    src: REAL_PHOTOS.bakeryWide,
    aspect: "wide",
    description:
      "Illuminated glass showcase filled with fresh cakes and delicacies at Shree Ram Market, Dinanagar.",
  },
];

// Backwards-compatible aliases
export const GALLERY_ITEMS = GALLERY_PHOTOS;
export const FOOD_MENU_ITEMS = BAKERY_PRODUCTS;
export const MENU_CATEGORIES = PRODUCT_CATEGORIES;
export const SIGNATURE_COLLECTIONS = BAKERY_SERVICES;
