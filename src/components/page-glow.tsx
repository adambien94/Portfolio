"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getProjectById } from "@/data/projects";

const DEFAULT_GLOW = "#ffbe25";

export function PageGlow() {
  const pathname = usePathname();

  useEffect(() => {
    const match = pathname.match(/^\/projects\/([^/]+)$/);
    const color = match
      ? (getProjectById(match[1])?.accent ?? DEFAULT_GLOW)
      : DEFAULT_GLOW;

    document.documentElement.style.setProperty("--page-glow", color);
  }, [pathname]);

  return null;
}
