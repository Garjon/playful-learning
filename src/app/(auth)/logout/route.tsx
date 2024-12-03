import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();

  redirect("/");
}
