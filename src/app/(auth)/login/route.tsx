import { signInWithGoogle } from "@/lib/auth/actions";

export async function GET(request: Request) {
  return signInWithGoogle();
}
