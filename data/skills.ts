import type { SkillGroup } from "@/lib/types";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Video Production",
    skills: [
      "Cinematography",
      "Editing (Premiere Pro)",
      "Color Grading (DaVinci Resolve)",
      "Sound Design",
      "Lighting",
      "Sony FX3 / FX30",
    ],
  },
  {
    name: "Photography",
    skills: [
      "Portrait",
      "Event",
      "Landscape",
      "Lightroom",
      "Studio Lighting",
      "Sony A7IV",
    ],
  },
  {
    name: "Creative Coding",
    skills: [
      "Three.js",
      "p5.js",
      "TouchDesigner",
      "Generative Art",
      "WebGL / GLSL",
      "Interactive Installations",
    ],
  },
  {
    name: "Software",
    skills: ["React / Next.js", "TypeScript", "Python", "After Effects", "Figma", "Git"],
  },
];
