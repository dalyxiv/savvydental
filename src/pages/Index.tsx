import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkflowSection from "@/components/WorkflowSection";
import UnboxingSection from "@/components/UnboxingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <WorkflowSection />
        <UnboxingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
