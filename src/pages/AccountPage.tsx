import React, { useState } from 'react';
import { User, Package, MapPin, CheckCircle2, Clock, Truck, ShieldCheck, LogOut, ArrowRight, MessageCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { getWhatsAppUrl } from '../lib/brandConfig';

export const AccountPage: React.FC = () => {
  const { user, loginDemoUser, logoutUser, orders, setActivePage } = useShop();

  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'profile'>('orders');

  if (!user) {
    return (
      <div className="py-20 bg-[#050505] min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 rounded-full bg-[#10131e] border border-[#1a2032] flex items-center justify-center text-[#555d73] mb-4">
          <User className="w-8 h-8 text-[#00CFFF]" />
        </div>
        <h1 className="text-2xl font-bold text-white font-display">Account Access</h1>
        <p className="text-xs sm:text-sm text-[#7e869c] max-w-sm mt-2">
          Sign in to view your real-time printing orders, delivery tracking, and saved GST addresses.
        </p>
        <button
          onClick={loginDemoUser}
          className="mt-6 px-7 py-3 rounded-xl bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
        >
          Sign In with Demo Customer Profile
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#050505] min-h-screen text-[#9AA2B5]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* User Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#090c14] border border-[#1d2336] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#E100FF] to-[#00CFFF] text-white font-bold text-xl flex items-center justify-center shadow-lg">
              {user.name[0]}
            </div>
            <div>
              <div className="text-lg font-bold text-white font-display">{user.name}</div>
              <div className="text-xs text-[#828a9e]">
                {user.email} · {user.phone}
              </div>
              {user.company && (
                <div className="text-[11px] text-[#00CFFF] font-medium mt-0.5">
                  {user.company}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={logoutUser}
              className="px-4 py-2 rounded-lg bg-[#141825] hover:bg-[#1f253a] text-[#FF4B55] text-xs font-semibold border border-[#232a3f] flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#171b28] mb-8 text-xs font-bold">
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 px-4 border-b-2 transition-all ${
              activeTab === 'orders'
                ? 'border-[#00CFFF] text-white'
                : 'border-transparent text-[#71788c] hover:text-white'
            }`}
          >
            My Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('addresses')}
            className={`pb-3 px-4 border-b-2 transition-all ${
              activeTab === 'addresses'
                ? 'border-[#00CFFF] text-white'
                : 'border-transparent text-[#71788c] hover:text-white'
            }`}
          >
            Saved Addresses ({user.savedAddresses.length})
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 px-4 border-b-2 transition-all ${
              activeTab === 'profile'
                ? 'border-[#00CFFF] text-white'
                : 'border-transparent text-[#71788c] hover:text-white'
            }`}
          >
            Profile Details
          </button>
        </div>

        {/* TAB 1: Orders Timeline & Status */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {orders.length === 0 ? (
              <div className="py-12 text-center text-xs text-[#7e869a]">
                No orders placed yet. Your completed orders will be listed here.
              </div>
            ) : (
              orders.map(order => (
                <div
                  key={order.id}
                  className="p-6 rounded-2xl bg-[#090b12] border border-[#171c2a] space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#141724] gap-2">
                    <div>
                      <div className="text-xs text-[#7b8398]">Order Placed: {order.createdAt}</div>
                      <div className="text-base font-bold text-white font-mono mt-0.5">
                        #{order.orderNumber}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs px-2.5 py-1 rounded-md bg-[#00CFFF]/15 text-[#00CFFF] border border-[#00CFFF]/30 font-semibold">
                        Status: {order.status}
                      </span>
                      <span className="text-sm font-bold text-white tabular-nums">
                        ₹{order.total.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Visual Production Timeline Status */}
                  <div className="py-2">
                    <div className="text-[11px] text-[#71798d] uppercase tracking-wider mb-2 font-semibold">
                      Production & Delivery Stages
                    </div>
                    <div className="grid grid-cols-5 gap-1.5 text-center text-[10px]">
                      {['Processing', 'In Production', 'Printed', 'Shipped', 'Delivered'].map(
                        (stage, idx) => {
                          const stages = ['Processing', 'In Production', 'Printed', 'Shipped', 'Delivered'];
                          const currentIdx = stages.indexOf(order.status);
                          const isDone = currentIdx >= idx;
                          const isCurrent = currentIdx === idx;

                          return (
                            <div
                              key={stage}
                              className={`p-2 rounded-lg border transition-all ${
                                isCurrent
                                  ? 'bg-[#00CFFF]/15 border-[#00CFFF] text-white font-bold'
                                  : isDone
                                  ? 'bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366]'
                                  : 'bg-[#0e111a] border-[#181c2b] text-[#555c70]'
                              }`}
                            >
                              <div className="truncate">{stage}</div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Order items */}
                  <div className="space-y-2 pt-2">
                    {order.items.map(item => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-[#0c0f18] border border-[#161a27] flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <div className="font-semibold text-white">{item.product.name}</div>
                            <div className="text-[11px] text-[#71788c]">
                              Qty: {item.quantity} {item.selectedSize && `· ${item.selectedSize}`}{' '}
                              {item.selectedFinish && `· ${item.selectedFinish}`}
                            </div>
                          </div>
                        </div>
                        <div className="font-bold text-white tabular-nums">
                          ₹{item.totalPrice.toLocaleString('en-IN')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer details & Support */}
                  <div className="pt-3 border-t border-[#131622] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#80889c]">
                    <div>
                      Tracking Ref: <span className="text-white font-mono">{order.trackingNumber}</span> · Payment: <span className="text-white">{order.paymentMethod}</span>
                    </div>

                    <a
                      href={getWhatsAppUrl(`Hello ARS Creation, I am checking on order #${order.orderNumber}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order Support on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 2: Saved Addresses */}
        {activeTab === 'addresses' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {user.savedAddresses.map(addr => (
              <div
                key={addr.id}
                className="p-5 rounded-2xl bg-[#090b12] border border-[#171c2a] space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                    {addr.title}
                  </span>
                  {addr.isDefault && (
                    <span className="px-2 py-0.5 rounded bg-[#00CFFF]/15 text-[#00CFFF] text-[10px] font-bold">
                      Default
                    </span>
                  )}
                </div>
                <div className="text-[#C0C6D4] leading-relaxed">
                  {addr.addressLine}<br />
                  {addr.city}, {addr.state} - {addr.pincode}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: Profile Details */}
        {activeTab === 'profile' && (
          <div className="p-6 rounded-2xl bg-[#090b12] border border-[#171c2a] max-w-xl space-y-4 text-xs">
            <h3 className="text-base font-bold text-white font-display">Client Profile Info</h3>
            <div className="space-y-3">
              <div>
                <label className="text-[#7d8598] block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  disabled
                  value={user.name}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1e2538] text-white"
                />
              </div>

              <div>
                <label className="text-[#7d8598] block mb-1 font-medium">Email Address</label>
                <input
                  type="text"
                  disabled
                  value={user.email}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1e2538] text-white"
                />
              </div>

              <div>
                <label className="text-[#7d8598] block mb-1 font-medium">Phone</label>
                <input
                  type="text"
                  disabled
                  value={user.phone}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1e2538] text-white"
                />
              </div>

              <div>
                <label className="text-[#7d8598] block mb-1 font-medium">Company / GST Identity</label>
                <input
                  type="text"
                  disabled
                  value={user.company || 'Not specified'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121522] border border-[#1e2538] text-white"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
