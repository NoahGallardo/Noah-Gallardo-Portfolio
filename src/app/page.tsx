"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SparklesCore } from "@/components/ui/SparklesCore";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getProjectBySlug } from "@/lib/projects";
import type { Project } from "@/lib/types";

const SELECTED_WORK_SLUGS = [
  "juelz-sun-god-festival-26",
  "sungod-festival-2026",
  "devdea-live-at-nova-san-diego",
  "goldenvoice-surf-club",
];

export default function Home() {
  const selectedWorks = SELECTED_WORK_SLUGS.map(getProjectBySlug).filter(
    (project): project is Project => project !== undefined
  );

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
            Multimedia Creator &amp; Creative Technologist
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

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
          {selectedWorks.map((project, i) => (
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
              src="/images/noah-gallardo.jpg"
              alt="Noah Gallardo"
              className="aspect-[4/5] w-full rounded-md"
            />
            <div>
              <h2 className="font-display text-3xl text-cream sm:text-4xl">About</h2>
              <div className="mt-4 space-y-4 text-cream-muted">
                <p>
                  I&apos;m Noah Gallardo, a San Diego-based multimedia creator and creative
                  technologist with a passion for bringing ideas to life through visual
                  storytelling. As a graduate of UC San Diego&apos;s Interdisciplinary Computing
                  and the Arts (ICAM) program, I&apos;ve developed a multidisciplinary approach
                  that blends filmmaking, photography, design, and technology.
                </p>
                <p>
                  My work ranges from live events and music festivals to branded content,
                  creative coding, and interactive experiences. Whether I&apos;m behind the
                  camera, leading a production, or developing digital experiences through code,
                  I&apos;m driven by curiosity and a desire to create work that is both visually
                  compelling and thoughtfully crafted.
                </p>
                <p>
                  I enjoy exploring new ways to combine creativity with technology, using both to
                  tell stories, solve problems, and create experiences that leave a lasting
                  impact.
                </p>
              </div>
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
