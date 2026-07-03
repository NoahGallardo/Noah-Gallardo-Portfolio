"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import type { Category } from "@/lib/types";

interface PhotoGalleryProps {
  images: string[];
  title: string;
  category: Category;
}

export function PhotoGallery({ images, title, category }: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((url, i) => (
          <button
            key={url}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`View ${title} — image ${i + 1} larger`}
          >
            <SafeImage
              src={url}
              alt={`${title} — image ${i + 1}`}
              category={category}
              unoptimized
              className="aspect-square w-full rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="absolute right-4 top-4 text-cream-muted transition-colors hover:text-cream"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
              }}
              className="absolute left-2 text-cream-muted transition-colors hover:text-cream sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative h-full w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <SafeImage
                src={images[openIndex]}
                alt={`${title} — image ${openIndex + 1}`}
                category={category}
                unoptimized
                className="h-full w-full [&_img]:object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
              }}
              className="absolute right-2 text-cream-muted transition-colors hover:text-cream sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>

            <span className="absolute bottom-4 text-xs uppercase tracking-widest text-cream-muted">
              {openIndex + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
