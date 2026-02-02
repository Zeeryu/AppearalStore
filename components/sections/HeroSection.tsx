"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type Transition } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
  const contentFilter = useTransform(scrollYProgress, [0, 0.6], ["blur(0px)", "blur(10px)"]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section className="relative overflow-hidden bg-bg pb-16 pt-12" ref={ref}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-frame border border-border bg-frame text-frameFg shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
          <motion.div
            className="absolute inset-0"
            style={{ y: imageY }}
            transition={defaultTransition}
          >
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=80"
              alt="Editorial streetwear hero"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
            <div
              className="absolute inset-0 opacity-30 mix-blend-soft-light"
              style={{
                backgroundImage:
                  "url(data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E)",
              }}
            />
          </motion.div>

          <motion.div
            className="relative z-10 flex min-h-[70vh] flex-col justify-between p-10 text-white md:p-14"
            style={{
              opacity: contentOpacity,
              filter: contentFilter,
            }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">Season 26</Badge>
              <Badge variant="ghost">Editorial Issue</Badge>
            </div>

            <div className="mt-16 space-y-6">
              <h1 className="max-w-3xl font-accent text-5xl leading-[0.92] md:text-7xl">
                The{" "}
                <span className="text-accent">Noir</span> Issue: a framed silhouette
                for urban light.
              </h1>
              <p className="max-w-2xl font-mono text-sm uppercase tracking-[0.35em] text-white/70">
                Curated street essentials with sculpted edges and luminous accents.
              </p>
              <div className="relative flex flex-wrap items-center gap-4">
                <div className="pointer-events-none absolute -left-6 top-1/2 h-14 w-64 -translate-y-1/2 rounded-full bg-accent/30 blur-2xl" />
                <MagneticButton aria-label="Shop the noir issue">
                  Shop Now
                </MagneticButton>
                <Button asChild variant="outline">
                  <Link href="/about" aria-label="Read the story">
                    Read the Story
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 font-mono text-xs uppercase tracking-[0.3em] text-white/70">
              <div className="flex items-center gap-6">
                <span>Drop 01</span>
                <span>Milano</span>
                <span>Lookbook</span>
              </div>
              <nav className="flex items-center gap-6">
                <Link
                  href="/shop"
                  aria-label="Go to shop"
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-frame"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  aria-label="Go to about"
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-frame"
                >
                  About
                </Link>
              </nav>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-xs uppercase tracking-[0.45em] text-frameFg/70">
            Spring - Summer 26
          </div>
        </div>
      </div>
    </section>
  );
}
