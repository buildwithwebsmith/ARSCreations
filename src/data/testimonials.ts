export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  category: string;
  productOrdered?: string;
  rating: number;
  isDemoReview: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'ARS Creation helped us bring our corporate branding ideas to life with a truly professional finish. The matte velvet business cards with silver foil were exactly what our tech consulting firm needed.',
    author: 'Demo Customer (Corporate Tech Client)',
    role: 'Managing Partner',
    category: 'Business Cards & Stationery',
    productOrdered: 'Premium Matte Black Visiting Cards',
    rating: 5,
    isDemoReview: true
  },
  {
    id: 'test-2',
    quote:
      'We ordered customized employee onboarding welcome kits for our new team cohort. The unboxing experience was exceptional—the laser-engraved flasks and diaries looked executive and well-made.',
    author: 'Demo Customer (HR & Operations)',
    role: 'Operations Lead',
    category: 'Corporate Gifting',
    productOrdered: 'Executive Onboarding Welcome Kit',
    rating: 5,
    isDemoReview: true
  },
  {
    id: 'test-3',
    quote:
      'The custom coffee mugs we ordered for our café anniversary were super crisp in color and have survived dozens of commercial dishwasher cycles with zero fading. Quick communication on WhatsApp too!',
    author: 'Demo Customer (F&B / Hospitality)',
    role: 'Café Founder',
    category: 'Personalized Drinkware',
    productOrdered: 'Personalized Ceramic Mug',
    rating: 5,
    isDemoReview: true
  },
  {
    id: 'test-4',
    quote:
      'The bespoke foil wedding invitation cards received so many compliments from our guests. The torn deckle-edge paper and wax seals added that royal handcrafted feel we were searching for.',
    author: 'Demo Customer (Wedding Stationery)',
    role: 'Private Client',
    category: 'Wedding Invitations',
    productOrdered: 'Bespoke Foil & Wax Seal Invites',
    rating: 5,
    isDemoReview: true
  },
  {
    id: 'test-5',
    quote:
      'Finding a printing partner who understands custom die-cut vinyl stickers and low-batch rigid boxes for direct-to-consumer skincare was a game changer for our launch.',
    author: 'Demo Customer (D2C Brand Founder)',
    role: 'E-Commerce Founder',
    category: 'Packaging & Labels',
    productOrdered: 'Custom Rigid Luxury Packaging Boxes',
    rating: 5,
    isDemoReview: true
  }
];
