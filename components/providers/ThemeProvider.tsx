"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ThemeName } from "@/lib/theme";
import { themes } from "@/lib/theme";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themeOptions: { label: string; value: ThemeName }[];
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_KEY = "appearal-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("noir");

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_KEY) as ThemeName | null;
    if (stored && themes[stored]) {
      setThemeState(stored);
    }
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((next: ThemeName) => {
    setThemeState(next);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      themeOptions: [
        { label: "NOIR", value: "noir" },
        { label: "NEON", value: "neon" },
        { label: "SAND", value: "sand" },
      ],
    }),
    [theme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
