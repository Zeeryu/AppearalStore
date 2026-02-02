"use client";

import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

const press = [
  "ARCHIVE",
  "LUME",
  "NOIR LAB",
  "INDEX",
  "FORMA",
  "STUDIO-07",
];

export function PressStrip() {
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();
  const track = [...press, ...press, ...press];

  useEffect(() => {
    if (reduceMotion) return;
    controls.start({
      x: "-50%",
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });
  }, [controls, reduceMotion]);

  return (
    <section className="bg-bg py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-border bg-gradient-to-r from-fg/5 via-fg/10 to-fg/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Featured in
          </p>
          <div
            className="mt-4 overflow-hidden"
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => {
              if (reduceMotion) return;
              controls.start({
                x: "-50%",
                transition: { duration: 20, ease: "linear", repeat: Infinity },
              });
            }}
          >
            <motion.div
              animate={controls}
              className="flex w-max items-center gap-10 text-sm uppercase tracking-[0.4em] text-fg/60"
              style={{ whiteSpace: "nowrap" }}
            >
              {track.map((name, index) => (
                <span key={`${name}-${index}`} className="font-mono">
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
