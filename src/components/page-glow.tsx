"use client";

import { useEffect } from "react";

export function PageGlow({ color }: { color: string }) {
  useEffect(() => {
    document.documentElement.style.setProperty("--page-glow", color);

    return () => {
      document.documentElement.style.removeProperty("--page-glow");
    };
  }, [color]);

  return null;
}
