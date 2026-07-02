import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-4xl text-cream sm:text-5xl">Work</h1>
      <p className="mt-4 max-w-xl text-cream-muted">
        A collection of film, photography, and creative-coding projects.
      </p>
      <div className="mt-12">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
