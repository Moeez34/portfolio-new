export default function SectionHeader({ kicker, index, title }) {
  return (
    <section className="px-4 pb-10 pt-14 sm:px-8 sm:pt-16 lg:px-12">
      <p className="flex flex-wrap items-baseline gap-x-[0.9em] font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-kicker sm:text-sm">
        <span>{kicker}</span>
        <span aria-hidden="true">-</span>
        <span>{index}</span>
      </p>

      <h2 className="mt-[0.28em] font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.01em] text-ink-title">
        {title}
      </h2>
    </section>
  );
}
