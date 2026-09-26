import React from 'react';
import { Sparkles, Heart, ShieldCheck, Target, Users, ArrowRight, Award } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../lib/brandConfig';
import { useShop } from '../context/ShopContext';
import heroStudioImg from '../assets/images/hero_printing_studio_1790182467810.jpg';

export const AboutPage: React.FC = () => {
  const { setActivePage } = useShop();

  return (
    <div className="py-12 bg-[#050505] min-h-screen text-[#9AA2B5]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The ARS Creation Story</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
            Creating More Than Prints.{' '}
            <span className="text-ars-gradient">Creating Memories.</span>
          </h1>
          <p className="text-base text-[#8C95A8] mt-4 leading-relaxed">
            "{BRAND_CONFIG.tagline}"
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#090c14] border border-[#1d2336] p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#06070a] border border-[#212739]">
                <img
                  src={heroStudioImg}
                  alt={`${BRAND_CONFIG.founder} - ARS Creation Studio`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold text-lg">{BRAND_CONFIG.founder}</div>
                  <div className="text-xs text-[#00CFFF]">{BRAND_CONFIG.founderRole}, ARS Creation</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#E100FF] uppercase tracking-wider">
                Founder's Vision
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                "Every print is an opportunity to make a tangible connection."
              </h2>
              <p className="text-sm leading-relaxed text-[#A2A9B8]">
                ARS Creation was established by <span className="text-white font-semibold">{BRAND_CONFIG.founder}</span> with a clear conviction: in an increasingly screen-dominated world, high-quality tactile artifacts hold irreplaceable emotional and commercial value.
              </p>
              <p className="text-sm leading-relaxed text-[#868ea2]">
                Whether it is the weight of a 400 GSM velvet visiting card exchanged during an important business handshake, or a personalized ceramic mug cherished over morning rituals, printing is not just ink on paper—it is the physical manifestation of trust and care.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(`Hello ${BRAND_CONFIG.founder}, I would like to discuss a printing project.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00CFFF] hover:text-white transition-colors"
                >
                  <span>Connect with Tejas on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-[#090b12] border border-[#161a28]">
            <Target className="w-8 h-8 text-[#00CFFF] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Our Mission</h3>
            <p className="text-xs text-[#828a9c] leading-relaxed">
              To deliver precision printing and bespoke personalization with transparent pricing, uncompromising material standards, and responsive customer consultation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090b12] border border-[#161a28]">
            <Heart className="w-8 h-8 text-[#E100FF] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">What We Create</h3>
            <p className="text-xs text-[#828a9c] leading-relaxed">
              Business stationery, luxury packaging boxes, personalized mugs, custom bio-washed apparel, acrylic photo frames, and branded corporate onboarding kits.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090b12] border border-[#161a28]">
            <Users className="w-8 h-8 text-[#7B2CFF] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Who We Serve</h3>
            <p className="text-xs text-[#828a9c] leading-relaxed">
              From creative individuals seeking heartfelt one-off custom gifts to fast-scaling startups and enterprises requiring recurring commercial volume prints.
            </p>
          </div>
        </div>

        {/* Approach to Quality */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#090b12] border border-[#171c2b] text-center space-y-6 mb-16">
          <ShieldCheck className="w-10 h-10 text-[#00CFFF] mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Our Approach to Craftsmanship
          </h2>
          <p className="text-sm text-[#8c94a6] leading-relaxed max-w-2xl mx-auto">
            We don't send files blindly to high-speed presses. Every incoming artwork undergoes pre-flight review—checking bleeds, image DPI, RGB to CMYK color profile shifts, and font vectorization to prevent costly defects before production begins.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActivePage('shop')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
            >
              Browse Our Creations
            </button>
            <button
              onClick={() => setActivePage('bulk-orders')}
              className="px-6 py-3 rounded-xl bg-[#141825] text-white text-xs font-semibold hover:bg-[#1d2336] border border-[#242b3e] transition-colors"
            >
              Request Bulk Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
