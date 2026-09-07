import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "forest" | "gold" | "green" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-display font-bold rounded-wf-pill border-wf border-forest cursor-pointer select-none transition-all duration-wf active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_var(--wf-border)] disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary: "bg-terra text-white shadow-wf hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-wf-lg",
      secondary: "bg-surface text-forest shadow-wf hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-wf-lg",
      forest: "bg-forest text-white shadow-wf hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-wf-lg",
      gold: "bg-gold text-forest shadow-wf hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-wf-lg",
      green: "bg-green text-white shadow-wf hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-wf-lg",
      outline: "bg-transparent text-forest border-wf border-forest hover:bg-ground-2",
    };

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs shadow-wf-sm",
      md: "px-6 py-3 text-sm shadow-wf",
      lg: "px-8 py-4 text-base shadow-wf-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(clsx(baseStyles, variantStyles[variant], sizeStyles[size], className))}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
