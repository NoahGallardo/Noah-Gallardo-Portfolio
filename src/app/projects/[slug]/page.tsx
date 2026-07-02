import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MediaEmbed } from "@/components/projects/MediaEmbed";
import { getAllSlugs, getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? project.title : "Project Not Found" };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-cream-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <MediaEmbed project={project} />

      <div className="mt-8 space-y-4">
        <span className="text-xs uppercase tracking-widest text-accent">
          {project.category} · {project.year}
        </span>
        <h1 className="font-display text-3xl text-cream sm:text-4xl">{project.title}</h1>
        <p className="text-cream-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-charcoal-2 px-3 py-1 text-xs text-cream-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
