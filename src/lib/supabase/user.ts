import { redirect } from "next/navigation";

import type { SupabaseClient, User } from "@supabase/supabase-js";

export async function getAuthUser(supabase: SupabaseClient): Promise<User> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return user;
}
