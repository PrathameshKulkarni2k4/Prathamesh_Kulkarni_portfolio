"use client";
import React from "react";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { timeline } from "@/lib/data";

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="04">Experience &amp; education</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#ededed] sm:text-4xl">
            Where I&apos;ve worked and studied.
          </h2>
        </Reveal>

        <div className="mt-14">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.04}>
              <div className="group grid gap-4 border-t border-line py-7 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-faint">
                    {t.period}
                  </span>
                </div>
                <div className="md:col-span-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                    {t.label ?? (t.kind === "work" ? "Internship" : "Education")}
                  </span>
                  <h3 className="mt-1.5 text-base font-medium text-[#ededed]">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{t.org}</p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm leading-relaxed text-muted">
                    {t.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
};
