import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import OwnProjects from "@/components/OwnProjects";
import AIDevelopment from "@/components/AIDevelopment";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PortfolioGrid />
        <OwnProjects />
        <AIDevelopment />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
