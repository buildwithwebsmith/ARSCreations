import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    cartShipping,
    cartTotal,
    setActivePage
  } = useShop();

  if (!isCartDrawerOpen) return null;

  const freeShippingThreshold = 999;
  const progressToFreeShipping = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const amountNeeded = Math.max(0, freeShippingThreshold - cartSubtotal);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartDrawerOpen(false)}
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-md bg-[#090b11] border-l border-[#1c2132] text-white flex flex-col h-full z-10 shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-[#181d2c] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#00CFFF]" />
            <h2 className="text-base font-bold font-display">Your Shopping Bag</h2>
            <span className="text-xs text-[#8991a5]">({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
          </div>
          <button
            onClick={() => setIsCartDrawerOpen(false)}
            className="p-1.5 text-[#8991a5] hover:text-white hover:bg-[#141825] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="p-3.5 bg-[#0f131f] border-b border-[#181d2c] text-xs">
          {amountNeeded === 0 ? (
            <div className="text-[#25D366] font-semibold flex items-center gap-1.5">
              <span>🎉 Congratulations! You have unlocked FREE Express Shipping!</span>
            </div>
          ) : (
            <div className="text-[#A0A7B8]">
              Add <span className="text-white font-bold">₹{amountNeeded}</span> more for <span className="text-[#00CFFF] font-semibold">FREE Shipping</span>.
            </div>
          )}
          <div className="w-full h-1.5 bg-[#1a2030] rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] transition-all duration-300"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Item list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#121522] flex items-center justify-center text-[#555d73]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-base font-semibold text-white">Your bag is empty</p>
              <p className="text-xs text-[#7e869c] max-w-xs">
                Explore our catalog of personalized gifts, visiting cards, apparel, and custom corporate branding products.
              </p>
              <button
                onClick={() => {
                  setIsCartDrawerOpen(false);
                  setActivePage('shop');
                }}
                className="mt-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity"
              >
                Explore Products
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-[#0e111a] border border-[#1b2030] flex gap-3 group"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-lg object-cover bg-black/40 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="text-xs font-semibold text-white truncate">
                      {item.product.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#646b80] hover:text-[#FF4B55] p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Selected Specs */}
                  <div className="text-[11px] text-[#848c9f] mt-0.5 space-y-0.5">
                    {item.selectedSize && <div>Size: {item.selectedSize}</div>}
                    {item.selectedFinish && <div>Finish: {item.selectedFinish}</div>}
                    {item.customText && (
                      <div className="truncate text-[#00CFFF]/90">
                        Text: "{item.customText}"
                      </div>
                    )}
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#171b28]">
                    <div className="flex items-center border border-[#212739] rounded-md bg-[#131622]">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-[#848c9f] hover:text-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-white tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-[#848c9f] hover:text-white"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-xs font-bold text-white tabular-nums">
                      ₹{item.totalPrice.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer calculation & Action Buttons */}
        {cart.length > 0 && (
          <div className="p-4 bg-[#0c0f17] border-t border-[#181d2c] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-[#8b93a6]">
                <span>Subtotal</span>
                <span className="text-white tabular-nums">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between text-[#8b93a6]">
                <span>Estimated Shipping</span>
                <span className="tabular-nums">
                  {cartShipping === 0 ? (
                    <span className="text-[#25D366] font-medium">FREE</span>
                  ) : (
                    `₹${cartShipping}`
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-white pt-1 border-t border-[#1c2234]">
                <span>Total Amount</span>
                <span className="text-[#00CFFF] tabular-nums">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => {
                  setIsCartDrawerOpen(false);
                  setActivePage('cart');
                }}
                className="py-2.5 px-3 rounded-lg bg-[#141724] hover:bg-[#1b2031] text-xs font-bold text-white border border-[#23293e] transition-colors"
              >
                View Full Cart
              </button>

              <button
                onClick={() => {
                  setIsCartDrawerOpen(false);
                  setActivePage('checkout');
                }}
                className="py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] hover:from-[#f02aff] hover:to-[#8f47ff] text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all flex items-center justify-center gap-1.5"
              >
                <span>Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#697184] pt-1">
              <ShieldCheck className="w-3 h-3 text-[#00CFFF]" />
              <span>Authentic Print Quality Guarantee · Safe Delivery</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
