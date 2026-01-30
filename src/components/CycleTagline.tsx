"use client";

import { useState, useEffect, cloneElement, isValidElement, type ReactNode } from "react";

export default function CycleTagline({
  lineA,
  lineB,
  durationA = 6000,
  durationB = 4000,
  className = "",
}: {
  lineA: ReactNode;
  lineB: ReactNode;
  durationA?: number;
  durationB?: number;
  className?: string;
}) {
  const [showA, setShowA] = useState(true);
  const [lineAKey, setLineAKey] = useState(0);

  useEffect(() => {
    const duration = showA ? durationA : durationB;
    const t = setTimeout(() => {
      if (!showA) setLineAKey((k) => k + 1);
      setShowA((prev) => !prev);
    }, duration);
    return () => clearTimeout(t);
  }, [showA, durationA, durationB]);

  const lineAWithKey = isValidElement(lineA)
    ? cloneElement(lineA as React.ReactElement<{ key?: number }>, { key: lineAKey })
    : lineA;

  return (
    <p
      className={`relative min-h-[2.5em] overflow-hidden ${className}`}
      aria-live="polite"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
          showA
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-0.4em] pointer-events-none"
        }`}
        aria-hidden={!showA}
      >
        {lineAWithKey}
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
          !showA
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[0.4em] pointer-events-none"
        }`}
        aria-hidden={showA}
      >
        {lineB}
      </span>
    </p>
  );
}
