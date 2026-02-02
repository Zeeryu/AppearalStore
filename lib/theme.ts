export const themes = {
  noir: {
    label: "NOIR",
    description: "Off-white base, acid accent, deep frame.",
  },
  neon: {
    label: "NEON",
    description: "Midnight base, neon magenta accent.",
  },
  sand: {
    label: "SAND",
    description: "Warm paper base, clay accent.",
  },
} as const;

export type ThemeName = keyof typeof themes;
