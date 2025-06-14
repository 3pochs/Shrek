import React from 'react';
import { Clock, DollarSign, Smartphone, Palette, Users, Target, Shield } from 'lucide-react';

export const AboutUs = () => {
  const features = [
    {
      icon: <Users size={24} />,
      title: "Global Reach",
      description: "We work with businesses worldwide, delivering professional websites that meet international standards and best practices.",
      delay: "0s"
    },
    {
      icon: <Target size={24} />,
      title: "Business Growth",
      description: "Our websites are designed to help your business grow by attracting more customers and making it easier for them to find and interact with you.",
      delay: "0.1s"
    },
    {
      icon: <Shield size={24} />,
      title: "Ongoing Support",
      description: "We don't disappear after your site launches. Our maintenance plans ensure your site stays updated and secure.",
      delay: "0.2s"
    }
  ];

  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 slide-up-animation">
          <span className="inline-block px-3 py-1 mb-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Your Web Development Partner
          </h2>
          <p className="text-foreground/70">
            At CompanyCove, we believe every business deserves an exceptional online presence without breaking the bank. Our mission is to democratize web development by providing affordable, high-quality websites that help businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div className="slide-up-animation">
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="slide-up-animation" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl font-bold mb-3">What We Do</h2>
            <p className="text-foreground/80 mb-3">
              We help businesses establish their digital footprint and attract more customers. Our approach combines modern design principles with practical functionality, creating websites that not only look great but also drive real business results.
            </p>
            <p className="text-foreground/80">
              We combine the quality of high-end agencies with the affordability businesses need. Our team brings together expertise in design, development, and digital marketing to deliver exceptional results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 glassmorphism rounded-xl slide-up-animation" style={{ animationDelay: feature.delay }}>
              <div className="text-primary mb-2">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 