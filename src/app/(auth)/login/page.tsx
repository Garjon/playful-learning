import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { StackedLogo } from "@/components/logo";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <StackedLogo />
      <GoogleSignInButton />
    </div>
  );
}
