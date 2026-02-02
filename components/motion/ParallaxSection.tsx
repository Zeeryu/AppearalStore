"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxSectionProps = {
  children: React.ReactNode;
  className?: string;
  fromY?: number;
  toY?: number;
  fromBlur?: number;
  toBlur?: number;
  fromOpacity?: number;
  toOpacity?: number;
  offset?: Parameters<typeof useScroll>[0]["offset"];
};

export function ParallaxSection({
  children,
  className,
  fromY = 0,
  toY = -80,
  fromBlur = 0,
  toBlur = 10,
  fromOpacity = 1,
  toOpacity = 1,
  offset = ["start end", "end start"],
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });

  const y = useTransform(scrollYProgress, [0, 1], [fromY, toY]);
  const opacity = useTransform(scrollYProgress, [0, 1], [fromOpacity, toOpacity]);
  const blurFilter = useTransform(
    scrollYProgress,
    [0, 1],
    [`blur(${fromBlur}px)`, `blur(${toBlur}px)`]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: reduceMotion ? 0 : y,
        opacity: reduceMotion ? 1 : opacity,
        filter: reduceMotion ? "none" : blurFilter,
      }}
    >
      {children}
    </motion.div>
  );
}
