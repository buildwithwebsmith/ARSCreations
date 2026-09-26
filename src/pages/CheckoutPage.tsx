import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Building2,
  Smartphone,
  Truck,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ShippingAddress, Order } from '../types';
import { getWhatsAppUrl } from '../lib/brandConfig';

export const CheckoutPage: React.FC = () => {
  const { cart, cartSubtotal, cartShipping, cartTotal, createOrder, setActivePage, user } = useShop();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  // Form state
  const [customerInfo, setCustomerInfo] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    companyName: user?.company || '',
    addressLine: user?.savedAddresses?.[0]?.addressLine || '',
    city: user?.savedAddresses?.[0]?.city || '',
    state: user?.savedAddresses?.[0]?.state || 'Maharashtra',
    pincode: user?.savedAddresses?.[0]?.pincode || '',
    notes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<Order['paymentMethod']>('UPI');

  const handlePlaceOrder = () => {
    const newOrder = createOrder(shippingAddress, paymentMethod, customerInfo);
    setCompletedOrder(newOrder);
  };

  if (completedOrder) {
    return (
      <div className="py-16 bg-[#050505] min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090c14] border border-[#1d2336] shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest">
                Demo Order Placed Successfully
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                Order #{completedOrder.orderNumber}
              </h1>
              <p className="text-xs sm:text-sm text-[#828a9c] mt-2">
                Thank you for testing our e-commerce flow. A mock confirmation has been generated and stored in your local session.
              </p>
            </div>

            {/* Receipt details */}
            <div className="p-5 rounded-2xl bg-[#0d101a] border border-[#1b2132] text-left space-y-3 text-xs">
              <div className="flex justify-between text-[#858da1]">
                <span>Recipient:</span>
                <span className="text-white font-medium">{completedOrder.customerInfo.fullName}</span>
              </div>
              <div className="flex justify-between text-[#858da1]">
                <span>Contact Email:</span>
                <span className="text-white font-medium">{completedOrder.customerInfo.email}</span>
              </div>
              <div className="flex justify-between text-[#858da1]">
                <span>Shipping Address:</span>
                <span className="text-white font-medium text-right max-w-xs truncate">
                  {completedOrder.shippingAddress.addressLine}, {completedOrder.shippingAddress.city} - {completedOrder.shippingAddress.pincode}
                </span>
              </div>
              <div className="flex justify-between text-[#858da1]">
                <span>Payment Mode:</span>
                <span className="text-[#00CFFF] font-semibold">{completedOrder.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-[#858da1]">
                <span>Tracking Number:</span>
                <span className="text-white font-mono">{completedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#1a2030]">
                <span>Total Paid:</span>
                <span className="text-[#00CFFF] tabular-nums">₹{completedOrder.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Integration Notice */}
            <div className="p-3.5 rounded-xl bg-[#141825] border border-[#232a3d] text-left flex items-start gap-2.5 text-xs text-[#8c94a6]">
              <AlertCircle className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Developer Note:</strong> Production payment gateways (e.g. Razorpay, Cashfree, or Stripe) connect via the dedicated order callback handler in <code className="text-[#00CFFF]">createOrder()</code>.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setActivePage('account')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#141825] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1d2336] border border-[#252c40] transition-colors"
              >
                View in Order History
              </button>

              <a
                href={getWhatsAppUrl(`Hello ARS Creation, I placed order #${completedOrder.orderNumber} for ₹${completedOrder.total} and have design files to share.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20be5a] flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order Assistance</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center px-4">
        <p className="text-white text-lg font-bold">Your cart is empty.</p>
        <button
          onClick={() => setActivePage('shop')}
          className="mt-4 px-6 py-2.5 rounded-xl bg-[#E100FF] text-white text-xs font-bold uppercase"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-8">
          Checkout Process
        </h1>

        {/* Step Indicator Tabs */}
        <div className="grid grid-cols-4 gap-2 mb-8 text-xs font-semibold">
          {[
            { id: 1, label: '1. Contact' },
            { id: 2, label: '2. Shipping' },
            { id: 3, label: '3. Review' },
            { id: 4, label: '4. Payment' }
          ].map(s => (
            <div
              key={s.id}
              className={`p-3 rounded-xl text-center border transition-all ${
                step === s.id
                  ? 'bg-[#151928] text-[#00CFFF] border-[#00CFFF]/40'
                  : step > s.id
                  ? 'bg-[#0c0f17] text-[#25D366] border-[#25D366]/30'
                  : 'bg-[#080a10] text-[#555d72] border-[#161a27]'
              }`}
            >
              {s.label}
            </div>
          ))}
        </div>

        {/* STEP 1: Customer Contact Info */}
        {step === 1 && (
          <div className="p-6 rounded-2xl bg-[#0a0d15] border border-[#171c2b] space-y-4">
            <h2 className="text-lg font-bold text-white">Step 1: Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#A2A9B8] mb-1 font-medium">Full Name *</label>
                <input
                  type="text"
                  required
                  value={customerInfo.fullName}
                  onChange={e => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1f2638] text-white focus:outline-none focus:border-[#00CFFF]"
                />
              </div>

              <div>
                <label className="block text-[#A2A9B8] mb-1 font-medium">Email Address *</label>
                <input
                  type="email"
                  required
                  value={customerInfo.email}
                  onChange={e => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  placeholder="e.g. rahul@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1f2638] text-white focus:outline-none focus:border-[#00CFFF]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[#A2A9B8] mb-1 font-medium">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={e => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1f2638] text-white focus:outline-none focus:border-[#00CFFF]"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => {
                  if (!customerInfo.fullName || !customerInfo.email || !customerInfo.phone) {
                    alert('Please provide your name, email, and phone number.');
                    return;
                  }
                  setShippingAddress(prev => ({
                    ...prev,
                    fullName: customerInfo.fullName,
                    email: customerInfo.email,
                    phone: customerInfo.phone
                  }));
                  setStep(2);
                }}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Continue to Shipping</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Shipping Address */}
        {step === 2 && (
          <div className="p-6 rounded-2xl bg-[#0a0d15] border border-[#171c2b] space-y-4">
            <h2 className="text-lg font-bold text-white">Step 2: Shipping Delivery Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="sm:col-span-2">
                <label className="block text-[#A2A9B8] mb-1 font-medium">Street Address / Flat / Building *</label>
                <input
                  type="text"
                  value={shippingAddress.addressLine}
                  onChange={e => setShippingAddress({ ...shippingAddress, addressLine: e.target.value })}
                  placeholder="Flat 304, Green Palms, Senapati Bapat Road"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1f2638] text-white focus:outline-none focus:border-[#00CFFF]"
                />
              </div>

              <div>
                <label className="block text-[#A2A9B8] mb-1 font-medium">City *</label>
                <input
                  type="text"
                  value={shippingAddress.city}
                  onChange={e => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                  placeholder="Pune / Mumbai"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1f2638] text-white focus:outline-none focus:border-[#00CFFF]"
                />
              </div>

              <div>
                <label className="block text-[#A2A9B8] mb-1 font-medium">Postal Pincode *</label>
                <input
                  type="text"
                  value={shippingAddress.pincode}
                  onChange={e => setShippingAddress({ ...shippingAddress, pincode: e.target.value })}
                  placeholder="411016"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1f2638] text-white focus:outline-none focus:border-[#00CFFF]"
                />
              </div>

              <div>
                <label className="block text-[#A2A9B8] mb-1 font-medium">State *</label>
                <input
                  type="text"
                  value={shippingAddress.state}
                  onChange={e => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                  placeholder="Maharashtra"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1f2638] text-white focus:outline-none focus:border-[#00CFFF]"
                />
              </div>

              <div>
                <label className="block text-[#A2A9B8] mb-1 font-medium">Company Name (Optional)</label>
                <input
                  type="text"
                  value={shippingAddress.companyName || ''}
                  onChange={e => setShippingAddress({ ...shippingAddress, companyName: e.target.value })}
                  placeholder="For GST Invoicing"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1f2638] text-white focus:outline-none focus:border-[#00CFFF]"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-[#828a9c] hover:text-white"
              >
                Back to Contact
              </button>
              <button
                onClick={() => {
                  if (!shippingAddress.addressLine || !shippingAddress.city || !shippingAddress.pincode) {
                    alert('Please enter complete address details.');
                    return;
                  }
                  setStep(3);
                }}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Review Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Order Review */}
        {step === 3 && (
          <div className="p-6 rounded-2xl bg-[#0a0d15] border border-[#171c2b] space-y-4">
            <h2 className="text-lg font-bold text-white">Step 3: Review Your Order</h2>
            <div className="space-y-3 divide-y divide-[#151926]">
              {cart.map(item => (
                <div key={item.id} className="pt-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-bold text-white">{item.product.name}</div>
                      <div className="text-[11px] text-[#7d8598]">
                        Qty: {item.quantity} · ₹{item.unitPrice}/unit
                        {item.selectedSize && ` · ${item.selectedSize}`}
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-white tabular-nums">
                    ₹{item.totalPrice.toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#0d101a] border border-[#181e2e] space-y-2 text-xs">
              <div className="flex justify-between text-[#858da0]">
                <span>Shipping to:</span>
                <span className="text-white font-medium text-right">
                  {shippingAddress.fullName}, {shippingAddress.city} - {shippingAddress.pincode}
                </span>
              </div>
              <div className="flex justify-between text-[#858da0]">
                <span>Subtotal:</span>
                <span className="text-white tabular-nums">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#858da0]">
                <span>Shipping:</span>
                <span className="tabular-nums">
                  {cartShipping === 0 ? <span className="text-[#25D366]">FREE</span> : `₹${cartShipping}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#1b2234]">
                <span>Total Amount:</span>
                <span className="text-[#00CFFF] tabular-nums">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setStep(2)}
                className="text-xs text-[#828a9c] hover:text-white"
              >
                Back to Shipping
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Select Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Payment Placeholder (Clearly labeled demo) */}
        {step === 4 && (
          <div className="p-6 rounded-2xl bg-[#0a0d15] border border-[#171c2b] space-y-5">
            <div>
              <h2 className="text-lg font-bold text-white">Step 4: Payment Selection (Demo)</h2>
              <p className="text-xs text-[#828a9e] mt-1">
                Select your preferred payment gateway simulator for this checkout demonstration.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'UPI' as const,
                  icon: <Smartphone className="w-5 h-5 text-[#00CFFF]" />,
                  title: 'UPI / QR Payment (Google Pay, PhonePe, Paytm)',
                  desc: 'Instant zero-fee transfer via verified UPI VPA.'
                },
                {
                  id: 'Card' as const,
                  icon: <CreditCard className="w-5 h-5 text-[#E100FF]" />,
                  title: 'Debit / Credit Card (Visa, Mastercard, RuPay)',
                  desc: 'Encrypted tokenized processing with 3D Secure OTP.'
                },
                {
                  id: 'NetBanking' as const,
                  icon: <Building2 className="w-5 h-5 text-[#7B2CFF]" />,
                  title: 'NetBanking / Corporate Banking',
                  desc: 'All major Indian retail and corporate banks supported.'
                },
                {
                  id: 'Cash on Delivery (Demo)' as const,
                  icon: <Truck className="w-5 h-5 text-[#25D366]" />,
                  title: 'Cash / Pay on Delivery (Verified Demo)',
                  desc: 'Pay upon delivery at your doorstep.'
                }
              ].map(opt => (
                <div
                  key={opt.id}
                  onClick={() => setPaymentMethod(opt.id)}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === opt.id
                      ? 'border-[#00CFFF] bg-[#00CFFF]/10'
                      : 'border-[#1b2133] bg-[#0c0f18] hover:border-[#2b344e]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#141825] flex items-center justify-center shrink-0">
                      {opt.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{opt.title}</div>
                      <div className="text-[11px] text-[#7d8597]">{opt.desc}</div>
                    </div>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      paymentMethod === opt.id ? 'border-[#00CFFF] bg-[#00CFFF]' : 'border-[#424b63]'
                    }`}
                  >
                    {paymentMethod === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="p-3.5 rounded-xl bg-[#111422] border border-[#20273c] text-xs text-[#8890a3] flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <span>
                <strong>Demonstration Mode:</strong> Clicking "Complete Demo Order" will finalize this transaction without charging a real card, generating a valid order record with mock tracking.
              </span>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setStep(3)}
                className="text-xs text-[#828a9c] hover:text-white"
              >
                Back to Review
              </button>
              <button
                onClick={handlePlaceOrder}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-2 transition-all"
              >
                <span>Complete Demo Order (₹{cartTotal.toLocaleString('en-IN')})</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
