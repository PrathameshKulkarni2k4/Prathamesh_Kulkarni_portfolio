"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TooltipItem = {
  id: number;
  name: string;
  designation: string;
  href: string;
  icon: React.ReactNode;
};

export const AnimatedTooltip = ({ items }: { items: TooltipItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  return (
    <div className="flex items-center gap-3">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="group relative"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={(e) => {
            const halfWidth = e.currentTarget.offsetWidth / 2;
            x.set(e.nativeEvent.offsetX - halfWidth);
          }}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ translateX: x, rotate }}
                className="absolute -top-14 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center whitespace-nowrap rounded-md bg-black/90 px-3 py-1.5 text-xs shadow-xl ring-1 ring-white/10"
              >
                <div className="absolute inset-x-6 -bottom-px z-30 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                <div className="relative z-30 text-xs font-semibold text-white">
                  {item.name}
                </div>
                <div className="text-[10px] text-slate-400">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition-all duration-300",
              "group-hover:-translate-y-1 group-hover:border-indigo-400/50 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(99,102,241,0.5)]"
            )}
          >
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
};
