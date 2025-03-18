
import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: Array<{ text: string; included: boolean }>;
  isPopular?: boolean;
  delay: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  delay
}) => {
  return (
    <div 
      className={`p-6 rounded-xl transition-all duration-300 slide-up-animation ${
        isPopular 
          ? 'glassmorphism shadow-lg scale-105 border-primary/20 z-10' 
          : 'border border-border bg-white hover:shadow-md'
      }`}
      style={{ animationDelay: delay }}
    >
      {isPopular && (
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
          Most Popular
        </span>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">${price}</span>
        {price !== '500+' && <span className="text-foreground/70"> one-time</span>}
      </div>
      <p className="text-foreground/70 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            ) : (
              <X size={18} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
            )}
            <span className={feature.included ? '' : 'text-foreground/50'}>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        to="/contact" 
        className={`w-full text-center py-3 px-6 rounded-md transition-colors ${
          isPopular
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
};

export const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "300",
      description: "Perfect for small businesses just getting started online.",
      features: [
        { text: "3-page website", included: true },
        { text: "Mobile-friendly design", included: true },
        { text: "Fast loading speed", included: true },
        { text: "Contact form", included: true },
        { text: "Google Maps integration", included: false },
        { text: "Booking system", included: false },
        { text: "Custom animations", included: false },
      ],
      isPopular: false,
      delay: "0s"
    },
    {
      title: "Standard",
      price: "400",
      description: "The most popular choice for established businesses.",
      features: [
        { text: "5-page website", included: true },
        { text: "Mobile-friendly design", included: true },
        { text: "Fast loading speed", included: true },
        { text: "Contact form", included: true },
        { text: "Google Maps integration", included: true },
        { text: "Social media integration", included: true },
        { text: "Custom animations", included: false },
      ],
      isPopular: true,
      delay: "0.1s"
    },
    {
      title: "Premium",
      price: "500+",
      description: "Comprehensive solution for businesses with advanced needs.",
      features: [
        { text: "7+ page website", included: true },
        { text: "Mobile-friendly design", included: true },
        { text: "Fast loading speed", included: true },
        { text: "Contact form", included: true },
        { text: "Google Maps integration", included: true },
        { text: "Booking/reservation system", included: true },
        { text: "Custom animations", included: true },
      ],
      isPopular: false,
      delay: "0.2s"
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up-animation">
          <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent, Affordable Pricing
          </h2>
          <p className="text-foreground/70">
            Choose the plan that fits your business needs. All plans include free hosting setup and basic site maintenance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index} 
              title={plan.title} 
              price={plan.price} 
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={plan.delay}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center max-w-3xl mx-auto slide-up-animation">
          <h3 className="text-xl font-bold mb-3">Need Ongoing Support?</h3>
          <p className="text-foreground/70 mb-6">
            We offer affordable maintenance plans starting at just $20/month. Keep your site updated, secure, and optimized.
          </p>
          <Link to="/contact" className="btn-outlined">
            Ask About Maintenance
          </Link>
        </div>
      </div>
    </section>
  );
};
