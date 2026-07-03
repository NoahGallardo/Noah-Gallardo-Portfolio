"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface VideoGalleryProps {
  videos: string[];
  title: string;
}

export function VideoGallery({ videos, title }: VideoGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleScroll() {
      if (!container) return;
      setActiveIndex(Math.round(container.scrollLeft / container.clientWidth));
    }

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToIndex(index: number) {
    const container = containerRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(index, videos.length - 1));
    container.scrollTo({ left: clamped * container.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <div
          ref={containerRef}
          className="flex snap-x snap-mandatory overflow-x-auto rounded-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((url, i) => (
            <div
              key={url}
              className="aspect-video w-full flex-none snap-center overflow-hidden bg-charcoal"
            >
              <iframe
                src={url}
                title={`${title} — video ${i + 1}`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading={i === 0 ? "eager" : "lazy"}
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ))}
        </div>

        {videos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous video"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bg/80 text-cream transition-colors hover:text-accent disabled:opacity-30"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === videos.length - 1}
              aria-label="Next video"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bg/80 text-cream transition-colors hover:text-accent disabled:opacity-30"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {videos.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {videos.map((url, i) => (
            <button
              key={url}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to video ${i + 1}`}
              className={clsx(
                "h-2 w-2 rounded-full transition-colors",
                i === activeIndex ? "bg-accent" : "bg-charcoal-2"
              )}
            />
          ))}
          <span className="ml-2 text-xs uppercase tracking-widest text-cream-muted">
            {activeIndex + 1} / {videos.length}
          </span>
        </div>
      )}
    </div>
  );
}
