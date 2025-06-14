import { supabase } from "@/integrations/supabase/client";

export const runTellAJokeOnVisit = async () => {
  console.log("runTellAJokeOnVisit function was called!"); // <-- added log here

  try {
    const { error } = await supabase.functions.invoke('tell-a-joke', {
      body: {}
    });

    if (error) {
      console.error("Failed to invoke tell-a-joke function:", error);
    } else {
      console.log("tell-a-joke function invoked successfully on site visit.");
    }
  } catch (error) {
    console.error("Error invoking tell-a-joke function:", error);
  }
};
