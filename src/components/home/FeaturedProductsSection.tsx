import React, { useState, useMemo } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../shop/ProductCard';
import { useShop } from '../../context/ShopContext';

export const FeaturedProductsSection: React.FC = () => {
  const { setActivePage } = useShop();
  const [activeFilter, setActiveFilter] = useState<'all' | 'cards' | 'mugs' | 'apparel' | 'packaging' | 'corporate'>('all');

  const filterTabs = [
    { id: 'all' as const, label: 'All Products' },
    { id: 'cards' as const, label: 'Visiting Cards' },
    { id: 'mugs' as const, label: 'Personalized Mugs' },
    { id: 'apparel' as const, label: 'Custom Apparel' },
    { id: 'packaging' as const, label: 'Packaging & Labels' },
    { id: 'corporate' as const, label: 'Corporate Gifts' }
  ];

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return PRODUCTS;
    if (activeFilter === 'cards') {
      return PRODUCTS.filter(p => p.categorySlug === 'visiting-cards' || p.categorySlug === 'business-cards');
    }
    if (activeFilter === 'mugs') {
      return PRODUCTS.filter(p => p.categorySlug === 'personalized-mugs');
    }
    if (activeFilter === 'apparel') {
      return PRODUCTS.filter(p => p.categorySlug === 'custom-t-shirts');
    }
    if (activeFilter === 'packaging') {
      return PRODUCTS.filter(
        p => p.categorySlug === 'packaging-and-branding' || p.categorySlug === 'stickers-and-labels'
      );
    }
    if (activeFilter === 'corporate') {
      return PRODUCTS.filter(p => p.categorySlug === 'corporate-gifts');
    }
    return PRODUCTS;
  }, [activeFilter]);

  return (
    <section className="py-16 md:py-24 bg-[#050505] border-b border-[#141622]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold text-[#E100FF] uppercase tracking-widest mb-2">
              Curated Masterpieces
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
              Featured Products
            </h2>
          </div>

          <button
            onClick={() => setActivePage('shop')}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00CFFF] hover:text-white transition-colors"
          >
            <span>View Complete Shop ({PRODUCTS.length} Products)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Controls (Segmented bar complying with frontend design skill) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-[#E100FF]/20 to-[#00CFFF]/20 text-white border border-[#00CFFF]/40 shadow-sm'
                  : 'bg-[#0e111a] text-[#868ea2] hover:text-white border border-[#1b2030]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid (12 sample products) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActivePage('shop')}
            className="px-8 py-3.5 rounded-xl bg-[#111420] hover:bg-[#181d2e] border border-[#232a3d] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#00CFFF]" />
            <span>Explore All {PRODUCTS.length} Print Products</span>
          </button>
        </div>
      </div>
    </section>
  );
};
