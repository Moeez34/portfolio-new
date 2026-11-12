const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Moeez34",
    icon: "/icons/github.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/moeez34",
    icon: "/icons/linkedin.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/moeez34",
    icon: "/icons/instagram.svg",
  },
  {
    label: "Twitter",
    href: "https://x.com/moeez34",
    icon: "/icons/twitter.svg",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-ink-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 sm:px-8">
        <ul className="flex items-center gap-5 sm:gap-6">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center opacity-70 transition-opacity hover:opacity-100"
              >
                <img
                  src={social.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5"
                  loading="lazy"
                  decoding="async"
                />
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
