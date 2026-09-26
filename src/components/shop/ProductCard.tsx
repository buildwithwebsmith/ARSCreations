import React from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    navigateToProduct,
    openQuickView,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useShop();

  const isWished = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      productId: product.id,
      product,
      quantity: 1,
      selectedSize: product.customizationOptions.sizes?.[0]?.name,
      selectedFinish: product.customizationOptions.finishes?.[0]?.name,
      unitPrice: product.startingPrice
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div
      onClick={() => navigateToProduct(product.id)}
      className="group relative flex flex-col rounded-2xl bg-[#0d0f17] border border-[#1b1f2d] hover:border-[#2e354c] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 cursor-pointer"
    >
      {/* Visual Asset Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#06070a]">
        <img
          src={product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Fallback Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Badge (Single quiet label) */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#0a0c14]/90 text-[#00CFFF] border border-[#00CFFF]/30 backdrop-blur-md">
            {product.badge}
          </div>
        )}

        {/* Action Overlay Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleWishlistToggle}
            aria-label="Toggle Wishlist"
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${
              isWished
                ? 'bg-[#E100FF] text-white shadow-md shadow-pink-900/40'
                : 'bg-[#090b12]/80 text-[#8b93a6] hover:text-white border border-[#23293e]'
            }`}
          >
            <Heart className={`w-4 h-4 ${isWished ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleQuickView}
            aria-label="Quick View"
            className="w-8 h-8 rounded-full bg-[#090b12]/80 text-[#8b93a6] hover:text-white border border-[#23293e] flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#798196] mb-1.5">
            <span className="text-[11px] font-semibold text-[#00CFFF] uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center text-[#FFD21F] text-[11px]">
              <Star className="w-3 h-3 fill-current mr-1" />
              <span className="font-semibold text-white">{product.rating}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#00CFFF] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#8c94a6] line-clamp-2 mt-1.5 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price and Cart CTA */}
        <div className="pt-4 mt-3 border-t border-[#171a26] flex items-center justify-between">
          <div>
            <div className="text-[10px] text-[#71788c] uppercase tracking-wider">Starting at</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold text-white tabular-nums">
                ₹{product.startingPrice.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#596073] line-through tabular-nums">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleQuickAdd}
            className="p-2.5 rounded-lg bg-[#151928] hover:bg-gradient-to-r hover:from-[#E100FF] hover:to-[#7B2CFF] text-[#00CFFF] hover:text-white border border-[#262e45] hover:border-transparent transition-all shadow-sm group/btn"
            title="Add to Cart"
            aria-label={`Add ${product.name} to Cart`}
          >
            <ShoppingBag className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
};
