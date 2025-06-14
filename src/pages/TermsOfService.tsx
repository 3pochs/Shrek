import React from 'react';
import { Layout } from '../components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            
            <div className="prose prose-lg text-foreground/80">
              <p className="mb-4">
                Please read these Terms of Service carefully before using the CompanyCove website. Your access to and 
                use of the service is conditioned on your acceptance of and compliance with these terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part 
                of the terms, you may not access the service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Service</h2>
              <p className="mb-4">
                You agree to use our service only for lawful purposes and in accordance with these Terms. You agree not 
                to use the service:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                <li>To impersonate or attempt to impersonate CompanyCove or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the service</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
              <p className="mb-4">
                The service and its original content, features, and functionality are owned by CompanyCove and are 
                protected by international copyright, trademark, patent, trade secret, and other intellectual property 
                or proprietary rights laws.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Links to Other Websites</h2>
              <p className="mb-4">
                Our service may contain links to third-party websites or services that are not owned or controlled by 
                CompanyCove. We have no control over, and assume no responsibility for, the content, privacy policies, 
                or practices of any third-party websites or services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend access to our service immediately, without prior notice or liability, for 
                any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a 
                revision is material, we will try to provide at least 30 days' notice prior to any new terms taking 
                effect.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mb-4">
                Email: legal@companycove.com<br />
                Phone: (872) 256-1290
              </p>

              <p className="mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService; 