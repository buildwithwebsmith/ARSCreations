import React from 'react';
import { ArrowRight, Sparkles, Heart, Gift, Camera } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import mugsImg from '../../assets/images/product_custom_mugs_1790182493549.jpg';
import apparelImg from '../../assets/images/product_printed_tshirts_1790182508915.jpg';

export const PersonalizedCreationsSection: React.FC = () => {
  const { navigateToCategory } = useShop();

  return (
    <section className="py-16 md:py-24 bg-[#050505] border-b border-[#141622] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Showcase Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0c0e16] border border-[#1b2030] shadow-xl group">
                <img
                  src={mugsImg}
                  alt="Personalized Mugs & Drinkware"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[10px] uppercase font-bold text-[#00CFFF] tracking-wider">
                    Memories in Ceramic
                  </div>
                  <div className="text-sm font-bold text-white">Custom Mugs & Drinkware</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c0f18] border border-[#1b2133] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E100FF]/15 text-[#E100FF] flex items-center justify-center shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Photo Quality Prints</div>
                  <div className="text-[11px] text-[#7d8597]">Ultra-clear resolution & color stability</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 sm:pt-10">
              <div className="p-4 rounded-2xl bg-[#0c0f18] border border-[#1b2133] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7B2CFF]/15 text-[#7B2CFF] flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Individual Gifting</div>
                  <div className="text-[11px] text-[#7d8597]">No minimum order on custom mugs & t-shirts</div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0c0e16] border border-[#1b2030] shadow-xl group">
                <img
                  src={apparelImg}
                  alt="Custom Printed Streetwear & Apparel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[10px] uppercase font-bold text-[#E100FF] tracking-wider">
                    Wear Your Story
                  </div>
                  <div className="text-sm font-bold text-white">Custom Printed Cotton T-Shirts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative and Exploration */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E100FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Gifting Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-display">
              Make It Personal.{' '}
              <span className="text-ars-gradient">Make It Yours.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#9AA2B3] leading-relaxed">
              Every digital memory deserves a physical home. Whether it’s a heat-sensitive magic mug that unveils your favorite photo over morning tea, an ultra-HD frameless acrylic frame for your living room, or custom apparel printed with your private artwork, ARS Creation handles every creation with care.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#C5CAD6]">
              <div className="p-3 rounded-xl bg-[#0b0e17] border border-[#171b29] flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00CFFF]" />
                <span>Personalized Coffee & Magic Mugs</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0b0e17] border border-[#171b29] flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E100FF]" />
                <span>Bio-Washed 220 GSM Cotton Tees</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0b0e17] border border-[#171b29] flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7B2CFF]" />
                <span>Frameless Crystal Acrylic Prints</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0b0e17] border border-[#171b29] flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                <span>Custom Wax Seal Wedding Stationery</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => navigateToCategory('personalized-mugs')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] hover:from-[#f02aff] hover:to-[#8f47ff] text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all"
              >
                <span>Explore Personalized Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
