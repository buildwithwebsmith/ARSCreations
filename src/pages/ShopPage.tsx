import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, X, Tag } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/shop/ProductCard';
import { useShop } from '../context/ShopContext';

export const ShopPage: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useShop();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [customizableOnly, setCustomizableOnly] = useState(false);
  const [internalSearch, setInternalSearch] = useState('');

  // Filtered & Sorted Products
  const processedProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Category Filter
    if (selectedCategory) {
      list = list.filter(p => p.categorySlug === selectedCategory);
    }

    // In-page search
    if (internalSearch.trim()) {
      const q = internalSearch.toLowerCase();
      list = list.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    // Toggles
    if (inStockOnly) {
      list = list.filter(p => p.inStock);
    }
    if (customizableOnly) {
      list = list.filter(p => p.isCustomizable);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.startingPrice - b.startingPrice);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.startingPrice - a.startingPrice);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, internalSearch, inStockOnly, customizableOnly, sortBy]);

  const activeCategoryObj = CATEGORIES.find(c => c.slug === selectedCategory);

  return (
    <div className="py-10 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mb-1">
            Print & Custom Store
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            {activeCategoryObj ? activeCategoryObj.name : 'All Printing Products'}
          </h1>
          <p className="text-xs sm:text-sm text-[#8a92a5] mt-2 max-w-2xl">
            {activeCategoryObj
              ? activeCategoryObj.description
              : 'Browse our full collection of premium visiting cards, personalized drinkware, custom printed apparel, luxury rigid boxes, and corporate merchandise.'}
          </p>
        </div>

        {/* Filter and Control Bar */}
        <div className="p-4 rounded-2xl bg-[#0a0d15] border border-[#161b29] mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                !selectedCategory
                  ? 'bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white shadow-sm'
                  : 'bg-[#121522] text-[#868ea2] hover:text-white border border-[#1d2336]'
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>

            {CATEGORIES.slice(0, 6).map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white shadow-sm'
                    : 'bg-[#121522] text-[#868ea2] hover:text-white border border-[#1d2336]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Right Controls: Sort and In-page Search */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={internalSearch}
              onChange={e => setInternalSearch(e.target.value)}
              placeholder="Filter by name..."
              className="text-xs px-3 py-1.5 rounded-lg bg-[#121522] border border-[#1e2538] text-white placeholder-[#5c6375] focus:outline-none focus:border-[#00CFFF]"
            />

            <div className="flex items-center gap-1.5 text-xs text-[#8991a5]">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-[#121522] border border-[#1e2538] text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#00CFFF]"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {selectedCategory && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-[#7A8294]">Active Filter:</span>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#161a29] text-[#00CFFF] text-xs border border-[#232b42]">
              <span>Category: {activeCategoryObj?.name}</span>
              <button
                onClick={() => setSelectedCategory(null)}
                className="hover:text-white ml-1"
                aria-label="Clear category filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {processedProducts.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <p className="text-base font-semibold text-white">No products found</p>
            <p className="text-xs text-[#7b8398]">
              Try clearing your search keyword or switching category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setInternalSearch('');
              }}
              className="px-4 py-2 rounded-lg bg-[#141826] text-white text-xs font-semibold hover:bg-[#1f253a] border border-[#22293e]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {processedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
