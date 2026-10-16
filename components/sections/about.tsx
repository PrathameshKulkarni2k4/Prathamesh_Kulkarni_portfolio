"use client";
import React from "react";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { beyond, profile } from "@/lib/data";

const facts = [
  {
    k: "Currently",
    v: `${profile.currentRole} at ${profile.currentCompany}`,
  },
  { k: "Based in", v: profile.location },
  {
    k: "Education",
    v: "B.Tech CSE, DKTE Society's Textile & Engineering Institute (2022 — 2026)",
  },
  { k: "Focus", v: "Full-stack engineering, applied ML & Generative AI" },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel index="02">About</SectionLabel>
              <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#ededed] sm:text-4xl">
                Strong fundamentals,{" "}
                <span className="font-serif italic text-accent">
                  shipped software
                </span>
                .
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                {profile.intro}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                My foundation is data structures and algorithms in Java and C++,
                which is what I lean on when a system gets complicated. From
                there I build outward: typed APIs, real-time data, and interfaces
                that don&apos;t get in the way. I&apos;m most useful on the parts
                of a product that have to be correct, not just pretty.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <dl className="divide-y divide-line border-y border-line">
                {facts.map((f) => (
                  <div
                    key={f.k}
                    className="grid grid-cols-3 gap-6 py-4"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">
                      {f.k}
                    </dt>
                    <dd className="col-span-2 text-sm leading-relaxed text-[#ededed]">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8">
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  Beyond the code
                </p>
                <ul className="mt-3 space-y-2">
                  {beyond.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
