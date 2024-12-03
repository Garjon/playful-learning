import { DrumIcon } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-1">
      <DrumIcon size={24} />
      <p className="text-xl">Playful Learning</p>
    </div>
  );
}

export function StackedLogo() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <DrumIcon size={96} />
      <p className="text-4xl">Playful Learning</p>
    </div>
  );
}
