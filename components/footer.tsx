"use client";
import React from "react";
import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
          Next.js · Tailwind · Framer Motion
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors duration-300 hover:text-[#ededed]"
        >
          Back to top
          <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
};
