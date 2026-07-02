import { FaGithub, FaInstagram, FaLinkedin, FaVimeo } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORM_ID"; // TODO: replace FORM_ID with your real Formspree form ID

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS: { label: string; href: string; icon: IconType }[] = [
  { label: "GitHub", href: "#", icon: FaGithub },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Vimeo", href: "#", icon: FaVimeo },
];
