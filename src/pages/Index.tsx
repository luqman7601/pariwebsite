import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ESGOnboardingSection from "@/components/sections/ESGOnboardingSection";
import DashboardSection from "@/components/sections/DashboardSection";
import HiddenRiskSection from "@/components/sections/HiddenRiskSection";
import ESGScoringSection from "@/components/sections/ESGScoringSection";
import PreferenceSection from "@/components/sections/PreferenceSection";
import ScenarioSection from "@/components/sections/ScenarioSection";
import NudgesSection from "@/components/sections/NudgesSection";
import ImpactSection from "@/components/sections/ImpactSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import LegacySection from "@/components/sections/LegacySection";
import ComplianceSection from "@/components/sections/ComplianceSection";
import NavigationSection from "@/components/sections/NavigationSection";
import TechnicalSection from "@/components/sections/TechnicalSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <ESGOnboardingSection />
      <DashboardSection />
      <HiddenRiskSection />
      <ESGScoringSection />
      <PreferenceSection />
      <ScenarioSection />
      <NudgesSection />
      <ImpactSection />
      <DiscoverySection />
      <LegacySection />
      <ComplianceSection />
      <NavigationSection />
      <TechnicalSection />
      <FooterSection />
    </div>
  );
};

export default Index;
