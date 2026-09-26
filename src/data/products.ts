import { Product } from '../types';

import imgVisitingCards from '../assets/images/product_visiting_cards_1790182481657.jpg';
import imgCustomMugs from '../assets/images/product_custom_mugs_1790182493549.jpg';
import imgPrintedTshirts from '../assets/images/product_printed_tshirts_1790182508915.jpg';
import imgPackagingBoxes from '../assets/images/product_packaging_boxes_1790182522160.jpg';
import imgHeroStudio from '../assets/images/hero_printing_studio_1790182467810.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-visiting-cards-matte',
    name: 'Premium Matte Black Visiting Cards',
    slug: 'premium-matte-black-visiting-cards',
    category: 'Visiting Cards',
    categorySlug: 'visiting-cards',
    shortDescription: 'Ultra-luxurious 400 GSM velvet touch cardstock with metallic silver foil embossed logo.',
    description:
      'Elevate your brand presence with our flagship visiting cards. Printed on heavyweight 400 GSM European art card with soft-touch matte lamination, precision rounded corner option, and high-precision hot foil stamping.',
    startingPrice: 349, // For pack of 100
    originalPrice: 499,
    images: [imgVisitingCards, imgHeroStudio],
    features: [
      '400 GSM Velvet Soft-Touch Cardstock',
      'Silver / Gold Foil Embossed Lettering',
      'Fade-resistant Ultra-HD CMYK Print',
      'Optional Rounded Safety Edges',
      'Single or Double-Sided Full Color'
    ],
    specifications: {
      Dimensions: '89mm x 51mm (Standard) or 85mm x 55mm (Euro)',
      Paperweight: '400 GSM Ultra Rigid Art Card',
      Coating: 'Velvet Matte Lamination with Spot UV highlight',
      'Min Quantity': '100 Cards'
    },
    customizationOptions: {
      sizes: [
        { name: 'Standard (89 x 51 mm)', priceDelta: 0 },
        { name: 'Square (65 x 65 mm)', priceDelta: 50 },
        { name: 'Slim Profile (85 x 40 mm)', priceDelta: 30 }
      ],
      finishes: [
        { name: 'Velvet Matte + Silver Foil', priceDelta: 0 },
        { name: 'Velvet Matte + Gold Foil', priceDelta: 40 },
        { name: 'Raised Spot UV + Matte', priceDelta: 70 },
        { name: 'Holographic Edge Foil', priceDelta: 120 }
      ],
      allowCustomText: true,
      allowFileUpload: true,
      allowDoubleSided: true,
      doubleSidedPriceDelta: 120
    },
    minOrderQty: 100,
    bulkTiers: [
      { qty: 100, discountPercentage: 0, pricePerUnit: 3.49 },
      { qty: 250, discountPercentage: 15, pricePerUnit: 2.96 },
      { qty: 500, discountPercentage: 25, pricePerUnit: 2.61 },
      { qty: 1000, discountPercentage: 35, pricePerUnit: 2.26 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Bestseller',
    rating: 4.9,
    reviewsCount: 142
  },
  {
    id: 'prod-visiting-cards-textured',
    name: 'Executive Textured Linen Business Cards',
    slug: 'executive-textured-linen-business-cards',
    category: 'Business Cards',
    categorySlug: 'business-cards',
    shortDescription: 'Classic woven cross-hatch linen texture for lawyers, consultants, and luxury brands.',
    description:
      'Engineered for discerning professionals. Genuine imported Italian textured linen board absorbs ink with warmth and organic depth, giving an unmistakable tactile handshake.',
    startingPrice: 399,
    originalPrice: 550,
    images: [imgVisitingCards],
    features: [
      '350 GSM Textured Natural Linen Card',
      'Uncoated tactile weave texture',
      'Crisp micro-typography precision',
      'Eco-friendly acid-free paper stock'
    ],
    specifications: {
      Dimensions: '89mm x 51mm',
      Material: '350 GSM Classic Natural White Linen',
      Finish: 'Uncoated Tactile Woven Surface'
    },
    customizationOptions: {
      sizes: [
        { name: 'Standard (89 x 51 mm)', priceDelta: 0 },
        { name: 'Euro (85 x 55 mm)', priceDelta: 30 }
      ],
      finishes: [
        { name: 'Natural White Linen', priceDelta: 0 },
        { name: 'Warm Cream Linen', priceDelta: 20 },
        { name: 'Embossed Letterpress', priceDelta: 150 }
      ],
      allowCustomText: true,
      allowFileUpload: true,
      allowDoubleSided: true,
      doubleSidedPriceDelta: 100
    },
    minOrderQty: 100,
    bulkTiers: [
      { qty: 100, discountPercentage: 0, pricePerUnit: 3.99 },
      { qty: 300, discountPercentage: 18, pricePerUnit: 3.27 },
      { qty: 500, discountPercentage: 28, pricePerUnit: 2.87 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Premium',
    rating: 4.8,
    reviewsCount: 89
  },
  {
    id: 'prod-custom-ceramic-mug',
    name: 'Personalized High-Gloss Ceramic Mug',
    slug: 'personalized-high-gloss-ceramic-mug',
    category: 'Personalized Mugs',
    categorySlug: 'personalized-mugs',
    shortDescription: '330ml A-Grade ceramic mug with vibrant 360-degree edge-to-edge sublimation printing.',
    description:
      'Turn your favorite moments, brand logos, or personal artwork into daily morning companions. Microwave safe, dishwasher resilient, and cured with high-temperature sublimation for scratch-free brilliance.',
    startingPrice: 279,
    originalPrice: 399,
    images: [imgCustomMugs, imgHeroStudio],
    features: [
      '330 ml (11 oz) Premium AAA Ceramic',
      'Edge-to-Edge Full Color HD Print',
      'Microwave & Dishwasher Safe',
      'Comfortable C-Handle Grip',
      'Individual Protective Gift Box Included'
    ],
    specifications: {
      Capacity: '330 ml / 11 oz',
      Material: 'Pure Ceramic Porcelain',
      PrintMethod: 'High-Temperature Dye Sublimation',
      Care: 'Microwave & Dishwasher Safe'
    },
    customizationOptions: {
      colors: [
        { name: 'Classic Pure White', hex: '#FFFFFF' },
        { name: 'Midnight Black Interior', hex: '#1A1A1A' },
        { name: 'Royal Blue Interior', hex: '#1E3A8A' },
        { name: 'Crimson Red Interior', hex: '#DC2626' }
      ],
      finishes: [
        { name: 'Gloss Finish', priceDelta: 0 },
        { name: 'Matte Frosted Ceramic', priceDelta: 40 },
        { name: 'Color-Changing Magic Mug', priceDelta: 100 }
      ],
      allowCustomText: true,
      allowFileUpload: true
    },
    minOrderQty: 1,
    bulkTiers: [
      { qty: 1, discountPercentage: 0, pricePerUnit: 279 },
      { qty: 10, discountPercentage: 15, pricePerUnit: 237 },
      { qty: 50, discountPercentage: 30, pricePerUnit: 195 },
      { qty: 100, discountPercentage: 40, pricePerUnit: 167 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Popular Gift',
    rating: 4.9,
    reviewsCount: 215
  },
  {
    id: 'prod-magic-color-mug',
    name: 'Color Changing Heat-Sensitive Magic Mug',
    slug: 'color-changing-heat-sensitive-magic-mug',
    category: 'Personalized Mugs',
    categorySlug: 'personalized-mugs',
    shortDescription: 'Appears matte black when cold; reveals your secret photo or message when hot liquid is poured.',
    description:
      'The ultimate surprise gift for birthdays, anniversaries, and corporate appreciation. Specially formulated thermo-chromatic coating transitions seamlessly from deep black to reveal vivid colors underneath.',
    startingPrice: 389,
    originalPrice: 549,
    images: [imgCustomMugs],
    features: [
      'Thermochromic Heat-Activated Coating',
      'Reveals hidden artwork instantly with hot tea/coffee',
      'Food-grade non-toxic ceramic',
      'Full wrap-around photo print'
    ],
    specifications: {
      Capacity: '330 ml',
      Coating: 'Thermochromatic Matte Black',
      PrintMethod: 'Heat Transfer Sublimation'
    },
    customizationOptions: {
      allowCustomText: true,
      allowFileUpload: true
    },
    minOrderQty: 1,
    bulkTiers: [
      { qty: 1, discountPercentage: 0, pricePerUnit: 389 },
      { qty: 5, discountPercentage: 12, pricePerUnit: 342 },
      { qty: 25, discountPercentage: 25, pricePerUnit: 291 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Magic Reveal',
    rating: 4.9,
    reviewsCount: 164
  },
  {
    id: 'prod-bio-cotton-tshirt',
    name: 'Custom Printed 220 GSM Bio-Washed T-Shirt',
    slug: 'custom-printed-bio-washed-t-shirt',
    category: 'Custom T-Shirts',
    categorySlug: 'custom-t-shirts',
    shortDescription: 'Super-combed 100% organic cotton round neck with high-density DTF vibrant printing.',
    description:
      'Durable, breathable, and soft on skin. Made from 220 GSM combed compact cotton with silicone enzyme bio-wash. Our industrial Direct-to-Film (DTF) prints withstand 50+ washes without cracking, peeling, or fading.',
    startingPrice: 479,
    originalPrice: 699,
    images: [imgPrintedTshirts, imgHeroStudio],
    features: [
      '220 GSM Super-Combed 100% Pure Cotton',
      'Enzyme Bio-Washed for Zero Pilling',
      'Ultra-HD DTF Print with Stretch Recovery',
      'Double-Stitched Neck & Shoulder Tape',
      'Unisex Regular Fit (XS to 3XL)'
    ],
    specifications: {
      Fabric: '100% Combed Cotton, 220 GSM',
      Fit: 'Comfort Regular Fit',
      PrintTech: 'Industrial Direct-to-Film (DTF)',
      WashCare: 'Machine wash cold inside-out'
    },
    customizationOptions: {
      sizes: [
        { name: 'S (38 in)', priceDelta: 0 },
        { name: 'M (40 in)', priceDelta: 0 },
        { name: 'L (42 in)', priceDelta: 0 },
        { name: 'XL (44 in)', priceDelta: 20 },
        { name: 'XXL (46 in)', priceDelta: 40 }
      ],
      colors: [
        { name: 'Pitch Black', hex: '#0A0A0A' },
        { name: 'Crisp White', hex: '#F9FAFB' },
        { name: 'Navy Blue', hex: '#1E293B' },
        { name: 'Heather Charcoal', hex: '#374151' }
      ],
      finishes: [
        { name: 'Front Chest Print', priceDelta: 0 },
        { name: 'Front + Back Big Print', priceDelta: 120 },
        { name: 'Pocket Logo + Back Banner', priceDelta: 90 }
      ],
      allowCustomText: true,
      allowFileUpload: true
    },
    minOrderQty: 1,
    bulkTiers: [
      { qty: 1, discountPercentage: 0, pricePerUnit: 479 },
      { qty: 10, discountPercentage: 20, pricePerUnit: 383 },
      { qty: 50, discountPercentage: 35, pricePerUnit: 311 },
      { qty: 200, discountPercentage: 45, pricePerUnit: 263 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Popular',
    rating: 4.8,
    reviewsCount: 178
  },
  {
    id: 'prod-corporate-polo',
    name: 'Corporate Embroidered & Printed Polo T-Shirt',
    slug: 'corporate-embroidered-polo-tshirt',
    category: 'Custom T-Shirts',
    categorySlug: 'custom-t-shirts',
    shortDescription: '260 GSM Honeycomb Cotton Pique with ribbed collar and precision brand embroidery.',
    description:
      'The uniform of choice for modern startups, field teams, and executive events. Heavyweight pique knit with reinforced 2-button placket and stain-release treatment.',
    startingPrice: 599,
    originalPrice: 850,
    images: [imgPrintedTshirts],
    features: [
      '260 GSM Heavy Honeycomb Pique Cotton',
      'Reinforced Ribbed Collar & Cuffs',
      'Precision Japanese Embroidery / DTF Option',
      'Color-fast Reactive Dyeing'
    ],
    specifications: {
      Fabric: '80% Cotton 20% Poly Pique, 260 GSM',
      Buttons: 'Cross-stitched horn effect buttons',
      Fit: 'Smart Corporate Fit'
    },
    customizationOptions: {
      sizes: [
        { name: 'S', priceDelta: 0 },
        { name: 'M', priceDelta: 0 },
        { name: 'L', priceDelta: 0 },
        { name: 'XL', priceDelta: 30 },
        { name: 'XXL', priceDelta: 50 }
      ],
      colors: [
        { name: 'Navy Blue', hex: '#0F172A' },
        { name: 'Jet Black', hex: '#111827' },
        { name: 'Charcoal Grey', hex: '#374151' },
        { name: 'Royal Blue', hex: '#1D4ED8' }
      ],
      allowCustomText: true,
      allowFileUpload: true
    },
    minOrderQty: 5,
    bulkTiers: [
      { qty: 5, discountPercentage: 0, pricePerUnit: 599 },
      { qty: 25, discountPercentage: 18, pricePerUnit: 491 },
      { qty: 100, discountPercentage: 32, pricePerUnit: 407 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Corporate Choice',
    rating: 4.9,
    reviewsCount: 94
  },
  {
    id: 'prod-luxury-packaging-box',
    name: 'Custom Rigid Luxury Packaging Boxes',
    slug: 'custom-rigid-luxury-packaging-boxes',
    category: 'Packaging & Product Branding',
    categorySlug: 'packaging-and-branding',
    shortDescription: 'Bespoke rigid gift boxes with magnetic closure, EVA foam insert, and metallic foil branding.',
    description:
      'Transform unboxing into an unforgettable brand experience. Crafted with 1200 GSM recycled greyboard wrapped in custom printed textured specialty paper with custom-cut foam cavities.',
    startingPrice: 189,
    originalPrice: 260,
    images: [imgPackagingBoxes, imgHeroStudio],
    features: [
      '1200 GSM Sturdy Industrial Greyboard',
      'Hidden Magnetic Snap-Lock Closure',
      'Hot Foil Stamping & Spot UV Accents',
      'Custom Laser-Cut Foam / Velvet Cushioning',
      'Eco-Friendly Recycled Paper Stock'
    ],
    specifications: {
      Structure: 'Book-style Magnetic Rigid Box',
      BoardThickness: '1200 GSM / 2mm Solid Kappa Board',
      Covering: '150 GSM Matte Laminated Fine Paper',
      MinOrder: '50 units'
    },
    customizationOptions: {
      sizes: [
        { name: 'Medium (20 x 15 x 6 cm)', priceDelta: 0 },
        { name: 'Large Hamper (30 x 22 x 10 cm)', priceDelta: 80 },
        { name: 'Cube Gift Box (12 x 12 x 12 cm)', priceDelta: 30 }
      ],
      finishes: [
        { name: 'Matte Black + Gold Foil', priceDelta: 0 },
        { name: 'Matte Black + Silver Foil', priceDelta: 0 },
        { name: 'Full Color Custom Print + Spot UV', priceDelta: 45 }
      ],
      allowCustomText: true,
      allowFileUpload: true
    },
    minOrderQty: 50,
    bulkTiers: [
      { qty: 50, discountPercentage: 0, pricePerUnit: 189 },
      { qty: 200, discountPercentage: 22, pricePerUnit: 147 },
      { qty: 500, discountPercentage: 35, pricePerUnit: 122 },
      { qty: 1000, discountPercentage: 45, pricePerUnit: 103 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Packaging',
    rating: 4.9,
    reviewsCount: 68
  },
  {
    id: 'prod-waterproof-vinyl-stickers',
    name: 'Die-Cut Waterproof Vinyl Stickers & Labels',
    slug: 'die-cut-waterproof-vinyl-stickers-labels',
    category: 'Stickers & Labels',
    categorySlug: 'stickers-and-labels',
    shortDescription: 'Custom contour-cut vinyl stickers with scratchproof UV matte or gloss lamination.',
    description:
      'Weatherproof, dishwasher-friendly, and sun-resistant for up to 3 years outdoors. Perfect for product packaging, laptops, bottles, skateboard decks, and branded giveaways.',
    startingPrice: 199, // For 50 pieces
    originalPrice: 299,
    images: [imgHeroStudio, imgVisitingCards],
    features: [
      '120 Micron Thick Polyvinyl Chloride (PVC)',
      '100% Waterproof & Weather-Resistant',
      'Clean Peel with Zero Adhesive Residue',
      'Any Custom Die-Cut Shape Supported'
    ],
    specifications: {
      Thickness: '120 Micron Vinyl + 30 Micron Laminate',
      Adhesive: 'Permanent High-Tack Acrylic',
      Durability: 'Outdoor grade 3+ years'
    },
    customizationOptions: {
      sizes: [
        { name: '2 x 2 inch (50 pcs)', priceDelta: 0 },
        { name: '3 x 3 inch (50 pcs)', priceDelta: 70 },
        { name: '4 x 4 inch (50 pcs)', priceDelta: 140 }
      ],
      finishes: [
        { name: 'Matte Weatherproof', priceDelta: 0 },
        { name: 'Glossy Laminated', priceDelta: 10 },
        { name: 'Holographic Shimmer', priceDelta: 60 },
        { name: 'Transparent Clear Vinyl', priceDelta: 40 }
      ],
      allowCustomText: true,
      allowFileUpload: true
    },
    minOrderQty: 50,
    bulkTiers: [
      { qty: 50, discountPercentage: 0, pricePerUnit: 3.98 },
      { qty: 250, discountPercentage: 30, pricePerUnit: 2.78 },
      { qty: 1000, discountPercentage: 55, pricePerUnit: 1.79 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Waterproof',
    rating: 4.8,
    reviewsCount: 135
  },
  {
    id: 'prod-corporate-welcome-hamper',
    name: 'Executive Employee Onboarding Welcome Kit',
    slug: 'executive-employee-onboarding-welcome-kit',
    category: 'Corporate Gifts',
    categorySlug: 'corporate-gifts',
    shortDescription: 'Turnkey luxury kit: custom engraved steel bottle, vegan leather diary, roller pen & box.',
    description:
      'Give every new joining team member an unforgettable first impression. Includes a thermal temperature-display steel flask, 192-page ruled executive diary with metal clasp, heavy metal ballpoint pen, and custom branded magnetic gift hamper.',
    startingPrice: 899,
    originalPrice: 1299,
    images: [imgPackagingBoxes, imgHeroStudio],
    features: [
      'Double-Walled 500ml Smart LED Temperature Flask',
      'Debossed A5 Vegan Leather Executive Planner',
      'Matte Black Metal Ballpoint Pen with German Ink',
      'Branded Keyring with Metal Carabiner',
      'Rigid Black Magnetic Gift Box with Foam Cutout'
    ],
    specifications: {
      BoxDimensions: '280 x 240 x 75 mm',
      BrandingTechnique: 'Laser Engraving + Screen Print + Blind Deboss',
      MinimumOrder: '10 Sets'
    },
    customizationOptions: {
      colors: [
        { name: 'Midnight Black', hex: '#0F1015' },
        { name: 'Gunmetal Grey', hex: '#4B5563' },
        { name: 'Deep Navy', hex: '#1E293B' }
      ],
      allowCustomText: true,
      allowFileUpload: true
    },
    minOrderQty: 10,
    bulkTiers: [
      { qty: 10, discountPercentage: 0, pricePerUnit: 899 },
      { qty: 50, discountPercentage: 15, pricePerUnit: 764 },
      { qty: 200, discountPercentage: 25, pricePerUnit: 674 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Corporate B2B',
    rating: 5.0,
    reviewsCount: 52
  },
  {
    id: 'prod-frameless-acrylic-print',
    name: 'Ultra-HD Frameless Acrylic Wall Photo Print',
    slug: 'ultra-hd-frameless-acrylic-wall-photo-print',
    category: 'Photo Frames',
    categorySlug: 'photo-frames',
    shortDescription: 'Museum-grade 5mm crystal clear imported acrylic with diamond-polished beveled edges.',
    description:
      'Gives your photos a stunning glass-like floating depth. Direct UV flatbed printing with dual white ink backing renders extraordinary contrast, vibrant saturation, and high definition clarity.',
    startingPrice: 649,
    originalPrice: 899,
    images: [imgHeroStudio],
    features: [
      '5mm Premium Optical Grade Cast Acrylic',
      'Diamond-Polished 45° Chamfered Edges',
      'Ultra-HD 8-Color Flatbed UV Printing',
      'Stainless Steel Wall Standoff Mounts Included',
      'Shatterproof & Moisture Resistant'
    ],
    specifications: {
      Thickness: '5mm Solid Cast Acrylic',
      Mounting: '4 Stainless Steel Floating Standoff Bolts',
      PrintResolution: 'Up to 2400 DPI'
    },
    customizationOptions: {
      sizes: [
        { name: '8 x 12 inches (A4)', priceDelta: 0 },
        { name: '12 x 18 inches (A3)', priceDelta: 350 },
        { name: '16 x 24 inches', priceDelta: 750 },
        { name: '24 x 36 inches (Grand)', priceDelta: 1500 }
      ],
      allowFileUpload: true,
      allowCustomText: true
    },
    minOrderQty: 1,
    bulkTiers: [
      { qty: 1, discountPercentage: 0, pricePerUnit: 649 },
      { qty: 5, discountPercentage: 15, pricePerUnit: 551 },
      { qty: 10, discountPercentage: 25, pricePerUnit: 486 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Home & Office',
    rating: 4.9,
    reviewsCount: 118
  },
  {
    id: 'prod-royal-wedding-invites',
    name: 'Bespoke Foil & Wax Seal Wedding Stationery',
    slug: 'bespoke-foil-wax-seal-wedding-stationery',
    category: 'Wedding Invitations',
    categorySlug: 'wedding-invitations',
    shortDescription: 'Handmade cotton rag deckle edge paper with metallic gold calligraphy and custom wax seals.',
    description:
      'Celebrate life’s most precious milestone with handcrafted royal invitations. Combines authentic deckle edge cotton paper, deep hot foil metallic stamping, translucent vellum jackets, and customized monogram wax seals.',
    startingPrice: 120, // per card set
    originalPrice: 175,
    images: [imgHeroStudio, imgVisitingCards],
    features: [
      '300 GSM Handmade Cotton Rag Paper',
      'Torn Deckle Edge Artisanal Finishing',
      'Real Hot Stamped Metallic Gold / Rose Foil',
      'Translucent Floral Vellum Outer Jacket',
      'Flexible Monogram Wax Seal Stamp'
    ],
    specifications: {
      MainCard: '130 x 185 mm Deckle Edge Rag Paper',
      Inserts: 'Up to 3 insert cards for ceremonies',
      Envelope: 'Handmade matching Euro-flap envelope'
    },
    customizationOptions: {
      finishes: [
        { name: 'Champagne Gold Foil', priceDelta: 0 },
        { name: 'Rose Gold Foil', priceDelta: 10 },
        { name: 'Emerald Green + Gold', priceDelta: 25 }
      ],
      allowCustomText: true,
      allowFileUpload: true
    },
    minOrderQty: 50,
    bulkTiers: [
      { qty: 50, discountPercentage: 0, pricePerUnit: 120 },
      { qty: 150, discountPercentage: 15, pricePerUnit: 102 },
      { qty: 300, discountPercentage: 28, pricePerUnit: 86.4 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Artisanal',
    rating: 5.0,
    reviewsCount: 48
  },
  {
    id: 'prod-desktop-tent-calendar',
    name: 'Personalized Executive Wire-O Desk Calendar',
    slug: 'personalized-executive-wire-o-desk-calendar',
    category: 'Calendars & Diaries',
    categorySlug: 'calendars-and-diaries',
    shortDescription: '13-leaf full color desktop calendar with heavy hardboard easel stand and monthly photo memories.',
    description:
      'Keep your brand or family moments visible all 365 days. Features 12 monthly sheets + 1 cover sheet on 250 GSM satin art paper bound with durable twin-loop wire on a sturdy laminated cardboard tent stand.',
    startingPrice: 249,
    originalPrice: 349,
    images: [imgHeroStudio],
    features: [
      '13 Leaves (Cover + 12 Months) Double-Sided',
      '250 GSM Silk Coated Art Paper',
      'Heavyweight 2mm Laminated Hard Stand',
      'Black / Silver Twin Loop Metal Binding',
      'Option to mark custom birthdays & company holidays'
    ],
    specifications: {
      Dimensions: '210 x 148 mm (A5 Landscape)',
      Paper: '250 GSM Premium Satin Card',
      Stand: '2mm Rigid Board with Matte Lamination'
    },
    customizationOptions: {
      allowFileUpload: true,
      allowCustomText: true
    },
    minOrderQty: 1,
    bulkTiers: [
      { qty: 1, discountPercentage: 0, pricePerUnit: 249 },
      { qty: 25, discountPercentage: 20, pricePerUnit: 199 },
      { qty: 100, discountPercentage: 35, pricePerUnit: 161 }
    ],
    inStock: true,
    isCustomizable: true,
    badge: 'Seasonal',
    rating: 4.8,
    reviewsCount: 76
  }
];
