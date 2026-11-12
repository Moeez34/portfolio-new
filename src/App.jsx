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
        <section className="flex justify-center px-4 pb-20 sm:px-8 lg:px-12">
          <GitHubActivity username="Moeez34" showMonths />
        </section>
      </main>
    </div>
  );
}
