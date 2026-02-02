"use client";

import { AnimatePresence, motion, type Transition } from "framer-motion";
import { usePathname } from "next/navigation";

const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={defaultTransition}
        className="min-h-[70vh]"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
