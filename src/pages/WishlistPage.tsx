import React from 'react';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const WishlistPage: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart, setActivePage } = useShop();

  const wishedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  if (wishedProducts.length === 0) {
    return (
      <div className="py-20 bg-[#050505] min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 rounded-full bg-[#10131e] border border-[#1a2032] flex items-center justify-center text-[#555d73] mb-4">
          <Heart className="w-8 h-8 text-[#E100FF]" />
        </div>
        <h1 className="text-2xl font-bold text-white font-display">Your Wishlist is Empty</h1>
        <p className="text-xs sm:text-sm text-[#7e869c] max-w-sm mt-2">
          Save your favorite customizable gifts, cards, or packaging boxes to revisit later.
        </p>
        <button
          onClick={() => setActivePage('shop')}
          className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
        >
          Explore Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#161a28]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              My Saved Items ({wishedProducts.length})
            </h1>
            <p className="text-xs text-[#828a9c] mt-1">Review saved products and add directly to your cart.</p>
          </div>
          <button
            onClick={() => setActivePage('shop')}
            className="text-xs font-semibold text-[#00CFFF] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishedProducts.map(prod => (
            <div
              key={prod.id}
              className="p-4 rounded-2xl bg-[#0a0d15] border border-[#171c2b] flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/40 mb-3">
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <button
                    onClick={() => toggleWishlist(prod.id)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-[#FF4B55] hover:bg-black transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-[11px] font-semibold text-[#00CFFF] uppercase">
                  {prod.category}
                </div>
                <h2 className="text-sm font-bold text-white truncate mt-0.5">
                  {prod.name}
                </h2>
                <div className="text-xs font-bold text-white mt-2 tabular-nums">
                  Starting at ₹{prod.startingPrice.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-[#141724]">
                <button
                  onClick={() => {
                    addToCart({
                      productId: prod.id,
                      product: prod,
                      quantity: 1,
                      unitPrice: prod.startingPrice
                    });
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
