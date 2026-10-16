"use client";
import React from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { profile } from "@/lib/data";

const socials = [
  { name: "GitHub", href: profile.github },
  { name: "LinkedIn", href: profile.linkedin },
  { name: "LeetCode", href: profile.leetcode },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="05">Contact</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#ededed]">
                Let&apos;s talk about{" "}
                <span className="font-serif italic text-accent">
                  what you&apos;re building
                </span>
                .
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                I&apos;m looking for an SDE or full-stack role where I can own
                real parts of a product. If that sounds like a fit, the fastest
                way to reach me is email — I reply to everything.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Magnetic strength={0.2}>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#ededed] px-5 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white"
                  >
                    {profile.email}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Magnetic>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-[#ededed] transition-colors duration-300 hover:border-white/25 hover:bg-surface"
                >
                  Download resume
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <dl className="divide-y divide-line border-y border-line">
                <div className="flex items-center gap-4 py-4">
                  <Mail className="h-4 w-4 shrink-0 text-faint" />
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">
                      Email
                    </dt>
                    <dd className="mt-0.5 text-sm text-[#ededed]">
                      <a
                        href={`mailto:${profile.email}`}
                        className="link-underline"
                      >
                        {profile.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-4">
                  <Phone className="h-4 w-4 shrink-0 text-faint" />
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">
                      Phone
                    </dt>
                    <dd className="mt-0.5 text-sm text-[#ededed]">
                      <a
                        href={`tel:${profile.phone.replace(/\s/g, "")}`}
                        className="link-underline"
                      >
                        {profile.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-4">
                  <MapPin className="h-4 w-4 shrink-0 text-faint" />
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">
                      Location
                    </dt>
                    <dd className="mt-0.5 text-sm text-[#ededed]">
                      {profile.location}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors duration-300 hover:text-[#ededed]"
                  >
                    <span className="link-underline">{s.name}</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
