"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Network,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, highlights } from "@/lib/data";

const icons = [Trophy, Network, Sparkles, Briefcase];

export const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dot opacity-[0.35]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Engineering meets{" "}
              <span className="gradient-text">intelligence</span>
            </>
          }
          subtitle="A final-year CS student who likes building things that ship — and then making them smarter."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <p className="text-base leading-relaxed text-slate-400">
              {profile.bio}
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-100">
                  DKTE Society&apos;s Textile &amp; Engineering Institute
                </div>
                <div className="text-xs text-slate-500">
                  B.Tech CSE · 2022 — 2026 · CGPA 8.74
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <BentoGrid className="md:auto-rows-[13rem] md:grid-cols-2">
              {highlights.map((h, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                  >
                    <BentoGridItem
                      title={h.title}
                      description={h.body}
                      icon={
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-400/25 bg-indigo-500/10 text-indigo-300">
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                      }
                      className="h-full"
                    />
                  </motion.div>
                );
              })}
            </BentoGrid>
          </div>
        </div>
      </div>
    </section>
  );
};
