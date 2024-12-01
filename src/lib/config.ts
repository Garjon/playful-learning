import { z } from "zod";
import { logger } from "./logger";

const configSchema = z.object({
  OPENAI_API_KEY: z.string().min(1, "OPENAI_API_KEY is required"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
});

let config: z.infer<typeof configSchema>;

try {
  config = configSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    logger.error("🔥 Invalid environment variable config:");

    error.issues.map((issue) => {
      logger.error(`❌ ${issue.path.join(".")}: ${issue.message}`);
    });

    logger.error(
      "💡 Tip: Make sure all required environment variables are set in your .env file",
    );

    process.exit(1);
  }
  throw error;
}

export { config };
