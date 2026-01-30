"use client";

import { useState, useEffect, useRef } from "react";

const GLITCH_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789./*-";

function randomChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
}

function getGlitchableIndices(text: string): number[] {
  const indices: number[] = [];
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c !== " " && c !== "·") indices.push(i);
  }
  return indices;
}

/** Fisher–Yates shuffle so every index has equal chance of being picked. */
function pickRandomIndices(indices: number[], count: number): number[] {
  const arr = [...indices];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

function buildGlitched(text: string, toGlitch: number[]): string {
  return text
    .split("")
    .map((char, i) => (toGlitch.includes(i) ? randomChar() : char))
    .join("");
}

export default function GlitchText({
  text,
  className = "",
  intervalMs = 2500,
  glitchDurationMs = 800,
  glitchTickMs = 250,
  glitchCount = 4,
}: {
  text: string;
  className?: string;
  intervalMs?: number;
  glitchDurationMs?: number;
  glitchTickMs?: number;
  glitchCount?: number;
}) {
  const [display, setDisplay] = useState(text);
  const indicesRef = useRef<number[]>([]);
  const glitchIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const restoreTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    indicesRef.current = getGlitchableIndices(text);
  }, [text]);

  useEffect(() => {
    if (indicesRef.current.length === 0) return;

    const trigger = () => {
      const indices = indicesRef.current;
      const count = Math.min(glitchCount, Math.floor(indices.length * 0.4) || 1);
      const toGlitch = pickRandomIndices(indices, count);

      const clearGlitch = () => {
        if (glitchIntervalRef.current) {
          clearInterval(glitchIntervalRef.current);
          glitchIntervalRef.current = null;
        }
        if (restoreTimeoutRef.current) {
          clearTimeout(restoreTimeoutRef.current);
          restoreTimeoutRef.current = null;
        }
        setDisplay(text);
      };

      glitchIntervalRef.current = setInterval(() => {
        setDisplay(buildGlitched(text, toGlitch));
      }, glitchTickMs);

      restoreTimeoutRef.current = setTimeout(clearGlitch, glitchDurationMs);
    };

    const id = setInterval(trigger, intervalMs);
    return () => {
      clearInterval(id);
      if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current);
      if (restoreTimeoutRef.current) clearTimeout(restoreTimeoutRef.current);
    };
  }, [text, intervalMs, glitchDurationMs, glitchTickMs, glitchCount]);

  return <span className={className}>{display}</span>;
}
