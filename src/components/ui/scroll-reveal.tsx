import React from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  as: Component = "div",
  className,
  ...props
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold,
    rootMargin,
    delay,
  });

  return (
    <Component
      ref={ref}
      className={cn(
        "opacity-0 translate-y-8 transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}