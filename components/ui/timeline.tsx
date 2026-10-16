"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const Timeline = ({
  data,
}: {
  data: {
    title: string;
    subtitle: string;
    period: string;
    points: string[];
    kind: "work" | "education";
  }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl pb-8">
      {/* rail */}
      <div className="absolute left-3 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-400 md:left-1/2 md:-translate-x-1/2"
      />

      <div className="space-y-12">
        {data.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className={cn(
                "relative pl-12 md:w-1/2 md:pl-0",
                isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              )}
            >
              {/* node */}
              <span
                className={cn(
                  "absolute left-[7px] top-2 z-10 h-3.5 w-3.5 rounded-full border-2 border-[#05050f] md:left-auto",
                  item.kind === "work"
                    ? "bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]"
                    : "bg-indigo-500 shadow-[0_0_16px_rgba(99,102,241,0.9)]",
                  isLeft
                    ? "md:-right-[7px]"
                    : "md:-left-[7px]"
                )}
              />
              <span
                className={cn(
                  "inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-400",
                )}
              >
                {item.period}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-indigo-300/90">
                {item.subtitle}
              </p>
              <ul
                className={cn(
                  "mt-2 space-y-1 text-sm text-slate-400",
                  isLeft && "md:text-right"
                )}
              >
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
