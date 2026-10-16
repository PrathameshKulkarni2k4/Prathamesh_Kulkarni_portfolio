"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Wrench, BrainCircuit } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  layers: Layers,
  wrench: Wrench,
  brain: BrainCircuit,
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Technical skills"
          title={
            <>
              A toolkit for{" "}
              <span className="gradient-text">modern systems</span>
            </>
          }
          subtitle="From DSA fundamentals in Java & C++ to production MERN apps and ML pipelines in Python."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <CardSpotlight className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 text-indigo-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-indigo-400/40 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
