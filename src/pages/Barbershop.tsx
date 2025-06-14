import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { Users, Clock, MapPin, Mail, Phone, Calendar, ChevronDown, Scissors, Check } from 'lucide-react';

const Barbershop = () => {
  const [activeTab, setActiveTab] = useState('services');
  
  const services = [
    { name: 'Classic Cut', description: 'Traditional haircut with clippers and scissors', price: '$25', duration: '30 min' },
    { name: 'Fade', description: 'Gradual blend from skin to length', price: '$30', duration: '35 min' },
    { name: 'Beard Trim', description: 'Shape and line up your facial hair', price: '$15', duration: '15 min' },
    { name: 'Haircut & Beard', description: 'Complete grooming package', price: '$40', duration: '45 min' },
    { name: 'Royal Treatment', description: 'Haircut, beard, hot towel, and facial massage', price: '$55', duration: '60 min' },
    { name: 'Kids Cut (12 & under)', description: 'Haircut for children', price: '$20', duration: '20 min' }
  ];
  
  const staff = [
    {
      name: 'James Wilson',
      title: 'Master Barber',
      bio: '15 years of experience specializing in classic cuts and fades.',
      image: 'https://images.unsplash.com/photo-1578176603894-57973e38890f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Marcus Johnson',
      title: 'Senior Barber',
      bio: 'Award-winning barber known for creative designs and precision fades.',
      image: 'https://images.unsplash.com/photo-1582893561942-d61adcb2e534?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Andre Thomas',
      title: 'Style Specialist',
      bio: 'Combines traditional techniques with modern styles for unique looks.',
      image: 'https://images.unsplash.com/photo-1615396899839-c99c121888b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  const gallery = [
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1634481570432-0be979ba6da3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  ];
  
  const testimonials = [
    {
      text: "Best barbershop in town! James always gives me the perfect fade.",
      name: "Michael S.",
      rating: 5
    },
    {
      text: "Clean shop, professional service, and reasonable prices. Never had a bad cut here.",
      name: "David R.",
      rating: 5
    },
    {
      text: "The Royal Treatment is worth every penny. Great atmosphere and skilled barbers.",
      name: "Thomas W.",
      rating: 4
    }
  ];
  
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    barber: '',
    date: '',
    time: '',
    notes: ''
  });
  
  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for booking! We will confirm your appointment shortly.');
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      barber: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white bg-black">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
            alt="Barbershop Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-20 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full animate-fade-in">
            Premium Grooming Experience
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Elite Cuts
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Where style meets precision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button 
              className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors rounded-md font-medium"
              onClick={() => setActiveTab('booking')}
            >
              Book Now
            </button>
            <button 
              className="px-8 py-3 bg-transparent border border-white hover:bg-white/10 transition-colors rounded-md font-medium"
              onClick={() => setActiveTab('services')}
            >
              View Services
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
      <section className="sticky top-20 z-30 bg-black text-white shadow-sm">
        <div className="container-custom">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button 
              onClick={() => setActiveTab('about')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'about' ? 'border-white text-white' : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'services' ? 'border-white text-white' : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => setActiveTab('barbers')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'barbers' ? 'border-white text-white' : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Barbers
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'gallery' ? 'border-white text-white' : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Gallery
            </button>
            <button 
              onClick={() => setActiveTab('testimonials')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'testimonials' ? 'border-white text-white' : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => setActiveTab('booking')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'booking' ? 'border-white text-white' : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Book Now
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'contact' ? 'border-white text-white' : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className={`py-16 bg-black text-white ${activeTab === 'about' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up-animation">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="Barbershop Interior" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="slide-up-animation" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Crafting Style Since 2010
              </h2>
              <p className="text-white/80 mb-4">
                Elite Cuts was founded with a simple mission: to provide exceptional grooming services in a comfortable, stylish environment. What began as a small shop has grown into Chicago's premier destination for men's grooming.
              </p>
              <p className="text-white/80 mb-6">
                Our team of skilled barbers combines traditional techniques with modern styles to deliver cuts that make you look and feel your best. We believe that grooming is more than just a haircut—it's an experience.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">12+</span>
                  <span className="text-sm text-white/70">Years of Excellence</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">3</span>
                  <span className="text-sm text-white/70">Master Barbers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">5000+</span>
                  <span className="text-sm text-white/70">Happy Clients</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Hours of Operation</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <span className="text-white/80">Monday - Friday:</span>
                  <span>10:00 AM - 8:00 PM</span>
                  <span className="text-white/80">Saturday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                  <span className="text-white/80">Sunday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className={`py-16 bg-black text-white ${activeTab === 'services' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Grooming Services
            </h2>
            <p className="text-white/80">
              We offer a range of services to keep you looking sharp and feeling confident.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-scale">
                <div className="mb-4">
                  <Scissors size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-white/70 text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{service.price}</span>
                  <span className="text-sm text-white/70">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 slide-up-animation" style={{ animationDelay: '0.2s' }}>
            <button 
              onClick={() => setActiveTab('booking')}
              className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors rounded-md font-medium"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>
      
      {/* Barbers Section */}
      <section className={`py-16 bg-black text-white ${activeTab === 'barbers' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Barbers
            </h2>
            <p className="text-white/80">
              Skilled professionals dedicated to providing you with the perfect cut.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            {staff.map((barber, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="rounded-full object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{barber.name}</h3>
                <p className="text-gray-600 mb-2">{barber.title}</p>
                <p className="text-gray-500">{barber.bio}</p>
                <button 
                  onClick={() => {
                    setActiveTab('booking');
                    setBookingForm(prev => ({ ...prev, barber: barber.name }));
                  }}
                  className="mt-4 px-6 py-2 border border-white text-white hover:bg-white/10 transition-colors rounded-md text-sm font-medium"
                >
                  Book with {barber.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className={`py-16 bg-black text-white ${activeTab === 'gallery' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Work
            </h2>
            <p className="text-white/80">
              Browse through our gallery to see examples of our cuts and styles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            {gallery.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 slide-up-animation" style={{ animationDelay: '0.2s' }}>
            <p className="text-white/80 mb-4">Ready to experience the Elite Cuts difference?</p>
            <button 
              onClick={() => setActiveTab('booking')}
              className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors rounded-md font-medium"
            >
              Book Your Cut
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className={`py-16 bg-black text-white ${activeTab === 'testimonials' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-white/80">
              Don't just take our word for it. Hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill={i < testimonial.rating ? "currentColor" : "none"} 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={i < testimonial.rating ? "text-yellow-400" : "text-gray-400"}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 italic mb-4">{testimonial.text}</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className={`py-16 bg-black text-white ${activeTab === 'booking' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full">
              Book Now
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schedule Your Appointment
            </h2>
            <p className="text-white/80">
              Reserve your spot for a premium grooming experience.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors"
                    placeholder="John Doe"
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
                    value={bookingForm.email}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleBookingChange}
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">
                    Service
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={bookingForm.service}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors appearance-none"
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.name}>{service.name} - {service.price}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="barber" className="block text-sm font-medium mb-1">
                    Barber (Optional)
                  </label>
                  <div className="relative">
                    <select
                      id="barber"
                      name="barber"
                      value={bookingForm.barber}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors appearance-none"
                    >
                      <option value="">Any Available Barber</option>
                      {staff.map((barber, index) => (
                        <option key={index} value={barber.name}>{barber.name}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={bookingForm.date}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors"
                      required
                    />
                    <Calendar size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 pointer-events-none" />
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
                      value={bookingForm.time}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors"
                      required
                    />
                    <Clock size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={bookingForm.notes}
                  onChange={handleBookingChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors resize-none"
                  placeholder="Any special instructions or requests?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-white text-black rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Book Appointment
              </button>
              
              <p className="text-sm text-white/70 text-center">
                You can also call us directly at (123) 456-7890 to schedule your appointment.
              </p>
            </form>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className={`py-16 bg-black text-white ${activeTab === 'contact' ? 'block' : 'hidden'}`}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-up-animation">
              <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-white/80 mb-8">
                Have questions? We're here to help. Contact us via phone, email, or visit our shop.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-white/70">456 Barber Street, Chicago, IL 60615</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a href="tel:+18722561290" className="text-white/70 hover:text-white transition-colors">
                      (872) 256-1290
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:info@elitecuts.com" className="text-white/70 hover:text-white transition-colors">
                      info@elitecuts.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-white/70">
                      Monday - Friday: 10:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-2">Follow Us</h3>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 text-white hover:bg-white hover:text-black transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 text-white hover:bg-white hover:text-black transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 text-white hover:bg-white hover:text-black transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="slide-up-animation" style={{ animationDelay: '0.1s' }}>
              <div className="h-full rounded-xl overflow-hidden">
                {/* This would be a Google Maps embed in a real implementation */}
                <div className="w-full h-full min-h-[400px] bg-white/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin size={48} className="mx-auto mb-2 text-white" />
                    <h3 className="text-xl font-bold mb-2">Find Us on the Map</h3>
                    <p className="text-white/70 mb-4">456 Barber Street, Chicago, IL 60615</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-white text-black rounded-md hover:bg-white/90 transition-colors"
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
      <section className="py-16 bg-white text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/contact" className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-black/10 text-black rounded-full">
              Demo Website
            </Link>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want a sleek barbershop website like this?
            </h2>
            <p className="text-foreground/80 mb-8">
              We can build a custom website for your barbershop or salon starting at only $300. No technical knowledge required!
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-black text-white hover:bg-black/90 transition-colors rounded-md font-medium inline-block"
            >
              Get This Website
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Barbershop;
