import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../../lib/brandConfig';
import visitingCardsImg from '../../assets/images/product_visiting_cards_1790182481657.jpg';
import mugsImg from '../../assets/images/product_custom_mugs_1790182493549.jpg';
import apparelImg from '../../assets/images/product_printed_tshirts_1790182508915.jpg';
import packagingImg from '../../assets/images/product_packaging_boxes_1790182522160.jpg';
import heroStudioImg from '../../assets/images/hero_printing_studio_1790182467810.jpg';

export const InstagramShowcaseSection: React.FC = () => {
  const showcaseItems = [
    {
      image: visitingCardsImg,
      tag: '#VisitingCards',
      title: 'Velvet Matte & Silver Foil'
    },
    {
      image: mugsImg,
      tag: '#PersonalizedGifts',
      title: 'Sublimated Ceramic Mugs'
    },
    {
      image: apparelImg,
      tag: '#CustomApparel',
      title: '220 GSM DTF Cotton Tees'
    },
    {
      image: packagingImg,
      tag: '#BrandPackaging',
      title: 'Custom Magnetic Rigid Boxes'
    },
    {
      image: heroStudioImg,
      tag: '#StudioLife',
      title: 'CMYK Color Accuracy Check'
    },
    {
      image: visitingCardsImg,
      tag: '#WeddingStationery',
      title: 'Artisanal Deckle Edge Cards'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#050505] border-b border-[#141622]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold text-[#E100FF] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5" />
              <span>{BRAND_CONFIG.instagramHandle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
              Follow Our Creative Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#878fa2] mt-2 max-w-xl">
              Discover printing ideas, personalized creations, behind-the-scenes moments, and more.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] hover:from-[#f02aff] hover:to-[#8f47ff] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md self-start md:self-auto"
          >
            <span>Follow Us on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6-Item Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {showcaseItems.map((item, idx) => (
            <a
              key={idx}
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#0c0e16] border border-[#1b2030] block"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <span className="text-[10px] font-bold text-[#00CFFF]">{item.tag}</span>
                <span className="text-xs font-semibold text-white leading-tight mt-0.5">{item.title}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4 text-center text-[11px] text-[#697084]">
          * Sample visual previews curated to showcase ARS Creation craftsmanship. Connect on Instagram for daily studio stories.
        </div>
      </div>
    </section>
  );
};
