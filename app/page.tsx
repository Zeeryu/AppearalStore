import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedRail } from "@/components/sections/FeaturedRail";
import { TickerSection } from "@/components/sections/TickerSection";
import { LookbookSection } from "@/components/sections/LookbookSection";
import { LogosSection } from "@/components/sections/LogosSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { PressStrip } from "@/components/sections/PressStrip";
import { products } from "@/lib/products";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedRail products={products.slice(0, 6)} />
      <TickerSection />
      <LookbookSection />
      <PressStrip />
      <LogosSection />
      <CtaSection />
    </>
  );
}
