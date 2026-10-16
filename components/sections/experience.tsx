"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { timeline } from "@/lib/data";

export const Experience = () => {
  const work = timeline.filter((t) => t.kind === "work").length;
  const edu = timeline.filter((t) => t.kind === "education").length;

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dot opacity-[0.3]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Experience & education"
          title={
            <>
              The path so <span className="gradient-text">far</span>
            </>
          }
          subtitle="Internships, certifications and the academic record behind the code."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            <Briefcase className="h-4 w-4 text-cyan-400" />
            {work} internships
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            <GraduationCap className="h-4 w-4 text-indigo-400" />
            {edu} academic milestones
          </span>
        </motion.div>

        <Timeline data={timeline} />
      </div>
    </section>
  );
};
