
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import PlatformSection from "@/components/platform-section";
import StatsSection from "@/components/stats-section";
import CapabilitiesSection from "@/components/capabilities-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PlatformSection />
      <StatsSection />
      <CapabilitiesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
