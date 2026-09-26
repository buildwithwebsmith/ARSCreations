import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../lib/brandConfig';
import { useShop } from '../context/ShopContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry / Custom Print',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill all required fields.', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Message sent! Our team will get back to you shortly.', 'success');
  };

  return (
    <div className="py-12 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-2">
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Contact ARS Creation
          </h1>
          <p className="text-xs sm:text-sm text-[#8a92a5] mt-2">
            Have a custom requirement, need design advice, or want to discuss bulk pricing? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#090b12] border border-[#171c2b] space-y-5">
              <h2 className="text-base font-bold text-white font-display">Studio Information</h2>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-lg bg-[#00CFFF]/10 text-[#00CFFF] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-semibold">Studio Location</div>
                  <div className="text-[#7f879b] mt-0.5 leading-relaxed">
                    {BRAND_CONFIG.addressPlaceholder}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-lg bg-[#E100FF]/10 text-[#E100FF] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <a
                    href={`mailto:${BRAND_CONFIG.emailPlaceholder}`}
                    className="text-[#7f879b] hover:text-white transition-colors block mt-0.5"
                  >
                    {BRAND_CONFIG.emailPlaceholder}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-lg bg-[#7B2CFF]/10 text-[#7B2CFF] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone Inquiries</div>
                  <a
                    href={`tel:${BRAND_CONFIG.phonePlaceholder}`}
                    className="text-[#7f879b] hover:text-white transition-colors block mt-0.5"
                  >
                    {BRAND_CONFIG.phonePlaceholder}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-lg bg-[#FFD21F]/10 text-[#FFD21F] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-semibold">Operating Hours</div>
                  <div className="text-[#7f879b] mt-0.5">
                    {BRAND_CONFIG.businessHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connects */}
            <div className="p-6 rounded-2xl bg-[#090b12] border border-[#171c2b] space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Direct Channels
              </h3>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Support</span>
              </a>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#E100FF]/15 hover:bg-[#E100FF]/25 border border-[#E100FF]/30 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E100FF]" />
                <span>Instagram: {BRAND_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090c14] border border-[#1d2336] shadow-xl">
              <h2 className="text-xl font-bold text-white font-display mb-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-[#80889c] mb-6">
                Fill in your details and requirements; our design & print coordinators will respond within 2-4 business hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
                  <p className="text-xs text-[#828a9e] max-w-sm mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. We will review your message regarding "{formData.subject}" shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-lg bg-[#141825] text-white text-xs font-semibold hover:bg-[#1f253b] border border-[#23293e]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#A2A9B8] mb-1 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Joshi"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e111a] border border-[#1d2336] text-white focus:outline-none focus:border-[#00CFFF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#A2A9B8] mb-1 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@domain.in"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e111a] border border-[#1d2336] text-white focus:outline-none focus:border-[#00CFFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#A2A9B8] mb-1 font-semibold">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98000 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e111a] border border-[#1d2336] text-white focus:outline-none focus:border-[#00CFFF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#A2A9B8] mb-1 font-semibold">
                      Subject / Requirement
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e111a] border border-[#1d2336] text-white focus:outline-none focus:border-[#00CFFF]"
                    >
                      <option>Visiting Cards & Stationery</option>
                      <option>Personalized Mugs & Gifts</option>
                      <option>Custom Printed T-Shirts & Apparel</option>
                      <option>Packaging Boxes & Labels</option>
                      <option>Bulk Corporate Order Inquiry</option>
                      <option>Custom Dimension / Special Material</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#A2A9B8] mb-1 font-semibold">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details such as quantity, artwork format, deadline, or special instructions..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e111a] border border-[#1d2336] text-white focus:outline-none focus:border-[#00CFFF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] text-white font-bold uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
