import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "forest" | "wash";
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "surface", interactive = false, children, ...props }, ref) => {
    const baseStyles = "rounded-wf-lg border-wf border-forest p-6 transition-all duration-wf shadow-wf";
    
    const variantStyles = {
      surface: "bg-surface text-forest",
      forest: "bg-forest text-ink-inv border-forest",
      wash: "bg-ground-2 text-forest",
    };

    const interactiveStyles = interactive ? "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-wf-lg cursor-pointer" : "";

    return (
      <div
        ref={ref}
        className={twMerge(clsx(baseStyles, variantStyles[variant], interactiveStyles, className))}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
