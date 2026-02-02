"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutStory() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const color = useTransform(scrollYProgress, [0, 1], ["#101010", "#b6ff2f"]);

  return (
    <section ref={ref} className="bg-bg py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <motion.h2
            style={{ color }}
            className="font-display text-4xl uppercase tracking-[0.2em]"
          >
            A studio built on contrast.
          </motion.h2>
          <div className="space-y-6 text-sm text-muted">
            <p>
              APPEARAL merges editorial discipline with streetwear immediacy.
              Each collection is framed around a single silhouette, then
              expanded through texture, light, and proportion.
            </p>
            <p>
              We keep the palette controlled, the typography oversized, and the
              finishes quiet. The result is a considered uniform for modern
              cities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
