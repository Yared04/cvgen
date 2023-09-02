import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://esjytdvpnapaedgiyqhj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzanl0ZHZwbmFwYWVkZ2l5cWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2NDc3NDUsImV4cCI6MjAwOTIyMzc0NX0.OH-oHwJs-w2QbVE86sVbn0e5cD8BySnasM9PtZcDeUI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
