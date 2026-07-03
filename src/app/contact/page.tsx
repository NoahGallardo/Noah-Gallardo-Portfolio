import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-4xl text-cream sm:text-5xl">Contact</h1>
      <p className="mt-4 text-cream-muted">
        Have a project in mind or just want to say hello? Send a message below.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>

      <div className="mt-16 border-t border-charcoal-2 pt-10">
        <h2 className="text-xs uppercase tracking-widest text-cream-muted">Elsewhere</h2>
        <ul className="mt-4 flex flex-wrap gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-cream-muted/40 px-5 py-3 text-sm tracking-wide text-cream transition-all duration-300 hover:scale-[1.03] hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <Icon size={18} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
