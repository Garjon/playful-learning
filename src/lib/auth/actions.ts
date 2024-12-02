"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { SignInWithOAuthCredentials } from "@supabase/supabase-js";

import { config } from "@/lib/config";

export async function signInWithGoogle() {
  const supabase = await createSupabaseServerClient();

  const params: SignInWithOAuthCredentials = {
    provider: "google",
    options: {
      redirectTo: `${config.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  };

  const { data, error } = await supabase.auth.signInWithOAuth(params);

  if (data.url) {
    revalidatePath(data.url);
    return redirect(data.url);
  }

  if (error) {
    console.error(error);
    return redirect("/login");
  }
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/");
}
