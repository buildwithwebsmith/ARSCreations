import React, { useState, useEffect } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  User as UserIcon,
  Menu,
  X,
  MessageCircle,
  FileText,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ARSLogo } from './ARSLogo';
import { BRAND_CONFIG, getWhatsAppUrl } from '../../lib/brandConfig';

export const Header: React.FC = () => {
  const {
    activePage,
    setActivePage,
    cartCount,
    wishlistCount,
    setIsCartDrawerOpen,
    setIsSearchOpen,
    user,
    theme,
    toggleTheme
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' as const },
    { label: 'Shop', page: 'shop' as const },
    { label: 'Printing Services', page: 'services' as const },
    { label: 'Bulk Orders', page: 'bulk-orders' as const },
    { label: 'About Us', page: 'about' as const },
    { label: 'Contact', page: 'contact' as const }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-200">
      {/* Top Announcement Bar */}
      <div className="bg-[#0b0c10] border-b border-[#1c1f2b] text-[11px] text-[#A2A9B8] px-4 py-1.5 flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00CFFF] animate-pulse" />
            <span className="font-medium tracking-wide">
              Custom Printing · Bulk Orders · Personalized Gifts · Business Branding
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px]">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 text-[#00CFFF]"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-[#363a4d]">|</span>
            <button
              onClick={() => setActivePage('faq')}
              className="hover:text-white transition-colors"
            >
              Help & FAQs
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#1c1f2b] py-3 shadow-xl shadow-black/40'
            : 'bg-[#050505] border-b border-[#14161f] py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
          {/* Zone 1: Single Brand Zone with ARS Creation Logo */}
          <button
            onClick={() => {
              setActivePage('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00CFFF]"
            aria-label="ARS Creation - Home"
          >
            <ARSLogo size="md" />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(link => {
              const isActive = activePage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => setActivePage(link.page)}
                  className={`text-sm font-medium tracking-wide transition-colors whitespace-nowrap relative py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#9DA4B5] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E100FF] via-[#7B2CFF] to-[#00CFFF] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-[#9DA4B5] hover:text-white hover:bg-[#12141c] rounded-lg transition-all relative group flex items-center justify-center"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#FFD21F] hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-5 h-5 text-[#7B2CFF] hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#9DA4B5] hover:text-white hover:bg-[#12141c] rounded-lg transition-colors"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setActivePage('wishlist')}
              className="relative p-2 text-[#9DA4B5] hover:text-white hover:bg-[#12141c] rounded-lg transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 text-[10px] font-bold bg-[#E100FF] text-white flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Account */}
            <button
              onClick={() => setActivePage('account')}
              className="p-2 text-[#9DA4B5] hover:text-white hover:bg-[#12141c] rounded-lg transition-colors hidden sm:flex items-center gap-1.5"
              aria-label="My Account"
            >
              <UserIcon className="w-5 h-5" />
              {user && (
                <span className="text-xs font-medium text-white max-w-[80px] truncate">
                  {user.name.split(' ')[0]}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="relative p-2 text-white hover:bg-[#12141c] rounded-lg transition-colors flex items-center gap-2"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#00CFFF]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 text-[10px] font-bold bg-[#E100FF] text-white flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            {/* Prominent "Get a Quote" CTA */}
            <button
              onClick={() => setActivePage('bulk-orders')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] hover:from-[#f02aff] hover:to-[#8f47ff] text-white transition-all shadow-md shadow-purple-900/30 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#9DA4B5] hover:text-white rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] bottom-0 bg-[#050505]/98 backdrop-blur-xl border-t border-[#1a1d28] p-6 flex flex-col justify-between overflow-y-auto z-50">
          <div className="space-y-4">
            <div className="text-xs font-semibold text-[#666c7e] uppercase tracking-wider">
              Navigation
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <button
                  key={link.page}
                  onClick={() => {
                    setActivePage(link.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    activePage === link.page
                      ? 'bg-[#141724] text-[#00CFFF]'
                      : 'text-[#D9DCE3] hover:bg-[#10121a]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setActivePage('faq');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium py-2 px-3 rounded-lg text-[#D9DCE3] hover:bg-[#10121a]"
              >
                Help & FAQs
              </button>
              <button
                onClick={() => {
                  setActivePage('blog');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium py-2 px-3 rounded-lg text-[#D9DCE3] hover:bg-[#10121a]"
              >
                Printing Guides & Blog
              </button>
              <button
                onClick={() => {
                  setActivePage('account');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium py-2 px-3 rounded-lg text-[#D9DCE3] hover:bg-[#10121a] flex items-center justify-between"
              >
                <span>My Account</span>
                <UserIcon className="w-4 h-4 text-[#A2A9B8]" />
              </button>

              <button
                onClick={toggleTheme}
                className="text-left text-base font-medium py-2 px-3 rounded-lg text-[#D9DCE3] hover:bg-[#10121a] flex items-center justify-between"
              >
                <span>Appearance: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#FFD21F]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#7B2CFF]" />
                )}
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1c1f2b] space-y-3">
            <button
              onClick={() => {
                setActivePage('bulk-orders');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-[#E100FF] to-[#7B2CFF] text-white shadow-lg"
            >
              Request Custom Bulk Quote
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#25D366]/25 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with ARS on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
