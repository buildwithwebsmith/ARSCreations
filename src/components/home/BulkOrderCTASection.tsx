import React, { useState } from 'react';
import { Send, Upload, CheckCircle2, MessageCircle } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { getWhatsAppUrl } from '../../lib/brandConfig';

export const BulkOrderCTASection: React.FC = () => {
  const { showToast } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'Visiting Cards (1000+ units)',
    quantity: '500',
    message: '',
    fileName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      showToast('Please fill in your name, email, and phone number.', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Bulk inquiry received! We will send a formal quote shortly.', 'success');
  };

  return (
    <section className="py-16 md:py-24 bg-[#07090f] border-b border-[#141622] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#111422] to-[#0a0c14] border border-[#21273c] p-6 sm:p-10 md:p-12 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-2">
              Wholesale & Corporate Slabs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Need Printing in Bulk?
            </h2>
            <p className="text-xs sm:text-sm text-[#8a92a5] mt-3 leading-relaxed">
              Whether you're ordering for your business, event, wedding, or retail requirements, let's create a solution that fits your needs.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 px-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Quotation Request Received!</h3>
              <p className="text-xs sm:text-sm text-[#959eb2] max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our printing specialists are reviewing your request for <span className="text-[#00CFFF]">{formData.product}</span> ({formData.quantity} units).
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-lg bg-[#151928] text-white text-xs font-semibold hover:bg-[#1f253b] border border-[#232a3f] transition-colors"
                >
                  Send Another Inquiry
                </button>
                <a
                  href={getWhatsAppUrl(`Hello ARS Creation, I just submitted a bulk quote inquiry for ${formData.product} (${formData.quantity} units).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#20be5a] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Expedite on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#A2A9B8] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Deshmukh"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#080910] border border-[#1e2436] text-white placeholder-[#5d6478] focus:outline-none focus:border-[#00CFFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#A2A9B8] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. anand@company.in"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#080910] border border-[#1e2436] text-white placeholder-[#5d6478] focus:outline-none focus:border-[#00CFFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#A2A9B8] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98220 00000"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#080910] border border-[#1e2436] text-white placeholder-[#5d6478] focus:outline-none focus:border-[#00CFFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#A2A9B8] mb-1">
                    Product Required
                  </label>
                  <select
                    value={formData.product}
                    onChange={e => setFormData({ ...formData, product: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#080910] border border-[#1e2436] text-white focus:outline-none focus:border-[#00CFFF]"
                  >
                    <option>Visiting & Business Cards (500+ units)</option>
                    <option>Custom Ceramic / Magic Mugs (25+ units)</option>
                    <option>Cotton Bio-Washed T-Shirts / Uniforms (20+ units)</option>
                    <option>Custom Rigid Packaging Boxes (100+ units)</option>
                    <option>Waterproof Vinyl Stickers & Labels (250+ units)</option>
                    <option>Employee Onboarding Welcome Kits (10+ sets)</option>
                    <option>Wedding Stationery & Royal Envelopes (100+ sets)</option>
                    <option>Brochures, Standees & Event Materials</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#A2A9B8] mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 500 pcs or 50 kits"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#080910] border border-[#1e2436] text-white placeholder-[#5d6478] focus:outline-none focus:border-[#00CFFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A2A9B8] mb-1">
                  Message / Custom Specifications
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details like preferred size, paper GSM, foil colors, deadline, or delivery city..."
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#080910] border border-[#1e2436] text-white placeholder-[#5d6478] focus:outline-none focus:border-[#00CFFF]"
                />
              </div>

              {/* Design upload mock placeholder */}
              <div className="p-3 rounded-xl bg-[#080910] border border-dashed border-[#232b3f] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#8c94a6]">
                  <Upload className="w-4 h-4 text-[#00CFFF]" />
                  <span>
                    {formData.fileName ? formData.fileName : 'Upload artwork file (PDF, AI, PSD, PNG) – Optional'}
                  </span>
                </div>
                <label className="cursor-pointer px-3 py-1 text-xs font-medium rounded-lg bg-[#141825] hover:bg-[#1d2336] text-white border border-[#22293d] transition-colors">
                  <span>Browse</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={e => {
                      if (e.target.files?.[0]) {
                        setFormData({ ...formData, fileName: e.target.files[0].name });
                        showToast(`Selected ${e.target.files[0].name}`, 'info');
                      }
                    }}
                  />
                </label>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Get a Bulk Quote</span>
                </button>

                <div className="text-[11px] text-[#6e768b] text-center sm:text-right">
                  Direct B2B Tax Invoicing · Verified Digital Proofs
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
