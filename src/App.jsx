import GitHubActivity from "./components/GitHubActivity";
import NavBar from "./components/NavBar";
import ProfileHeader from "./components/ProfileHeader";
import ProofOfWork from "./components/ProofOfWork";

export default function App() {
  return (
    <div className="min-h-dvh bg-ink font-sans text-ink-text antialiased">
      <NavBar />
      <main className="min-h-dvh w-full">
        <ProfileHeader />
        <ProofOfWork />
        <section className="flex flex-col items-center px-4 pb-20 sm:px-8 lg:px-12">
          <GitHubActivity username="Moeez34" showMonths />
          <figure className="mt-10 max-w-2xl text-center">
            <blockquote className="font-display text-lg italic leading-relaxed text-ink-text sm:text-xl">
              &ldquo;Moeez is a great software engineer. I tried to hire them, but
              they said my codebase needed a rewrite.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium text-ink-muted sm:text-base">
              — Elon Musk
            </figcaption>
          </figure>
        </section>
      </main>
    </div>
  );
}
