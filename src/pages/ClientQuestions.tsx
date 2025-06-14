import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { supabase } from '../lib/supabase';
import { useToast } from "@/components/ui/use-toast";
import { Check, Send } from 'lucide-react';

const ClientQuestions = () => {
  useScrollToTop();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Step 1: Save the submission to Supabase
      const { error: insertError } = await supabase
        .from('questionnaire_submissions')
        .insert([data]);
        
      if (insertError) {
        throw new Error(`Failed to save questionnaire: ${insertError.message}`);
      }
      
      // Step 2: Send the notification email via Edge Function
      const { error: emailError } = await supabase.functions.invoke('send-questionnaire-email', {
        body: data
      });
      
      if (emailError) {
        console.error("Email notification error:", emailError);
        // We'll continue even if email fails as the data is saved to DB
      }
      
      // Success!
      setIsSubmitted(true);
      toast({
        title: "Questionnaire Submitted!",
        description: "We'll review your responses and get back to you soon.",
      });
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        e.currentTarget.reset();
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: error.message || "Failed to submit your questionnaire. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center slide-up-animation">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Website Design Questionnaire
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Tell Us About Your Project
            </h1>
            <p className="text-lg text-foreground/80">
              Thank you for considering our web development services! To ensure your website meets your needs, please fill out this short questionnaire.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8 slide-up-animation">
                {/* Business Information */}
                <div className="glassmorphism rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">1. Business Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="yourName" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="yourName"
                        name="yourName"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="logo" className="block text-sm font-medium mb-1">
                        Logo Link (if you have one)
                      </label>
                      <input
                        type="url"
                        id="logo"
                        name="logo"
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="tagline" className="block text-sm font-medium mb-1">
                        Tagline/Slogan
                      </label>
                      <input
                        type="text"
                        id="tagline"
                        name="tagline"
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessDescription" className="block text-sm font-medium mb-1">
                        Briefly describe your business
                      </label>
                      <textarea
                        id="businessDescription"
                        name="businessDescription"
                        required
                        rows={3}
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="uniqueValue" className="block text-sm font-medium mb-1">
                        What makes your business unique?
                      </label>
                      <textarea
                        id="uniqueValue"
                        name="uniqueValue"
                        required
                        rows={3}
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Website Goals & Target Audience */}
                <div className="glassmorphism rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">2. Website Goals & Target Audience</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="mainGoal" className="block text-sm font-medium mb-1">
                        What is the main goal of your website?
                      </label>
                      <select
                        id="mainGoal"
                        name="mainGoal"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select a goal</option>
                        <option value="generate-leads">Generate Leads</option>
                        <option value="showcase-products">Showcase Products</option>
                        <option value="provide-information">Provide Information</option>
                        <option value="online-sales">Online Sales</option>
                        <option value="bookings">Bookings</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="targetAudience" className="block text-sm font-medium mb-1">
                        Who is your target audience?
                      </label>
                      <textarea
                        id="targetAudience"
                        name="targetAudience"
                        required
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
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an action</option>
                        <option value="contact">Contact You</option>
                        <option value="signup">Sign Up</option>
                        <option value="purchase">Purchase a Product</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Website Content & Structure */}
                <div className="glassmorphism rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">3. Website Content & Structure</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">What pages do you need?</label>
                      <div className="space-y-2">
                        {['Home', 'About Us', 'Services', 'Products', 'Pricing', 'Contact', 'Testimonials', 'FAQ', 'Blog'].map((page) => (
                          <label key={page} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              name={`pages_${page.toLowerCase().replace(' ', '_')}`}
                              className="rounded border-border text-primary focus:ring-primary"
                            />
                            <span>{page}</span>
                          </label>
                        ))}
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="pages_other"
                            className="rounded border-border text-primary focus:ring-primary"
                          />
                          <span>Other (please specify):</span>
                          <input
                            type="text"
                            name="pages_other_specify"
                            className="flex-1 px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contentStatus" className="block text-sm font-medium mb-1">
                        Do you already have content for these pages?
                      </label>
                      <select
                        id="contentStatus"
                        name="contentStatus"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes, I have all content</option>
                        <option value="partial">I have some content</option>
                        <option value="no">No, I need help with content</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="images" className="block text-sm font-medium mb-1">
                        Do you need professional images?
                      </label>
                      <select
                        id="images"
                        name="images"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes, I need professional images</option>
                        <option value="no">No, I will provide my own images</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* E-commerce */}
                <div className="glassmorphism rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">4. E-commerce (If Applicable)</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="sellingOnline" className="block text-sm font-medium mb-1">
                        Are you selling products/services online?
                      </label>
                      <select
                        id="sellingOnline"
                        name="sellingOnline"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="productCount" className="block text-sm font-medium mb-1">
                        How many products/services do you offer?
                      </label>
                      <input
                        type="number"
                        id="productCount"
                        name="productCount"
                        min="0"
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="paymentProcessing" className="block text-sm font-medium mb-1">
                        Do you need payment processing?
                      </label>
                      <select
                        id="paymentProcessing"
                        name="paymentProcessing"
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="productPrices" className="block text-sm font-medium mb-1">
                        What are your product/service prices?
                      </label>
                      <textarea
                        id="productPrices"
                        name="productPrices"
                        rows={3}
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="inventoryManagement" className="block text-sm font-medium mb-1">
                        Do you need inventory management?
                      </label>
                      <select
                        id="inventoryManagement"
                        name="inventoryManagement"
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Design Preferences */}
                <div className="glassmorphism rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">5. Design Preferences</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="brandingGuidelines" className="block text-sm font-medium mb-1">
                        Do you have any existing branding guidelines?
                      </label>
                      <select
                        id="brandingGuidelines"
                        name="brandingGuidelines"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="colors" className="block text-sm font-medium mb-1">
                        What colors do you want for your website?
                      </label>
                      <input
                        type="text"
                        id="colors"
                        name="colors"
                        placeholder="e.g., Blue, White, Gray"
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="exampleWebsites" className="block text-sm font-medium mb-1">
                        Do you have examples of websites you like?
                      </label>
                      <textarea
                        id="exampleWebsites"
                        name="exampleWebsites"
                        rows={3}
                        placeholder="Please provide links if possible"
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
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select a style</option>
                        <option value="minimalist">Minimalist</option>
                        <option value="modern">Modern</option>
                        <option value="corporate">Corporate</option>
                        <option value="fun">Fun</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="animations" className="block text-sm font-medium mb-1">
                        Do you need any animations or special effects?
                      </label>
                      <select
                        id="animations"
                        name="animations"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Features & Functionality */}
                <div className="glassmorphism rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">6. Features & Functionality</h2>
                  <div className="space-y-2">
                    {[
                      'Contact form',
                      'Appointment booking',
                      'Social media integration',
                      'Live chat',
                      'Blog',
                      'Newsletter signup',
                      'SEO optimization',
                      'Google Maps integration',
                      'Customer testimonials section'
                    ].map((feature) => (
                      <label key={feature} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name={`features_${feature.toLowerCase().replace(' ', '_')}`}
                          className="rounded border-border text-primary focus:ring-primary"
                        />
                        <span>{feature}</span>
                      </label>
                    ))}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="features_other"
                        className="rounded border-border text-primary focus:ring-primary"
                      />
                      <span>Other (please specify):</span>
                      <input
                        type="text"
                        name="features_other_specify"
                        className="flex-1 px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonials & Trust Factors */}
                <div className="glassmorphism rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">7. Testimonials & Trust Factors</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="testimonials" className="block text-sm font-medium mb-1">
                        Do you have client testimonials to showcase?
                      </label>
                      <select
                        id="testimonials"
                        name="testimonials"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="caseStudies" className="block text-sm font-medium mb-1">
                        Do you have case studies or past projects to display?
                      </label>
                      <select
                        id="caseStudies"
                        name="caseStudies"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="competitiveAdvantage" className="block text-sm font-medium mb-1">
                        Why should customers choose you over competitors?
                      </label>
                      <textarea
                        id="competitiveAdvantage"
                        name="competitiveAdvantage"
                        required
                        rows={3}
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Maintenance & Support */}
                <div className="glassmorphism rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">8. Maintenance & Support</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="maintenance" className="block text-sm font-medium mb-1">
                        Do you need ongoing website maintenance and updates?
                      </label>
                      <select
                        id="maintenance"
                        name="maintenance"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="training" className="block text-sm font-medium mb-1">
                        Do you need training on how to update your website?
                      </label>
                      <select
                        id="training"
                        name="training"
                        required
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="glassmorphism rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">9. Budget & Timeline</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-1">
                        What is your budget for this website?
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        required
                        placeholder="e.g., $1,000 - $2,000"
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-1">
                        When do you need the website to be completed?
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        required
                        placeholder="e.g., Within 2 months"
                        className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="glassmorphism rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">10. Additional Notes</h2>
                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-medium mb-1">
                      Is there anything else you'd like to include?
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary px-8 py-3"
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
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Questionnaire Submitted!</h3>
                <p className="text-foreground/70">
                  Thank you for your detailed responses. We'll review them and get back to you soon to discuss your project.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClientQuestions; 