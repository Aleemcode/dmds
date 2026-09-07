import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Drawer = DialogPrimitive.Root;
export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerClose = DialogPrimitive.Close;

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-forest/50 backdrop-blur-sm transition-opacity duration-wf" />
    <DialogPrimitive.Content
      ref={ref}
      className={twMerge(
        clsx(
          "fixed bottom-0 left-0 right-0 z-50 flex flex-col border-t-wf border-x-wf border-forest bg-surface p-6 rounded-t-wf-xl shadow-[0_-4px_0_var(--wf-border)] max-h-[85vh] overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]",
          className
        )
      )}
      {...props}
    >
      <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-forest/30 cursor-grab" />
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
DrawerContent.displayName = "DrawerContent";
