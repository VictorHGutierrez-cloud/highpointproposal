import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ContextSection from "@/components/sections/ContextSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import IntegrationSection from "@/components/sections/IntegrationSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import ROIHeroSection from "@/components/sections/ROIHeroSection";


const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ContextSection />
        <ProblemSection />
        <SolutionSection />
        <ComparisonSection />
        <IntegrationSection />
        <InvestmentSection />
        <ROIHeroSection />
        
      </main>
      <Footer />
    </>
  );
};

export default Index;
