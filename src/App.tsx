import React, { useEffect } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { SearchModal } from './components/common/SearchModal';
import { QuickViewModal } from './components/common/QuickViewModal';
import { Toast } from './components/common/Toast';
import { CartDrawer } from './components/shop/CartDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage';
import { AccountPage } from './pages/AccountPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BulkOrdersPage } from './pages/BulkOrdersPage';
import { ServicesPage } from './pages/ServicesPage';
import { FAQPage } from './pages/FAQPage';
import { BlogPage } from './pages/BlogPage';
import { PolicyPage } from './pages/PolicyPage';

const AppContent: React.FC = () => {
  const { activePage } = useShop();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'account':
        return <AccountPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'bulk-orders':
        return <BulkOrdersPage />;
      case 'services':
        return <ServicesPage />;
      case 'faq':
        return <FAQPage />;
      case 'blog':
        return <BlogPage />;
      case 'shipping':
        return <PolicyPage initialTab="shipping" />;
      case 'refund':
        return <PolicyPage initialTab="refund" />;
      case 'privacy':
        return <PolicyPage initialTab="privacy" />;
      case 'terms':
        return <PolicyPage initialTab="terms" />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white selection:bg-[#E100FF]/30 selection:text-white transition-colors duration-200">
      <Header />
      <main className="flex-1 w-full">
        {renderActivePage()}
      </main>
      <Footer />

      {/* Global Modals, Drawers & Overlays */}
      <CartDrawer />
      <SearchModal />
      <QuickViewModal />
      <FloatingWhatsApp />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
