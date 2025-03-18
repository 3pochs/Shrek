
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-foreground/70">{answer}</div>
      </div>
    </div>
  );
};

export const FAQAccordion: React.FC = () => {
  const faqs = [
    {
      question: "How much does a website cost?",
      answer: (
        <>
          <p>Our website packages start at $300 for a basic 3-page site. Standard sites with 5 pages cost $400, while Premium sites with advanced features start at $500. Each package includes:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Mobile-responsive design</li>
            <li>SEO optimization</li>
            <li>Contact form</li>
            <li>Free hosting setup</li>
          </ul>
        </>
      )
    },
    {
      question: "How long does it take to build a website?",
      answer: "We pride ourselves on fast turnaround times. Most projects are completed within 48 hours from the moment we receive all necessary content (text, images, logos, etc.). More complex websites with e-commerce functionality may take 3-5 business days."
    },
    {
      question: "Do I need to provide content for my website?",
      answer: "While it's best if you provide the core content that represents your business, we can help with basic content creation and sourcing stock images if needed. For more extensive content creation services, we offer additional packages at competitive rates."
    },
    {
      question: "Do I own my website after it's built?",
      answer: "Absolutely! You have 100% ownership of your website once it's completed and paid for. We provide all necessary credentials and can assist with transferring the site to your preferred hosting if needed."
    },
    {
      question: "What about hosting and domain names?",
      answer: "We help set up hosting on reliable platforms like Netlify or Vercel, which offer free tiers sufficient for most small business websites. If you don't have a domain name yet, we can assist with purchasing one (typically $10-15/year, depending on the domain extension)."
    },
    {
      question: "Do you offer maintenance services?",
      answer: "Yes! We offer affordable maintenance plans starting at $20/month, which include regular updates, security monitoring, and minor content changes. For more extensive changes, we provide hourly rates or bundled packages."
    },
    {
      question: "Will my website work on mobile devices?",
      answer: "Absolutely! All our websites are fully responsive and tested across multiple devices and browsers. They adapt beautifully to smartphones, tablets, and desktop computers."
    },
    {
      question: "Do you provide SEO services?",
      answer: "Basic SEO setup is included in all our packages (proper meta tags, site structure, and image optimization). For more advanced SEO campaigns, we offer additional services that can be discussed based on your specific needs and goals."
    },
    {
      question: "What if I need changes after the website is complete?",
      answer: "We offer a 7-day period for minor adjustments and tweaks after the website is complete. For changes requested after this period, we can either set up a maintenance plan or charge a small fee depending on the complexity of the changes."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply fill out our contact form, and we'll reach out to discuss your project requirements. After an initial consultation, we'll provide a detailed quote and timeline. Once you approve, we can begin work immediately with a 50% deposit."
    }
  ];

  return (
    <div className="space-y-0 rounded-xl glassmorphism divide-y divide-border/60">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};
