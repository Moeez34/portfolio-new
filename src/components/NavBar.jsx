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
          className="size-6 brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100 sm:size-7"
          draggable="false"
        />
      ),
    },
    {
      label: "About",
      href: "#about",
      icon: <UserRound className="size-6 text-[#d6d6d6] transition-colors group-hover:text-white sm:size-7" strokeWidth={1.8} />,
    },
    {
      label: "Resume",
      href: "/Syed_Moeez_Ahmed_Resume.pdf",
      icon: <FileText className="size-6 text-[#d6d6d6] transition-colors group-hover:text-white sm:size-7" strokeWidth={1.8} />,
      external: true,
    },
    {
      label: "Contact",
      href: "#contact",
      icon: (
        <img
          src="/icons/contact.png"
          alt=""
          className="size-6 brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100 sm:size-7"
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
          size={28}
          color="#d6d6d6"
          strokeWidth={1.8}
          className="transition-colors group-hover:[&_svg]:text-white"
        />
      ),
    },
  ];

  return (
    <nav className="w-full bg-black">
      <div className="flex w-full justify-center px-6 py-8 sm:py-10">
        <div className="w-full max-w-[520px] rounded-full border border-[#2a2a2a] bg-[#0b0b0b] px-6 py-4 sm:px-10 sm:py-5">
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
