import clsx from "clsx";
import { Link } from "./link";

export function Text({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      data-slot="text"
      {...props}
      className={clsx(
        className,
        "text-indigo-500 text-lg sm:text-base dark:text-indigo-400",
      )}
    />
  );
}

export function TextLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "text-indigo-950 underline decoration-indigo-950/50 data-[hover]:decoration-indigo-950 dark:text-white dark:decoration-white/50 dark:data-[hover]:decoration-white",
      )}
    />
  );
}

export function Strong({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"strong">) {
  return (
    <strong
      {...props}
      className={clsx(className, "font-medium text-indigo-950 dark:text-white")}
    />
  );
}

export function Code({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"code">) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        "rounded border border-indigo-950/10 bg-indigo-950/[2.5%] px-0.5 font-medium text-indigo-950 text-sm sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white",
      )}
    />
  );
}
