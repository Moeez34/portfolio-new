import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <div className="min-h-dvh bg-ink font-sans text-ink-text antialiased">
      <NavBar />
      <main className="min-h-dvh w-full">
        <section className="px-4 pb-20 pt-10 sm:px-8 sm:pt-12 lg:px-12">
          <div className="mx-auto w-full max-w-[900px]">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-text"
            >
              <ArrowLeft size={16} strokeWidth={1.8} />
              <span>Back to home</span>
            </Link>

            <p className="flex flex-wrap items-baseline gap-x-[0.9em] font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-kicker sm:text-sm">
              <span>Terminal</span>
              <span aria-hidden="true">-</span>
              <span>About</span>
            </p>
            <h1 className="mt-[0.28em] font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[0.95] tracking-[-0.01em] text-ink-title">
              About me
            </h1>

            <div className="mt-10 space-y-6">
              <p className="font-gitlab text-2xl font-bold leading-snug tracking-tight text-ink-title sm:text-3xl">
                Hey, Moeez Ahmed this side an AI product &amp; full stack
                engineer.
              </p>
              <p className="font-jetbrains text-base font-medium leading-8 text-ink-muted sm:text-lg">
                An engineer who loves to tempering with the code, I love
                breaking and reverse engineering things &amp; love to build cool
                things.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
