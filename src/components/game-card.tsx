import { Subheading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";
import { GameProperties } from "@/components/game-properties";
import { activityTypeToLabel } from "@/lib/game/constants";
import type { Game } from "@/lib/game/types";

interface Props {
  game: Game;
}

export function GameCard({ game }: Props) {
  const activityTypeLabel = activityTypeToLabel[game.activityType];

  return (
    <div className="flex flex-col gap-4 rounded-xl border-2 border-indigo-200 border-dashed p-4 md:p-8">
      <Subheading className="text-indigo-800">
        {activityTypeLabel.icon} {game.title}
      </Subheading>

      <GameProperties game={game} />

      <Text>{game.description}</Text>

      <Subheading level={3}>Instructions</Subheading>

      <ol className="flex list-decimal flex-col gap-4 pl-8 marker:text-indigo-600">
        {game.instructions.map((instruction) => {
          return (
            <li className="space-y-2" key={instruction}>
              <Text>{instruction}</Text>
            </li>
          );
        })}
      </ol>

      <Subheading level={3}>Tips</Subheading>

      <ul className="flex list-disc flex-col gap-2 pl-8 text-sm marker:text-indigo-600">
        {game.tips.map((tip) => {
          return (
            <li key={tip}>
              <Text>{tip}</Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
