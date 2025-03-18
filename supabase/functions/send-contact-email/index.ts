
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  business: string;
  budget: string;
  message: string;
}

const handler = async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    // Forward the contact form submission via email
    // In a real implementation, you would use an email service like Resend, SendGrid, etc.
    
    // For now, let's log the data that would be sent via email
    console.log("Contact form submission received:");
    console.log(`From: ${formData.name} (${formData.email})`);
    console.log(`Business Type: ${formData.business}`);
    console.log(`Budget Range: ${formData.budget}`);
    console.log(`Message: ${formData.message}`);
    console.log(`To be sent to: support@companycove.com`);
    
    // In a production environment, you would add code here to send the actual email
    // For example, using a service like Resend:
    /*
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "contact@companycove.com",
        to: "support@companycove.com",
        subject: `New Contact Form Submission from ${formData.name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Business Type:</strong> ${formData.business}</p>
          <p><strong>Budget Range:</strong> ${formData.budget}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        `
      })
    });
    */

    return new Response(
      JSON.stringify({ success: true, message: "Form submission received" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "Failed to process form submission",
        error: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
