import { SafeImage } from "@/components/ui/SafeImage";
import type { Project } from "@/lib/types";

export function MediaEmbed({ project }: { project: Project }) {
  if (project.mediaType === "images") {
    return (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {project.mediaUrl.map((url, i) => (
          <SafeImage
            key={url}
            src={url}
            alt={`${project.title} — image ${i + 1}`}
            category={project.category}
            className="aspect-video w-full rounded-md"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-md bg-charcoal">
      <iframe
        src={project.mediaUrl}
        title={project.title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
