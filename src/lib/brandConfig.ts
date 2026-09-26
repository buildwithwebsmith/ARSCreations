// ARS Creation Central Brand & Store Configuration

export const BRAND_CONFIG = {
  name: 'ARS CREATION',
  legalName: 'ARS Creation Print & Custom Studio',
  founder: 'Tejas Shinde',
  founderRole: 'Founder & Creative Director',
  tagline: 'Capturing Digital Memories. Creating Lasting Impressions.',
  secondaryTaglines: [
    'Your Ideas. Our Creation.',
    'Turning Your Ideas Into Something Real.',
    'Print Your Imagination.'
  ],
  description:
    'From personalized gifts to professional business branding, ARS Creation brings your ideas to life with high-definition printing and creative craftsmanship.',
  
  // WhatsApp Configuration (Centralized placeholder as requested)
  // Replace this with the actual phone number when ready (e.g. "919876543210")
  WHATSAPP_NUMBER: 'REPLACE_WITH_ACTUAL_NUMBER',
  
  // Contact & Social Details
  emailPlaceholder: 'enquiry@arscreation.in',
  phonePlaceholder: '+91 98220 12345',
  addressPlaceholder: 'Studio 12, Creative Print Center, Senapati Bapat Road, Pune, Maharashtra 411016',
  businessHours: 'Mon – Sat: 10:00 AM – 7:30 PM (Sunday Closed)',
  locationPlaceholder: 'Pune & Mumbai Delivery across India',
  instagramHandle: '@arsprint.in',
  instagramUrl: 'https://www.instagram.com/arsprint.in/',
  
  // Mandatory Credits
  creatorCreditName: 'Build With Websmith',
  creatorCreditUrl: 'https://buildwithwebsmith.in/',

  // Color Tokens
  colors: {
    black: '#050505',
    silver: '#D9DCE3',
    white: '#FFFFFF',
    magenta: '#E100FF',
    purple: '#7B2CFF',
    cyan: '#00CFFF',
    yellow: '#FFD21F',
    coral: '#FF4B55'
  }
};

/**
 * Generates a clean WhatsApp link with a pre-filled enquiry message.
 * Falls back gracefully when placeholder is active.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage ||
      'Hello ARS Creation, I would like to enquire about your printing services and custom products.'
  );

  if (
    !BRAND_CONFIG.WHATSAPP_NUMBER ||
    BRAND_CONFIG.WHATSAPP_NUMBER === 'REPLACE_WITH_ACTUAL_NUMBER'
  ) {
    // If not yet configured, opens WhatsApp web with message draft
    return `https://wa.me/?text=${message}`;
  }

  return `https://wa.me/${BRAND_CONFIG.WHATSAPP_NUMBER}?text=${message}`;
}
