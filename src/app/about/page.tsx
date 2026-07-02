import type { Metadata } from "next";
import { SafeImage } from "@/components/ui/SafeImage";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <SafeImage
          src="/images/noah-portrait.jpg"
          alt="Noah Gallardo"
          className="aspect-[4/5] w-full rounded-md"
        />
        <div>
          <h1 className="font-display text-4xl text-cream sm:text-5xl">About</h1>
          <div className="mt-6 space-y-4 text-cream-muted">
            <p>
              I&apos;m Noah Gallardo, a filmmaker, photographer, and creative technologist based
              in San Diego. I&apos;m a graduate of UC San Diego&apos;s Interdisciplinary
              Computing and the Arts (ICAM) program, where I studied the intersection of
              storytelling, visual art, and technology.
            </p>
            <p>
              My work spans narrative and documentary film, portrait and editorial photography,
              and interactive creative-coding installations — I&apos;m drawn to projects that
              blend a cinematic eye with hands-on technical craft, from on-set cinematography to
              writing the code behind a generative visual.
            </p>
            <p>
              When I&apos;m not shooting or building, I&apos;m usually exploring new tools and
              techniques to push what a small crew — or one person — can create.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-cream px-6 py-3 text-sm font-medium tracking-wide text-bg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_-4px_rgba(181,121,74,0.6)]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
