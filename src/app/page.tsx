import { Features } from "@/components/Features/Features";
import { TopSection } from "@/components/TopSection/TopSection";

export default function Home() {
  return (
    <main className="h-[100vh]">
      {/* link components here */}
      <TopSection />
      <Features />
    </main>
  );
}
