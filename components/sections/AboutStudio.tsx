"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { label: "Studio drops", value: "14 / yr" },
  { label: "Limited units", value: "320 max" },
  { label: "Editorial shoots", value: "28" },
];

export function AboutStudio() {
  return (
    <section className="bg-bg py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <Reveal>
            <div className="group relative h-[420px] overflow-hidden rounded-3xl border border-border bg-fg/5 shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80"
                alt="Studio editorial shoot"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-white">
                Studio Archive
              </div>
            </div>
          </Reveal>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Studio process
            </p>
            <h2 className="font-accent text-4xl leading-tight">
              Designed in chapters — each drop is a controlled study of form and light.
            </h2>
            <p className="text-sm text-muted">
              We develop capsule stories with a single silhouette at the center, then
              build the range in strict palette, textile weight, and finish. Every
              detail is tuned to look intentional on camera and on the street.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-fg/5 p-4 text-center transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-display tracking-[0.2em]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
