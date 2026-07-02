import Link from "next/link";
import type { ComponentProps } from "react";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  variant?: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function Button({ href, variant = "solid", className, children, ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        variant === "solid" &&
          "bg-cream text-bg hover:scale-[1.03] hover:shadow-[0_0_24px_-4px_rgba(181,121,74,0.6)]",
        variant === "outline" &&
          "border border-cream-muted/40 text-cream hover:scale-[1.03] hover:border-accent hover:text-accent",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
