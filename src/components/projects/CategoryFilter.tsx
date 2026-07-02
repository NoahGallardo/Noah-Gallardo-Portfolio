"use client";

import clsx from "clsx";
import type { Category } from "@/lib/types";

const CATEGORIES: Category[] = ["Videography / Film", "Photography", "Creative Coding"];

export function CategoryFilter({
  active,
  onChange,
}: {
  active: Category | "All";
  onChange: (category: Category | "All") => void;
}) {
  const options: (Category | "All")[] = ["All", ...CATEGORIES];

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={clsx(
            "min-h-[44px] rounded-full border px-5 text-sm tracking-wide transition-colors",
            active === option
              ? "border-accent text-accent"
              : "border-charcoal-2 text-cream-muted hover:border-cream-muted hover:text-cream"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
