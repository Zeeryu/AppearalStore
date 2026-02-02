"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["0.08em", "0.3em"]);

  return (
    <section ref={ref} className="bg-bg py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.p
          style={{ letterSpacing }}
          className="text-xs uppercase tracking-[0.3em] text-muted"
        >
          Brand story
        </motion.p>
        <motion.h1
          style={{ y, opacity }}
          className="mt-6 max-w-4xl font-accent text-5xl leading-tight md:text-7xl"
        >
          We design apparel as a framed editorial moment: sharp, minimal, and
          deliberate.
        </motion.h1>
      </div>
    </section>
  );
}
