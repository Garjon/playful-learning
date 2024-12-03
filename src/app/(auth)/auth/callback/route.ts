"use server";

import { NextResponse } from "next/server";

import { env } from "@/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  // If "next" query param is present, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createSupabaseServerClient();
    const { error, data } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && !!data.user) {
      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = env.NODE_ENV === "development";

      if (isLocalEnv) {
        // When we're local dev'ing, we can be sure that there is no load balancer in play,
        // so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`);
      }

      if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      }

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/auth/error`);
}
