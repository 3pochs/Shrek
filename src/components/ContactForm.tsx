
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    business: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Step 1: Save the submission to Supabase
      const { error: insertError } = await supabase
        .from('contact_submissions')
        .insert({
          name: formState.name,
          email: formState.email,
          business_type: formState.business,
          budget_range: formState.budget,
          message: formState.message
        });
        
      if (insertError) {
        throw new Error(`Failed to save contact form: ${insertError.message}`);
      }
      
      // Step 2: Send the notification email via Edge Function
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: formState
      });
      
      if (emailError) {
        console.error("Email notification error:", emailError);
        // We'll continue even if email fails as the data is saved to DB
      }
      
      // Success!
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          business: '',
          budget: '',
          message: ''
        });
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: error.message || "Failed to submit your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glassmorphism rounded-xl p-6 md:p-8 slide-up-animation">
      {!isSubmitted ? (
        <>
          <h3 className="text-2xl font-bold mb-4">Get Your Website Started</h3>
          <p className="text-foreground/70 mb-6">
            Fill out the form below and we'll get back to you within 24 hours to discuss your project.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="business" className="block text-sm font-medium mb-1">
                  Business Type
                </label>
                <select
                  id="business"
                  name="business"
                  value={formState.business}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                >
                  <option value="" disabled>Select your business type</option>
                  <option value="restaurant">Restaurant/Cafe</option>
                  <option value="salon">Salon/Barbershop</option>
                  <option value="retail">Retail/E-commerce</option>
                  <option value="service">Professional Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-1">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                >
                  <option value="" disabled>Select your budget</option>
                  <option value="300-400">$300-$400</option>
                  <option value="400-500">$400-$500</option>
                  <option value="500+">$500+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Your Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="inline-flex items-center">
                  Send Message
                  <Send size={16} className="ml-2" />
                </span>
              )}
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
          <p className="text-foreground/70">
            Thanks for reaching out. We'll get back to you within 24 hours to discuss your project.
          </p>
        </div>
      )}
    </div>
  );
};
