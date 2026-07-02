"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { Menu, Download } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-charcoal-2 bg-bg/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="font-display text-lg uppercase tracking-[0.15em] text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setOpen(false)}
          >
            Noah Gallardo
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "group relative py-2 text-sm tracking-wide transition-colors",
                    active ? "text-accent" : "text-cream-muted hover:text-cream"
                  )}
                >
                  {link.label}
                  <span
                    className={clsx(
                      "absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 text-sm tracking-wide text-cream-muted transition-colors hover:text-accent"
            >
              Resume <Download size={14} />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center text-cream md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}
