"use client";

import { ScrollTickerLines } from "@/components/motion/ScrollTickerLines";

export function TickerSection() {
  return (
    <section className="border-y border-border/60 bg-bg py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <ScrollTickerLines
          variant="solid-outline"
          lines={[
            { text: "Editorial streetwear studio" },
            { text: "Noir issue - drop 01", reverse: true },
            { text: "Curated essentials - limited run" },
          ]}
        />
      </div>
    </section>
  );
}
