import { Heading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";
import { NewGameForm } from "@/components/new-game-form";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Heading level={1}>Game time</Heading>
        <Text>Letʼs create a fun learning activity for your child!</Text>
      </div>

      <NewGameForm />
    </div>
  );
}
