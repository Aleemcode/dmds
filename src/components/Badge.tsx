import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "terra" | "green" | "gold" | "blue" | "lime" | "sky" | "pink" | "peach";
  dot?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", dot = false, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-wf-pill border-wf-thin border-forest select-none";

    const variantStyles = {
      default: "bg-surface text-forest",
      terra: "bg-terra-tint text-terra-deep",
      green: "bg-green-tint text-green-dark",
      gold: "bg-gold-tint text-gold-dark",
      blue: "bg-blue-tint text-pine",
      lime: "bg-chip-lime text-green-dark",
      sky: "bg-chip-sky text-pine",
      pink: "bg-chip-pink text-forest",
      peach: "bg-chip-peach text-terra-deep",
    };

    return (
      <span ref={ref} className={twMerge(clsx(baseStyles, variantStyles[variant], className))} {...props}>
        {dot && <span className="w-2 h-2 rounded-full bg-current animate-pulse" />}
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";
