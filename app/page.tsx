import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MainOfferSection from "../components/MainOfferSection";
import TargetAudienceSection from "../components/TargetAudienceSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <HeroSection />
      <MainOfferSection />
      <TargetAudienceSection />
    </div>
  );
}
