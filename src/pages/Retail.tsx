
import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowRight, Star, X, Plus, Minus, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Retail = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'featured', name: 'Featured' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'sale', name: 'Sale' }
  ];
  
  const products = [
    {
      id: 1,
      name: 'Minimalist White T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      category: ['featured', 'new'],
      rating: 4.5,
      reviews: 24
    },
    {
      id: 2,
      name: 'Classic Denim Jacket',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      category: ['featured'],
      rating: 5,
      reviews: 18
    },
    {
      id: 3,
      name: 'Vintage Wool Sweater',
      price: 59.99,
      originalPrice: 79.99,
      image: 'https://images.unsplash.com/photo-1599576713929-d9be58126171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      category: ['sale'],
      rating: 4,
      reviews: 32
    },
    {
      id: 4,
      name: 'Modern Canvas Backpack',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      category: ['new'],
      rating: 4.5,
      reviews: 12
    },
    {
      id: 5,
      name: 'Leather Crossbody Bag',
      price: 69.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      category: ['featured', 'sale'],
      rating: 5,
      reviews: 8
    },
    {
      id: 6,
      name: 'Premium Watch Collection',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      category: ['featured', 'new'],
      rating: 4.5,
      reviews: 16
    }
  ];
  
  const handleAddToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    setIsCartOpen(true);
  };
  
  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(
      cartItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
    );
  };
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category.includes(activeCategory));
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubmitted(true);
    setNewsletterEmail('');
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const cart = document.getElementById('shopping-cart');
      if (cart && !cart.contains(event.target as Node) && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full animate-fade-in">
              New Collection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Discover Timeless Style & Quality
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Elevate your wardrobe with our premium collection of modern essentials designed for contemporary living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a href="#products" className="btn-primary">
                Shop Collection
              </a>
              <button className="btn-outlined">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/2 h-full -z-10 hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
            alt="Fashion Collection" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shop By Category
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            <div className="relative rounded-lg overflow-hidden h-60 group hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="Men's Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">Men</h3>
                  <button className="px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-white/90 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-60 group hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="Women's Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">Women</h3>
                  <button className="px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-white/90 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-60 group hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="Accessories" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">Accessories</h3>
                  <button className="px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-white/90 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Collection
            </h2>
          </div>
          
          <div className="flex justify-center mb-8 overflow-x-auto pb-2 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 mx-1 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-foreground/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 slide-up-animation" style={{ animationDelay: '0.2s' }}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="glassmorphism rounded-xl overflow-hidden hover-scale">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {product.originalPrice && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                      SALE
                    </span>
                  )}
                  <button 
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-foreground/70 hover:text-red-500 transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={16} />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-yellow-400 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        className={i < Math.floor(product.rating) ? "" : "text-gray-300"} 
                      />
                    ))}
                    <span className="ml-1 text-xs text-foreground/60">({product.reviews})</span>
                  </div>
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <div className="flex items-center mb-4">
                    <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="ml-2 text-foreground/60 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 slide-up-animation" style={{ animationDelay: '0.3s' }}>
            <button className="btn-outlined">
              View All Products
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Subscribe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-foreground/80 mb-8">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            
            {!isNewsletterSubmitted ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="bg-green-50 text-green-800 rounded-md p-4 flex items-center">
                <Check className="mr-2 flex-shrink-0" size={18} />
                <span>Thank you for subscribing! Check your email for a confirmation.</span>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 slide-up-animation">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
              </div>
              <h3 className="font-bold mb-2">Free Shipping</h3>
              <p className="text-foreground/60 text-sm">On orders over $50</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m16 13-3.5 3.5-2-2L8 17"/></svg>
              </div>
              <h3 className="font-bold mb-2">Easy Returns</h3>
              <p className="text-foreground/60 text-sm">30-day return policy</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
              </div>
              <h3 className="font-bold mb-2">Secure Payments</h3>
              <p className="text-foreground/60 text-sm">SSL secured checkout</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="font-bold mb-2">Quality Guarantee</h3>
              <p className="text-foreground/60 text-sm">Premium materials</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              We're here to help! If you have any questions about our products, orders, or services, please don't hesitate to contact us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col items-center p-6 glassmorphism rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin size={20} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">Our Store</h3>
              <p className="text-center text-foreground/70">789 Fashion Ave, Chicago, IL 60654</p>
            </div>
            
            <div className="flex flex-col items-center p-6 glassmorphism rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail size={20} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <a href="mailto:support@bloomretail.com" className="text-foreground/70 hover:text-primary transition-colors">
                support@bloomretail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 glassmorphism rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone size={20} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <a href="tel:+11234567890" className="text-foreground/70 hover:text-primary transition-colors">
                (123) 456-7890
              </a>
            </div>
          </div>
          
          <div className="mt-12 p-6 glassmorphism rounded-xl slide-up-animation" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Clock size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Store Hours</h3>
                <p className="text-foreground/70">
                  Monday - Friday: 10:00 AM - 8:00 PM<br />
                  Saturday: 10:00 AM - 6:00 PM<br />
                  Sunday: 12:00 PM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/contact" className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Demo Website
            </Link>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want a beautiful e-commerce website like this?
            </h2>
            <p className="text-foreground/80 mb-8">
              We can build a custom website for your retail business in just 48 hours, starting at only $300. No technical knowledge required!
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-block"
            >
              Get This Website
            </Link>
          </div>
        </div>
      </section>
      
      {/* Shopping Cart Sidebar */}
      <div 
        id="shopping-cart"
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-bold text-lg">Your Cart ({cartItems.length})</h3>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="p-4 max-h-[calc(100vh-210px)] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart size={48} className="mx-auto mb-4 text-foreground/30" />
              <p className="text-foreground/70">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 pb-4 border-b">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-foreground/60 text-sm">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center bg-secondary/60 rounded-full"
                        disabled={item.quantity === 1}
                      >
                        <Minus size={12} />
                      </button>
                      <span className="mx-2 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center bg-secondary/60 rounded-full"
                      >
                        <Plus size={12} />
                      </button>
                      <button 
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold">${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="w-full py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Checkout
            </button>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-full mt-2 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
      
      {/* Overlay when cart is open */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
      
      {/* Floating Cart Button */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center z-30 hover:bg-primary/90 transition-colors"
      >
        <ShoppingCart size={20} />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>
    </Layout>
  );
};

export default Retail;
