"use client";

import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  light?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, light = false, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-[14px] font-medium  tracking-[0.2em]",
              light ? "text-[#F9FBF9]" : "text-[#081008]"
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full border-b bg-transparent py-3 text-sm font-light transition-colors duration-300",
            "placeholder:text-current/30 focus:outline-none",
            light
              ? "border-[#F9FBF9]/20 text-[#F9FBF9] focus:border-[#F9FBF9]/60"
              : "border-[#112211]/20 text-[#112211] focus:border-[#112211]",
            error &&
              (light ? "border-red-300" : "border-red-400"),
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs font-light text-red-500">{error}</p>
        )}
        {!error && hint && (
          <p
            className={cn(
              "text-xs font-light",
              light ? "text-[#F9FBF9]/40" : "text-[#112211]/40"
            )}
          >
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;