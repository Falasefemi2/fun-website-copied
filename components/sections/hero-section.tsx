import MainButton from "../common/main-button";
import { HeroYoutubeModal } from "../modals/hero-youtubemodal";
import HeroHeaderSection from "./hero-header-section";

export default function HeroSection() {
  return (
    <section>
      <HeroHeaderSection />
      <div>
        <div className="text-4xl md:text-[92px] text-center text-primary md:leading-22 my-8">
          Customer <br /> relationship magic.
        </div>
        <p className="mb-8 text-[22px] text-center text-[#31373D]">
          Powerful, flexible and data-driven, Attio makes it easy to build the
          exact CRM your business needs.
        </p>
        <div className="flex gap-3 justify-center">
          <MainButton
            text="Start for free"
            size="small"
            className="border-none rounded-[12px]"
          />
          <MainButton
            text="Talk to sales"
            size="small"
            className="rounded-[12px] border border-[#EDEEF0] bg-white hover:bg-white text-[#31373D]"
          />
        </div>
        <div className="flex w-full justify-center">
          <HeroYoutubeModal />
        </div>
      </div>
    </section>
  );
}
