"use client";

import { motion, useSpring } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = React.ComponentPropsWithoutRef<typeof motion.button> & {
  intensity?: number;
};

export function MagneticButton({
  children,
  className,
  intensity = 24,
  ...props
}: MagneticButtonProps) {
  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });

  return (
    <motion.button
      type="button"
      aria-label={props["aria-label"]}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg hover:shadow-glow",
        className
      )}
      style={{ x, y }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;
        x.set((offsetX / rect.width) * intensity);
        y.set((offsetY / rect.height) * intensity);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
