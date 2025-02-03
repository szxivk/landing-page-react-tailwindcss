import { Features } from "@/components/Features/Features";
import { Footer } from "@/components/Footer/Footer";
import { TopSection } from "@/components/TopSection/TopSection";

export default function Home() {
  return (
    <main>
      {/* link components here */}
      <TopSection />
      <Features />
      <Footer />
    </main>
  );
}
