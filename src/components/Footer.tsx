import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CompanyCove</h3>
            <p className="text-foreground/70">
              Building professional websites that help businesses grow and succeed online.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground/70 hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-foreground/70 hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/retail" className="text-foreground/70 hover:text-primary">Retail Websites</Link></li>
              <li><Link to="/restaurant" className="text-foreground/70 hover:text-primary">Restaurant Websites</Link></li>
              <li><Link to="/barbershop" className="text-foreground/70 hover:text-primary">Barbershop Websites</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>5956 West Cortland St, Chicago, IL</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="w-5 h-5" />
                <span>support@companycove.com</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Phone className="w-5 h-5" />
                <span>(872) 256-1290</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/70 text-center md:text-left">
              &copy; {new Date().getFullYear()} CompanyCove. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <Link to="/disclaimer" className="text-foreground/70 hover:text-primary text-sm">
                Disclaimer
              </Link>
              <Link to="/privacy-policy" className="text-foreground/70 hover:text-primary text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-foreground/70 hover:text-primary text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
