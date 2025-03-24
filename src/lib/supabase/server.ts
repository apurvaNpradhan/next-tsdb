import { env } from "@/env";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  env.NEXT_PUBLIC_SUPABASE_URL,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  },
);
export const supabaseAdmin = supabase.auth.admin;

export async function supabaseServerClient() {
  const cookieStore = await cookies();
  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            return;
          }
        },
      },
    },
  );
}

export async function getUser() {
  const supabase = supabaseServerClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();
  return user;
}
