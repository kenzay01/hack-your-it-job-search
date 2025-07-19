import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MainOfferSection from "../components/MainOfferSection";
import TargetAudienceSection from "../components/TargetAudienceSection";
import AuthorSection from "../components/AuthorSection";
import WhyItWorksSection from "../components/WhyItWorksSection";
import CasesSlider from "../components/CasesSlider";
import QuestionsSection from "../components/QuestionsSection";
import GuaranteesSection from "../components/GuaranteesSection";
import StartSection from "../components/StartSection";
import PricingSection from "../components/PricingSection";
import JobSearchMarathonSection from "@/components/JobSearchMarathonSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden md:overflow-x-auto">
      <Header />
      <HeroSection />
      <MainOfferSection />
      <TargetAudienceSection />
      <AuthorSection />
      <WhyItWorksSection />
      <JobSearchMarathonSection />
      <CasesSlider />
      <QuestionsSection />
      <GuaranteesSection />
      <StartSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
