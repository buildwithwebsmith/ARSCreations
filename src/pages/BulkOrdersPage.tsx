import React, { useState } from 'react';
import { Layers, ShieldCheck, CheckCircle2, MessageCircle, FileSpreadsheet, Send, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/brandConfig';
import { useShop } from '../context/ShopContext';

export const BulkOrdersPage: React.FC = () => {
  const { showToast } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: 'Visiting Cards & Corporate Stationery',
    quantity: '1000',
    deliveryCity: '',
    notes: ''
  });

  const slabs = [
    { tier: 'Starter Bulk', qty: '100 - 499 units', discount: '10% OFF', perk: 'Free Digital Proof' },
    { tier: 'Commercial Tier', qty: '500 - 1,999 units', discount: '20% OFF', perk: 'Priority Press Scheduling' },
    { tier: 'Enterprise Volume', qty: '2,000+ units', discount: '30% - 40% OFF', perk: 'Custom Packaging + Dedicated AM' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Bulk quote inquiry submitted successfully!', 'success');
  };

  return (
    <div className="py-12 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Commercial & Wholesale Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Bulk Orders & Corporate Quotations
          </h1>
          <p className="text-xs sm:text-sm text-[#8c94a6] mt-2">
            Volume-discounted pricing, GST compliance, customized packaging, and pre-production physical samples.
          </p>
        </div>

        {/* Wholesale Tier Slabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {slabs.map((slab, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090c14] border border-[#1b2132] hover:border-[#2f3954] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#00CFFF] uppercase tracking-wider">
                  {slab.tier}
                </span>
                <div className="text-2xl font-black text-white mt-1 tabular-nums">
                  {slab.discount}
                </div>
                <div className="text-xs text-[#8c94a6] mt-1">{slab.qty}</div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#151926] text-xs text-[#C2C8D6] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>{slab.perk}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Quote Form Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#0a0d15] border border-[#1b2132] p-8 sm:p-10 shadow-2xl">
          <h2 className="text-xl font-bold text-white font-display mb-1">
            Request an Official Quotation
          </h2>
          <p className="text-xs text-[#828a9e] mb-6">
            Share your requirements for a comprehensive proposal with volume breaks and estimated dispatch timeline.
          </p>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Quotation Request Logged!</h3>
              <p className="text-xs text-[#8c94a6] max-w-md mx-auto">
                Thank you, {formData.name}. Our corporate accounts manager will prepare an estimate for {formData.quantity} units of {formData.productCategory}.
              </p>
              <div className="pt-3">
                <a
                  href={getWhatsAppUrl(`Hello ARS Creation, I submitted a bulk order request for ${formData.quantity} units of ${formData.productCategory}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Expedite via WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A2A9B8] mb-1 font-semibold">Contact Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kulkarni"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111422] border border-[#1e2538] text-white focus:outline-none focus:border-[#00CFFF]"
                  />
                </div>

                <div>
                  <label className="block text-[#A2A9B8] mb-1 font-semibold">Company / Brand (Optional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. TechCorp Innovations Pvt Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111422] border border-[#1e2538] text-white focus:outline-none focus:border-[#00CFFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A2A9B8] mb-1 font-semibold">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ramesh@techcorp.in"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111422] border border-[#1e2538] text-white focus:outline-none focus:border-[#00CFFF]"
                  />
                </div>

                <div>
                  <label className="block text-[#A2A9B8] mb-1 font-semibold">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 00000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111422] border border-[#1e2538] text-white focus:outline-none focus:border-[#00CFFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A2A9B8] mb-1 font-semibold">Category Required</label>
                  <select
                    value={formData.productCategory}
                    onChange={e => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111422] border border-[#1e2538] text-white focus:outline-none focus:border-[#00CFFF]"
                  >
                    <option>Visiting Cards & Corporate Stationery</option>
                    <option>Custom Drinkware & Sublimation Mugs</option>
                    <option>Custom Cotton T-Shirts & Polos</option>
                    <option>Rigid Packaging & Product Boxes</option>
                    <option>Waterproof Stickers & Product Labels</option>
                    <option>Employee Onboarding Hampers</option>
                    <option>Event Brochures & Roll-up Standees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#A2A9B8] mb-1 font-semibold">Required Quantity</label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 1000 units"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111422] border border-[#1e2538] text-white focus:outline-none focus:border-[#00CFFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#A2A9B8] mb-1 font-semibold">
                  Specifications & Delivery City
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention delivery pin code/city, target deadline, paper GSM, foil preferences..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111422] border border-[#1e2538] text-white focus:outline-none focus:border-[#00CFFF]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] text-white font-bold uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Bulk Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
