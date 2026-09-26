import React from 'react';
import { ArrowRight, Building2, Layers, PackageCheck, Users2, FileSpreadsheet, ShieldCheck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import packagingImg from '../../assets/images/product_packaging_boxes_1790182522160.jpg';
import cardsImg from '../../assets/images/product_visiting_cards_1790182481657.jpg';

export const BusinessCorporateSection: React.FC = () => {
  const { setActivePage, navigateToCategory } = useShop();

  const b2bServices = [
    {
      title: 'Visiting & Business Cards',
      desc: '400 GSM velvet matte, Spot UV, gold & silver foil stamping.'
    },
    {
      title: 'Employee Onboarding Welcome Kits',
      desc: 'Turnkey luxury hampers with engraved flasks, diaries & pens.'
    },
    {
      title: 'Custom Product Packaging & Boxes',
      desc: 'Rigid magnetic gift boxes, mailers & custom tissue wrapping.'
    },
    {
      title: 'Corporate Uniforms & Polo T-Shirts',
      desc: '260 GSM pique cotton with clean Japanese embroidery.'
    },
    {
      title: 'Waterproof Stickers & Roll Labels',
      desc: 'Custom contour die-cut labels for packaging and D2C bottles.'
    },
    {
      title: 'Marketing Collateral & Banners',
      desc: 'Tri-fold brochures, flyers, roll-up standees & event backdrops.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#07090e] border-b border-[#141622]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: B2B Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00CFFF]">
              <Building2 className="w-3.5 h-3.5" />
              <span>Corporate & B2B Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-display">
              Your Brand Deserves to Be Seen.
            </h2>

            <p className="text-sm sm:text-base text-[#9AA2B3] leading-relaxed">
              From fast-growing startups preparing for their first trade expo to corporate enterprises needing hundreds of executive employee welcome kits, ARS Creation delivers consistent color accuracy, high-grade materials, and reliable turnaround.
            </p>

            {/* B2B Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {b2bServices.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0c0f18] border border-[#181d2c] hover:border-[#273046] transition-colors"
                >
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CFFF]" />
                    <span>{srv.title}</span>
                  </div>
                  <div className="text-[11px] text-[#7A8294] mt-1 leading-snug">
                    {srv.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActivePage('services')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00CFFF] to-[#7B2CFF] hover:from-[#21d6ff] hover:to-[#8c4bff] text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all"
              >
                <span>Explore Business Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActivePage('bulk-orders')}
                className="px-6 py-3.5 rounded-xl bg-[#121624] hover:bg-[#191f33] border border-[#20273c] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Request Bulk Quote</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Mockup Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#0c0e16] border border-[#1b2030] shadow-2xl group">
              <img
                src={packagingImg}
                alt="ARS Creation Custom Rigid Luxury Packaging"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Custom Rigid Packaging & Boxes</div>
                  <div className="text-[11px] text-[#8e96a8]">Foil embossed branding with magnetic closures</div>
                </div>
                <button
                  onClick={() => navigateToCategory('packaging-and-branding')}
                  className="px-3 py-1.5 rounded-lg bg-[#00CFFF]/20 text-[#00CFFF] text-xs font-semibold hover:bg-[#00CFFF] hover:text-black transition-colors"
                >
                  View Boxes
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c0f18] border border-[#181d2c] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">GST Invoicing & Tiered Volume Pricing</div>
                  <div className="text-[11px] text-[#7A8294]">Direct B2B tax invoicing with commercial volume discounts.</div>
                </div>
              </div>
              <button
                onClick={() => setActivePage('bulk-orders')}
                className="text-xs text-[#00CFFF] hover:text-white font-semibold underline underline-offset-4 whitespace-nowrap ml-3"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
