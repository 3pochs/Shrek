import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface DemoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  path: string;
  tags: string[];
}

const DemoCard: React.FC<DemoCardProps> = ({ title, description, imageSrc, path, tags }) => {
  return (
    <div className="glassmorphism rounded-xl overflow-hidden hover-scale slide-up-animation">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        <Link 
          to={path} 
          className="group inline-flex items-center text-primary font-medium"
        >
          View Demo
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export const DemoShowcase = () => {
  const demos = [
    {
      title: "Restaurant",
      description: "Elegant website for restaurants and cafes with online reservations.",
      imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      path: "/restaurant",
      tags: ["Menu", "Reservations", "Gallery"]
    },
    {
      title: "Barbershop",
      description: "Modern site for barbershops and salons with booking system.",
      imageSrc: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      path: "/barbershop",
      tags: ["Booking", "Gallery", "Dark Mode"]
    }
  ];

  return (
    <section id="demo-showcase" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up-animation">
          <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Demo Websites for Every Business
          </h2>
          <p className="text-foreground/70">
            Explore our templates designed for various industries. Each demo is fully customizable to match your brand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {demos.map((demo, index) => (
            <DemoCard 
              key={index} 
              {...demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
