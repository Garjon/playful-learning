import { BackToGamesLink } from "@/components/back-to-games-link";
import { GameCard } from "@/components/game-card";
import { getGame } from "@/lib/db/games";

type Params = Promise<{
  gameId: string;
}>;

export default async function GamePage(props: { params: Params }) {
  const { gameId } = await props.params;
  const game = await getGame(gameId);

  return (
    <div className="flex flex-col gap-4">
      <BackToGamesLink />

      <GameCard game={game} />
    </div>
  );
}
