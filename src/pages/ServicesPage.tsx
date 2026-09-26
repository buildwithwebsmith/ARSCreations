import React from 'react';
import { Layers, Sparkles, Flame, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { getWhatsAppUrl } from '../lib/brandConfig';

export const ServicesPage: React.FC = () => {
  const { setActivePage, navigateToCategory } = useShop();

  const services = [
    {
      title: 'UV Flatbed Printing',
      substrate: 'Acrylic, Wood, Metal, Leather, PVC',
      desc: 'Instant UV light curing produces crisp, scratch-resistant photographic prints directly onto rigid flat surfaces with zero dry-time and vibrant colors.'
    },
    {
      title: 'Dye Sublimation Transfer',
      substrate: 'Ceramic Mugs, Flasks, Coasters, Mousepads',
      desc: 'High heat & pressure infuse gaseous dye into polymer surfaces, guaranteeing dishwasher-safe, scratch-proof drinkware that will never peel or crack.'
    },
    {
      title: 'Direct-to-Film (DTF) Textile Printing',
      substrate: '100% Cotton, Poly-Blends, Hoodies, Canvas Bags',
      desc: 'Ultra-stretchable, full-color transfers with vivid whites that fuse deeply with bio-washed cotton, resisting cracking across 50+ wash cycles.'
    },
    {
      title: 'Metallic Foil Stamping & Embossing',
      substrate: '400 GSM Cards, Packaging, Wedding Invites',
      desc: 'Thermal brass dies apply gleaming gold, rose gold, silver, or holographic foils alongside blind embossing for unmatched luxury tactile prestige.'
    },
    {
      title: 'Spot UV & Velvet Matte Lamination',
      substrate: 'Visiting Cards, Brochures, Product Sleeves',
      desc: 'Contrast a silky smooth soft-touch matte base against high-gloss raised Spot UV clear coat on your logo for dramatic visual impact.'
    },
    {
      title: 'Precision Contour Die-Cutting',
      substrate: 'Vinyl Stickers, Rigid Boxes, Hang Tags',
      desc: 'Digital blade cutting creates clean bespoke silhouette stickers and custom interlocking boxes without expensive traditional steel die molds.'
    }
  ];

  return (
    <div className="py-12 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Craftsmanship</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Custom Printing Capabilities
          </h1>
          <p className="text-xs sm:text-sm text-[#8c94a6] mt-2">
            Explore the state-of-the-art printing methods, premium finishes, and durable substrates powering every ARS Creation order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090c14] border border-[#181d2c] hover:border-[#2b354d] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-bold text-[#00CFFF] uppercase tracking-wider mb-2">
                  {srv.substrate}
                </div>
                <h2 className="text-lg font-bold text-white mb-2">{srv.title}</h2>
                <p className="text-xs text-[#828a9e] leading-relaxed">{srv.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#141724] flex items-center justify-between">
                <button
                  onClick={() => setActivePage('shop')}
                  className="text-xs font-semibold text-[#00CFFF] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>View Applicable Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#121626] to-[#0d0f18] border border-[#21273d] text-center space-y-4">
          <h3 className="text-xl font-bold text-white font-display">
            Have a Bespoke Substrate or Custom Requirement?
          </h3>
          <p className="text-xs text-[#8b93a6] max-w-md mx-auto">
            From special metallic pantone inks to laser-engraved acrylic signage, our production team is ready to assist.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <a
              href={getWhatsAppUrl('Hello ARS Creation, I need a consultation regarding custom printing services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20be5a] flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
