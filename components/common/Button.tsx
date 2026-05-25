"use client";

import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LUXURY_EASE } from "@/lib/constants";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "ochre";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#112211] rounded-md text-[#F9FBF9] hover:bg-[#1a331a] border border-[#112211] hover:border-[#1a331a]",
  secondary:
    "bg-[#2D3748] rounded-md text-[#F9FBF9] hover:bg-[#3d4a5c] border border-[#2D3748]",
  ghost:
    "bg-transparent rounded-md text-[#112211] hover:bg-[#112211]/5 border border-transparent",
  outline:
    "bg-transparent rounded-md text-[#112211] border border-[#112211]/30 hover:border-[#112211] hover:bg-[#112211]/5",
  ochre:
    "bg-[#B08D57] rounded-md text-[#F9FBF9] hover:bg-[#9a7a47] border border-[#B08D57] hover:border-[#9a7a47]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-widest",
  md: "px-6 py-3 text-xs tracking-widest",
  lg: "px-8 py-4 text-sm tracking-widest",
  xl: "px-10 py-5 text-sm tracking-widest",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = "right",
  className,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      whileHover={isDisabled ? {} : { scale: 1.02 }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: LUXURY_EASE }}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-light uppercase tracking-widest transition-colors duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#112211]/40 focus-visible:ring-offset-2",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      disabled={isDisabled}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {!loading && icon && iconPosition === "left" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === "right" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </motion.button>
  );
}














