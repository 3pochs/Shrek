import { supabase } from "@/integrations/supabase/client";

const dummyContactData = {
  name: "Dummy Contact",
  email: "dummy@companycove.com",
  business: "restaurant",
  budget: "300-400",
  message: "This is an automated test contact request."
};

let isSchedulerRunning = false;
let lastSentTime: number | null = null;
const MIN_INTERVAL = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

export const sendDummyContact = async () => {
  try {
    // Check if we've sent a contact recently
    const now = Date.now();
    if (lastSentTime && (now - lastSentTime) < MIN_INTERVAL) {
      console.log('Skipping dummy contact - too soon since last send');
      return;
    }

    // Save to Supabase
    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        name: dummyContactData.name,
        email: dummyContactData.email,
        business_type: dummyContactData.business,
        budget_range: dummyContactData.budget,
        message: dummyContactData.message
      });
      
    if (insertError) {
      console.error("Failed to save dummy contact:", insertError);
      return;
    }
    
    // Removed email sending logic
    // const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
    //   body: dummyContactData
    // });
    // if (emailError) {
    //   console.error("Failed to send dummy contact email:", emailError);
    // }

    // Invoke the tell-a-joke function
    const { error: jokeError } = await supabase.functions.invoke('tell-a-joke', {
      body: {}
    });

    if (jokeError) {
      console.error("Failed to invoke tell-a-joke function:", jokeError);
    } else {
      console.log("tell-a-joke function is being run in the devtools website terminal.");
    }

    // Update last sent time
    lastSentTime = now;
    console.log('Dummy contact sent successfully');
  } catch (error) {
    console.error("Error sending dummy contact:", error);
  }
};

// Function to schedule dummy contacts
export const scheduleDummyContacts = () => {
  // Prevent multiple scheduler instances
  if (isSchedulerRunning) {
    console.log('Dummy contact scheduler is already running');
    return;
  }

  isSchedulerRunning = true;
  
  // Send immediately when server starts
  sendDummyContact();
  
  // Then send every 2 days
  setInterval(sendDummyContact, MIN_INTERVAL);
  
  console.log('Dummy contact scheduler started');
}; 
