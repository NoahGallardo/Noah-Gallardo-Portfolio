import { ExternalLink } from "lucide-react";
import { PhotoGallery } from "@/components/projects/PhotoGallery";
import { VideoGallery } from "@/components/projects/VideoGallery";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/lib/types";

export function MediaEmbed({ project }: { project: Project }) {
  if (project.mediaType === "images") {
    return (
      <PhotoGallery images={project.mediaUrl} title={project.title} category={project.category} />
    );
  }

  if (project.mediaType === "videos") {
    return <VideoGallery videos={project.mediaUrl} title={project.title} />;
  }

  if (project.mediaType === "website") {
    return (
      <div className="space-y-4">
        <div className="flex justify-end">
          <Button href={project.mediaUrl} variant="outline" target="_blank" rel="noopener noreferrer">
            Visit Site <ExternalLink size={16} className="ml-2" />
          </Button>
        </div>
        <div className="h-[70vh] w-full overflow-hidden rounded-md bg-charcoal">
          <iframe
            src={project.mediaUrl}
            title={project.title}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
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
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
