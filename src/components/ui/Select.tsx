"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
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
        <select
          id={id}
          className={cn(
            "w-full px-4 py-3 border border-silver/50 rounded-md bg-white",
            "focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none",
            "transition-colors duration-200",
            "text-charcoal",
            error && "border-burgundy focus:border-burgundy focus:ring-burgundy/20",
            className
          )}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-burgundy">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
