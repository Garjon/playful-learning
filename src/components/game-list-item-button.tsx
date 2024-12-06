import { Button } from "@/components/catalyst/button";
import { Subheading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";
import { GameProperties } from "@/components/game-properties";
import { activityTypeToLabel } from "@/lib/game/constants";
import type { Game } from "@/lib/game/types";

interface Props {
  game: Game;
}

export function GameListItemButton({ game }: Props) {
  const activityTypeLabel = activityTypeToLabel[game.activityType];

  return (
    <div className="flex rounded-xl border-2 border-indigo-200 border-dashed">
      <Button
        plain
        className="!p-4 !justify-start flex w-full flex-col gap-2"
        href={`/games/${game.id}`}
      >
        <div className="flex w-full flex-col gap-2 text-indigo-800">
          <Subheading className="text-indigo-800">
            {activityTypeLabel.icon} {game.title}
          </Subheading>

          <GameProperties game={game} />

          <Text>{game.description}</Text>
        </div>
      </Button>
    </div>
  );
}
