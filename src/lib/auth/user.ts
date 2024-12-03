"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export interface UserProfile {
  name: string;
  email: string;
  imageUrl: string;
}

export async function getUserProfile(): Promise<UserProfile | undefined> {
  const supabase = await createSupabaseServerClient();
  const user = await supabase.auth.getUser();

  if (!user?.data?.user) {
    return undefined;
  }

  return {
    name: user.data.user.user_metadata.full_name,
    email: user.data.user.user_metadata.email,
    imageUrl: user.data.user.user_metadata.avatar_url,
  };
}
