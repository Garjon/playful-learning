import type { Game } from "@/lib/game/types";

export const activityTypeToLabel: Record<
  Game["activityType"],
  { label: string; icon: string }
> = {
  maths: { label: "Maths", icon: "🔢" },
  reading: { label: "Reading", icon: "📖" },
  writing: { label: "Writing", icon: "📝" },
};

export const energyLevelToLabel: Record<Game["energyLevel"], string> = {
  low: "⚡️ Low",
  medium: "⚡️ Medium",
  high: "⚡️ High",
};
