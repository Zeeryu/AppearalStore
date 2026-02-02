import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutValues } from "@/components/sections/AboutValues";
import { AboutStudio } from "@/components/sections/AboutStudio";
import { AboutCta } from "@/components/sections/AboutCta";
import { PressStrip } from "@/components/sections/PressStrip";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStudio />
      <PressStrip />
      <AboutValues />
      <AboutCta />
    </>
  );
}
