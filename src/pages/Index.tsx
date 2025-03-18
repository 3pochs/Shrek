
import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { DemoShowcase } from '../components/DemoShowcase';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <DemoShowcase />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-foreground/70">
              Tell us about your project and we'll get back to you within 24 hours with a personalized quote.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
