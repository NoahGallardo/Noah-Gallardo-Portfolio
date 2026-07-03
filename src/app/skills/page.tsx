import type { Metadata } from "next";
import { SkillChip } from "@/components/skills/SkillChip";
import { SKILL_GROUPS } from "@data/skills";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-4xl text-cream sm:text-5xl">Skills &amp; Tools</h1>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.name} className="rounded-lg border border-charcoal-2 bg-charcoal/30 p-6">
            <h2 className="font-display text-xl text-accent">{group.name}</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <SkillChip key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
