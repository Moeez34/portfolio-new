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
      </main>
    </div>
  );
}
