import React, { useState, useMemo } from 'react';
import {
  Heart,
  ShoppingBag,
  ArrowRight,
  Star,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Upload,
  MessageCircle,
  Layers,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/shop/ProductCard';
import { getWhatsAppUrl } from '../lib/brandConfig';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProductId,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setActivePage,
    navigateToCategory,
    showToast
  } = useShop();

  // Find selected product or default to first
  const product = useShop().selectedProductId
    ? PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0]
    : PRODUCTS[0];

  const isWished = isInWishlist(product.id);

  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Customization selections
  const [selectedSize, setSelectedSize] = useState<string>(
    product.customizationOptions.sizes?.[0]?.name || ''
  );
  const [selectedFinish, setSelectedFinish] = useState<string>(
    product.customizationOptions.finishes?.[0]?.name || ''
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.customizationOptions.colors?.[0]?.name || ''
  );
  const [isDoubleSided, setIsDoubleSided] = useState<boolean>(false);
  const [customText, setCustomText] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(product.minOrderQty || 1);

  // Related products
  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter(
      p => p.id !== product.id && p.categorySlug === product.categorySlug
    ).slice(0, 4);
  }, [product]);

  // Pricing calculations
  const sizeDelta =
    product.customizationOptions.sizes?.find(s => s.name === selectedSize)?.priceDelta || 0;
  const finishDelta =
    product.customizationOptions.finishes?.find(f => f.name === selectedFinish)?.priceDelta || 0;
  const doubleSidedDelta =
    isDoubleSided && product.customizationOptions.doubleSidedPriceDelta
      ? product.customizationOptions.doubleSidedPriceDelta
      : 0;

  // Check applicable bulk discount tier
  const applicableTier = useMemo(() => {
    const tiers = [...product.bulkTiers].sort((a, b) => b.qty - a.qty);
    return tiers.find(t => quantity >= t.qty) || product.bulkTiers[0];
  }, [product, quantity]);

  const discountRate = applicableTier ? applicableTier.discountPercentage / 100 : 0;
  const baseCalculatedUnit = product.startingPrice + sizeDelta + finishDelta + doubleSidedDelta;
  const finalUnitPrice = Math.max(1, Math.round(baseCalculatedUnit * (1 - discountRate)));
  const totalPrice = finalUnitPrice * quantity;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      product,
      quantity,
      selectedSize: selectedSize || undefined,
      selectedFinish: selectedFinish || undefined,
      selectedColor: selectedColor || undefined,
      isDoubleSided,
      customText: customText.trim() || undefined,
      uploadedDesignFileName: uploadedFile || undefined,
      unitPrice: finalUnitPrice
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setActivePage('checkout');
  };

  return (
    <div className="py-10 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb path */}
        <div className="flex items-center gap-2 text-xs text-[#7B8294] mb-8">
          <button onClick={() => setActivePage('home')} className="hover:text-white">
            Home
          </button>
          <span>/</span>
          <button onClick={() => setActivePage('shop')} className="hover:text-white">
            Shop
          </button>
          <span>/</span>
          <button
            onClick={() => navigateToCategory(product.categorySlug)}
            className="hover:text-white"
          >
            {product.category}
          </button>
          <span>/</span>
          <span className="text-white truncate max-w-xs">{product.name}</span>
        </div>

        {/* 2-Column Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#0a0c13] border border-[#1b2030] shadow-2xl">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#07090f]/90 text-[#00CFFF] border border-[#00CFFF]/30 backdrop-blur-md">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#00CFFF] shadow-md shadow-cyan-900/30'
                        : 'border-[#1b2030] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} preview ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Specifications Box */}
            <div className="p-6 rounded-2xl bg-[#090b12] border border-[#171b29] mt-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Product Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-3 rounded-xl bg-[#0e121d] border border-[#1a2030] flex flex-col justify-between"
                  >
                    <span className="text-[#7A8294] font-medium">{key}</span>
                    <span className="text-white font-semibold mt-1">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Purchase & Customization Module */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#00CFFF] uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1 leading-tight font-display">
                {product.name}
              </h1>

              {/* Rating & Review counts */}
              <div className="flex items-center gap-2 mt-2 text-xs text-[#828a9e]">
                <div className="flex items-center text-[#FFD21F]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 font-bold text-white">{product.rating}</span>
                </div>
                <span>·</span>
                <span>{product.reviewsCount} sample client reviews</span>
                <span>·</span>
                <span className="text-[#25D366] font-medium">In Stock & Ready to Print</span>
              </div>

              {/* Price Calculation Banner */}
              <div className="mt-4 p-4 rounded-xl bg-[#0c0f18] border border-[#1b2234] flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] text-[#71798c] uppercase tracking-wider">
                    Calculated Unit Price
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white tabular-nums">
                      ₹{finalUnitPrice.toLocaleString('en-IN')}
                    </span>
                    {applicableTier && applicableTier.discountPercentage > 0 && (
                      <span className="text-xs font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded">
                        {applicableTier.discountPercentage}% Bulk Discount Applied
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-[#71798c] uppercase tracking-wider">
                    Total for {quantity} units
                  </div>
                  <div className="text-xl font-bold text-[#00CFFF] tabular-nums">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8c94a6] leading-relaxed">
              {product.description}
            </p>

            {/* Customization Options */}
            <div className="space-y-4 pt-2 border-t border-[#161a27]">
              {/* Size / Dimension option */}
              {product.customizationOptions.sizes && (
                <div>
                  <label className="text-xs font-semibold text-white block mb-2">
                    Select Dimensions / Profile
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {product.customizationOptions.sizes.map(sz => (
                      <button
                        key={sz.name}
                        onClick={() => setSelectedSize(sz.name)}
                        className={`p-2.5 rounded-xl text-xs text-left border transition-all ${
                          selectedSize === sz.name
                            ? 'border-[#00CFFF] bg-[#00CFFF]/10 text-white font-medium'
                            : 'border-[#1b2030] bg-[#0b0e17] text-[#828a9e] hover:border-[#2f3852]'
                        }`}
                      >
                        <div className="truncate">{sz.name}</div>
                        {sz.priceDelta > 0 && (
                          <div className="text-[10px] text-[#00CFFF] mt-0.5">
                            +₹{sz.priceDelta}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Finish option */}
              {product.customizationOptions.finishes && (
                <div>
                  <label className="text-xs font-semibold text-white block mb-2">
                    Surface Finish & Enhancement
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.customizationOptions.finishes.map(fn => (
                      <button
                        key={fn.name}
                        onClick={() => setSelectedFinish(fn.name)}
                        className={`p-2.5 rounded-xl text-xs text-left border transition-all ${
                          selectedFinish === fn.name
                            ? 'border-[#E100FF] bg-[#E100FF]/10 text-white font-medium'
                            : 'border-[#1b2030] bg-[#0b0e17] text-[#828a9e] hover:border-[#2f3852]'
                        }`}
                      >
                        <div className="truncate">{fn.name}</div>
                        {fn.priceDelta > 0 && (
                          <div className="text-[10px] text-[#E100FF] mt-0.5">
                            +₹{fn.priceDelta}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors option */}
              {product.customizationOptions.colors && (
                <div>
                  <label className="text-xs font-semibold text-white block mb-2">
                    Base Color Tone: <span className="text-[#00CFFF]">{selectedColor}</span>
                  </label>
                  <div className="flex items-center gap-3">
                    {product.customizationOptions.colors.map(col => (
                      <button
                        key={col.name}
                        onClick={() => setSelectedColor(col.name)}
                        className={`w-8 h-8 rounded-full border-2 transition-transform ${
                          selectedColor === col.name
                            ? 'scale-110 border-white ring-2 ring-[#00CFFF]'
                            : 'border-transparent opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Double-sided option */}
              {product.customizationOptions.allowDoubleSided && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0b0e17] border border-[#1b2030]">
                  <div>
                    <div className="text-xs font-semibold text-white">Double-Sided Printing</div>
                    <div className="text-[11px] text-[#71798c]">
                      Print reverse side (+₹{product.customizationOptions.doubleSidedPriceDelta})
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={isDoubleSided}
                    onChange={e => setIsDoubleSided(e.target.checked)}
                    className="w-4 h-4 accent-[#00CFFF] rounded cursor-pointer"
                  />
                </div>
              )}

              {/* Custom Text input */}
              {product.customizationOptions.allowCustomText && (
                <div>
                  <label className="text-xs font-semibold text-white block mb-1.5">
                    Personalized Name, Date, or Quote
                  </label>
                  <input
                    type="text"
                    value={customText}
                    onChange={e => setCustomText(e.target.value)}
                    placeholder="e.g. Anand & Priya - 24.11.2026 or Founder Name"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#0b0e17] border border-[#1b2030] text-white focus:outline-none focus:border-[#00CFFF]"
                  />
                </div>
              )}

              {/* Artwork upload placeholder */}
              {product.customizationOptions.allowFileUpload && (
                <div className="p-3.5 rounded-xl bg-[#0b0e17] border border-dashed border-[#232b3f] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#8c94a6] min-w-0">
                    <Upload className="w-4 h-4 text-[#00CFFF] shrink-0" />
                    <span className="truncate">
                      {uploadedFile ? uploadedFile : 'Upload Print-Ready File (PDF, AI, PNG)'}
                    </span>
                  </div>
                  <label className="cursor-pointer px-3 py-1.5 text-xs font-medium rounded-lg bg-[#141825] hover:bg-[#1f253b] text-white border border-[#22293d] transition-colors shrink-0 ml-2">
                    <span>Choose File</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={e => {
                        if (e.target.files?.[0]) {
                          setUploadedFile(e.target.files[0].name);
                          showToast(`Attached ${e.target.files[0].name}`, 'info');
                        }
                      }}
                    />
                  </label>
                </div>
              )}

              {/* Quantity selector with bulk discount slabs */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-white">
                    Order Quantity ({quantity} units)
                  </label>
                  <span className="text-[11px] text-[#788094]">
                    Min order: {product.minOrderQty}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min={product.minOrderQty}
                    max={Math.max(1000, product.minOrderQty * 20)}
                    step={product.minOrderQty > 10 ? 25 : 1}
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}
                    className="flex-1 accent-[#00CFFF] cursor-pointer"
                  />
                  <input
                    type="number"
                    min={product.minOrderQty}
                    value={quantity}
                    onChange={e => setQuantity(Math.max(product.minOrderQty, Number(e.target.value)))}
                    className="w-20 text-xs px-2 py-1.5 rounded-lg bg-[#0b0e17] border border-[#1b2030] text-white text-center font-bold"
                  />
                </div>

                {/* Bulk tier chips */}
                {product.bulkTiers.length > 1 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {product.bulkTiers.map(tier => (
                      <button
                        key={tier.qty}
                        onClick={() => setQuantity(tier.qty)}
                        className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                          quantity >= tier.qty
                            ? 'bg-[#151928] text-[#00CFFF] border-[#00CFFF]/40 font-semibold'
                            : 'text-[#6e768a] border-[#181d2a]'
                        }`}
                      >
                        {tier.qty}+ units ({tier.discountPercentage}% off)
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-[#161a27]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="py-3.5 px-4 rounded-xl bg-[#141825] hover:bg-[#1e2437] text-white text-xs font-bold uppercase tracking-wider border border-[#262f46] flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`flex-1 py-2.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isWished
                      ? 'border-[#E100FF] bg-[#E100FF]/10 text-[#E100FF]'
                      : 'border-[#1b2030] text-[#8c94a6] hover:text-white'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isWished ? 'fill-current' : ''}`} />
                  <span>{isWished ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hello ARS Creation, I would like to request a custom quotation for ${product.name} (Qty: ${quantity}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Delivery and Guarantee Badges */}
            <div className="p-4 rounded-xl bg-[#090b12] border border-[#161a27] space-y-2 text-xs text-[#8c94a6]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#00CFFF]" />
                <span>Pan-India Courier Shipping · Tracking shared upon dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>Print-File Verification before production</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#161a27]">
            <div className="mb-6">
              <div className="text-xs font-bold text-[#E100FF] uppercase tracking-wider">
                Complementary Selections
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                Related Printing Products
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
