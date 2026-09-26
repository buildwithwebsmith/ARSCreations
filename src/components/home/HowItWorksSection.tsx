import React from 'react';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/brandConfig';
import { useShop } from '../../context/ShopContext';

export const HowItWorksSection: React.FC = () => {
  const { setActivePage } = useShop();

  const steps = [
    {
      step: '01',
      title: 'Choose Your Product',
      desc: 'Browse our catalog of visiting cards, personalized mugs, custom apparel, packaging boxes, or photo frames.'
    },
    {
      step: '02',
      title: 'Share Your Design or Specs',
      desc: 'Upload your print-ready file, enter your custom names/quotes, or send your high-resolution logos directly.'
    },
    {
      step: '03',
      title: 'We Create Your Order',
      desc: 'Our studio team verifies bleed margins, pre-flights your artwork, and produces your order with precision check.'
    },
    {
      step: '04',
      title: 'Receive Your Finished Product',
      desc: 'Securely packaged and dispatched with express pan-India courier delivery straight to your doorstep.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#050505] border-b border-[#141622]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-2">
            Seamless Experience
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-[#878fa2] mt-3 leading-relaxed">
            From initial concept to your hands in four straightforward steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090b12] border border-[#171b29] hover:border-[#2b334a] transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-extrabold text-[#22283a] font-display mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#828a9c] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#131622] flex items-center gap-1 text-[11px] text-[#00CFFF]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Step</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Support Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b0e18] border border-[#1b2234] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-bold text-white">Need help preparing your design or custom dimensions?</div>
            <div className="text-xs text-[#80889c]">
              Our design team can review your artwork, suggest proper bleed formats, or draft a digital mockup.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl('Hello ARS Creation, I need design assistance for my printing order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={() => setActivePage('contact')}
              className="px-4 py-2.5 rounded-lg bg-[#141825] hover:bg-[#1b2031] text-white text-xs font-semibold border border-[#23293e] transition-colors whitespace-nowrap"
            >
              Contact Studio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
