import { DrumIcon } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-1">
      <DrumIcon className="h-6 w-6" />
      <p className="text-xl">Playful Learning</p>
    </div>
  );
}
