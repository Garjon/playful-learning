import { Button } from "@/components/catalyst/button";
import { PlusIcon } from "lucide-react";

export function NewGameListItemButton() {
  return (
    <div className="flex rounded-xl border-2 border-indigo-200 border-dashed">
      <Button
        plain
        className="!w-full !p-4 flex flex-col items-center justify-center gap-2"
        href={"/games/new"}
      >
        <div className="flex items-center gap-2 text-indigo-800">
          <PlusIcon className="w- h-5" />
          Create a new game
        </div>
      </Button>
    </div>
  );
}
