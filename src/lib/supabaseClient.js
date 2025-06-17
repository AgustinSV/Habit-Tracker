// src/lib/supabaseClient.js (or .ts if you use TypeScript)
import { createClient } from '@supabase/supabase-js';
import { browser } from '$app/environment'; // Make sure this is imported

let supabase; // Declare it but don't initialize immediately

// Only try to initialize in the browser
if (browser) {
  async function initializeSupabaseClient() {
    try {
      // Fetch the config from your new server endpoint
      const response = await fetch('/api/supabase-config'); // Make sure this path matches your +server.ts file
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const { supabaseUrl, supabaseAnonKey } = await response.json();

      supabase = createClient(supabaseUrl, supabaseAnonKey);
    } catch (error) {
      console.error('Failed to initialize Supabase client:', error);
      // Handle error, e.g., show a message to the user
    }
  }
  initializeSupabaseClient();
}

export { supabase }; // Export the variable for use in your Svelte components