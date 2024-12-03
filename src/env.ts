import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test", "ci"])
      .default("development"),
    LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
    NEXT_PUBLIC_BASE_URL: z.string().min(1, "NEXT_PUBLIC_BASE_URL is required"),
    NEXT_PUBLIC_SUPABASE_URL: z
      .string()
      .min(1, "NEXT_PUBLIC_SUPABASE_URL is required"),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z
      .string()
      .min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY is required"),
  },
  server: {
    OPENAI_API_KEY: z.string().min(1, "OPENAI_API_KEY is required"),
    SUPABASE_SERVICE_ROLE_KEY: z
      .string()
      .min(1, "SUPABASE_SERVICE_ROLE_KEY is required"),
    SUPABASE_DB_CONNECTION_URL: z
      .string()
      .min(1, "SUPABASE_DB_CONNECTION_URL is required"),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().min(1, "NEXT_PUBLIC_BASE_URL is required"),
    NEXT_PUBLIC_SUPABASE_URL: z
      .string()
      .min(1, "NEXT_PUBLIC_SUPABASE_URL is required"),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z
      .string()
      .min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY is required"),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    LOG_LEVEL: process.env.LOG_LEVEL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    SUPABASE_DB_CONNECTION_URL: process.env.SUPABASE_DB_CONNECTION_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
