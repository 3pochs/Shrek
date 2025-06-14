import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-showcase');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full animate-fade-in">
            Your Web Development Partner
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Professional Websites for Every Business
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get a professional website starting at just $300+. No hidden fees, no complicated jargon—just beautiful, functional websites that convert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button onClick={scrollToDemo} className="btn-primary group">
              See Our Work
              <ArrowDown size={16} className="ml-2 group-hover:animate-bounce" />
            </button>
            <Link to="/contact" className="btn-outlined">
              Get a Website
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] z-0"></div>
    </section>
  );
};
