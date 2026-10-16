import React from "react";
import { cn } from "@/lib/utils";

export const SectionLabel = ({
  index,
  children,
  className,
}: {
  index: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-faint",
        className
      )}
    >
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" />
      <span>{children}</span>
    </div>
  );
};
