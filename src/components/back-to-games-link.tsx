import { TextLink } from "@/components/catalyst/text";
import { ArrowLeftIcon } from "lucide-react";

export function BackToGamesLink() {
  return (
    <TextLink href="/" className="flex items-center gap-2">
      <ArrowLeftIcon className="h-4 w-4" /> Back to games
    </TextLink>
  );
}
