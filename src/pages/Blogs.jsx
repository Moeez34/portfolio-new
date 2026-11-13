import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Blogs() {
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
              <span>Blogs</span>
            </p>
            <h1 className="mt-[0.28em] font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[0.95] tracking-[-0.01em] text-ink-title">
              Blogs
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
