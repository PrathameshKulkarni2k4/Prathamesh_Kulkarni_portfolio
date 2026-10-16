import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-6xl grid-cols-1 gap-4 md:auto-rows-[19rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-white/10 bg-[#151525]/60 p-5 shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-md transition duration-300 hover:border-indigo-400/40 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.35)]",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <div className="mb-1 mt-2 font-sans font-semibold text-slate-100">
          {title}
        </div>
        <div className="font-sans text-sm font-normal leading-relaxed text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
};
