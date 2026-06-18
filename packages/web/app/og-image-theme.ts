export const OG_SIZE = { width: 1200, height: 630 } as const

export const OG_PALETTE = {
  surfaceBase: "#0a0c0b",
  cardBase: "#0E1411",
  brandCore: "#22c55e",
  brandMid: "#16a34a",
  brandOuter: "#15803d",
  textPrimary: "#ffffff",
  textSecondary: "#b8c2bc",
  textSoft: "#dcfce7",
  textMuted: "rgba(255, 255, 255, 0.74)",
  accentCyan: "#4ade80",
  accentGlow: "#86efac",
  border: "rgba(255, 255, 255, 0.08)",
} as const

export const OG_GRADIENTS = {
  base: `radial-gradient(120% 100% at 60% 65%, ${OG_PALETTE.brandCore} 0%, ${OG_PALETTE.brandMid} 35%, ${OG_PALETTE.brandOuter} 70%, ${OG_PALETTE.surfaceBase} 100%)`,
  beam:
    "radial-gradient(55% 55% at 38% -8%, rgba(134,239,172,0.55) 0%, rgba(74,222,128,0.22) 35%, rgba(255,255,255,0) 65%), " +
    "radial-gradient(32% 28% at 55% -5%, rgba(134,239,172,0.38) 0%, rgba(255,255,255,0) 70%)",
  sheen:
    "linear-gradient(118deg, transparent 18%, rgba(134,239,172,0.16) 26%, rgba(134,239,172,0.30) 30%, rgba(134,239,172,0.12) 35%, transparent 45%), " +
    "linear-gradient(112deg, transparent 8%, rgba(74,222,128,0.12) 15%, transparent 28%)",
  pools:
    "radial-gradient(55% 50% at 8% 95%, rgba(34,197,94,0.26), transparent 70%), " +
    "radial-gradient(45% 45% at 95% 40%, rgba(134,239,172,0.20), transparent 70%)",
} as const
