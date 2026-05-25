import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  light?: boolean;
  className?: string;
  label?: string;
}

const sizeMap = {
  sm: "w-5 h-5",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export default function Loader({
  size = "md",
  light = false,
  className,
  label,
}: LoaderProps) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center gap-4", className)}
      role="status"
      aria-label={label ?? "Loading"}
    >
      <div className={cn("relative", sizeMap[size])}>
        <span
          className={cn(
            "absolute inset-0 rounded-full border animate-spin",
            light
              ? "border-[#F9FBF9]/20 border-t-[#F9FBF9]/80"
              : "border-[#112211]/10 border-t-[#112211]/70"
          )}
          style={{ animationDuration: "1.2s" }}
        />
        <span
          className={cn(
            "absolute inset-1.5 rounded-full border animate-spin",
            light
              ? "border-[#F9FBF9]/10 border-t-[#B08D57]/60"
              : "border-[#112211]/5 border-t-[#B08D57]/60"
          )}
          style={{ animationDuration: "0.8s", animationDirection: "reverse" }}
        />
      </div>
      {label && (
        <span
          className={cn(
            "text-[10px] font-light uppercase tracking-[0.25em]",
            light ? "text-[#F9FBF9]/40" : "text-[#112211]/40"
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}