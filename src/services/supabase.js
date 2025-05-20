import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("supabaseUrl is required.");
}
if (!supabaseAnonKey) {
  throw new Error("supabaseAnonKey is required.");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
