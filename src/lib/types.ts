export type Category = "Videography / Film" | "Photography" | "Creative Coding";

interface ProjectBase {
  slug: string;
  title: string;
  category: Category;
  year: string;
  description: string;
  thumbnail: string;
  tools: string[];
}

export type Project =
  | (ProjectBase & { mediaType: "youtube" | "vimeo"; mediaUrl: string })
  | (ProjectBase & { mediaType: "images"; mediaUrl: string[] });

export interface SkillGroup {
  name: string;
  skills: string[];
}
