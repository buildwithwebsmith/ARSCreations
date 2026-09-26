import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    cartShipping,
    cartTotal,
    clearCart,
    setActivePage,
    showToast
  } = useShop();

  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(0);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'ARSFIRST10') {
      const discount = Math.round(cartSubtotal * 0.1);
      setDiscountApplied(discount);
      showToast('Promo code ARSFIRST10 applied! 10% discount added.', 'success');
    } else {
      showToast('Invalid promo code. Try "ARSFIRST10" for 10% off.', 'error');
    }
  };

  const finalTotal = Math.max(0, cartTotal - discountApplied);

  if (cart.length === 0) {
    return (
      <div className="py-20 bg-[#050505] min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 rounded-full bg-[#10131e] border border-[#1b2133] flex items-center justify-center text-[#555d73] mb-4">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold text-white font-display">Your Shopping Bag is Empty</h1>
        <p className="text-xs sm:text-sm text-[#7e869c] max-w-sm mt-2">
          Looks like you haven't added any custom prints or gifts to your cart yet.
        </p>
        <button
          onClick={() => setActivePage('shop')}
          className="mt-6 px-7 py-3 rounded-xl bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
        >
          Explore All Products
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#151926]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </h1>
            <p className="text-xs text-[#80879a] mt-1">Review your selections and customize details before checkout.</p>
          </div>
          <button
            onClick={clearCart}
            className="text-xs text-[#848b9e] hover:text-[#FF4B55] transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart items list */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#0a0d15] border border-[#171c2b] flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 rounded-xl object-cover bg-black/40 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-[#00CFFF] uppercase">
                      {item.product.category}
                    </div>
                    <h2 className="text-sm sm:text-base font-bold text-white truncate">
                      {item.product.name}
                    </h2>

                    <div className="text-xs text-[#7e869a] mt-1 space-y-0.5">
                      {item.selectedSize && <div>Size: {item.selectedSize}</div>}
                      {item.selectedFinish && <div>Finish: {item.selectedFinish}</div>}
                      {item.selectedColor && <div>Color: {item.selectedColor}</div>}
                      {item.customText && (
                        <div className="text-[#00CFFF]">Custom Text: "{item.customText}"</div>
                      )}
                      {item.uploadedDesignFileName && (
                        <div className="text-[#E100FF]">File: {item.uploadedDesignFileName}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right controls */}
                <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#151825]">
                  <div className="flex items-center border border-[#202638] rounded-lg bg-[#121522]">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 text-[#868ea2] hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-white tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 text-[#868ea2] hover:text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-right min-w-[90px]">
                    <div className="text-sm sm:text-base font-bold text-white tabular-nums">
                      ₹{item.totalPrice.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-[#6b7387] tabular-nums">
                      (₹{item.unitPrice}/unit)
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#646b7f] hover:text-[#FF4B55] transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0a0d15] border border-[#171c2b] space-y-4">
              <h2 className="text-base font-bold text-white font-display">Order Summary</h2>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={e => setCouponCode(e.target.value)}
                  placeholder="Promo Code (try ARSFIRST10)"
                  className="flex-1 text-xs px-3 py-2 rounded-lg bg-[#121522] border border-[#1f2638] text-white focus:outline-none focus:border-[#00CFFF] uppercase"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-lg bg-[#191e2e] hover:bg-[#232a3f] text-white text-xs font-semibold border border-[#252c42] transition-colors"
                >
                  Apply
                </button>
              </form>

              <div className="space-y-2 text-xs pt-2 border-t border-[#161a27]">
                <div className="flex items-center justify-between text-[#858ca0]">
                  <span>Subtotal</span>
                  <span className="text-white tabular-nums">
                    ₹{cartSubtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#858ca0]">
                  <span>Estimated Shipping</span>
                  <span className="tabular-nums">
                    {cartShipping === 0 ? (
                      <span className="text-[#25D366] font-semibold">FREE</span>
                    ) : (
                      `₹${cartShipping}`
                    )}
                  </span>
                </div>

                {discountApplied > 0 && (
                  <div className="flex items-center justify-between text-[#25D366]">
                    <span>Coupon Discount</span>
                    <span className="tabular-nums">-₹{discountApplied}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-base font-bold text-white pt-3 border-t border-[#181d2c]">
                  <span>Total Amount</span>
                  <span className="text-[#00CFFF] tabular-nums">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActivePage('checkout')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#697184] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00CFFF]" />
                <span>Secure Demo Checkout · Verified Print Workflow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
