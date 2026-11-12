import { stack } from "../data/profile";

export default function TechStack() {
  return (
    <div className="mt-5 flex flex-col items-start gap-4">
      <p className="font-mono text-xs font-semibold uppercase leading-none tracking-[0.1em] text-[#94a3b8] sm:text-sm">
        Technologies & tools
      </p>

      <ul className="flex flex-wrap items-center gap-[13px]">
        {stack.map((tech) => (
          <li
            key={tech.name}
            title={tech.name}
            className="grid size-10 place-items-center rounded-[10px] border border-[#202020] bg-[#0d0d0d] transition-colors duration-200 hover:border-[#3a3a3a] hover:bg-[#141414]"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              width={22}
              height={22}
              loading="lazy"
              decoding="async"
              className="size-[22px] select-none"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
