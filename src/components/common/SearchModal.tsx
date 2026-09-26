import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToProduct } = useShop();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const query = searchTerm.toLowerCase();
    return PRODUCTS.filter(
      p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query)
    ).slice(0, 6);
  }, [searchTerm]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl bg-[#0d0f17] border border-[#22283a] rounded-2xl shadow-2xl overflow-hidden">
        {/* Search input bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#1c2233]">
          <Search className="w-5 h-5 text-[#00CFFF] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search visiting cards, custom mugs, t-shirts, packaging..."
            className="w-full bg-transparent text-white text-base focus:outline-none placeholder-[#676e82]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#676e82] hover:text-white p-1 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2.5 py-1 text-xs font-semibold text-[#8a91a5] hover:text-white bg-[#161a27] rounded-md transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {searchTerm.trim() === '' ? (
            <div className="py-6 px-2 text-center text-xs text-[#6e768b]">
              Type product name or category to view instant suggestions.
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {['Visiting Cards', 'Personalized Mugs', 'Bio-Washed T-Shirts', 'Rigid Boxes', 'Vinyl Stickers'].map(
                  term => (
                    <button
                      key={term}
                      onClick={() => setSearchTerm(term)}
                      className="px-2.5 py-1 rounded-md bg-[#131623] hover:bg-[#1c2033] text-[#A2A9B8] hover:text-white text-xs transition-colors flex items-center gap-1.5"
                    >
                      <Tag className="w-3 h-3 text-[#E100FF]" />
                      <span>{term}</span>
                    </button>
                  )
                )}
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#7e859a]">
              No products found matching "<span className="text-white font-medium">{searchTerm}</span>".
              <p className="text-xs text-[#585e72] mt-1">Try another keyword or request a custom quote.</p>
            </div>
          ) : (
            filteredProducts.map(prod => (
              <div
                key={prod.id}
                onClick={() => {
                  navigateToProduct(prod.id);
                  setIsSearchOpen(false);
                }}
                className="flex items-center justify-between p-3 rounded-xl bg-[#111420] hover:bg-[#181d2e] border border-transparent hover:border-[#272f48] cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover bg-black/50 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs text-[#00CFFF] font-medium uppercase tracking-wider">
                      {prod.category}
                    </div>
                    <div className="text-sm font-semibold text-white truncate group-hover:text-[#00CFFF] transition-colors">
                      {prod.name}
                    </div>
                    <div className="text-xs text-[#828a9e]">
                      Starts at ₹{prod.startingPrice}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#61687d] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
