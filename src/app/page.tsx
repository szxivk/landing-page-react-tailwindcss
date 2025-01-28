import { Features } from "@/components/Features/Features";
import { TopSection } from "@/components/TopSection/TopSection";

export default function Home() {
  return (
    <main className="h-[200vh]">
      {/* link components here */}
      <TopSection />
      <Features />
    </main>
  );
}
