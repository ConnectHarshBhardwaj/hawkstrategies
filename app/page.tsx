import { PropertySearch } from "@/components/PropertySearch";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { InvestNarela } from "@/components/InvestNarela";
import { AreaExplorer } from "@/components/AreaExplorer";
import { RealEstateHero } from "@/components/RealEstateHero";
import { CallToAction } from "@/components/CallToAction";
import { IntroAnimation } from "@/components/IntroAnimation";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <main className="w-full relative selection:bg-[#B8860B] selection:text-white bg-white">
        <RealEstateHero />
        <PropertySearch />
        <FeaturedProperties />
        <InvestNarela />
        <AreaExplorer />
        <CallToAction />
      </main>
    </>
  );
}
