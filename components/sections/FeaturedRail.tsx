"use client";

import Image from "next/image";
import Link from "next/link";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type AnimationPlaybackControls,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";

function FeaturedCard({
  product,
  index,
  scrollYProgress,
  onOpen,
}: {
  product: Product;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  onOpen: (product: Product) => void;
}) {
  const reduceMotion = useReducedMotion();
  const direction = index % 2 === 0 ? 1 : -1;
  const y = useTransform(scrollYProgress, [0, 1], [0, direction * 18]);

  return (
    <motion.div style={{ y: reduceMotion ? 0 : y }}>
      <button
        type="button"
        aria-label={`Expand ${product.name} image`}
        className="group relative h-72 w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-fg/5 to-fg/15 shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        onClick={() => onOpen(product)}
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </button>
    </motion.div>
  );
}

export function FeaturedRail({ products }: { products: Product[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [dragWidth, setDragWidth] = useState(0);
  const [snapWidth, setSnapWidth] = useState(0);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoControls = useRef<AnimationPlaybackControls | null>(null);
  const resumeTimer = useRef<number | null>(null);
  const [preview, setPreview] = useState<Product | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    const update = () => {
      setDragWidth(node.scrollWidth - node.clientWidth);
      const firstCard = cardRef.current;
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        const computedGap = 24;
        setSnapWidth(cardRect.width + computedGap);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const productsToShow = useMemo(() => products, [products]);

  useEffect(() => {
    if (!dragWidth || isPaused) {
      autoControls.current?.stop();
      return;
    }
    autoControls.current?.stop();
    autoControls.current = animate(x, [0, -dragWidth], {
      duration: 28,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => {
      autoControls.current?.stop();
    };
  }, [dragWidth, isPaused, x]);

  const scheduleResume = () => {
    if (resumeTimer.current) {
      window.clearTimeout(resumeTimer.current);
    }
    resumeTimer.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 1800);
  };

  useEffect(() => {
    if (!preview) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreview(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [preview]);

  const moveBy = (direction: number) => {
    if (!snapWidth) return;
    setIsPaused(true);
    const current = x.get();
    const target = Math.max(-dragWidth, Math.min(0, current + direction * snapWidth));
    animate(x, target, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
    scheduleResume();
  };

  return (
    <section ref={sectionRef} className="bg-bg py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Featured collection
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.2em]">
              Studio Highlights
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              aria-label="Previous products"
              variant="outline"
              size="sm"
              onClick={() => moveBy(1)}
            >
              Prev
            </Button>
            <Button
              type="button"
              aria-label="Next products"
              variant="outline"
              size="sm"
              onClick={() => moveBy(-1)}
            >
              Next
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/shop" aria-label="View all products">
                View All
              </Link>
            </Button>
          </div>
        </div>

        <div
          className="mt-8 overflow-hidden"
          ref={trackRef}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -dragWidth, right: 0 }}
            dragMomentum={false}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={() => {
              if (!snapWidth) return;
              const current = x.get();
              const snapped = Math.round(current / snapWidth) * snapWidth;
              const clamped = Math.max(-dragWidth, Math.min(0, snapped));
              animate(x, clamped, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
              scheduleResume();
            }}
            className="flex gap-6"
            style={{ cursor: "grab", x }}
          >
            {productsToShow.map((product, index) => (
              <div
                key={product.slug}
                ref={index === 0 ? cardRef : undefined}
                className="min-w-[260px] snap-start md:min-w-[320px]"
              >
                <FeaturedCard
                  product={product}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  onOpen={setPreview}
                />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <Link
                      href={`/product/${product.slug}`}
                      aria-label={`View ${product.name}`}
                      className="text-sm uppercase tracking-[0.24em] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-1 text-xs text-muted">${product.price}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted">
                    {product.tags[0]}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <AnimatePresence>
          {preview && (
            <motion.div
              key="preview"
              className="fixed inset-0 z-[70] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                type="button"
                aria-label="Close image preview"
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setPreview(null)}
              />
              <motion.div
                role="dialog"
                aria-modal="true"
                className="relative z-[75] w-[min(92vw,960px)] rounded-3xl border border-border bg-bg/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                initial={{ scale: 0.96, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">
                      Featured item
                    </p>
                    <p className="mt-2 font-display text-2xl uppercase tracking-[0.2em]">
                      {preview.name}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Close preview"
                    className="rounded-full border border-border bg-bg/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-fg backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    onClick={() => setPreview(null)}
                  >
                    Close
                  </button>
                </div>
                <div className="relative mt-6 h-[70vh] w-full overflow-hidden rounded-3xl border border-border bg-fg/5">
                  <Image
                    src={preview.images[1] ?? preview.images[0]}
                    alt={preview.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
