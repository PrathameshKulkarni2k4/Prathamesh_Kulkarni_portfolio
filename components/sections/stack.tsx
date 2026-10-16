"use client";
import React from "react";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/lib/data";

export const Stack = () => {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="03">Stack</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#ededed] sm:text-4xl">
            The tools I reach for.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="h-full bg-ink p-7">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {g.title}
                  </h3>
                  <span className="font-mono text-[11px] text-faint">
                    {String(g.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted transition-colors duration-300 hover:text-[#ededed]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
