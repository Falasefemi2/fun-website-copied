import Navbar from "@/components/common/navbar";
import AlertSection from "@/components/sections/alert-section";
import CRMSection from "@/components/sections/crm-section";
import DataModellingSection from "@/components/sections/data-modelling-section";
import FooterSection from "@/components/sections/footer-section";
import HeroSection from "@/components/sections/hero-section";
import LovedByBuildersSection from "@/components/sections/loved-by-builder-section";
import MarqueeSection from "@/components/sections/marquee-section";
import MoreFeaturesSection from "@/components/sections/more-feature-section";
import MultiPlayerDesignSection from "@/components/sections/multi-player-design-section";
import ReadyToBuildSection from "@/components/sections/ready-to-build-section";
import SecurityScaleSection from "@/components/sections/security-scale-section";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-col">
        <AlertSection />
        <Navbar />
      </div>
      <div className="mt-8 md:mt-20.25 flex flex-col gap-12 md:gap-37.5 px-4 md:px-25">
        <HeroSection />
        <MarqueeSection />
        <CRMSection />
        <DataModellingSection />
        <MultiPlayerDesignSection />
        <SecurityScaleSection />
      </div>

      <div className="mt-8 md:mt-20.25 flex flex-col">
        <MoreFeaturesSection />
        <LovedByBuildersSection />
        <ReadyToBuildSection />
        <FooterSection />
      </div>
    </main>
  );
}
