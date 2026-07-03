import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORM_ID"; // TODO: replace FORM_ID with your real Formspree form ID

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS: { label: string; href: string; icon: IconType }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/noah-gallardo-70a87b29a", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/noahgallardo_/", icon: FaInstagram },
];
