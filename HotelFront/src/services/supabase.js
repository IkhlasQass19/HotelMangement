import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cvjeprznvbxblcnothcl.supabase.co";

const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2amVwcnpudmJ4Ymxjbm90aGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2NTE4MDEsImV4cCI6MjAwNDIyNzgwMX0.C-wCmtYAYuAyoFf29tlOJ1GQbaiaDVxJpeXHJBvXGn8 ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
