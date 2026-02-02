"use client";

import { useRouter } from "next/navigation";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function AboutCta() {
  const router = useRouter();

  return (
    <section className="bg-bg pb-20 pt-4">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-fg/5 via-fg/10 to-transparent p-10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Limited access
              </p>
              <h3 className="mt-3 max-w-xl font-accent text-4xl leading-tight">
                Step into the studio archive and shop the current drop.
              </h3>
            </div>
            <MagneticButton
              aria-label="View the shop"
              onClick={() => router.push("/shop")}
            >
              View the shop
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
