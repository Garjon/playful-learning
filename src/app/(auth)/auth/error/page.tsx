import { Button } from "@/components/catalyst/button";
import { createSupabaseServerClient } from "@/lib/supabase/server";

async function AuthErrorPage() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();

  return (
    <div className="flex h-full items-center justify-center py-32">
      <div className="flex flex-col items-center">
        <h1 className="mt-4 font-bold text-4xl text-zinc-700 tracking-tight sm:text-5xl">
          Login error
        </h1>
        <p className="mt-4 max-w-96 text-left text-base text-zinc-600">
          Well this isn’t very calming, is it? Something went wrong with your
          login. Give it another go and let us know if you keep getting this
          error!
        </p>
        <Button href="/login" outline className="mt-4">
          Try logging in again
        </Button>
      </div>
    </div>
  );
}

export default AuthErrorPage;
