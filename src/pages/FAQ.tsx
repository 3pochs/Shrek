
import React from 'react';
import { Layout } from '../components/Layout';
import { FAQAccordion } from '../components/FAQAccordion';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-foreground/80">
              Find answers to common questions about our web development services.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="slide-up-animation">
              <FAQAccordion />
            </div>
            
            <div className="mt-12 text-center slide-up-animation">
              <p className="text-foreground/80 mb-6">
                Don't see your question here? We're happy to help!
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
