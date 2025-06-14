import React from 'react';
import { Layout } from '../components/Layout';

const Disclaimer = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclaimer</h1>
            
            <div className="prose prose-lg text-foreground/80">
              <p className="mb-4">
                The information provided on CompanyCove's website is for general informational purposes only. 
                All information on the site is provided in good faith, however, we make no representation or 
                warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, 
                availability, or completeness of any information on the site.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">No Professional Advice</h2>
              <p className="mb-4">
                The information contained on this website is not intended to be a substitute for professional advice. 
                Always seek the advice of qualified professionals with any questions you may have regarding a particular 
                subject matter.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">External Links</h2>
              <p className="mb-4">
                Our website may contain links to external websites that are not provided or maintained by or in any way 
                affiliated with CompanyCove. Please note that we do not guarantee the accuracy, relevance, timeliness, 
                or completeness of any information on these external websites.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as 
                a result of the use of the site or reliance on any information provided on the site. Your use of the 
                site and your reliance on any information on the site is solely at your own risk.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Disclaimer</h2>
              <p className="mb-4">
                We reserve the right to make changes to this disclaimer at any time. Your continued use of the website 
                following the posting of any changes to this disclaimer constitutes acceptance of those changes.
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

export default Disclaimer; 