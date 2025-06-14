import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Determine if we're on a demo site page
  const isDemoSite = ['/restaurant', '/barbershop', '/retail'].includes(location.pathname);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Apply different styling based on the current page
  const getNavbarStyle = () => {
    if (isDemoSite) {
      if (location.pathname === '/restaurant') {
        return isScrolled ? 
          'glassmorphism py-3 text-foreground' : 
          'bg-transparent py-5 text-white';
      } else if (location.pathname === '/barbershop') {
        return isScrolled ? 
          'bg-[#1A1F2C]/90 backdrop-blur-md py-3 text-white' : 
          'bg-transparent py-5 text-white';
      } else if (location.pathname === '/retail') {
        return isScrolled ? 
          'bg-white/90 backdrop-blur-md shadow-sm py-3 text-foreground' : 
          'bg-transparent py-5 text-foreground';
      }
    }
    // Default style for main site
    return isScrolled ? 'glassmorphism py-3' : 'bg-transparent py-5';
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${getNavbarStyle()}`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-display text-xl font-semibold ${
            isDemoSite && !isScrolled && location.pathname !== '/retail' ? 'text-white' : ''
          }`}>CompanyCove</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary link-underline ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : (isDemoSite && !isScrolled && location.pathname !== '/retail') 
                    ? 'text-white/80' 
                    : 'text-foreground/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`${
              isDemoSite && !isScrolled && location.pathname !== '/retail'
                ? 'bg-white text-primary hover:bg-white/90'
                : 'btn-primary'
            } transition-colors px-4 py-2 rounded-md font-medium`}
          >
            Get a Website
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden rounded-full p-2 ${
            isDemoSite && !isScrolled && location.pathname !== '/retail'
              ? 'hover:bg-white/20'
              : 'hover:bg-primary/5'
          } transition-colors`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? 
            <X size={20} className={isDemoSite && !isScrolled && location.pathname !== '/retail' ? 'text-white' : ''} /> : 
            <Menu size={20} className={isDemoSite && !isScrolled && location.pathname !== '/retail' ? 'text-white' : ''} />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glassmorphism animate-fade-in">
          <nav className="container-custom py-5 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary w-full text-center mt-4"
            >
              Get a Website
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
