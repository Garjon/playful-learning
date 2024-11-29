import pino from "pino";
import { config } from "./config";

const developmentTransport = {
  target: "pino-pretty",
  options: {
    colorize: true,
    translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
    ignore: "pid,hostname",
  },
};

export const logger = pino({
  level: config?.LOG_LEVEL || "info",
  transport:
    config?.NODE_ENV === "development" ? developmentTransport : undefined,
});
