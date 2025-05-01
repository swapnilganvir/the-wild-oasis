import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://rciqfmmgaorxfxrhulks.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaXFmbW1nYW9yeGZ4cmh1bGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NzQ4NDEsImV4cCI6MjA2MTA1MDg0MX0.U1ZKZM-xaEtA-l-7H0Npg-6lfHFTwpsRWndfjDnQN78';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
