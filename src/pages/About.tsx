
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
              We're a team of web developers passionate about helping small businesses succeed online.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up-animation">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Our Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="slide-up-animation" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-foreground/80 mb-4">
                At CompanyCove, we believe every small business deserves an exceptional online presence without breaking the bank. Our mission is to democratize web development by providing affordable, high-quality websites that help local businesses thrive.
              </p>
              <p className="text-foreground/80 mb-6">
                Founded in 2023, we've helped dozens of businesses in Chicago and beyond establish their digital footprint and attract more customers. Our approach combines modern design principles with practical functionality, creating websites that not only look great but also drive real business results.
              </p>
              <Link to="/contact" className="btn-primary">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up-animation">
            <h2 className="text-3xl font-bold mb-6">What Makes Us Different</h2>
            <p className="text-foreground/80 mb-8">
              We combine the quality of high-end agencies with the affordability small businesses need. Here's why local businesses choose to work with us:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 glassmorphism rounded-xl slide-up-animation">
              <h3 className="text-xl font-bold mb-3">Local Focus</h3>
              <p className="text-foreground/70">
                We specialize in helping local businesses in Chicago and surrounding areas. We understand the unique challenges and opportunities of the local market.
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
                We don't disappear after your site launches. Our affordable maintenance plans ensure your site stays updated and secure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center slide-up-animation">
            <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
            <p className="text-foreground/80 mb-12">
              Our small but mighty team brings together expertise in design, development, and digital marketing to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center slide-up-animation">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Carter</h3>
              <p className="text-primary mb-2">Founder & Lead Developer</p>
              <p className="text-foreground/70 max-w-xs mx-auto">
                10+ years experience building websites for small businesses.
              </p>
            </div>
            
            <div className="text-center slide-up-animation" style={{ animationDelay: '0.1s' }}>
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sophia Martinez</h3>
              <p className="text-primary mb-2">UI/UX Designer</p>
              <p className="text-foreground/70 max-w-xs mx-auto">
                Creates beautiful, user-friendly designs that convert visitors to customers.
              </p>
            </div>
            
            <div className="text-center slide-up-animation" style={{ animationDelay: '0.2s' }}>
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">David Robinson</h3>
              <p className="text-primary mb-2">Digital Marketing Specialist</p>
              <p className="text-foreground/70 max-w-xs mx-auto">
                Helps businesses maximize ROI through SEO and content strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
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
