import type { Database } from "@/lib/db/database-generated.types";
import type { Game, NewGame } from "@/lib/game/types";
import { logger } from "@/lib/logger";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function insertGame(game: NewGame) {
  const supabase = await createSupabaseServerClient();

  const gameData: Database["playful_learning"]["Tables"]["games"]["Insert"] = {
    title: game.title,
    description: game.description,
    activity_type: game.activityType,
    age_group: game.ageGroup,
    energy_level: game.energyLevel,
    game_json: JSON.stringify(game),
  };

  try {
    const { data, error } = await supabase
      .schema("playful_learning")
      .from("games")
      .insert(gameData)
      .select();

    if (error) {
      logger.error({ error }, "Database error while trying to save game");
      throw error;
    }

    logger.info({ data }, "Game saved successfully");

    return data[0].id;
  } catch (error) {
    logger.error({ error }, "Unexpected error saving game");
    throw error;
  }
}

export async function getGame(gameId: string): Promise<Game> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .schema("playful_learning")
    .from("games")
    .select()
    .eq("id", gameId);

  if (error) {
    logger.error({ error }, "Database error while trying to get game");
    throw error;
  }

  const game = JSON.parse(data[0].game_json?.toString() ?? "{}") as Game;

  return game;
}

export async function getGames(): Promise<Game[]> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .schema("playful_learning")
    .from("games")
    .select()
    .order("created_at", { ascending: false });

  if (error) {
    logger.error({ error }, "Database error while trying to get games");
    throw error;
  }

  const games = data.map((game) => ({
    id: game.id,
    ...(JSON.parse(game.game_json?.toString() ?? "{}") as NewGame),
  }));

  return games;
}
