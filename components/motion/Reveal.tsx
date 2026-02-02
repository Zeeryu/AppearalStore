"use client";

import { motion, useReducedMotion } from "framer-motion";

const defaultTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
