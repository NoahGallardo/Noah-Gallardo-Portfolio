import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <SafeImage
        src={project.thumbnail}
        alt={project.title}
        category={project.category}
        className="aspect-video w-full rounded-md transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="mt-4 space-y-1.5">
        <span className="text-xs uppercase tracking-widest text-accent">{project.category}</span>
        <h3 className="font-display text-xl text-cream">{project.title}</h3>
        <p className="line-clamp-2 text-sm text-cream-muted">{project.description}</p>
      </div>
    </Link>
  );
}
