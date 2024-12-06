import { Heading } from "@/components/catalyst/heading";
import { NewGameForm } from "@/components/new-game-form";

import { BackToGamesLink } from "@/components/back-to-games-link";

export default function NewGamePage() {
  return (
    <div className="flex flex-col gap-4">
      <BackToGamesLink />
      <Heading level={1}>Letʼs create a new game!</Heading>

      <NewGameForm />
    </div>
  );
}
