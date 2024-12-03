import { env } from "@/env";
import pino from "pino";

const developmentTransport = {
  target: "pino-pretty",
  options: {
    colorize: true,
    translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
    ignore: "pid,hostname",
  },
};

export const logger = pino({
  level: env.LOG_LEVEL || "info",
  transport: env.NODE_ENV === "development" ? developmentTransport : undefined,
});
