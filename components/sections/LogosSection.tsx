"use client";

import { ParallaxSection } from "@/components/motion/ParallaxSection";
import { ScrollTickerLines } from "@/components/motion/ScrollTickerLines";

const logos = [
  "STUDIO-07",
  "NOIR LAB",
  "FORMA",
  "GRIDLINE",
  "MONO",
  "AXIS",
  "LUME",
  "APEX",
];

export function LogosSection() {
  return (
    <section className="bg-bg py-12">
      <ParallaxSection
        className="mx-auto w-full max-w-6xl px-6"
        fromY={20}
        toY={-20}
        fromBlur={10}
        toBlur={0}
        fromOpacity={0.6}
        toOpacity={1}
        offset={["start end", "center center"]}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Brand partners
            </p>
            <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.2em]">
              Signal collaborators
            </h3>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            24/7 Studio
          </span>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-gradient-to-r from-fg/5 via-fg/10 to-fg/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
          <ScrollTickerLines
            variant="solid-only"
            lines={[
              { text: logos.join("   ") },
              { text: logos.slice().reverse().join("   "), reverse: true },
            ]}
          />
        </div>
      </ParallaxSection>
    </section>
  );
}
