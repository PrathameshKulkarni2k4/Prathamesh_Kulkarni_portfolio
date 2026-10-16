"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  Mail,
  Phone,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { profile } from "@/lib/data";

const socials = [
  {
    id: 1,
    name: "GitHub",
    designation: "@PrathameshKulkarni2k4",
    href: profile.github,
    icon: <Github className="h-5 w-5" />,
  },
  {
    id: 2,
    name: "LinkedIn",
    designation: "in/prathameshkulkarni2k4",
    href: profile.linkedin,
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    id: 3,
    name: "LeetCode",
    designation: "200+ solved",
    href: profile.leetcode,
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    id: 4,
    name: "Email",
    designation: "prathameshkulkarni22092004",
    href: `mailto:${profile.email}`,
    icon: <Mail className="h-5 w-5" />,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <BackgroundBeams className="opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-indigo-300"
        >
          Get in touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Let&apos;s build something{" "}
          <span className="gradient-text">worth shipping</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400"
        >
          I&apos;m open to SDE, full-stack and AI-focused roles, internships and
          collaborations. My inbox is always open — I&apos;ll get back to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-6px_rgba(99,102,241,0.8)] transition-transform hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" />
            Email me
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-indigo-400/50 hover:bg-white/[0.08]"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/50 hover:bg-white/[0.08]"
          >
            Resume
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <AnimatedTooltip items={socials} />
        </motion.div>

        <p className="mt-8 font-mono text-sm text-slate-500">
          {profile.email}
        </p>
      </div>
    </section>
  );
};
