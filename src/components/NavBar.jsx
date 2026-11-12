export default function NavBar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "contact", href: "#contact" },
    { label: "blogs", href: "#blogs" },
  ];

  return (
    <nav className="w-full bg-black">
      <div className="w-full px-6 py-4 sm:px-10 lg:px-16">
        <ul className="flex w-full items-center justify-between rounded-full border border-[#2a2a2a] bg-[#0a0a0a] p-1">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-flex items-center rounded-full px-5 py-2 text-[15px] leading-none text-[#d3d3d3] transition-colors hover:bg-[#171717] hover:text-white sm:px-8 sm:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
