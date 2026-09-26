import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import heroStudioImg from '../../assets/images/hero_printing_studio_1790182467810.jpg';
import { getWhatsAppUrl } from '../../lib/brandConfig';

export const HeroSection: React.FC = () => {
  const { setActivePage } = useShop();

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] pt-6 pb-16 md:py-24 border-b border-[#141622]">
      {/* Subtle brand ambient lighting glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E100FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00CFFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00CFFF]">
              <span className="w-2 h-2 rounded-full bg-[#00CFFF] animate-ping" />
              <span>Premium Printing & Personalization Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display max-w-2xl">
              Your Ideas.{' '}
              <span className="text-ars-gradient">Our Creation.</span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-[#9EA6B8] leading-relaxed max-w-xl">
              From personalized gifts to professional business branding, we bring your ideas to life with quality printing and creative precision.
            </p>

            {/* Trust Markers without unverified claims */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#8992A6]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00CFFF]" />
                <span>Personalized Products</span>
              </div>
              <span className="text-[#363a4d] hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7B2CFF]" />
                <span>Business Printing</span>
              </div>
              <span className="text-[#363a4d] hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E100FF]" />
                <span>Bulk Orders</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => setActivePage('shop')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-purple-900/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Shop Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActivePage('bulk-orders')}
                className="px-6 py-3.5 rounded-xl bg-[#111420] hover:bg-[#181d2e] border border-[#242b3e] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FFD21F]" />
                <span>Get a Custom Quote</span>
              </button>

              <a
                href={getWhatsAppUrl('Hello ARS Creation, I would like to enquire about your custom printing services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Studio Showcase Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#212638] via-[#10131d] to-[#08090f] shadow-2xl">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-black">
                <img
                  src={heroStudioImg}
                  alt="ARS Creation Studio Printing Showcase - Visiting cards, mugs, apparel, and packaging"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#090b12]/90 backdrop-blur-md border border-[#1f2538] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Crafted for Impact</div>
                    <div className="text-[11px] text-[#858da1]">Visiting Cards · Mugs · Apparel · Packaging</div>
                  </div>
                  <button
                    onClick={() => setActivePage('shop')}
                    className="p-2 rounded-lg bg-[#00CFFF]/15 text-[#00CFFF] hover:bg-[#00CFFF] hover:text-black transition-colors"
                    aria-label="Explore products"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
