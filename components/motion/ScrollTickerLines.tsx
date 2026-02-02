"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type TickerLine = {
  text: string;
  reverse?: boolean;
};

type ScrollTickerLinesProps = {
  lines: TickerLine[];
  variant?: "solid-outline" | "solid-only";
  className?: string;
};

function TickerLineItem({
  line,
  index,
  variant,
}: {
  line: TickerLine;
  index: number;
  variant: ScrollTickerLinesProps["variant"];
}) {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const isReverse = line.reverse ?? index % 2 !== 0;
  const direction = isReverse ? -1 : 1;
  const translateX = useTransform(scrollY, (value) =>
    reduceMotion ? 0 : direction * value * 0.15
  );

  return (
    <motion.div style={{ x: translateX }} className="whitespace-nowrap">
      <div className="relative flex items-center gap-8 uppercase tracking-[0.3em]">
        <span
          className={cn(
            "text-4xl font-display text-fg md:text-6xl",
            variant === "solid-outline" && "opacity-80"
          )}
        >
          {line.text}
        </span>
        <span className="text-4xl font-display text-fg/40 md:text-6xl">
          {line.text}
        </span>
        {variant === "solid-outline" && (
          <span
            className="absolute left-0 top-0 text-4xl font-display text-transparent md:text-6xl"
            style={{ WebkitTextStroke: "1px var(--fg)" }}
          >
            {line.text}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function ScrollTickerLines({
  lines,
  variant = "solid-outline",
  className,
}: ScrollTickerLinesProps) {
  return (
    <div className={cn("overflow-hidden space-y-4", className)}>
      {lines.map((line, index) => (
        <TickerLineItem
          key={`${line.text}-${index}`}
          line={line}
          index={index}
          variant={variant}
        />
      ))}
    </div>
  );
}
