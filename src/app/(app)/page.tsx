import { Heading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";
import { GameListItemButton } from "@/components/game-list-item-button";
import { NewGameListItemButton } from "@/components/new-game-list-item-button";
import { getGames } from "@/lib/db/games";

export default async function Home() {
  const games = await getGames();

  return (
    <div className="flex flex-col gap-4">
      <Heading level={1}>Welcome to your learning playground!</Heading>

      <Text>
        Learning can be so much fun when it's built to be that way. Let's work
        together to create a game that will make learning fun for your child!
      </Text>

      <NewGameListItemButton />

      {games.map((game) => {
        return <GameListItemButton key={game.id} game={game} />;
      })}
    </div>
  );
}
