// src/routes/api/supabase-config/+server.ts
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit'; // For easily returning JSON responses

export async function GET() {
  // This runs on the server, so it's safe to use private env variables
  return json({
    supabaseUrl: SUPABASE_URL,
    supabaseAnonKey: SUPABASE_ANON_KEY,
  });
}