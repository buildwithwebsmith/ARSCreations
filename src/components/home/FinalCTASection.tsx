import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { getWhatsAppUrl } from '../../lib/brandConfig';

export const FinalCTASection: React.FC = () => {
  const { setActivePage } = useShop();

  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E100FF]/5 via-[#7B2CFF]/10 to-[#00CFFF]/5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
        <div className="inline-block text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-3">
          Start Your Creation
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
          Let's Create Something Remarkable.
        </h2>

        <p className="text-sm sm:text-base text-[#9AA2B5] max-w-xl mx-auto leading-relaxed mb-8">
          Have an idea in mind? We're here to help turn it into something tangible. Whether it's a single personalized gift or five thousand business cards, we are ready to craft it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setActivePage('shop')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider shadow-xl shadow-purple-900/40 flex items-center justify-center gap-2 transition-all"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl('Hello ARS Creation, I have an idea in mind and would like to discuss print options.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Talk to Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
