import { HugeiconsIcon } from "@hugeicons/react";
import { BloggerIcon } from "@hugeicons/core-free-icons";
import { FileText, UserRound } from "lucide-react";

export default function NavBar() {
  const items = [
    {
      label: "Home",
      href: "#home",
      icon: (
        <img
          src="/icons/home.png"
          alt=""
          className="size-5 brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100"
          draggable="false"
        />
      ),
    },
    {
      label: "About",
      href: "#about",
      icon: <UserRound className="size-5 text-[#d6d6d6] transition-colors group-hover:text-white" strokeWidth={1.8} />,
    },
    {
      label: "Resume",
      href: "/Syed_Moeez_Ahmed_Resume.pdf",
      icon: <FileText className="size-5 text-[#d6d6d6] transition-colors group-hover:text-white" strokeWidth={1.8} />,
      external: true,
    },
    {
      label: "Research",
      href: "/Research-Paper-4.pdf",
      icon: (
        <img
          src="/icons/research.png"
          alt=""
          className="size-5 brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100"
          draggable="false"
        />
      ),
      external: true,
    },
    {
      label: "Contact",
      href: "#contact",
      icon: (
        <img
          src="/icons/contact.png"
          alt=""
          className="size-5 brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100"
          draggable="false"
        />
      ),
    },
    {
      label: "Blogs",
      href: "#blogs",
      icon: (
        <HugeiconsIcon
          icon={BloggerIcon}
          size={20}
          color="#d6d6d6"
          strokeWidth={1.8}
          className="transition-colors group-hover:[&_svg]:text-white"
        />
      ),
    },
  ];

  return (
    <nav className="w-full bg-black">
      <div className="flex w-full justify-center px-6 py-6 sm:py-8">
        <div className="w-full max-w-[420px] rounded-full border border-[#2a2a2a] bg-[#0b0b0b] px-5 py-2.5 sm:px-6 sm:py-3">
          <ul className="flex items-center justify-between">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="group inline-flex items-center justify-center text-[#d6d6d6] transition-colors hover:text-white"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
