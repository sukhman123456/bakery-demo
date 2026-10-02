import { CAKE_PORTFOLIO, type CakePortfolioItem } from "./cake-portfolio";

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: "Celebration Cakes" | "Kids & Themes" | "Bakery Portfolio" | "Artisanal Display";
  src: string;
  aspect: "landscape" | "portrait" | "wide";
  description: string;
}

export const BRAND = {
  name: "Karshni Baker's",
  fullName: "Karshni Baker's",
  shortName: "Karshni",
  tagline: "Crafted for Sweet Moments.",
  heroEyebrow: "Artisanal Bakery & Custom Cakes",
  heroTitle: "Crafted for Sweet Moments.",
  heroSupportingText: "Handcrafted celebration cakes and artisanal delicacies, baked fresh daily in Dinanagar.",
  aboutHeading: "Made With Passion. Crafted With Detail.",
  aboutText:
    "Karshni Baker's creates handcrafted cakes and desserts for birthdays, anniversaries, celebrations and special occasions. Every creation is conceived as a piece of edible art—combining refined aesthetics, time-honored artisanal baking techniques, and pure ingredients to make life's milestones unforgettable.",
  address: "Shree Ram Market, Near Punjab & Sind Bank, Dinanagar JT Road, Dinanagar, Punjab 143531",
  landmark: "Shree Ram Market, Near Punjab & Sind Bank",
  city: "Dinanagar, Punjab",
  phone: "+91 98885 26072",
  phoneRaw: "+919888526072",
  whatsapp: "919888526072",
  instagram: "@karshni_bakers",
  instagramUrl: "https://www.instagram.com/karshni_bakers/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Karshni+Bakers+Shree+Ram+Market+Dinanagar+Punjab",
  hours: "9:00 AM – 9:30 PM",
  days: "Open 7 Days a Week",
  rating: "4.9",
  reviewCount: "140+",
};

export const REAL_PHOTOS = {
  logo: "/images/karshni-logo.jpg",
  hero: "/images/bakery-showcase-wide.jpg",
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
 * 1. FRESH FROM OUR BAKERY
 * Strictly ONLY the products requested by the user:
 * Fresh Pastries, Muffins, Donuts, Brownies, Cookies, Fresh Homemade Biscuits,
 * Cream Rolls, Cheese Rolls, Cake Pops, Tarts, Buns, Garlic Bread, Fresh Bread.
 */
export interface BakeryProduct {
  id: string;
  name: string;
  category: "Pastries" | "Biscuits & Cookies" | "Breads" | "Patisserie";
  description: string;
  badge?: string;
  image: string;
  isHouseMade?: boolean;
}

export const FRESH_BAKERY_PRODUCTS: BakeryProduct[] = [
  {
    id: "prod-pastries",
    name: "Fresh Pastries",
    category: "Pastries",
    description: "Multi-layered European patisserie slices featuring Belgian dark truffle, fresh fruit gateaux, and light chantilly cream.",
    badge: "Daily Fresh Cut",
    image: REAL_PHOTOS.tarts,
  },
  {
    id: "prod-muffins",
    name: "Muffins",
    category: "Patisserie",
    description: "Golden-baked blueberry crumble and double Belgian chocolate muffins with an exceptionally tender, moist crumb.",
    badge: "Oven Hot",
    image: REAL_PHOTOS.muffins,
  },
  {
    id: "prod-donuts",
    name: "Donuts",
    category: "Patisserie",
    description: "Handcrafted brioche ring donuts dipped in decadent dark chocolate glaze with roasted pistachios and vanilla bean glaze.",
    badge: "Artisanal Glaze",
    image: REAL_PHOTOS.donuts,
  },
  {
    id: "prod-brownies",
    name: "Brownies",
    category: "Patisserie",
    description: "Dense, ultra-fudgy dark chocolate walnut brownies with a delicate crackly top and sprinkled flaky sea salt.",
    badge: "Bestseller",
    image: REAL_PHOTOS.brownies,
  },
  {
    id: "prod-cookies",
    name: "Cookies",
    category: "Biscuits & Cookies",
    description: "Thick, golden-baked gourmet cookies studded with rich chocolate chunks, toasted macadamias, and wholesome butter.",
    badge: "Baked Fresh",
    image: REAL_PHOTOS.homemadeBiscuits,
  },
  {
    id: "prod-homemade-biscuits",
    name: "Fresh Homemade Biscuits",
    category: "Biscuits & Cookies",
    description: "Our signature house-made crunchy butter biscuits baked fresh in our Dinanagar ovens, packed with sliced almonds and aromatic cardamom.",
    badge: "House-Made Specialty",
    image: REAL_PHOTOS.homemadeBiscuits,
    isHouseMade: true,
  },
  {
    id: "prod-cream-rolls",
    name: "Cream Rolls",
    category: "Patisserie",
    description: "Crisp, golden-brown flaky puff pastry horn cones generously filled with light vanilla bean whipped cream and dusted with fine sugar.",
    badge: "Bakery Classic",
    image: REAL_PHOTOS.creamRolls,
  },
  {
    id: "prod-cheese-rolls",
    name: "Cheese Rolls",
    category: "Breads",
    description: "Flaky golden puff pastry rolls packed with savory cottage cheese, Italian herbs, and melted cheese baked to golden perfection.",
    badge: "Savory Special",
    image: REAL_PHOTOS.garlicBread,
  },
  {
    id: "prod-cake-pops",
    name: "Cake Pops",
    category: "Patisserie",
    description: "Bespoke chocolate cake pop truffles dipped in Belgian dark and ivory chocolate, delicately accented with edible gold luster.",
    badge: "Party Favorite",
    image: REAL_PHOTOS.cakePops,
  },
  {
    id: "prod-tarts",
    name: "Tarts",
    category: "Patisserie",
    description: "Crisp buttery French pastry shells layered with silky vanilla custard, fresh raspberries, blackberries, and edible gold leaf.",
    badge: "Haute Patisserie",
    image: REAL_PHOTOS.tarts,
  },
  {
    id: "prod-buns",
    name: "Buns",
    category: "Breads",
    description: "Pillow-soft brioche milk buns and golden dinner rolls baked each morning with a shimmering butter glaze.",
    badge: "Morning Bake",
    image: REAL_PHOTOS.freshBread,
  },
  {
    id: "prod-garlic-bread",
    name: "Garlic Bread",
    category: "Breads",
    description: "Toasted artisanal baguette slices infused with fresh roasted garlic butter, aromatic herbs, and bubbling mozzarella.",
    badge: "Warm & Crispy",
    image: REAL_PHOTOS.garlicBread,
  },
  {
    id: "prod-fresh-bread",
    name: "Fresh Bread",
    category: "Breads",
    description: "Authentic crusty sourdough boules, soft sandwich loaves, and golden baguettes baked daily using wholesome grains.",
    badge: "Scratch Baked",
    image: REAL_PHOTOS.freshBread,
  },
];

/**
 * 2. CAKES & CUSTOM CAKES SHOWCASE
 * Includes all requested cake types with focus on Custom Cake Orders:
 * Custom Cakes, Birthday Cakes, Anniversary Cakes, Wedding Cakes, Theme Cakes,
 * Designer Cakes, Photo Cakes, Eggless Cakes, Bento / Mini Cakes, Cupcakes.
 */
export interface CakeShowcaseType {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  highlight?: boolean;
}

export const CAKE_TYPES_SHOWCASE: CakeShowcaseType[] = [
  {
    id: "custom-cakes",
    name: "Custom Cakes",
    subtitle: "Your Vision, Edibly Crafted",
    description: "100% bespoke celebration centerpieces created from your photo references, event invitations, and personalized color palettes.",
    tag: "Main Specialty",
    image: REAL_PHOTOS.cakeKanishToybox,
    highlight: true,
  },
  {
    id: "birthday-cakes",
    name: "Birthday Cakes",
    subtitle: "Milestones & Yearly Celebrations",
    description: "Distinctive age toppers, candle arrangements, and personalized messages customized for children, teens, and adults.",
    tag: "Celebration Essential",
    image: REAL_PHOTOS.cakeSupercar,
  },
  {
    id: "anniversary-cakes",
    name: "Anniversary Cakes",
    subtitle: "Romantic Couple Moments",
    description: "Heart-shaped silhouettes, milestone calendar date plaques, and fresh red rose floral styling for couple milestones.",
    tag: "Couple Edition",
    image: REAL_PHOTOS.cakeRomanticHeart,
  },
  {
    id: "wedding-cakes",
    name: "Wedding Cakes",
    subtitle: "Grand Tiered Elegance",
    description: "Multi-tiered reception centerpieces with pristine fondant drapery, sugar florals, and subtle champagne gold accents.",
    tag: "Grand Occasions",
    image: REAL_PHOTOS.cakeTulipBow,
  },
  {
    id: "theme-cakes",
    name: "Theme Cakes",
    subtitle: "Cartoon, Sports & Fantasy",
    description: "Vibrant custom themes ranging from sports cars and race tracks to enchanted animated cartoon wonderlands.",
    tag: "Handcrafted Themes",
    image: REAL_PHOTOS.cakeMashaBear,
  },
  {
    id: "designer-cakes",
    name: "Designer Cakes",
    subtitle: "Haute Couture Aesthetic",
    description: "Minimalist ribbons, fondant bows, modern geometric piping, and editorial patisserie styling.",
    tag: "Signature Aesthetic",
    image: REAL_PHOTOS.cakeTulipBow,
  },
  {
    id: "photo-cakes",
    name: "Photo Cakes",
    subtitle: "Cherished Memories",
    description: "High-resolution edible sugar sheet photo printing framed with delicate cream borders and custom greetings.",
    tag: "Personalized",
    image: REAL_PHOTOS.bakeryDisplay,
  },
  {
    id: "eggless-cakes",
    name: "Eggless Cakes",
    subtitle: "100% Pure Vegetarian Recipe",
    description: "Fluffy, melt-in-the-mouth sponges crafted using our proprietary egg-free recipe without compromising on height or richness.",
    tag: "100% Pure Veg",
    image: REAL_PHOTOS.cakeRomanticHeart,
  },
  {
    id: "bento-mini-cakes",
    name: "Bento / Mini Cakes",
    subtitle: "Korean Minimalist Bento Box",
    description: "Charming 4-inch individual celebration cakes packaged in vintage lunchbox containers for intimate milestones.",
    tag: "Trending",
    image: REAL_PHOTOS.cakeTulipBow,
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    subtitle: "Artisanal Single Servings",
    description: "Boxed sets of gourmet cupcakes swirled with whipped Belgian chocolate, vanilla bean cream, and celebration sprinkles.",
    tag: "Party Box",
    image: REAL_PHOTOS.muffins,
  },
];

/**
 * 3. SPECIAL & BULK ORDERS
 * Custom Orders, Bulk Orders, Party Orders, Wedding & Event Orders, Corporate Orders, Celebration Orders.
 */
export interface SpecialOrderService {
  id: string;
  title: string;
  badge: string;
  lead: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export const SPECIAL_BULK_ORDERS: SpecialOrderService[] = [
  {
    id: "custom-orders",
    title: "Custom Orders",
    badge: "1-on-1 Consultation",
    lead: "Bring any cake or pastry idea to life with our head pastry chef.",
    description: "Share your reference photos, theme sketches, or Pinterest boards. We customize every element from inner layers and fillings to exterior fondant sculpting.",
    highlights: ["Hand-sculpted 3D figurines", "Custom edible calendar plaques", "Flavor & sweetness tailoring"],
    ctaLabel: "Order a Custom Cake",
    whatsappMessage: "Hello Karshni Baker's! I'd like to consult on a Custom Cake order with reference photos.",
  },
  {
    id: "bulk-orders",
    title: "Bulk Orders",
    badge: "Volume Pricing",
    lead: "Fresh daily bakery treats and boxes for large gatherings.",
    description: "Ideal for schools, community gatherings, festive holiday gifts, and large tea parties. We bake and pack fresh boxes on schedule with zero compromises on quality.",
    highlights: ["Fresh homemade biscuit boxes", "Assorted pastry trays", "Scheduled on-time batch baking"],
    ctaLabel: "Ask About Bulk Orders",
    whatsappMessage: "Hello Karshni Baker's! I would like to inquire about placing a Bulk Bakery Order.",
  },
  {
    id: "party-orders",
    title: "Party Orders",
    badge: "Complete Setup",
    lead: "Comprehensive bakery catering for birthdays and private parties.",
    description: "Streamline your event with complete packages including centerpiece cakes, finger pastries, savory cheese puffs, and cake pops for all your guests.",
    highlights: ["Coordinated color palettes", "Kids & adult party bundles", "Pre-portioned snack boxes"],
    ctaLabel: "Place a Party Order",
    whatsappMessage: "Hello Karshni Baker's! I would like to organize a Party Order with cakes and savory snacks.",
  },
  {
    id: "wedding-event-orders",
    title: "Wedding & Event Orders",
    badge: "Grand Occasions",
    lead: "Showstopping multi-tiered centerpieces for receptions and engagements.",
    description: "From multi-tiered wedding cakes with delicate sugar ribbons to dessert display tables and personalized guest favors, we deliver luxury at scale.",
    highlights: ["Grand multi-tier structures", "Safe banquet delivery & setup", "Custom tasting consultations"],
    ctaLabel: "Inquire Wedding Cake",
    whatsappMessage: "Hello Karshni Baker's! I would like to inquire about a Wedding / Grand Event Cake.",
  },
  {
    id: "corporate-orders",
    title: "Corporate Orders",
    badge: "Business Gifts",
    lead: "Sophisticated gift hampers and refreshment boxes for professional events.",
    description: "Impress clients, staff, and executives with branded corporate dessert boxes, anniversary treats, and premium house-made tea biscuit hampers.",
    highlights: ["Custom logo edible tags", "Premium gift packaging", "Bulk delivery to office locations"],
    ctaLabel: "Inquire Corporate Gifts",
    whatsappMessage: "Hello Karshni Baker's! I'd like to discuss a Corporate Gifting / Order requirement.",
  },
  {
    id: "celebration-orders",
    title: "Celebration Orders",
    badge: "Family Milestones",
    lead: "Celebrate anniversaries, retirements, baby arrivals, and reunions.",
    description: "Every celebration is distinct. We provide customized greeting plaques, theme-matched cupcakes, and celebration cake packages.",
    highlights: ["Same-day milestone bookings", "Custom inscription ribbons", "Careful safe packaging"],
    ctaLabel: "Book Celebration Order",
    whatsappMessage: "Hello Karshni Baker's! I would like to book a special Celebration Cake order.",
  },
];

/**
 * 4. PARTY & CELEBRATION
 * Birthday Cakes, Celebration Cakes, Cake Toppers, Candles, Party Packs,
 * Celebration Boxes, Gift Hampers, Custom Celebration Orders.
 */
export interface PartyCelebrationItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export const PARTY_CELEBRATION_ITEMS: PartyCelebrationItem[] = [
  {
    id: "party-birthday-cakes",
    name: "Birthday Cakes",
    category: "Centerpiece",
    description: "Showstopping birthday cakes tailored with age numbers, custom figures, and decadent chocolate or fruit flavors.",
    image: REAL_PHOTOS.cakeSupercar,
  },
  {
    id: "party-celebration-cakes",
    name: "Celebration Cakes",
    category: "Signature",
    description: "Handcrafted cakes with delicate floral piping, satin ribbon fondant, and heartfelt personal messages.",
    image: REAL_PHOTOS.cakeTulipBow,
  },
  {
    id: "party-cake-toppers",
    name: "Cake Toppers",
    category: "Accessories",
    description: "Gleaming golden acrylic milestone numbers, 'Happy Birthday' cursive banners, and personalized name toppers.",
    image: REAL_PHOTOS.celebrationHamper,
  },
  {
    id: "party-candles",
    name: "Designer Candles",
    category: "Accessories",
    description: "Champagne gold metallic taper candles, sparkling celebration fountains, and numeral candle sets.",
    image: REAL_PHOTOS.celebrationHamper,
  },
  {
    id: "party-packs",
    name: "Party Packs",
    category: "Snack Bundles",
    description: "Pre-boxed party packages featuring individual cake slices, warm savory patties, and cake pops for hassle-free hosting.",
    image: REAL_PHOTOS.muffins,
  },
  {
    id: "party-celebration-boxes",
    name: "Celebration Boxes",
    category: "Gift Sets",
    description: "Luxurious dessert boxes filled with assorted brownies, donuts, pastries, and house-made cookies.",
    image: REAL_PHOTOS.celebrationHamper,
  },
  {
    id: "party-gift-hampers",
    name: "Artisanal Gift Hampers",
    category: "Luxury Hampers",
    description: "Elegant kraft and satin gold ribbon hampers packed with house-made almond biscuits, brownies, and confections.",
    image: REAL_PHOTOS.celebrationHamper,
  },
  {
    id: "party-custom-celebration",
    name: "Custom Celebration Orders",
    category: "Bespoke Service",
    description: "Complete celebration packages curated with matching cake, cupcakes, cake pops, and party favor boxes.",
    image: REAL_PHOTOS.cakeRomanticHeart,
  },
];

export const OCCASIONS_LIST = [
  {
    id: "birthday",
    title: "Birthday",
    subtitle: "Milestone & Theme Celebrations",
    image: REAL_PHOTOS.cakeSupercar,
    description: "Distinctive celebration cakes personalized with age toppers, custom figures, and decadent flavors.",
    link: "/cakes",
  },
  {
    id: "anniversary",
    title: "Anniversary",
    subtitle: "Romantic & Couple Moments",
    image: REAL_PHOTOS.cakeRomanticHeart,
    description: "Heart-shaped silhouettes adorned with fresh roses, golden lettering, and custom calendar date plaques.",
    link: "/cakes",
  },
  {
    id: "kids-celebration",
    title: "Kids Celebration",
    subtitle: "Playful Themes & Characters",
    image: REAL_PHOTOS.cakeMashaBear,
    description: "Imaginative 3D sculptures, favorite animated figures, and vibrant dreamscapes crafted with wholesome taste.",
    link: "/cakes",
  },
  {
    id: "special-moments",
    title: "Special Moments",
    subtitle: "Designer Haute Patisserie",
    image: REAL_PHOTOS.cakeTulipBow,
    description: "Sophisticated fondant drapery, delicate hand-piped flowers, and minimalist luxury centerpieces.",
    link: "/cakes",
  },
];

export const WHY_KARSHNI = [
  {
    id: "freshly-crafted",
    title: "Freshly Crafted",
    description: "Every sponge, filling, and cream layer is baked freshly to order in our artisanal Dinanagar bakery kitchen.",
    icon: "Sparkles",
  },
  {
    id: "custom-designs",
    title: "Custom Designs",
    description: "From bespoke 3D fondant characters to romantic calendar date plaques, we bring your unique vision to life.",
    icon: "Palette",
  },
  {
    id: "premium-ingredients",
    title: "Premium Ingredients",
    description: "We use exclusively premium dairy creams, imported chocolates, and wholesome, fresh ingredients.",
    icon: "ShieldCheck",
  },
  {
    id: "made-for-moments",
    title: "Made For Your Moments",
    description: "Meticulously detailed and gracefully packaged to ensure your celebrations leave lasting sweet memories.",
    icon: "HeartHandshake",
  },
];

export const WHY_KARSHINI = WHY_KARSHNI;

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "gal-c1",
    title: "Luxury Tulip Ribbon Bow Cake",
    subtitle: "Designer Signature Edition",
    category: "Celebration Cakes",
    src: REAL_PHOTOS.cakeTulipBow,
    aspect: "portrait",
    description: "Pure white textured satin finish with a dramatic handcrafted fondant bow and miniature pink tulips.",
  },
  {
    id: "gal-c2",
    title: "Romantic Heart & Calendar Date Plaque Cake",
    subtitle: "Anniversary & Couple Edition",
    category: "Celebration Cakes",
    src: REAL_PHOTOS.cakeRomanticHeart,
    aspect: "portrait",
    description: "Heart-shaped cake with fresh roses, golden lettering, and edible calendar tile for memorable dates.",
  },
  {
    id: "gal-c3",
    title: "McLaren Supercar Track Cake",
    subtitle: "Kids 7th Birthday Milestone",
    category: "Kids & Themes",
    src: REAL_PHOTOS.cakeSupercar,
    aspect: "portrait",
    description: "Electric blue sports car theme with checkered track border, edible tires, and cascading balloon pearl garland.",
  },
  {
    id: "gal-c4",
    title: "Masha & Bear 'Vamika' Birthday Cake",
    subtitle: "Custom Cartoon Birthday Theme",
    category: "Kids & Themes",
    src: REAL_PHOTOS.cakeMashaBear,
    aspect: "portrait",
    description: "Woodland cartoon birthday cake with personalized 'Vamika' banner, bear, tree, and butterflies.",
  },
  {
    id: "gal-c5",
    title: "Personalized Toybox & Football 'KANISH' Cake",
    subtitle: "Custom 3D Figurine Creation",
    category: "Kids & Themes",
    src: REAL_PHOTOS.cakeKanishToybox,
    aspect: "portrait",
    description: "Handmade 3D boy figurine holding soccer ball with toy airplane, teddy bear, and 'KANISH' name.",
  },
  {
    id: "gal-1",
    title: "Artisanal Bakery Showcase",
    subtitle: "Illuminated Multi-Tier Cake Counter",
    category: "Bakery Portfolio",
    src: REAL_PHOTOS.bakeryWide,
    aspect: "wide",
    description: "Our signature multi-tier chilled display filled with fresh daily celebration cakes, pastries and treats beneath an ambient wooden pergola ceiling.",
  },
  {
    id: "gal-2",
    title: "Climate-Controlled Display",
    subtitle: "Expansive Chilled Glass Counter",
    category: "Artisanal Display",
    src: REAL_PHOTOS.bakeryDisplay,
    aspect: "landscape",
    description: "Panoramic view of our transparent refrigerated showcase displaying daily cakes, pastries, and artisanal bakes.",
  },
];

export const TESTIMONIALS_LIST = [
  {
    id: "test-1",
    quote:
      "The craftsmanship on our anniversary cake was extraordinary. The delicate floral work and date plaque looked regal, and the flavor was exceptionally rich yet light.",
    author: "Harpreet Kaur",
    occasion: "Anniversary Celebration",
    city: "Dinanagar",
  },
  {
    id: "test-2",
    quote:
      "Karshni Baker's made my son's 7th birthday supercar cake exactly as promised. Fresh sponge, precise detailing, and on-time delivery. A truly premium experience.",
    author: "Rajesh Mehra",
    occasion: "7th Birthday Milestone",
    city: "Dinanagar",
  },
  {
    id: "test-3",
    quote:
      "Easily the most sophisticated bakery in Dinanagar. From custom celebration cakes to daily patisserie, their attention to detail and purity is unmatched.",
    author: "Dr. Simranjit Singh",
    occasion: "Family Celebration",
    city: "Dinanagar",
  },
];

// Preserved for any legacy route references
export interface MenuItem {
  id: string;
  name: string;
  category: "Pastries" | "Patties & Savouries" | "Biscuits & Cookies" | "Desserts";
  description: string;
  tag?: string;
  weight?: string;
  image: string;
  imagePosition?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "bakery-1",
    name: "Fresh Pastries",
    category: "Pastries",
    description: "Decadent Dutch chocolate sponge layered with silky ganache glaze.",
    tag: "Fresh Cut",
    image: REAL_PHOTOS.tarts,
    imagePosition: "center center",
  },
  {
    id: "bakery-2",
    name: "Classic Fruit Tarts",
    category: "Pastries",
    description: "Crisp buttery pastry filled with vanilla bean cream and berries.",
    image: REAL_PHOTOS.tarts,
    imagePosition: "center center",
  },
  {
    id: "bakery-3",
    name: "Cheese Rolls",
    category: "Patties & Savouries",
    description: "Flaky golden multi-layered puff pastry filled with cheese and herbs.",
    tag: "Fresh Daily",
    image: REAL_PHOTOS.garlicBread,
    imagePosition: "center center",
  },
  {
    id: "bakery-4",
    name: "Fresh Garlic Bread",
    category: "Patties & Savouries",
    description: "Artisanal baguette slices toasted with herb garlic butter and cheese.",
    image: REAL_PHOTOS.garlicBread,
    imagePosition: "center center",
  },
  {
    id: "bakery-5",
    name: "Fresh Homemade Biscuits",
    category: "Biscuits & Cookies",
    weight: "250g Box",
    description: "House-made crunchy butter biscuits studded with roasted California almonds.",
    tag: "House-Made",
    image: REAL_PHOTOS.homemadeBiscuits,
    imagePosition: "center center",
  },
  {
    id: "bakery-6",
    name: "Fudge Brownies",
    category: "Desserts",
    description: "Dense and fudgy chocolate brownie packed with toasted walnuts.",
    tag: "Patisserie Special",
    image: REAL_PHOTOS.brownies,
    imagePosition: "center center",
  },
];
