
import React from 'react';
import { Clock, DollarSign, Smartphone, Palette } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="p-6 glassmorphism rounded-xl hover-scale slide-up-animation" 
      style={{ animationDelay: delay }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Clock size={24} />,
      title: "Fast Turnaround",
      description: "Get your website built and deployed in as little as 48 hours, ready to start attracting customers.",
      delay: "0s"
    },
    {
      icon: <DollarSign size={24} />,
      title: "Affordable Pricing",
      description: "Professional websites starting at just $300, significantly lower than most agencies and freelancers.",
      delay: "0.1s"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Fully Responsive",
      description: "Websites that look and function perfectly across all devices, from smartphones to desktop computers.",
      delay: "0.2s"
    },
    {
      icon: <Palette size={24} />,
      title: "Custom Designs",
      description: "No generic templates—each website is tailored to your unique brand and business requirements.",
      delay: "0.3s"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up-animation">
          <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose CompanyCove?
          </h2>
          <p className="text-foreground/70">
            We combine affordable pricing with premium quality, delivering websites that help your business grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
