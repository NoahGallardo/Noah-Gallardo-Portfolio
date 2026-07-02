import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-cream-muted">404</p>
      <h1 className="mt-4 font-display text-4xl text-cream sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-cream-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 text-sm tracking-wide text-accent hover:underline">
        ← Back home
      </Link>
    </section>
  );
}
