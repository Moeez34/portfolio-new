import NavBar from "./components/NavBar";
import ProfileHeader from "./components/ProfileHeader";
import SectionHeader from "./components/SectionHeader";

export default function App() {
  return (
    <div className="min-h-dvh bg-ink font-sans text-ink-text antialiased">
      <NavBar />
      <main className="min-h-dvh w-full">
        <ProfileHeader />
        <SectionHeader kicker="Terminal" index="01" title="Proof of work" />
      </main>
    </div>
  );
}
