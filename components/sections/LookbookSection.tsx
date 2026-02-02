"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const lookbook = [
  {
    src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80",
    title: "After Hours",
  },
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    title: "Soft Focus",
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    title: "Frame Study",
  },
  {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    title: "City Pulse",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    title: "Light Leak",
  },
  {
    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    title: "Structured",
  },
];

export function LookbookSection() {
  return (
    <section className="bg-bg py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Lookbook
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.2em]">
              Editorial grid
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted">
            Motion-led imagery with sculpted silhouettes and softened light.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {lookbook.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className={index % 3 === 1 ? "md:translate-y-6" : ""}
            >
              <div className="group relative h-72 overflow-hidden rounded-3xl border border-border bg-fg/5 shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.2)]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white backdrop-blur">
                  {item.title}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
