import { Heading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Heading level={1}>Playful Learning</Heading>
      <Text>Generate fun learning activities for children.</Text>
    </div>
  );
}
