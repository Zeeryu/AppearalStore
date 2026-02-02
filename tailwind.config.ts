import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
        frame: "var(--frame)",
        frameFg: "var(--frame-fg)",
        glow: "var(--glow)",
      },
      borderRadius: {
        frame: "24px",
      },
      boxShadow: {
        glow: "0 0 32px rgba(163, 255, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
