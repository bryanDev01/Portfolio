"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal — wraps existing content and fades/slides it in the first time it
 * enters the viewport. Purely additive: it never re-renders children and
 * respects prefers-reduced-motion via Tailwind's motion-reduce utilities.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 motion-reduce:opacity-100 motion-reduce:translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
