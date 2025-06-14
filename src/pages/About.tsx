import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              About CompanyCove
            </h1>
            <p className="text-lg text-foreground/80">
              We're a team of web developers passionate about helping businesses succeed online.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up-animation">
            <h2 className="text-3xl font-bold mb-6">What Makes Us Different</h2>
            <p className="text-foreground/80 mb-8">
              We combine the quality of high-end agencies with the affordability businesses need. Here's why companies choose to work with us:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 glassmorphism rounded-xl slide-up-animation">
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-foreground/70">
                We work with businesses worldwide, delivering professional websites that meet international standards and best practices.
              </p>
            </div>
            
            <div className="p-6 glassmorphism rounded-xl slide-up-animation" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold mb-3">No Coding Required</h3>
              <p className="text-foreground/70">
                You don't need technical knowledge to maintain your site. We build intuitive interfaces that make updates simple.
              </p>
            </div>
            
            <div className="p-6 glassmorphism rounded-xl slide-up-animation" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-foreground/70">
                We don't disappear after your site launches. Our maintenance plans ensure your site stays updated and secure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up-animation">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-foreground/80 mb-8">
              Let's discuss how we can help your business grow with a beautiful, functional website.
            </p>
            <Link to="/contact" className="btn-primary mx-auto">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
