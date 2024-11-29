import { Heading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Heading level={1}>Game time</Heading>
      <Text>Generate fun learning activities for children.</Text>
    </div>
  );
}
