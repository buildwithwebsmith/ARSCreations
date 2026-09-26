import React, { useState } from 'react';
import { ShieldCheck, Truck, RotateCcw, FileText } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brandConfig';

interface PolicyPageProps {
  initialTab?: 'shipping' | 'refund' | 'privacy' | 'terms';
}

export const PolicyPage: React.FC<PolicyPageProps> = ({ initialTab = 'shipping' }) => {
  const [activeTab, setActiveTab] = useState<'shipping' | 'refund' | 'privacy' | 'terms'>(initialTab);

  return (
    <div className="py-12 bg-[#050505] min-h-screen text-[#9AA2B5]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Policies & Customer Terms
          </h1>
          <p className="text-xs sm:text-sm text-[#8a92a5] mt-2">
            Clear, transparent policies for production, dispatch, returns, and digital asset privacy.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap border-b border-[#181d2c] mb-8 text-xs font-bold gap-2">
          {[
            { id: 'shipping' as const, label: 'Shipping & Delivery', icon: <Truck className="w-4 h-4" /> },
            { id: 'refund' as const, label: 'Refunds & Returns', icon: <RotateCcw className="w-4 h-4" /> },
            { id: 'privacy' as const, label: 'Privacy Policy', icon: <ShieldCheck className="w-4 h-4" /> },
            { id: 'terms' as const, label: 'Terms & Conditions', icon: <FileText className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-4 flex items-center gap-2 border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-[#00CFFF] text-white'
                  : 'border-transparent text-[#71788c] hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#090b14] border border-[#181e2e] space-y-6 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'shipping' && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white font-display">Shipping & Delivery Policy</h2>
              <p>
                At {BRAND_CONFIG.name}, every customized order is produced on-demand to guarantee pristine print clarity and material durability.
              </p>
              <h3 className="text-sm font-bold text-white pt-2">1. Production Lead Time</h3>
              <p>
                Standard products (visiting cards, personalized mugs, custom t-shirts) typically take 2 to 4 working days for production and quality inspection before dispatch. Complex or high-volume orders (rigid boxes, gold foil stamped stationery) may take 5 to 7 working days.
              </p>
              <h3 className="text-sm font-bold text-white pt-2">2. Pan-India Delivery Timelines</h3>
              <p>
                Once dispatched, domestic transit typically takes 2 to 5 business days depending on delivery location. Express courier tracking codes are shared via SMS and email immediately upon carrier handoff.
              </p>
              <h3 className="text-sm font-bold text-white pt-2">3. Shipping Charges</h3>
              <p>
                Standard domestic shipping is charged at a flat rate of ₹99 on orders below ₹999. Orders of ₹999 and above qualify for complimentary standard shipping pan-India.
              </p>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white font-display">Refund & Cancellation Policy</h2>
              <p>
                Because custom-printed and personalized merchandise cannot be restocked or resold once manufactured, specific guidelines govern returns and cancellations.
              </p>
              <h3 className="text-sm font-bold text-white pt-2">1. Order Cancellations</h3>
              <p>
                Cancellations are accepted free of charge strictly before your digital proof has been approved and moved into the active print queue. Once printing or substrate cutting has commenced, orders cannot be cancelled.
              </p>
              <h3 className="text-sm font-bold text-white pt-2">2. Defective or Damaged Shipments</h3>
              <p>
                In the rare event that an item arrives damaged in transit or displays a manufacturing defect differing from your approved digital proof, please report it within 48 hours of delivery with photographic evidence. We will reprint and replace the affected units promptly at zero extra cost.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white font-display">Privacy Policy</h2>
              <p>
                {BRAND_CONFIG.name} respects the privacy of our individual customers and corporate clients. We handle uploaded design assets, brand identity files, personal photos, and recipient contact information with strict confidentiality.
              </p>
              <h3 className="text-sm font-bold text-white pt-2">1. Client Intellectual Property</h3>
              <p>
                You retain full ownership and copyright of all logos, graphics, and artwork uploaded to our studio. We never share, sell, or license client artwork to third parties.
              </p>
              <h3 className="text-sm font-bold text-white pt-2">2. Personal Data Protection</h3>
              <p>
                Your contact information and delivery addresses are utilized solely to process your orders, share shipping notifications, and provide customer support.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white font-display">Terms & Conditions</h2>
              <p>
                By placing an order with {BRAND_CONFIG.name}, you agree to these commercial terms and our artwork submission guidelines.
              </p>
              <h3 className="text-sm font-bold text-white pt-2">1. Artwork Accuracy & Bleed Allowance</h3>
              <p>
                Customers are responsible for proofreading text, dates, contact details, and spelling prior to submitting print files. A minimum 3mm bleed margin is recommended for all cut items.
              </p>
              <h3 className="text-sm font-bold text-white pt-2">2. Color Representation</h3>
              <p>
                Due to variances in RGB screen displays versus calibrated CMYK chemical and pigment inks, slight shifts in color appearance may occur between digital monitors and physical substrates.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
