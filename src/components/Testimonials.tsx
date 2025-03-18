
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  stars: number;
  delay: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, position, company, stars, delay }) => {
  return (
    <div 
      className="p-6 glassmorphism rounded-xl slide-up-animation" 
      style={{ animationDelay: delay }}
    >
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill={i < stars ? "currentColor" : "none"} 
            className={i < stars ? "text-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="mb-4 italic text-foreground/80">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-foreground/70">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "CompanyCove built our restaurant website in just 2 days. Their service was incredibly fast, and the result is beautiful. Our online reservations have increased by 30%.",
      name: "Sarah Johnson",
      position: "Owner",
      company: "Taste of Italy",
      stars: 5,
      delay: "0s"
    },
    {
      quote: "As a small barbershop, I didn't think I could afford a professional website. CompanyCove delivered an amazing site within my budget. Now my clients can book appointments online!",
      name: "Marcus Chen",
      position: "Founder",
      company: "Elite Cuts",
      stars: 5,
      delay: "0.1s"
    },
    {
      quote: "I was blown away by how quickly they created our online store. The design is clean, modern, and our products look fantastic. Our sales have already improved.",
      name: "Emily Peterson",
      position: "CEO",
      company: "Bloom Boutique",
      stars: 4,
      delay: "0.2s"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up-animation">
          <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-foreground/70">
            Join over 50+ happy businesses who trust CompanyCove with their online presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              stars={testimonial.stars}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
