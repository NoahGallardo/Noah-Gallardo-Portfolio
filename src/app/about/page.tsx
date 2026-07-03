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
          src="/images/noah-gallardo.jpg"
          alt="Noah Gallardo"
          className="aspect-[4/5] w-full rounded-md"
        />
        <div>
          <h1 className="font-display text-4xl text-cream sm:text-5xl">About</h1>
          <div className="mt-6 space-y-4 text-cream-muted">
            <p>
              I&apos;m Noah Gallardo, a San Diego-based multimedia creator and creative
              technologist with a passion for bringing ideas to life through visual storytelling.
              As a graduate of UC San Diego&apos;s Interdisciplinary Computing and the Arts (ICAM)
              program, I&apos;ve developed a multidisciplinary approach that blends filmmaking,
              photography, design, and technology.
            </p>
            <p>
              My work ranges from live events and music festivals to branded content, creative
              coding, and interactive experiences. Whether I&apos;m behind the camera, leading a
              production, or developing digital experiences through code, I&apos;m driven by
              curiosity and a desire to create work that is both visually compelling and
              thoughtfully crafted.
            </p>
            <p>
              I enjoy exploring new ways to combine creativity with technology, using both to tell
              stories, solve problems, and create experiences that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
