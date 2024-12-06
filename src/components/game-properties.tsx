import { Text } from "@/components/catalyst/text";
import { activityTypeToLabel, energyLevelToLabel } from "@/lib/game/constants";
import type { Game } from "@/lib/game/types";

interface Props {
  game: Game;
}

export function GameProperties({ game }: Props) {
  const activityTypeLabel = activityTypeToLabel[game.activityType];

  return (
    <div className="flex flex-row gap-2">
      <Text className="hidden sm:inline">{activityTypeLabel.label}</Text>
      <Text className="hidden sm:inline">|</Text>
      <Text>👵 x {game.numberOfAdults}</Text>
      <Text>|</Text>
      <Text>👶 x {game.numberOfKids}</Text>
      <Text>|</Text>
      <Text>{energyLevelToLabel[game.energyLevel]}</Text>
    </div>
  );
}
