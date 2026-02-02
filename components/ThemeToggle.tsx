"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, themeOptions } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {themeOptions.map((option) => (
        <Button
          key={option.value}
          type="button"
          aria-label={`Set theme ${option.label}`}
          variant={theme === option.value ? "accent" : "outline"}
          size="sm"
          className={cn(
            "h-8 rounded-full px-3 text-[10px] tracking-[0.2em]",
            theme === option.value && "text-black"
          )}
          onClick={() => setTheme(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
