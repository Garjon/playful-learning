import { z } from "zod";

const configSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),

  NEXT_PUBLIC_BASE_URL: z.string().min(1, "NEXT_PUBLIC_BASE_URL is required"),

  OPENAI_API_KEY: z.string().min(1, "OPENAI_API_KEY is required"),

  NEXT_PUBLIC_SUPABASE_URL: z
    .string()
    .min(1, "NEXT_PUBLIC_SUPABASE_URL is required"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z
    .string()
    .min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY is required"),
  SUPABASE_SERVICE_ROLE_KEY: z
    .string()
    .min(1, "SUPABASE_SERVICE_ROLE_KEY is required"),
  SUPABASE_DB_CONNECTION_URL: z
    .string()
    .min(1, "SUPABASE_DB_CONNECTION_URL is required"),
});

let config: z.infer<typeof configSchema>;

try {
  config = configSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("🔥 Invalid environment variable config:");

    error.issues.map((issue) => {
      console.error(`❌ ${issue.path.join(".")}: ${issue.message}`);
    });

    console.error(
      "💡 Tip: Make sure all required environment variables are set in your .env file",
    );
  }
  throw error;
}

export { config };
