import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../../data/faqs';
import { getWhatsAppUrl } from '../../lib/brandConfig';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-16 md:py-24 bg-[#050505] border-b border-[#141622]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#878fa2] mt-2 max-w-xl mx-auto">
            Everything you need to know about customizing, ordering, bulk rates, and receiving your prints.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#090b12] border border-[#171c2b] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-[#00CFFF] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#858da1] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#00CFFF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#9da5b7] leading-relaxed border-t border-[#131622]/60 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Microcopy CTA */}
        <div className="mt-10 p-4 rounded-xl bg-[#0c0f18] border border-[#1a1f2f] text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-[#8c94a6]">
            Have a question that is not listed here? Our team is always happy to assist.
          </span>
          <a
            href={getWhatsAppUrl('Hello ARS Creation, I have a specific question regarding an upcoming print order.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-semibold whitespace-nowrap transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
