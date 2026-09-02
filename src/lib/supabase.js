import {createClient} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

console.log('Available VITE variables:', Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')));
console.log('Supabase URL loaded:', !!import.meta.env.VITE_SUPABASE_URL);
console.log('Supabase key loaded:', !!import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

export const supabase = createClient(
    supabaseUrl, 
    supabasePublishableKey
)

