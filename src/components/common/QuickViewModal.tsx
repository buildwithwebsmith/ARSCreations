import React, { useState } from 'react';
import { X, Heart, ShoppingBag, ArrowRight, Check, Star } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateToProduct
  } = useShop();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedFinish, setSelectedFinish] = useState<string>('');
  const [customText, setCustomText] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWished = isInWishlist(product.id);

  // Calculate pricing based on options
  const basePrice = product.startingPrice;
  const sizeDelta =
    product.customizationOptions.sizes?.find(s => s.name === selectedSize)?.priceDelta || 0;
  const finishDelta =
    product.customizationOptions.finishes?.find(f => f.name === selectedFinish)?.priceDelta || 0;
  const unitPrice = basePrice + sizeDelta + finishDelta;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      product,
      quantity,
      selectedSize: selectedSize || product.customizationOptions.sizes?.[0]?.name,
      selectedFinish: selectedFinish || product.customizationOptions.finishes?.[0]?.name,
      customText: customText.trim() || undefined,
      unitPrice
    });
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#090b12] border border-[#1d2233] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-[#161a27]/80 text-[#8991a5] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media Column */}
        <div className="md:w-1/2 bg-[#050505] p-6 flex flex-col items-center justify-center relative">
          <img
            src={product.images[0]}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full max-h-64 object-contain rounded-xl"
          />
          {product.badge && (
            <div className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#E100FF]/20 text-[#E100FF] border border-[#E100FF]/30">
              {product.badge}
            </div>
          )}
        </div>

        {/* Product Details & Purchase Module */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="text-[11px] font-semibold text-[#00CFFF] uppercase tracking-wider">
              {product.category}
            </div>
            <h2 className="text-lg font-bold text-white mt-1 leading-snug">
              {product.name}
            </h2>

            <div className="flex items-center gap-2 mt-2 text-xs text-[#8991a5]">
              <div className="flex items-center text-[#FFD21F]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="ml-1 font-semibold text-white">{product.rating}</span>
              </div>
              <span>·</span>
              <span>{product.reviewsCount} sample reviews</span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-xl font-bold text-white tabular-nums">
                ₹{unitPrice.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#62687c] line-through tabular-nums">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-xs text-[#959caa] mt-2 line-clamp-2">
              {product.shortDescription}
            </p>

            {/* Customization Options */}
            {product.customizationOptions.sizes && (
              <div className="mt-4">
                <label className="text-[11px] font-semibold text-[#A2A9B8] block mb-1.5">
                  Select Size / Dimensions
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {product.customizationOptions.sizes.map(sz => (
                    <button
                      key={sz.name}
                      onClick={() => setSelectedSize(sz.name)}
                      className={`text-xs px-2.5 py-1 rounded-md border transition-all ${
                        selectedSize === sz.name || (!selectedSize && sz === product.customizationOptions.sizes![0])
                          ? 'border-[#00CFFF] bg-[#00CFFF]/10 text-white'
                          : 'border-[#1f2538] text-[#8991a5] hover:border-[#38415c]'
                      }`}
                    >
                      {sz.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.customizationOptions.allowCustomText && (
              <div className="mt-3">
                <label className="text-[11px] font-semibold text-[#A2A9B8] block mb-1">
                  Custom Text or Name (Optional)
                </label>
                <input
                  type="text"
                  value={customText}
                  onChange={e => setCustomText(e.target.value)}
                  placeholder="e.g. Rahul Sharma / Company Name"
                  className="w-full text-xs px-3 py-2 rounded-lg bg-[#111420] border border-[#1e2436] text-white focus:outline-none focus:border-[#00CFFF]"
                />
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-5 mt-4 border-t border-[#171c2b] space-y-2">
            <div className="flex items-center gap-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] hover:from-[#f02aff] hover:to-[#8f47ff] text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-2.5 rounded-lg border transition-colors ${
                  isWished
                    ? 'border-[#E100FF] bg-[#E100FF]/10 text-[#E100FF]'
                    : 'border-[#1f2538] text-[#8991a5] hover:text-white'
                }`}
                title="Add to Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWished ? 'fill-current' : ''}`} />
              </button>
            </div>

            <button
              onClick={() => {
                closeQuickView();
                navigateToProduct(product.id);
              }}
              className="w-full text-center text-[11px] text-[#A0A7B8] hover:text-[#00CFFF] transition-colors py-1 flex items-center justify-center gap-1"
            >
              <span>View full product specifications & bulk slabs</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
