import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://azssyhwwiyaclarxfhiw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6c3N5aHd3aXlhY2xhcnhmaGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNzAxNjEsImV4cCI6MjA0MTg0NjE2MX0.0vLvzs2aIMv6lK0q9gZOeZ8MhHPOKfDzuYPs1NS2wno";
export const supabase = createClient(supabaseUrl, supabaseKey);