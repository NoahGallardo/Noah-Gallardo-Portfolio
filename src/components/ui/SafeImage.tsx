"use client";

import { useState } from "react";
import Image from "next/image";
import type { Category } from "@/lib/types";

const FALLBACK_TINT: Record<Category, string> = {
  "Videography / Film": "bg-[#3a2a20]",
  Photography: "bg-[#2a2f3a]",
  "Creative Coding": "bg-[#2a3a30]",
};

interface SafeImageProps {
  src: string;
  alt: string;
  category?: Category;
  className?: string;
  unoptimized?: boolean;
}

export function SafeImage({ src, alt, category, className, unoptimized }: SafeImageProps) {
  const [errored, setErrored] = useState(false);
  const tint = category ? FALLBACK_TINT[category] : "bg-charcoal-2";

  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex items-center justify-center ${tint} ${className ?? ""}`}
      >
        <span className="px-4 text-center font-display text-sm tracking-wide text-cream-muted/70">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setErrored(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        unoptimized={unoptimized}
      />
    </div>
  );
}
