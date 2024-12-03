"use client";

import { Button } from "@/components/catalyst/button";
import { Heading } from "@/components/catalyst/heading";
import { Code, Text } from "@/components/catalyst/text";
import { logger } from "@/lib/logger";
import { RefreshCcwIcon, TriangleAlertIcon } from "lucide-react";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("An unexpected error occurred", error);
  }, [error]);

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
        <TriangleAlertIcon size={48} className="text-red-600" />

        <Heading>Whoops! Something went wrong.</Heading>
        <Text>
          A small child has thought pulling wires was a good idea. Oh dear.
          Please sit tight, weʼre on it!
        </Text>

        <Code>Error: {error.message}</Code>
        <Button color="amber" type="button" onClick={() => reset()}>
          <RefreshCcwIcon size={16} />
          Try again
        </Button>
      </div>
    </div>
  );
}
