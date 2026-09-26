import React from 'react';
import { ShieldCheck, Palette, Briefcase, Layers, MessageSquareText, HeartHandshake } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const cards = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00CFFF]" />,
      title: 'Quality-Focused Printing',
      description:
        'We prioritize rich ink saturation, calibrated CMYK color profiles, and robust substrates like 400 GSM art card and bio-washed cotton fabrics.'
    },
    {
      icon: <Palette className="w-6 h-6 text-[#E100FF]" />,
      title: 'Creative Customization',
      description:
        'Whether printing a personal photograph on a magic mug or foil stamping a startup wordmark, every piece is tailored with meticulous attention.'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#7B2CFF]" />,
      title: 'Personal & Business Solutions',
      description:
        'We cater equally to individual gifting needs and high-volume corporate stationery, employee onboarding kits, and brand packaging.'
    },
    {
      icon: <Layers className="w-6 h-6 text-[#FFD21F]" />,
      title: 'Bulk Order Support',
      description:
        'Transparent wholesale volume slabs, digital mockups for sample approval, and responsive assistance for events and retail branding.'
    },
    {
      icon: <MessageSquareText className="w-6 h-6 text-[#00CFFF]" />,
      title: 'Transparent Communication',
      description:
        'Direct WhatsApp and email channels with our printing specialists to verify artwork dimensions, file formats, and order progress.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#FF4B55]" />,
      title: 'Customer-Centric Service',
      description:
        'We inspect files for bleed, safe zones, and print resolution before putting ink to paper, ensuring your physical output matches your vision.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#07080d] border-b border-[#141622]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-2">
            The ARS Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
            Why Choose ARS Creation?
          </h2>
          <p className="text-xs sm:text-sm text-[#878fa2] mt-3 leading-relaxed">
            Craftsmanship, technical clarity, and dependable printing tailored to help you make enduring impressions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0b0e17] border border-[#171c2b] hover:border-[#2b334a] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#121624] border border-[#1f2537] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00CFFF] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#828a9c] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
