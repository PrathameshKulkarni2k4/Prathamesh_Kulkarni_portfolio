"use client";
import React from "react";
import { Github, Linkedin, Code2, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#07071a]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-2.5 sm:justify-start">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs font-bold text-white">
              PK
            </span>
            <span className="text-sm font-semibold text-slate-100">
              {profile.name}
            </span>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Built with Next.js, Tailwind CSS &amp; Framer Motion — in the spirit
            of Aceternity UI.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-indigo-400/50 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-indigo-400/50 hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-indigo-400/50 hover:text-white"
          >
            <Code2 className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-indigo-400/50 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
