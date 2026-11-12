import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Moeez34",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/moeez34",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/moeez34",
    icon: Instagram,
  },
  {
    label: "Twitter",
    href: "https://x.com/moeez34",
    icon: Twitter,
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-ink-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 sm:px-8">
        <ul className="flex items-center gap-5 sm:gap-6">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center text-ink-muted transition-colors hover:text-ink-text"
              >
                <Icon size={20} strokeWidth={1.8} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center text-sm text-ink-muted">
          © {new Date().getFullYear()} Moeez Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
