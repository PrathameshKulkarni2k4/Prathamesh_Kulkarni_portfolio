"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { Meteors } from "@/components/ui/meteors";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { profile, stats, techStack } from "@/lib/data";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#8b5cf6" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-indigo-600/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <Meteors number={14} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to SDE / Full-Stack & AI roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Prathamesh Kulkarni</span>
          <br />
          <span className="text-slate-400">I build scalable web &amp; AI systems.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          B.Tech CSE &apos;26 at DKTE, GATE 2025 qualified. I turn strong
          DSA fundamentals and the MERN stack into real-world products — and
          wire in machine learning and Generative AI where it actually helps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-6px_rgba(99,102,241,0.8)] transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-indigo-400/50 hover:bg-white/[0.08]"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <span className="inline-flex items-center gap-2 px-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </span>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* code card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d1c]/80 font-mono text-xs shadow-2xl backdrop-blur-md sm:text-sm"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 flex items-center gap-1.5 text-slate-500">
              <Terminal className="h-3.5 w-3.5" /> profile.ts
            </span>
          </div>
          <pre className="overflow-x-auto p-4 leading-relaxed">
            <code>
              <span className="text-violet-400">const</span>{" "}
              <span className="text-sky-300">profile</span>{" "}
              <span className="text-slate-500">=</span> {"{"}
              {"\n"}  name: <span className="text-emerald-300">&apos;Prathamesh&apos;</span>,
              {"\n"}  stack: [<span className="text-emerald-300">&apos;MERN&apos;</span>,{" "}
              <span className="text-emerald-300">&apos;GenAI&apos;</span>],
              {"\n"}  focus: <span className="text-emerald-300">&apos;Real-world Systems&apos;</span>,
              {"\n"}  hireable: <span className="text-amber-300">true</span>,
              {"\n"}
              {"}"}
            </code>
          </pre>
        </motion.div>
      </div>

      {/* tech marquee */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#05050f]/60 py-3 backdrop-blur-sm">
        <InfiniteMovingCards
          items={techStack.map((t) => ({ name: t }))}
          speed="slow"
          className="mx-auto"
        />
      </div>
    </section>
  );
};
