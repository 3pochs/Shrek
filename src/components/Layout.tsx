import React, { useEffect, useCallback } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Update page title based on route
    const titles: { [key: string]: string } = {
      '/': 'Company Cove - Professional Website Design',
      '/retail': 'Retail Website Design | Company Cove',
      '/restaurant': 'Restaurant Website Design | Company Cove',
      '/barbershop': 'Barbershop Website Design | Company Cove',
      '/about': 'About Us | Company Cove',
      '/contact': 'Contact Us | Company Cove',
      '/faq': 'Frequently Asked Questions | Company Cove',
      '/questionnaire': 'Get Started Questionnaire | Company Cove'
    };

    document.title = titles[location.pathname] || 'Company Cove - Professional Website Design';
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all elements with slide-up-animation class
    const elements = document.querySelectorAll('.slide-up-animation');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    // Track page views when route changes
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: document.title
      });
    }
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
