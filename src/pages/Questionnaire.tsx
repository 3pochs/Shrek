
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { supabase } from "@/integrations/supabase/client";
import { Check, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Questionnaire = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Business Information
    companyName: '',
    hasLogo: false,
    logoUrl: '',
    tagline: '',
    businessDescription: '',
    uniqueSellingPoint: '',
    
    // Website Goals & Target Audience
    websiteGoal: '',
    targetAudience: '',
    desiredAction: '',
    
    // Website Content & Structure
    pages: {
      home: true,
      about: false,
      services: false,
      products: false,
      pricing: false,
      contact: true,
      testimonials: false,
      faq: false,
      blog: false,
      other: false,
      otherSpecify: ''
    },
    hasContent: '',
    imageNeeds: '',
    
    // E-commerce
    sellingOnline: false,
    productCount: '',
    needsPaymentProcessing: false,
    paymentMethods: '',
    priceRange: '',
    needsInventory: false,
    
    // Design Preferences
    hasBrandingGuidelines: false,
    colorPreferences: '',
    websiteExamples: '',
    layoutStyle: '',
    needsAnimations: false,
    
    // Features & Functionality
    features: {
      contactForm: true,
      booking: false,
      socialMedia: false,
      liveChat: false,
      blog: false,
      newsletter: false,
      seo: false,
      maps: false,
      testimonials: false,
      other: false,
      otherSpecify: ''
    },
    
    // Testimonials & Trust Factors
    hasTestimonials: false,
    testimonialText: '',
    hasCaseStudies: false,
    valueProposition: '',
    
    // Maintenance & Support
    needsMaintenance: false,
    needsTraining: false,
    
    // Budget & Timeline
    budget: '',
    timeline: '',
    
    // Additional Notes
    additionalNotes: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save the submission to Supabase directly to the table instead of using RPC
      const { error: insertError } = await supabase
        .from('questionnaire_submissions')
        .insert({
          submission_data: formData
        });
        
      if (insertError) {
        throw new Error(`Failed to save questionnaire: ${insertError.message}`);
      }
      
      // Send the email via Edge Function
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.companyName || 'Website Questionnaire',
          email: 'questionnaire@form.submit',
          business: 'Questionnaire Submission',
          budget: formData.budget,
          message: JSON.stringify(formData, null, 2)
        }
      });
      
      if (emailError) {
        console.error("Email notification error:", emailError);
        // Continue even if email fails as the data is saved to DB
      }
      
      // Show success message
      setIsSubmitted(true);
      toast({
        title: "Questionnaire Submitted!",
        description: "We'll review your information and get back to you soon.",
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(false);
        window.scrollTo(0, 0);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: error.message || "Failed to submit your questionnaire. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Web Design Questionnaire
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Help Us Create Your Perfect Website
            </h1>
            <p className="text-lg text-foreground/80">
              Please fill out this questionnaire to help us understand your needs and create a website that perfectly matches your vision.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glassmorphism rounded-xl p-6 md:p-8 slide-up-animation">
              {!isSubmitted ? (
                <>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Business Information */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">1. Business Information</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="flex items-center space-x-2 text-sm font-medium mb-1">
                              <input
                                type="checkbox"
                                name="hasLogo"
                                checked={formData.hasLogo}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Do you have a logo?</span>
                            </label>
                          </div>
                          
                          {formData.hasLogo && (
                            <div>
                              <label htmlFor="logoUrl" className="block text-sm font-medium mb-1">
                                Logo URL or description
                              </label>
                              <input
                                type="text"
                                id="logoUrl"
                                name="logoUrl"
                                value={formData.logoUrl}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                placeholder="Enter URL or describe your logo"
                              />
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="tagline" className="block text-sm font-medium mb-1">
                            Tagline/Slogan
                          </label>
                          <input
                            type="text"
                            id="tagline"
                            name="tagline"
                            value={formData.tagline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="businessDescription" className="block text-sm font-medium mb-1">
                            Briefly describe your business (What do you do?)
                          </label>
                          <textarea
                            id="businessDescription"
                            name="businessDescription"
                            value={formData.businessDescription}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="uniqueSellingPoint" className="block text-sm font-medium mb-1">
                            What makes your business unique?
                          </label>
                          <textarea
                            id="uniqueSellingPoint"
                            name="uniqueSellingPoint"
                            value={formData.uniqueSellingPoint}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Website Goals & Target Audience */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">2. Website Goals & Target Audience</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="websiteGoal" className="block text-sm font-medium mb-1">
                            What is the main goal of your website?
                          </label>
                          <select
                            id="websiteGoal"
                            name="websiteGoal"
                            value={formData.websiteGoal}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          >
                            <option value="">Select a goal</option>
                            <option value="generate_leads">Generate Leads</option>
                            <option value="showcase_products">Showcase Products/Services</option>
                            <option value="provide_information">Provide Information</option>
                            <option value="online_sales">Online Sales</option>
                            <option value="bookings">Bookings/Appointments</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="targetAudience" className="block text-sm font-medium mb-1">
                            Who is your target audience? (Age group, interests, location, etc.)
                          </label>
                          <textarea
                            id="targetAudience"
                            name="targetAudience"
                            value={formData.targetAudience}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="desiredAction" className="block text-sm font-medium mb-1">
                            What action do you want visitors to take?
                          </label>
                          <select
                            id="desiredAction"
                            name="desiredAction"
                            value={formData.desiredAction}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          >
                            <option value="">Select an action</option>
                            <option value="contact">Contact You</option>
                            <option value="signup">Sign Up</option>
                            <option value="purchase">Purchase a Product</option>
                            <option value="book">Book a Service</option>
                            <option value="download">Download Something</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    {/* Website Content & Structure */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">3. Website Content & Structure</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2">What pages do you need?</p>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="pages.home"
                                checked={formData.pages.home}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Home</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="pages.about"
                                checked={formData.pages.about}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>About Us</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="pages.services"
                                checked={formData.pages.services}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Services</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="pages.products"
                                checked={formData.pages.products}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Products</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="pages.pricing"
                                checked={formData.pages.pricing}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Pricing</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="pages.contact"
                                checked={formData.pages.contact}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Contact</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="pages.testimonials"
                                checked={formData.pages.testimonials}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Testimonials</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="pages.faq"
                                checked={formData.pages.faq}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>FAQ</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="pages.blog"
                                checked={formData.pages.blog}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Blog</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="pages.other"
                                checked={formData.pages.other}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Other</span>
                            </label>
                          </div>
                          
                          {formData.pages.other && (
                            <div className="mt-2">
                              <label htmlFor="pages.otherSpecify" className="block text-sm font-medium mb-1">
                                Please specify other pages
                              </label>
                              <input
                                type="text"
                                id="pages.otherSpecify"
                                name="pages.otherSpecify"
                                value={formData.pages.otherSpecify}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                              />
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="hasContent" className="block text-sm font-medium mb-1">
                            Do you already have content for these pages?
                          </label>
                          <select
                            id="hasContent"
                            name="hasContent"
                            value={formData.hasContent}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          >
                            <option value="">Select an option</option>
                            <option value="yes_all">Yes, for all pages</option>
                            <option value="yes_some">Yes, for some pages</option>
                            <option value="no">No, I need help with content</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="imageNeeds" className="block text-sm font-medium mb-1">
                            Do you need professional images, or will you provide your own?
                          </label>
                          <select
                            id="imageNeeds"
                            name="imageNeeds"
                            value={formData.imageNeeds}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          >
                            <option value="">Select an option</option>
                            <option value="provide_own">I will provide my own images</option>
                            <option value="need_professional">I need professional images</option>
                            <option value="mix">A mix of both</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    {/* E-commerce */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">4. E-commerce (If Applicable)</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="flex items-center space-x-2 text-sm font-medium mb-1">
                            <input
                              type="checkbox"
                              name="sellingOnline"
                              checked={formData.sellingOnline}
                              onChange={handleInputChange}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span>Are you selling products/services online?</span>
                          </label>
                        </div>
                        
                        {formData.sellingOnline && (
                          <>
                            <div>
                              <label htmlFor="productCount" className="block text-sm font-medium mb-1">
                                How many products/services do you offer?
                              </label>
                              <input
                                type="text"
                                id="productCount"
                                name="productCount"
                                value={formData.productCount}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                              />
                            </div>
                            
                            <div>
                              <label className="flex items-center space-x-2 text-sm font-medium mb-1">
                                <input
                                  type="checkbox"
                                  name="needsPaymentProcessing"
                                  checked={formData.needsPaymentProcessing}
                                  onChange={handleInputChange}
                                  className="rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <span>Do you need payment processing?</span>
                              </label>
                            </div>
                            
                            {formData.needsPaymentProcessing && (
                              <div>
                                <label htmlFor="paymentMethods" className="block text-sm font-medium mb-1">
                                  What payment methods do you need?
                                </label>
                                <input
                                  type="text"
                                  id="paymentMethods"
                                  name="paymentMethods"
                                  value={formData.paymentMethods}
                                  onChange={handleInputChange}
                                  placeholder="e.g., PayPal, Stripe, Credit Card, etc."
                                  className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                />
                              </div>
                            )}
                            
                            <div>
                              <label htmlFor="priceRange" className="block text-sm font-medium mb-1">
                                What are your product/service prices?
                              </label>
                              <input
                                type="text"
                                id="priceRange"
                                name="priceRange"
                                value={formData.priceRange}
                                onChange={handleInputChange}
                                placeholder="e.g., $10-$500"
                                className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                              />
                            </div>
                            
                            <div>
                              <label className="flex items-center space-x-2 text-sm font-medium mb-1">
                                <input
                                  type="checkbox"
                                  name="needsInventory"
                                  checked={formData.needsInventory}
                                  onChange={handleInputChange}
                                  className="rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <span>Do you need inventory management?</span>
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Design Preferences */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">5. Design Preferences</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="flex items-center space-x-2 text-sm font-medium mb-1">
                            <input
                              type="checkbox"
                              name="hasBrandingGuidelines"
                              checked={formData.hasBrandingGuidelines}
                              onChange={handleInputChange}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span>Do you have any existing branding guidelines?</span>
                          </label>
                        </div>
                        
                        <div>
                          <label htmlFor="colorPreferences" className="block text-sm font-medium mb-1">
                            What colors do you want for your website?
                          </label>
                          <input
                            type="text"
                            id="colorPreferences"
                            name="colorPreferences"
                            value={formData.colorPreferences}
                            onChange={handleInputChange}
                            placeholder="e.g., Blue and white, earth tones, etc."
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="websiteExamples" className="block text-sm font-medium mb-1">
                            Do you have examples of websites you like? (Provide links if possible)
                          </label>
                          <textarea
                            id="websiteExamples"
                            name="websiteExamples"
                            value={formData.websiteExamples}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="layoutStyle" className="block text-sm font-medium mb-1">
                            What kind of layout/style do you prefer?
                          </label>
                          <select
                            id="layoutStyle"
                            name="layoutStyle"
                            value={formData.layoutStyle}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          >
                            <option value="">Select a style</option>
                            <option value="minimalist">Minimalist</option>
                            <option value="modern">Modern</option>
                            <option value="corporate">Corporate</option>
                            <option value="fun">Fun/Playful</option>
                            <option value="classic">Classic/Traditional</option>
                            <option value="luxurious">Luxurious/Premium</option>
                            <option value="creative">Creative/Artistic</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="flex items-center space-x-2 text-sm font-medium mb-1">
                            <input
                              type="checkbox"
                              name="needsAnimations"
                              checked={formData.needsAnimations}
                              onChange={handleInputChange}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span>Do you need any animations or special effects?</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features & Functionality */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">6. Features & Functionality</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Do you need any of the following?</p>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="features.contactForm"
                                checked={formData.features.contactForm}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Contact form</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="features.booking"
                                checked={formData.features.booking}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Appointment booking</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="features.socialMedia"
                                checked={formData.features.socialMedia}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Social media integration</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="features.liveChat"
                                checked={formData.features.liveChat}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Live chat</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="features.blog"
                                checked={formData.features.blog}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Blog</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="features.newsletter"
                                checked={formData.features.newsletter}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Newsletter signup</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="features.seo"
                                checked={formData.features.seo}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>SEO optimization</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="features.maps"
                                checked={formData.features.maps}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Google Maps integration</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="features.testimonials"
                                checked={formData.features.testimonials}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Customer testimonials section</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name="features.other"
                                checked={formData.features.other}
                                onChange={handleInputChange}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>Other</span>
                            </label>
                          </div>
                          
                          {formData.features.other && (
                            <div className="mt-2">
                              <label htmlFor="features.otherSpecify" className="block text-sm font-medium mb-1">
                                Please specify other features
                              </label>
                              <input
                                type="text"
                                id="features.otherSpecify"
                                name="features.otherSpecify"
                                value={formData.features.otherSpecify}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonials & Trust Factors */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">7. Testimonials & Trust Factors</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="flex items-center space-x-2 text-sm font-medium mb-1">
                            <input
                              type="checkbox"
                              name="hasTestimonials"
                              checked={formData.hasTestimonials}
                              onChange={handleInputChange}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span>Do you have client testimonials to showcase?</span>
                          </label>
                        </div>
                        
                        {formData.hasTestimonials && (
                          <div>
                            <label htmlFor="testimonialText" className="block text-sm font-medium mb-1">
                              Please provide your testimonials
                            </label>
                            <textarea
                              id="testimonialText"
                              name="testimonialText"
                              value={formData.testimonialText}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                              placeholder="Add each testimonial with the client's name and company if applicable"
                            />
                          </div>
                        )}
                        
                        <div>
                          <label className="flex items-center space-x-2 text-sm font-medium mb-1">
                            <input
                              type="checkbox"
                              name="hasCaseStudies"
                              checked={formData.hasCaseStudies}
                              onChange={handleInputChange}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span>Do you have case studies or past projects to display?</span>
                          </label>
                        </div>
                        
                        <div>
                          <label htmlFor="valueProposition" className="block text-sm font-medium mb-1">
                            Why should customers choose you over competitors?
                          </label>
                          <textarea
                            id="valueProposition"
                            name="valueProposition"
                            value={formData.valueProposition}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Maintenance & Support */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">8. Maintenance & Support</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="flex items-center space-x-2 text-sm font-medium mb-1">
                            <input
                              type="checkbox"
                              name="needsMaintenance"
                              checked={formData.needsMaintenance}
                              onChange={handleInputChange}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span>Do you need ongoing website maintenance and updates?</span>
                          </label>
                        </div>
                        
                        <div>
                          <label className="flex items-center space-x-2 text-sm font-medium mb-1">
                            <input
                              type="checkbox"
                              name="needsTraining"
                              checked={formData.needsTraining}
                              onChange={handleInputChange}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span>Do you need training on how to update your website?</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Budget & Timeline */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">9. Budget & Timeline</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium mb-1">
                            What is your budget for this website?
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          >
                            <option value="">Select a budget range</option>
                            <option value="300-400">$300-$400</option>
                            <option value="400-500">$400-$500</option>
                            <option value="500-1000">$500-$1000</option>
                            <option value="1000-2000">$1000-$2000</option>
                            <option value="2000+">$2000+</option>
                            <option value="not-sure">Not sure yet</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium mb-1">
                            When do you need the website to be completed?
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          >
                            <option value="">Select a timeframe</option>
                            <option value="1-2-weeks">1-2 weeks</option>
                            <option value="3-4-weeks">3-4 weeks</option>
                            <option value="1-2-months">1-2 months</option>
                            <option value="3+months">3+ months</option>
                            <option value="no-rush">No rush</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Notes */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">10. Additional Notes</h2>
                      
                      <div>
                        <label htmlFor="additionalNotes" className="block text-sm font-medium mb-1">
                          Is there anything else you'd like to include?
                        </label>
                        <textarea
                          id="additionalNotes"
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-6 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <span className="inline-flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          <span className="inline-flex items-center">
                            Submit Questionnaire
                            <Send size={16} className="ml-2" />
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Questionnaire Submitted!</h3>
                  <p className="text-foreground/70 max-w-md mx-auto">
                    Thank you for taking the time to complete our questionnaire. We'll review your information and get back to you within 24-48 hours to discuss your project in detail.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Questionnaire;
