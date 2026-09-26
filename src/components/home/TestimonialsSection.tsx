import React from 'react';
import { Star, Quote, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#07080d] border-b border-[#141622]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#7B2CFF] uppercase tracking-widest mb-2">
            Client Impressions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
            Customer Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-[#878fa2] mt-3 leading-relaxed">
            Reflecting our dedication to print sharpness, tactile finishes, and attentive customer service.
          </p>

          {/* Transparency Disclaimer */}
          <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-[#131624] border border-[#212739] text-[11px] text-[#868ea2]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span>Sample presentation testimonials representing typical client orders.</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map(item => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#0a0d15] border border-[#171b29] hover:border-[#272f44] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#FFD21F]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#242b3d]" />
                </div>

                <p className="text-xs sm:text-sm text-[#C0C6D4] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#141724]">
                <div className="text-xs font-bold text-white">
                  {item.author}
                </div>
                <div className="text-[11px] text-[#7A8294] mt-0.5">
                  {item.role} · {item.category}
                </div>
                {item.productOrdered && (
                  <div className="text-[10px] text-[#00CFFF] mt-1">
                    Ordered: {item.productOrdered}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
