import Footer from "../components/Footer";
import GitHubActivity from "../components/GitHubActivity";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/ProfileHeader";
import ProofOfWork from "../components/ProofOfWork";

export default function Home() {
  return (
    <div className="min-h-dvh bg-ink font-sans text-ink-text antialiased">
      <NavBar />
      <main className="min-h-dvh w-full">
        <ProfileHeader />
        <ProofOfWork />
        <section className="flex flex-col items-center px-4 pb-16 sm:px-8 lg:px-12">
          <GitHubActivity username="Moeez34" showMonths />
          <figure className="relative mt-10 w-full max-w-[720px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 text-left sm:p-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1 select-none font-quote text-[7rem] italic leading-none text-white/10 sm:left-6 sm:text-[8rem]"
            >
              &ldquo;
            </span>
            <blockquote className="relative font-quote text-2xl italic leading-snug tracking-tight text-neutral-100 sm:text-3xl">
              Moeez is a great software engineer. I tried to hire them, but they
              said my codebase needed a rewrite.
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-400">
              <span aria-hidden="true" className="h-[1px] w-4 bg-neutral-600" />
              <span>Elon Musk</span>
            </figcaption>
          </figure>
        </section>
      </main>
      <Footer />
    </div>
  );
}
