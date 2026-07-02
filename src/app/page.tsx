"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SparklesCore } from "@/components/ui/SparklesCore";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6">
        <div className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={100}
            particleColor="#f2ece1"
            speed={1.2}
            className="h-full w-full"
          />
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cream-muted">Portfolio</p>
          <h1 className="font-display text-5xl italic tracking-tight text-cream sm:text-7xl lg:text-8xl">
            Noah Gallardo
          </h1>
          <p className="mt-6 text-base uppercase tracking-[0.2em] text-cream-muted sm:text-lg">
            Filmmaker · Photographer · Creative Technologist
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#work" variant="solid">
              View Work
            </Button>
            <Button href="#about" variant="outline">
              About Me
            </Button>
          </div>
        </motion.div>
      </section>

      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl text-cream sm:text-4xl">Selected Work</h2>
          <p className="mt-3 max-w-xl text-cream-muted">
            A glimpse at recent film, photography, and creative-coding projects.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/projects" variant="outline">
            View All Work
          </Button>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-20 border-t border-charcoal-2 px-4 py-24 sm:px-6"
      >
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <SafeImage
              src="/images/noah-portrait.jpg"
              alt="Noah Gallardo"
              className="aspect-[4/5] w-full rounded-md"
            />
            <div>
              <h2 className="font-display text-3xl text-cream sm:text-4xl">About</h2>
              <p className="mt-4 text-cream-muted">
                I&apos;m Noah Gallardo, a filmmaker, photographer, and creative technologist
                based in San Diego and a graduate of UC San Diego&apos;s Interdisciplinary
                Computing and the Arts (ICAM) program. My work blends a cinematic eye with
                hands-on technical craft, from on-set cinematography to writing the code
                behind a generative visual.
              </p>
              <Button href="/about" variant="outline" className="mt-8">
                Full Bio
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
