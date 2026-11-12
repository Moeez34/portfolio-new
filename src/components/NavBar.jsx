import { RainbowButton } from "./RainbowButton";

export default function NavBar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "resume", href: "/Syed_Moeez_Ahmed_Resume.pdf" },
    { label: "contact", href: "#contact" },
    { label: "blogs", href: "#blogs" },
  ];

  return (
    <nav className="w-full bg-black">
      <div className="w-full px-6 py-4 sm:px-10 lg:px-16">
        <ul className="flex w-full items-center justify-between gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <RainbowButton
                as="a"
                href={link.href}
                className="h-10 px-5 text-[15px] sm:h-11 sm:px-7 sm:text-base"
                {...(link.href.endsWith(".pdf")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </RainbowButton>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
