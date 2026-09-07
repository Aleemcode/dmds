import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { Check, Warning, X, Info } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={twMerge(
      "fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-4 sm:right-4 sm:top-auto sm:flex-col sm:max-w-[420px] gap-3 pointer-events-none",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

export interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  variant?: "success" | "caution" | "error" | "info";
  title?: string;
  code?: string;
  description: string;
}

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, variant = "success", title, code, description, ...props }, ref) => {
  const configs = {
    success: {
      defaultTitle: "SUCCESS",
      defaultCode: "#1BC67F",
      icon: <Check weight="bold" className="w-4 h-4 text-green-dark" />,
      bg: "bg-[#E1F8EC]",
      textColor: "text-[#006634]",
    },
    caution: {
      defaultTitle: "CAUTION",
      defaultCode: "#D97706",
      icon: <Warning weight="bold" className="w-4 h-4 text-[#916100]" />,
      bg: "bg-[#FFF8E8]",
      textColor: "text-[#916100]",
    },
    error: {
      defaultTitle: "ERROR",
      defaultCode: "#E11D48",
      icon: <X weight="bold" className="w-4 h-4 text-[#9F1239]" />,
      bg: "bg-[#FFEBE1]",
      textColor: "text-[#9F1239]",
    },
    info: {
      defaultTitle: "INFO",
      defaultCode: "#3B86FE",
      icon: <Info weight="bold" className="w-4 h-4 text-pine" />,
      bg: "bg-[#EEF4FF]",
      textColor: "text-pine",
    },
  };

  const c = configs[variant];

  return (
    <ToastPrimitive.Root
      ref={ref}
      className={twMerge(
        clsx(
          "pointer-events-auto relative flex w-full flex-col gap-1.5 overflow-hidden rounded-wf-lg border-wf border-forest p-4 shadow-wf transition-all duration-wf data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full sm:data-[state=open]:slide-in-from-bottom-full",
          c.bg,
          className
        )
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className={clsx("flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase", c.textColor)}>
          {c.icon}
          <span>{title || c.defaultTitle}</span>
          <span className="opacity-40">·</span>
          <span className="font-mono text-[11px] opacity-80">{code || c.defaultCode}</span>
        </div>
        <ToastPrimitive.Close className="text-forest/60 hover:text-forest transition-colors p-0.5">
          <X weight="bold" className="w-4 h-4" />
        </ToastPrimitive.Close>
      </div>
      <ToastPrimitive.Description className="font-body text-sm text-forest leading-relaxed font-normal">
        {description}
      </ToastPrimitive.Description>
    </ToastPrimitive.Root>
  );
});
Toast.displayName = ToastPrimitive.Root.displayName;
