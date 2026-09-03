"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex size-9 items-center justify-center rounded-lg border border-border bg-foreground/[0.03] text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
      aria-label={theme === "dark" ? "Włącz jasny motyw" : "Włącz ciemny motyw"}
    >
      {theme === "dark" ? (
        <Sun className="size-4" aria-hidden />
      ) : (
        <Moon className="size-4" aria-hidden />
      )}
    </button>
  );
}
