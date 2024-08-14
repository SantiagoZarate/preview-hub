import { createServerClient, type CookieOptions } from "@supabase/ssr";
// import { cookies } from "next/headers";
import { envs } from "../../../envs";

export const createClient = () => {
  const cookieStore = require('next/headers').cookies()

  return createServerClient(
    envs.SUPABASE_URL,
    envs.SUPABASE_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
