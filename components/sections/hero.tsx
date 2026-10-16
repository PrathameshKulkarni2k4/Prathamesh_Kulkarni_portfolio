"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Magnetic } from "@/components/ui/magnetic";
import { profile, proof, techStack } from "@/lib/data";
import { avatar } from "@/lib/avatar";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-16"
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-70 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.07), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-16 pt-20">
        {/* current role */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 flex items-center gap-3"
        >
          <img
            src={avatar}
            alt="Prathamesh Kulkarni"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-line object-cover"
          />
          <span className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {profile.currentRole} at {profile.currentCompany}
            </span>
          </span>
        </motion.div>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="max-w-4xl text-balance text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[#ededed]"
        >
          {profile.name}
        </motion.h1>

        {/* role + pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="mt-6 max-w-2xl"
        >
          <p className="text-lg text-muted sm:text-xl">
            <span className="font-mono text-sm uppercase tracking-wider text-faint">
              {profile.role}
            </span>
            <br />
            <span className="mt-2 inline-block text-balance text-[#ededed]">
              I build full-stack products with the MERN stack — and add machine
              learning{" "}
              <span className="font-serif italic text-accent">
                where it earns its place
              </span>
              .
            </span>
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Magnetic strength={0.2}>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#ededed] px-5 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white"
            >
              Download resume
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-[#ededed] transition-colors duration-300 hover:border-white/25 hover:bg-surface"
          >
            <Mail className="h-4 w-4" />
            Email me
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-2 py-3 text-sm text-muted transition-colors duration-300 hover:text-[#ededed]"
          >
            See selected work
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        {/* proof strip */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4"
        >
          {proof.map((p) => (
            <div key={p.label} className="bg-ink px-5 py-4">
              <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">
                {p.label}
              </dt>
              <dd className="mt-1.5 text-xl font-medium tracking-tight text-[#ededed]">
                {p.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* tech marquee */}
      <div className="relative z-10 border-t border-line py-4">
        <Marquee items={techStack} duration={48} />
      </div>
    </section>
  );
};
