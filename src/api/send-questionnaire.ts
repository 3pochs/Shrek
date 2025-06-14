import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from './send-email';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    // Format the form data into a readable email
    const emailContent = `
New Website Design Questionnaire Submission

1. Business Information
Company Name: ${formData.companyName}
Your Name: ${formData.yourName}
Logo Link: ${formData.logo || 'Not provided'}
Tagline/Slogan: ${formData.tagline || 'Not provided'}

Business Description:
${formData.businessDescription}

What makes your business unique:
${formData.uniqueValue}

2. Website Goals & Target Audience
Main Goal: ${formData.mainGoal}
Target Audience: ${formData.targetAudience}
Desired Action: ${formData.desiredAction}

3. Website Content & Structure
Pages Needed:
${Object.entries(formData)
  .filter(([key]) => key.startsWith('pages_'))
  .map(([key, value]) => {
    if (key === 'pages_other' && value === 'on') {
      return `- Other: ${formData.pages_other_specify}`;
    }
    return value === 'on' ? `- ${key.replace('pages_', '').replace(/_/g, ' ')}` : null;
  })
  .filter(Boolean)
  .join('\n')}

Content Status: ${formData.contentStatus}
Professional Images Needed: ${formData.images}

4. E-commerce
Selling Online: ${formData.sellingOnline}
Number of Products/Services: ${formData.productCount || 'Not specified'}
Payment Processing Needed: ${formData.paymentProcessing || 'Not specified'}
Product/Service Prices: ${formData.productPrices || 'Not specified'}
Inventory Management Needed: ${formData.inventoryManagement || 'Not specified'}

5. Design Preferences
Branding Guidelines: ${formData.brandingGuidelines}
Colors: ${formData.colors || 'Not specified'}
Example Websites: ${formData.exampleWebsites || 'Not provided'}
Layout Style: ${formData.layoutStyle}
Animations Needed: ${formData.animations}

6. Features & Functionality
${Object.entries(formData)
  .filter(([key]) => key.startsWith('features_'))
  .map(([key, value]) => {
    if (key === 'features_other' && value === 'on') {
      return `- Other: ${formData.features_other_specify}`;
    }
    return value === 'on' ? `- ${key.replace('features_', '').replace(/_/g, ' ')}` : null;
  })
  .filter(Boolean)
  .join('\n')}

7. Testimonials & Trust Factors
Client Testimonials: ${formData.testimonials}
Case Studies: ${formData.caseStudies}

Competitive Advantage:
${formData.competitiveAdvantage}

8. Maintenance & Support
Ongoing Maintenance Needed: ${formData.maintenance}
Training Needed: ${formData.training}

9. Budget & Timeline
Budget: ${formData.budget}
Timeline: ${formData.timeline}

10. Additional Notes
${formData.additionalNotes || 'No additional notes provided'}
`;

    // Send the email
    await sendEmail({
      to: 'support@companycove.com',
      subject: `New Website Design Questionnaire from ${formData.companyName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    res.status(200).json({ message: 'Questionnaire submitted successfully' });
  } catch (error) {
    console.error('Error sending questionnaire:', error);
    res.status(500).json({ message: 'Failed to submit questionnaire' });
  }
} 