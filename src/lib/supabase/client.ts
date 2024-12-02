import { createBrowserClient } from "@supabase/ssr";

export function createSupabaseBrowserClient() {
  // Note that I'm not using config here because it does some
  // checks to see that non-public environment variables are set and
  // they won't be when running in the browser.
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
