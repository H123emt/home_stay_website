import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-none",
};

export default function Container({
  children,
  size = "lg",
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}