import React, { useState, useMemo } from 'react';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { getWhatsAppUrl } from '../lib/brandConfig';

export const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return FAQS;
    const q = searchTerm.toLowerCase();
    return FAQS.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
  }, [searchTerm]);

  return (
    <div className="py-12 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Customer Assistance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-[#8a92a5] mt-2">
            Detailed guidance on order placement, design uploads, proofing, bulk rates, and doorstep dispatch.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-[#798194] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search FAQs (e.g. bulk, delivery, file format, WhatsApp, pricing)..."
            className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl bg-[#090b12] border border-[#1b2132] text-white focus:outline-none focus:border-[#00CFFF]"
          />
        </div>

        {/* FAQs list */}
        <div className="space-y-3">
          {filteredFaqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#090b12] border border-[#161a28] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-[#00CFFF] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#7c8496] shrink-0 transition-transform duration-300 ${
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

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b0e18] border border-[#1b2234] text-center space-y-3">
          <h3 className="text-base font-bold text-white">Still have an unanswered question?</h3>
          <p className="text-xs text-[#828a9c] max-w-md mx-auto">
            Our customer service and technical printing specialists are readily available on WhatsApp for personalized support.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl('Hello ARS Creation, I have an unanswered query regarding printing.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20be5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
