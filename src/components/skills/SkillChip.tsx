"use client";

import { motion } from "framer-motion";

export function SkillChip({ skill }: { skill: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="inline-flex min-h-[44px] items-center rounded-full border border-charcoal-2 px-4 py-2 text-sm text-cream-muted transition-colors hover:border-accent hover:text-accent"
    >
      {skill}
    </motion.span>
  );
}
