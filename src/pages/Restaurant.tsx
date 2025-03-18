
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';

const Restaurant = () => {
  const [activeTab, setActiveTab] = useState('menu');

  const menuCategories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' }
  ];

  const menuItems = {
    starters: [
      { name: 'Bruschetta', description: 'Toasted bread topped with tomatoes, garlic, and fresh basil', price: '$8' },
      { name: 'Calamari Fritti', description: 'Crispy fried calamari served with marinara sauce', price: '$12' },
      { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze', price: '$10' }
    ],
    mains: [
      { name: 'Spaghetti Carbonara', description: 'Classic pasta with pancetta, egg, pecorino cheese, and black pepper', price: '$16' },
      { name: 'Margherita Pizza', description: 'Traditional pizza with tomato sauce, mozzarella, and fresh basil', price: '$14' },
      { name: 'Grilled Salmon', description: 'Atlantic salmon with lemon butter sauce and seasonal vegetables', price: '$22' }
    ],
    desserts: [
      { name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream', price: '$8' },
      { name: 'Panna Cotta', description: 'Vanilla bean custard with fresh berries and mint', price: '$7' },
      { name: 'Cannoli', description: 'Crisp pastry shells filled with sweet ricotta cream and chocolate chips', price: '$6' }
    ],
    drinks: [
      { name: 'House Red Wine', description: 'Glass of our selected Chianti', price: '$9' },
      { name: 'Aperol Spritz', description: 'Refreshing cocktail with Aperol, Prosecco, and soda water', price: '$10' },
      { name: 'Italian Espresso', description: 'Rich and aromatic single or double shot', price: '$3/$5' }
    ]
  };

  const gallery = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
  ];

  const [activeMenuCategory, setActiveMenuCategory] = useState('starters');

  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    special: ''
  });

  const handleReservationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReservationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your reservation! We will confirm shortly.');
    setReservationForm({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
      special: ''
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-20 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full animate-fade-in">
            Authentic Italian Cuisine
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Bella Cucina
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Experience the flavors of Italy in the heart of Chicago
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button 
              className="px-8 py-3 bg-white text-primary hover:bg-white/90 transition-colors rounded-md font-medium"
              onClick={() => setActiveTab('reservation')}
            >
              Reserve a Table
            </button>
            <button 
              className="px-8 py-3 bg-transparent border border-white hover:bg-white/10 transition-colors rounded-md font-medium"
              onClick={() => setActiveTab('menu')}
            >
              View Menu
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
      
      {/* Navigation Tabs */}
      <section className="sticky top-20 z-30 bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button 
              onClick={() => setActiveTab('about')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'about' ? 'border-primary text-primary' : 'border-transparent text-foreground/70 hover:text-primary'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('menu')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'menu' ? 'border-primary text-primary' : 'border-transparent text-foreground/70 hover:text-primary'
              }`}
            >
              Menu
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'gallery' ? 'border-primary text-primary' : 'border-transparent text-foreground/70 hover:text-primary'
              }`}
            >
              Gallery
            </button>
            <button 
              onClick={() => setActiveTab('reservation')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'reservation' ? 'border-primary text-primary' : 'border-transparent text-foreground/70 hover:text-primary'
              }`}
            >
              Reservations
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'contact' ? 'border-primary text-primary' : 'border-transparent text-foreground/70 hover:text-primary'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className={`py-16 ${activeTab === 'about' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up-animation">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560341286-747b595096c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="Chef Preparing Food" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="slide-up-animation" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Tradition & Passion
              </h2>
              <p className="text-foreground/80 mb-4">
                Founded in 1985 by the Rossi family, Bella Cucina brings authentic Italian flavors to Chicago. Our recipes have been passed down through generations, preserving the true essence of Italian cuisine.
              </p>
              <p className="text-foreground/80 mb-6">
                Each dish is crafted with love and respect for tradition, using only the finest ingredients sourced locally and imported directly from Italy. Our chefs combine time-honored techniques with creative touches to create an unforgettable dining experience.
              </p>
              
              <div className="flex items-center gap-6 mb-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">30+</span>
                  <span className="text-sm text-foreground/70">Years of Excellence</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">50+</span>
                  <span className="text-sm text-foreground/70">Authentic Recipes</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">3</span>
                  <span className="text-sm text-foreground/70">Award-Winning Chefs</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-2">Hours of Operation</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <span className="text-foreground/80">Monday - Thursday:</span>
                  <span>11:30 AM - 10:00 PM</span>
                  <span className="text-foreground/80">Friday - Saturday:</span>
                  <span>11:30 AM - 11:00 PM</span>
                  <span className="text-foreground/80">Sunday:</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section className={`py-16 ${activeTab === 'menu' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Our Menu
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Culinary Delights
            </h2>
            <p className="text-foreground/80">
              Explore our carefully crafted menu featuring authentic Italian dishes made with the freshest ingredients.
            </p>
          </div>
          
          <div className="flex justify-center mb-8 overflow-x-auto pb-2 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            {menuCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveMenuCategory(category.id)}
                className={`px-6 py-3 mx-1 rounded-full whitespace-nowrap transition-colors ${
                  activeMenuCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-foreground/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 slide-up-animation" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              {menuItems[activeMenuCategory as keyof typeof menuItems].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start pb-6 border-b border-border/40 last:border-0 last:pb-0">
                  <div className="flex-1 mb-2 md:mb-0">
                    <h3 className="text-xl font-bold font-serif">{item.name}</h3>
                    <p className="text-foreground/70 text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="text-lg font-medium text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className={`py-16 ${activeTab === 'gallery' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Visual Experience
            </h2>
            <p className="text-foreground/80">
              Take a peek at our elegant ambiance and exquisite dishes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            {gallery.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden cursor-pointer hover-scale">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Reservation Section */}
      <section className={`py-16 ${activeTab === 'reservation' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Reservations
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Book Your Table
            </h2>
            <p className="text-foreground/80">
              Reserve your spot for an unforgettable dining experience at Bella Cucina.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto glassmorphism rounded-xl p-6 md:p-8 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleReservationSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={reservationForm.name}
                    onChange={handleReservationChange}
                    className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={reservationForm.email}
                    onChange={handleReservationChange}
                    className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={reservationForm.date}
                      onChange={handleReservationChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      required
                    />
                    <Calendar size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-1">
                    Time
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={reservationForm.time}
                      onChange={handleReservationChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      required
                    />
                    <Clock size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium mb-1">
                    Guests
                  </label>
                  <div className="relative">
                    <select
                      id="guests"
                      name="guests"
                      value={reservationForm.guests}
                      onChange={handleReservationChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none"
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                      <option value="9+">9+ People</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="special" className="block text-sm font-medium mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="special"
                  name="special"
                  value={reservationForm.special}
                  onChange={handleReservationChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Reserve Now
              </button>
              
              <p className="text-sm text-foreground/70 text-center">
                For large parties (9+ people) or special events, please call us directly at (123) 456-7890.
              </p>
            </form>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className={`py-16 ${activeTab === 'contact' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-up-animation">
              <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-foreground/80 mb-8">
                We'd love to hear from you. Whether you have a question about our menu, hours, or special events, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-foreground/70">123 Italian Avenue, Chicago, IL 60601</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a href="tel:+11234567890" className="text-foreground/70 hover:text-primary transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:info@bellacucina.com" className="text-foreground/70 hover:text-primary transition-colors">
                      info@bellacucina.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-foreground/70">
                      Monday - Thursday: 11:30 AM - 10:00 PM<br />
                      Friday - Saturday: 11:30 AM - 11:00 PM<br />
                      Sunday: 12:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-up-animation" style={{ animationDelay: '0.1s' }}>
              <div className="h-full rounded-xl overflow-hidden">
                {/* This would be a Google Maps embed in a real implementation */}
                <div className="w-full h-full min-h-[400px] bg-secondary/50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin size={48} className="mx-auto mb-2 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Find Us on the Map</h3>
                    <p className="text-foreground/70 mb-4">123 Italian Avenue, Chicago, IL 60601</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/contact" className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Demo Website
            </Link>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want a beautiful restaurant website like this?
            </h2>
            <p className="text-foreground/80 mb-8">
              We can build a custom website for your restaurant in just 48 hours, starting at only $300. No technical knowledge required!
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md font-medium inline-block"
            >
              Get This Website
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Restaurant;
