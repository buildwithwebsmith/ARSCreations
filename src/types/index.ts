export type Page =
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'wishlist'
  | 'cart'
  | 'checkout'
  | 'account'
  | 'about'
  | 'contact'
  | 'bulk-orders'
  | 'services'
  | 'faq'
  | 'blog'
  | 'blog-detail'
  | 'privacy'
  | 'terms'
  | 'shipping'
  | 'refund';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  itemCount: number;
}

export interface CustomizationOption {
  sizes?: { name: string; priceDelta: number }[];
  colors?: { name: string; hex: string }[];
  materials?: { name: string; priceDelta: number }[];
  finishes?: { name: string; priceDelta: number }[];
  allowCustomText?: boolean;
  allowFileUpload?: boolean;
  allowDoubleSided?: boolean;
  doubleSidedPriceDelta?: number;
}

export interface BulkTier {
  qty: number;
  discountPercentage: number;
  pricePerUnit: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  startingPrice: number;
  originalPrice?: number;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  customizationOptions: CustomizationOption;
  minOrderQty: number;
  bulkTiers: BulkTier[];
  inStock: boolean;
  isCustomizable: boolean;
  badge?: string;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
  selectedMaterial?: string;
  selectedFinish?: string;
  isDoubleSided?: boolean;
  customText?: string;
  uploadedDesignFileName?: string;
  unitPrice: number;
  totalPrice: number;
}

export interface ShippingAddress {
  id?: string;
  title?: string;
  isDefault?: boolean;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
  notes?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  createdAt?: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  status: 'Processing' | 'In Production' | 'Printed' | 'Shipped' | 'Delivered';
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
  };
  shippingAddress: ShippingAddress;
  trackingNumber?: string;
  paymentMethod: 'UPI' | 'Card' | 'NetBanking' | 'Cash on Delivery (Demo)';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  savedAddresses: ShippingAddress[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Customization' | 'Bulk & Business' | 'Shipping & Delivery';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  category: string;
}
