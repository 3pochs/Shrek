
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
    
    // Get the Resend API key from environment variables
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    
    // Send the email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
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
    
    const emailResult = await emailResponse.json();
    console.log("Email sending result:", emailResult);
    
    if (!emailResponse.ok) {
      throw new Error(`Failed to send email: ${JSON.stringify(emailResult)}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submission received and email sent",
        emailResult 
      }),
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
