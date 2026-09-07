import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-forest pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={twMerge(
            clsx(
              "flex h-12 w-full rounded-wf-md border-wf border-forest bg-surface px-4 py-2 text-sm font-body text-forest placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-terra focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              icon ? "pl-10" : "",
              className
            )
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";
