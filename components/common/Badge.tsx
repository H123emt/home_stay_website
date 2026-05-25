import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "moss" | "ochre" | "dark" | "light";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-[#112211]/8 text-[#112211] border-[#112211]/15",
  moss: "bg-[#6B7A52]/10 text-[#6B7A52] border-[#6B7A52]/20",
  ochre: "bg-[#B08D57]/10 text-[#B08D57] border-[#B08D57]/20",
  dark: "bg-[#112211] text-[#F9FBF9] border-[#112211]",
  light: "bg-[#F9FBF9]/10 text-[#F9FBF9] border-[#F9FBF9]/20",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block border px-3 py-1 text-[10px] font-light uppercase tracking-[0.25em]",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}