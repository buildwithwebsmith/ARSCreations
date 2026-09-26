import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, User, Order, Page, ShippingAddress } from '../types';
import { PRODUCTS } from '../data/products';
import { playThemeToggleSound } from '../lib/audio';

interface ToastState {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface ShopContextType {
  // Navigation
  activePage: Page;
  setActivePage: (page: Page) => void;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
  selectedBlogPostId: string | null;
  setSelectedBlogPostId: (id: string | null) => void;
  navigateToProduct: (productId: string) => void;
  navigateToCategory: (categorySlug: string) => void;
  navigateToBlog: (blogId: string) => void;

  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'totalPrice'>) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  cartShipping: number;
  cartTotal: number;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;

  // Wishlist
  wishlist: string[]; // product IDs
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Quick View Modal
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  // Authentication & Demo User
  user: User | null;
  login: (email: string, name?: string) => void;
  signup: (name: string, email: string, phone?: string) => void;
  logout: () => void;
  loginDemoUser: () => void;
  logoutUser: () => void;
  updateUserAddress: (address: ShippingAddress) => void;

  // Orders
  orders: Order[];
  createOrder: (
    shippingAddress: ShippingAddress,
    paymentMethod: Order['paymentMethod'],
    customerInfo: Order['customerInfo']
  ) => Order;

  // Theme (Dark & Light Mode)
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  setTheme: (theme: 'dark' | 'light') => void;

  // Toast notifications
  toast: ToastState | null;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'ars_creation_cart_v1';
const WISHLIST_STORAGE_KEY = 'ars_creation_wishlist_v1';
const USER_STORAGE_KEY = 'ars_creation_user_v1';
const ORDERS_STORAGE_KEY = 'ars_creation_orders_v1';
const THEME_STORAGE_KEY = 'ars_creation_theme_v1';

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Theme State (Dark or Light)
  const [theme, setThemeState] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
      return 'dark'; // Default premium dark theme
    } catch {
      return 'dark';
    }
  });

  // Apply theme class to document root element
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {
      console.error(e);
    }

    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeState(nextTheme);
    playThemeToggleSound(nextTheme === 'dark');
  };

  const setTheme = (newTheme: 'dark' | 'light') => {
    setThemeState(newTheme);
    playThemeToggleSound(newTheme === 'dark');
  };

  // Navigation State
  const [activePage, setActivePageState] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string | null>(null);

  // Modals & Drawers
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toast, setToast] = useState<ToastState | null>(null);

  // Cart State with LocalStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State with LocalStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // User State with LocalStorage
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem(USER_STORAGE_KEY);
      return saved
        ? JSON.parse(saved)
        : {
            id: 'usr_demo_101',
            name: 'Demo Client',
            email: 'client@demo.com',
            phone: '+91 98765 43210',
            company: 'Studio Works India',
            savedAddresses: [
              {
                fullName: 'Demo Client',
                email: 'client@demo.com',
                phone: '+91 98765 43210',
                companyName: 'Studio Works India',
                addressLine: 'Unit 402, High Street Towers, FC Road',
                city: 'Pune',
                state: 'Maharashtra',
                pincode: '411004'
              }
            ]
          };
    } catch {
      return null;
    }
  });

  // Orders State with LocalStorage
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);

      // Default sample order to give users instant realistic order tracking
      const defaultProduct = PRODUCTS[0];
      return [
        {
          id: 'ord_sample_9021',
          orderNumber: 'ARS-2026-9021',
          date: 'March 18, 2026',
          items: [
            {
              id: 'cart_item_sample',
              productId: defaultProduct.id,
              product: defaultProduct,
              quantity: 100,
              selectedSize: 'Standard (89 x 51 mm)',
              selectedFinish: 'Velvet Matte + Silver Foil',
              unitPrice: 3.49,
              totalPrice: 349
            }
          ],
          subtotal: 349,
          shipping: 0,
          discount: 0,
          total: 349,
          status: 'In Production',
          customerInfo: {
            fullName: 'Demo Client',
            email: 'client@demo.com',
            phone: '+91 98765 43210'
          },
          shippingAddress: {
            fullName: 'Demo Client',
            email: 'client@demo.com',
            phone: '+91 98765 43210',
            companyName: 'Studio Works India',
            addressLine: 'Unit 402, High Street Towers, FC Road',
            city: 'Pune',
            state: 'Maharashtra',
            pincode: '411004'
          },
          trackingNumber: 'DEL-IND-88291039',
          paymentMethod: 'UPI'
        }
      ];
    } catch {
      return [];
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  // Page switcher with smooth scroll
  const setActivePage = (page: Page) => {
    setActivePageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProduct = (productId: string) => {
    setSelectedProductId(productId);
    setActivePage('product-detail');
  };

  const navigateToCategory = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setActivePage('shop');
  };

  const navigateToBlog = (blogId: string) => {
    setSelectedBlogPostId(blogId);
    setActivePage('blog-detail');
  };

  // Toast Helper
  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToast({ id, message, type });
    setTimeout(() => {
      setToast(prev => (prev?.id === id ? null : prev));
    }, 3200);
  };

  // Cart Handlers
  const addToCart = (item: Omit<CartItem, 'id' | 'totalPrice'>) => {
    const totalPrice = Math.round(item.unitPrice * item.quantity);
    const id = `item_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const newItem: CartItem = {
      ...item,
      id,
      totalPrice
    };

    setCart(prev => [...prev, newItem]);
    showToast(`Added ${item.product.name} to cart!`, 'success');
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
    showToast('Item removed from cart', 'info');
  };

  const updateCartQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(item => {
        if (item.id === cartItemId) {
          return {
            ...item,
            quantity,
            totalPrice: Math.round(item.unitPrice * quantity)
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + (item.quantity > 0 ? 1 : 0), 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.totalPrice, 0);
  // Free shipping above ₹999; otherwise ₹79 standard shipping
  const cartShipping = cartSubtotal > 999 || cartSubtotal === 0 ? 0 : 79;
  const cartTotal = cartSubtotal + cartShipping;

  // Wishlist Handlers
  const toggleWishlist = (productId: string) => {
    if (wishlist.includes(productId)) {
      setWishlist(prev => prev.filter(id => id !== productId));
      showToast('Removed from wishlist', 'info');
    } else {
      setWishlist(prev => [...prev, productId]);
      showToast('Added to wishlist!', 'success');
    }
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);
  const wishlistCount = wishlist.length;

  // Quick View Handlers
  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  // Authentication Handlers (Demo State with realistic behavior)
  const login = (email: string, name?: string) => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name: name || email.split('@')[0],
      email,
      phone: '+91 98765 43210',
      company: '',
      savedAddresses: user?.savedAddresses || []
    };
    setUser(newUser);
    showToast(`Welcome back, ${newUser.name}!`, 'success');
  };

  const signup = (name: string, email: string, phone?: string) => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name,
      email,
      phone: phone || '',
      company: '',
      savedAddresses: []
    };
    setUser(newUser);
    showToast(`Welcome to ARS Creation, ${name}!`, 'success');
  };

  const logout = () => {
    setUser(null);
    showToast('Signed out successfully', 'info');
  };

  const loginDemoUser = () => {
    login('client@demo.com', 'Demo Client');
  };

  const logoutUser = () => {
    logout();
  };

  const updateUserAddress = (address: ShippingAddress) => {
    if (!user) return;
    const updatedUser: User = {
      ...user,
      savedAddresses: [address, ...(user.savedAddresses || []).filter(a => a.addressLine !== address.addressLine)]
    };
    setUser(updatedUser);
    showToast('Address saved to profile', 'success');
  };

  // Order Creation Handler
  const createOrder = (
    shippingAddress: ShippingAddress,
    paymentMethod: Order['paymentMethod'],
    customerInfo: Order['customerInfo']
  ): Order => {
    const orderNumber = `ARS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder: Order = {
      id: `ord_${Date.now()}`,
      orderNumber,
      date: new Date().toLocaleDateString('en-IN', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      items: [...cart],
      subtotal: cartSubtotal,
      shipping: cartShipping,
      discount: 0,
      total: cartTotal,
      status: 'Processing',
      customerInfo,
      shippingAddress,
      trackingNumber: `EXP-IN-${Math.floor(10000000 + Math.random() * 90000000)}`,
      paymentMethod
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        activePage,
        setActivePage,
        selectedCategory,
        setSelectedCategory,
        selectedProductId,
        setSelectedProductId,
        selectedBlogPostId,
        setSelectedBlogPostId,
        navigateToProduct,
        navigateToCategory,
        navigateToBlog,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        cartShipping,
        cartTotal,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        user,
        login,
        signup,
        logout,
        loginDemoUser,
        logoutUser,
        updateUserAddress,
        orders,
        createOrder,
        theme,
        toggleTheme,
        setTheme,
        toast,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
