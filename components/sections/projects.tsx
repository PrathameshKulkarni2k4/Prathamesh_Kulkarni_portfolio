"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Featured projects"
          title={
            <>
              Things I&apos;ve <span className="gradient-text">built &amp; shipped</span>
            </>
          }
          subtitle="Recent work across full-stack web, applied ML and generative AI — most of it live on Vercel."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className={cn(i === 0 && "md:col-span-2")}
            >
              <CardSpotlight className="group h-full p-6 sm:p-7">
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-70",
                    p.accent
                  )}
                />
                <div
                  className={cn(
                    "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30",
                    p.accent
                  )}
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-indigo-300/80">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                      {p.title}
                    </h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} source code`}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} live demo`}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-cyan-400/50 hover:text-white"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>

                <ul
                  className={cn(
                    "mt-5 grid gap-2",
                    i === 0 ? "sm:grid-cols-3" : ""
                  )}
                >
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-slate-400"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/PrathameshKulkarni2k4?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-indigo-400/50 hover:bg-white/[0.08]"
          >
            <Github className="h-4 w-4" />
            Browse all repositories
          </a>
        </div>
      </div>
    </section>
  );
};
