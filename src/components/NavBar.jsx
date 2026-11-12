export default function NavBar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "resume", href: "/Syed_Moeez_Ahmed_Resume.pdf" },
    { label: "contact", href: "#contact" },
    { label: "blogs", href: "#blogs" },
  ];

  return (
    <nav className="w-full bg-black">
      <div className="flex w-full justify-center px-6 py-10 sm:py-12">
        <div className="w-full max-w-[420px]">
          <div className="h-px w-full bg-[#5a5a5a]" />
          <ul className="flex items-center justify-between px-2 py-5 sm:px-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[14px] leading-none text-[#d6d6d6] transition-colors hover:text-white sm:text-[15px]"
                  {...(link.href.endsWith(".pdf")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-px w-full bg-[#5a5a5a]" />
        </div>
      </div>
    </nav>
  );
}
