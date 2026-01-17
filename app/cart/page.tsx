'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

interface CartItem {
  id: string;
  productSlug: string;
  productTitle: string;
  optionName: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  imageUrl: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set dynamic page title and meta description
    document.title = 'Shopping Cart - Buy Verified Accounts | USA Markets SMM';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Review your shopping cart and proceed to checkout. Buy verified Gmail, PayPal, social media, and bank accounts with instant delivery and 30-day warranty.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Review your shopping cart and proceed to checkout. Buy verified Gmail, PayPal, social media, and bank accounts with instant delivery and 30-day warranty.';
      document.head.appendChild(meta);
    }
    
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Ensure cart is an array and not empty object
        if (Array.isArray(parsedCart) && parsedCart.length > 0) {
          setCartItems(parsedCart);
        } else {
          setCartItems([]);
          localStorage.removeItem('cart');
        }
      } catch (e) {
        console.error('Error parsing cart:', e);
        setCartItems([]);
        localStorage.removeItem('cart');
      }
    } else {
      setCartItems([]);
    }
    setLoading(false);
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id: string) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalDiscount = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);
  const total = subtotal;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">Cart</span>
          </nav>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-24 w-24 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">
                    Cart Items ({cartItems.length})
                  </h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="relative w-full sm:w-24 h-48 sm:h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image
                            src={item.imageUrl}
                            alt={item.productTitle}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <Link
                                href={`/product/${item.productSlug}`}
                                className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                              >
                                {item.productTitle}
                              </Link>
                              <p className="text-sm text-gray-600 mt-1">{item.optionName}</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700 p-2"
                              aria-label="Remove item"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>

                          {/* Price and Quantity */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                            <div className="flex items-center gap-2">
                              {item.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  ${item.originalPrice.toFixed(2)}
                                </span>
                              )}
                              <span className="text-lg font-bold text-gray-900">
                                ${item.price.toFixed(2)}
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <label className="text-sm text-gray-700">Quantity:</label>
                              <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                  </svg>
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                  className="w-16 px-2 py-1 text-center text-gray-900 bg-white border-0 focus:ring-0"
                                />
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Item Total */}
                          <div className="mt-4 text-right">
                            <span className="text-sm text-gray-600">Item Total: </span>
                            <span className="text-lg font-bold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Shopping */}
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {totalDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount:</span>
                      <span className="font-semibold">-${totalDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="btn-primary block w-full text-white font-semibold py-3 px-6 rounded-lg mb-4 text-center shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Proceed to Checkout
                </Link>

                <div className="text-xs text-gray-600 space-y-2">
                  <p>✓ 30 Days Warranty</p>
                  <p>✓ 100% Verified Accounts</p>
                  <p>✓ Fast Delivery</p>
                  <p>✓ 24/7 Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

