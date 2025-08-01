import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ValuePropositionSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
};

export default Index;
