"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-md border border-charcoal-2 bg-charcoal px-4 py-3 text-cream placeholder:text-cream-muted/50 focus:outline-none focus:ring-2 focus:ring-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-accent/40 bg-charcoal px-6 py-8 text-center">
        <p className="font-display text-xl text-cream">Thanks for reaching out.</p>
        <p className="mt-2 text-sm text-cream-muted">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm tracking-wide text-cream-muted">
          Name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm tracking-wide text-cream-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm tracking-wide text-cream-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className={inputClasses}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[44px] w-full rounded-full bg-cream px-6 py-3 text-sm font-medium tracking-wide text-bg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_-4px_rgba(181,121,74,0.6)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
