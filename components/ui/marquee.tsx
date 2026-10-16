"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Marquee = ({
  items,
  className,
  duration = 42,
  reverse = false,
}: {
  items: string[];
  className?: string;
  duration?: number;
  reverse?: boolean;
}) => {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden mask-fade-x",
        className
      )}
    >
      <div
        className="flex shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
        style={
          {
            "--duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-muted"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-line" />
          </span>
        ))}
      </div>
    </div>
  );
};
