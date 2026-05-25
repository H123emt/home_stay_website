import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface SectionTitleProps {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionTitleProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn("flex flex-col gap-4", alignClasses[align], className)}>
      {eyebrow && (
        <ScrollReveal delay={0} direction="up" blur>
          <span
            className={cn(
              "inline-block text-[10px] font-medium uppercase tracking-[0.3em]",
              light ? "text-[#F9FBF9]/50" : "text-[#6B7A52]"
            )}
          >
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1} direction="up" blur>
        <h2
          className={cn(
            "font-serif font-light leading-[1.1]",
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
            light ? "text-[#F9FBF9]" : "text-[#112211]"
          )}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2} direction="up" blur>
          <p
            className={cn(
              "max-w-xl font-medium leading-relaxed text-base",
              light ? "text-[#F9FBF9]/60" : "text-[#2D3748]/80"
            )}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}