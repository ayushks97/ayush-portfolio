import { createClient } from '@supabase/supabase-js';

// Hardcoded values for immediate testing (TEMPORARY)
const SUPABASE_URL = 'https://wlwkwwlbyzhuqhrtyhav.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsd2t3d2xieXpodXFocnR5aGF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3Mzg3OTksImV4cCI6MjEwNzMxNDc5OX0.L8r9wfv7PEcVkDZUrjb9H8g4jHofvqji1xx3W7Rwrw8';

// Try to get from env vars, fallback to hardcoded
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY;

// Enhanced logging for debugging
if (import.meta.env.DEV) {
  console.log('🔧 Supabase Configuration Check:');
  console.log('  URL from env:', import.meta.env.VITE_SUPABASE_URL ? '✅ LOADED' : '❌ NOT LOADED');
  console.log('  Key from env:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ LOADED' : '❌ NOT LOADED');
  console.log('  Using URL:', supabaseUrl);
  console.log('  Using Key length:', supabaseAnonKey?.length || 0);
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  global: {
    headers: {
      'X-Client-Info': 'portfolio-contact-form',
    },
  },
});

// Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  const isConfigured = Boolean(
    supabaseUrl && 
    supabaseAnonKey && 
    supabaseUrl.startsWith('https://') &&
    supabaseAnonKey.length > 100
  );
  
  if (import.meta.env.DEV) {
    console.log('🔍 Configuration Valid:', isConfigured ? '✅ YES' : '❌ NO');
  }
  
  return isConfigured;
};

// Test connection function
export const testConnection = async () => {
  try {
    console.log('🧪 Testing connection to:', supabaseUrl);
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('❌ Connection test failed:', error);
      return false;
    }
    
    console.log('✅ Connection test successful!');
    return true;
  } catch (err) {
    console.error('❌ Connection test error:', err);
    return false;
  }
};
