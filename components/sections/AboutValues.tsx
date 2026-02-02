"use client";

import { Reveal } from "@/components/motion/Reveal";

const values = [
  {
    title: "Material discipline",
    description: "Weighty textiles, tonal hardware, and clean finishes.",
  },
  {
    title: "Type-led identity",
    description: "Bold typography with controlled tracking and leading.",
  },
  {
    title: "Motion as texture",
    description: "Subtle parallax, blur, and glow tied to scroll.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-bg pb-20 pt-6">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-fg/5 p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-[0.2em]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
