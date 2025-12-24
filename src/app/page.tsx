import { Hero } from "@/components/sections/Hero";
import { PracticeAreasSection } from "@/components/sections/PracticeAreasSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AttorneysPreview } from "@/components/sections/AttorneysPreview";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AwardsSection />
      <PracticeAreasSection />
      <WhyChooseUs />
      <AttorneysPreview />
      <InsightsPreview />
      <CTASection />
    </>
  );
}
