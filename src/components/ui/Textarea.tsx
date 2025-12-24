"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-charcoal mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          className={cn(
            "w-full px-4 py-3 border border-silver/50 rounded-md bg-white min-h-[120px] resize-y",
            "focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none",
            "transition-colors duration-200",
            "placeholder:text-silver",
            error && "border-burgundy focus:border-burgundy focus:ring-burgundy/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-burgundy">{error}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
