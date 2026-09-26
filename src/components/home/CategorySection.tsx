import React from 'react';
import { ArrowRight, Layers, CreditCard, Coffee, Shirt, Package, Bookmark, Gift, Image, FileText, Flag, Sparkles, Award, Calendar, Camera } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { useShop } from '../../context/ShopContext';

export const CategorySection: React.FC = () => {
  const { navigateToCategory } = useShop();

  const iconMap: Record<string, React.ReactNode> = {
    'visiting-cards': <CreditCard className="w-5 h-5" />,
    'business-cards': <Layers className="w-5 h-5" />,
    'personalized-mugs': <Coffee className="w-5 h-5" />,
    'custom-t-shirts': <Shirt className="w-5 h-5" />,
    'packaging-and-branding': <Package className="w-5 h-5" />,
    'stickers-and-labels': <Bookmark className="w-5 h-5" />,
    'corporate-gifts': <Gift className="w-5 h-5" />,
    'photo-frames': <Image className="w-5 h-5" />,
    'flyers-and-brochures': <FileText className="w-5 h-5" />,
    'posters-and-banners': <Flag className="w-5 h-5" />,
    'wedding-invitations': <Sparkles className="w-5 h-5" />,
    'certificates-and-awards': <Award className="w-5 h-5" />,
    'calendars-and-diaries': <Calendar className="w-5 h-5" />,
    'custom-photo-products': <Camera className="w-5 h-5" />
  };

  return (
    <section className="py-16 md:py-24 bg-[#050505] border-b border-[#141622]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-2">
              Catalog & Collections
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8c94a6] max-w-md">
            Explore our complete suite of bespoke printing, packaging, and custom gifting solutions designed for individuals and enterprises.
          </p>
        </div>

        {/* Categories Grid (14 categories) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map(category => {
            const icon = iconMap[category.slug] || <Layers className="w-5 h-5" />;

            return (
              <div
                key={category.id}
                onClick={() => navigateToCategory(category.slug)}
                className="group relative p-5 rounded-2xl bg-[#0a0c13] border border-[#161a26] hover:border-[#2b334a] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#121624] group-hover:bg-gradient-to-r group-hover:from-[#E100FF]/20 group-hover:to-[#00CFFF]/20 text-[#00CFFF] group-hover:text-white border border-[#1d2334] flex items-center justify-center transition-all">
                      {icon}
                    </div>
                    <span className="text-[11px] font-medium text-[#646c82] tabular-nums">
                      {category.itemCount} variations
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#00CFFF] transition-colors">
                    {category.name}
                  </h3>

                  <p className="text-xs text-[#828a9c] mt-2 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#141722] flex items-center text-xs font-semibold text-[#A2A9B8] group-hover:text-white transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1 text-[#00CFFF]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
