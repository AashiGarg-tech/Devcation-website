import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TracksSection from "@/components/TracksSection";
import JudgesSection from "@/components/JudgesSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import SponsorsSection from "@/components/SponsorsSection";
import IdeaGenerator from "@/components/IdeaGenerator";
import FaqsSection from "@/components/FaqsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <IdeaGenerator />
      <TimelineSection />
      <PrizesSection />
      <JudgesSection />
      <SponsorsSection />
      <FaqsSection />
      <Footer />
    </div>
  );
};

export default Index;
