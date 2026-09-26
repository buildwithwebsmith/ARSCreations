import React from 'react';
import { Instagram, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { ARSLogo } from './ARSLogo';
import { BRAND_CONFIG, getWhatsAppUrl } from '../../lib/brandConfig';
import { useShop } from '../../context/ShopContext';

export const Footer: React.FC = () => {
  const { setActivePage, navigateToCategory } = useShop();

  return (
    <footer className="bg-[#050505] border-t border-[#161822] text-[#9DA4B5] pt-16 pb-8">
      {/* Top Value Proposition Strip */}
      <div className="container mx-auto px-4 md:px-6 pb-12 border-b border-[#141620]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0c12] border border-[#161926]">
            <div className="w-11 h-11 rounded-lg bg-[#E100FF]/10 text-[#E100FF] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Quality-Checked Printing</div>
              <div className="text-xs text-[#7F869A] mt-0.5">High-definition CMYK, durable substrates & precise finishes.</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0c12] border border-[#161926]">
            <div className="w-11 h-11 rounded-lg bg-[#7B2CFF]/10 text-[#7B2CFF] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Pan-India Express Shipping</div>
              <div className="text-xs text-[#7F869A] mt-0.5">Reliable dispatch with verified tracking on all orders.</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0c12] border border-[#161926]">
            <div className="w-11 h-11 rounded-lg bg-[#00CFFF]/10 text-[#00CFFF] flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Dedicated B2B & Bulk Support</div>
              <div className="text-xs text-[#7F869A] mt-0.5">Digital proofs, volume slabs & custom branding specs.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <ARSLogo size="md" />
            <p className="text-xs text-[#A0A7B8] leading-relaxed max-w-sm">
              "{BRAND_CONFIG.tagline}"
            </p>
            <p className="text-xs text-[#7F869A] leading-relaxed max-w-sm">
              Founded by <span className="text-white font-medium">{BRAND_CONFIG.founder}</span>, ARS Creation specializes in translating digital ideas and memories into enduring physical creations—from personalized gifts to corporate brand collateral.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#11131c] hover:bg-[#E100FF]/20 border border-[#1e2233] hover:border-[#E100FF]/50 text-white flex items-center justify-center transition-all group"
                aria-label="Follow ARS Creation on Instagram"
              >
                <Instagram className="w-4 h-4 text-[#D9DCE3] group-hover:text-[#E100FF] transition-colors" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => setActivePage('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('shop')}
                  className="hover:text-white transition-colors"
                >
                  Shop All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('services')}
                  className="hover:text-white transition-colors"
                >
                  Custom Printing Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us (Founder & Story)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('faq')}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('blog')}
                  className="hover:text-white transition-colors"
                >
                  Printing Resources & Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigateToCategory('visiting-cards')}
                  className="hover:text-white transition-colors"
                >
                  Visiting & Business Cards
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('personalized-mugs')}
                  className="hover:text-white transition-colors"
                >
                  Personalized Drinkware
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('custom-t-shirts')}
                  className="hover:text-white transition-colors"
                >
                  Custom Printed Apparel
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('packaging-and-branding')}
                  className="hover:text-white transition-colors"
                >
                  Packaging & Product Branding
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('corporate-gifts')}
                  className="hover:text-white transition-colors"
                >
                  Corporate Welcome Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('stickers-and-labels')}
                  className="hover:text-white transition-colors"
                >
                  Waterproof Stickers & Labels
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Support & Policies */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Customer Support
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => setActivePage('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('bulk-orders')}
                  className="hover:text-white transition-colors"
                >
                  Bulk Orders & Quotations
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('shipping')}
                  className="hover:text-white transition-colors"
                >
                  Shipping & Delivery Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('refund')}
                  className="hover:text-white transition-colors"
                >
                  Refund & Cancellation Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar & Mandatory Websmith Credit */}
      <div className="container mx-auto px-4 md:px-6 pt-8 border-t border-[#12141c]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F768A]">
          <div>
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved.
          </div>

          {/* MANDATORY EXACT FOOTER CREDIT */}
          <div className="text-center sm:text-right">
            <span>Website & Design Crafted by </span>
            <a
              href={BRAND_CONFIG.creatorCreditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9DCE3] hover:text-[#00CFFF] transition-colors font-medium underline underline-offset-4 decoration-[#00CFFF]/40"
            >
              Build With Websmith
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
