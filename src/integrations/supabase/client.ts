import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yphikkntvlbcvlxjsfrf.supabase.co";
const supabaseKey = "sb_publishable_0DK9WmQqR8RXKNPGUYAoHw_X3P4PRAv";

export const supabase = createClient(supabaseUrl, supabaseKey);