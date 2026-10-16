"use client";
import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/data";

export const Work = () => {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="01">Selected work</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#ededed] sm:text-4xl">
            Things I&apos;ve built, and what they actually do.
          </h2>
        </Reveal>

        <div className="mt-14">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <article className="group border-t border-line py-8 transition-colors duration-500 hover:bg-surface/50 sm:py-10">
                <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                  {/* index */}
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-faint">
                      {p.index}
                    </span>
                  </div>

                  {/* title block */}
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-medium tracking-[-0.01em] text-[#ededed] transition-colors duration-300 group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-faint">
                      {p.category}
                      <span className="mx-2 text-line">/</span>
                      {p.year}
                    </p>
                  </div>

                  {/* detail */}
                  <div className="md:col-span-5">
                    <p className="text-sm leading-relaxed text-muted">
                      {p.summary}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {p.outcomes.map((o) => (
                        <li
                          key={o}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-px w-3 shrink-0 bg-faint" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* links + stack */}
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors duration-300 hover:border-white/25 hover:text-[#ededed]"
                        >
                          Live
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.title} on GitHub`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors duration-300 hover:border-white/25 hover:text-[#ededed]"
                        >
                          Code
                          <Github className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <p className="mt-4 font-mono text-[11px] leading-relaxed text-faint md:text-right">
                      {p.stack.join(" · ")}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>

        <Reveal delay={0.1}>
          <a
            href="https://github.com/PrathameshKulkarni2k4?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors duration-300 hover:text-[#ededed]"
          >
            <span className="link-underline">All repositories</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
