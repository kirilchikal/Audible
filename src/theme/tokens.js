// Named color tokens for the app's two color modes.
// `dark` mirrors the app's original single theme (deduped from the
// near-duplicate hex values previously scattered across components).
// `light` is a placeholder palette — swap these values for the exact
// hex codes exported from Audible.xd once available.

export const dark = {
  background: "#333447",
  surface: "#212236",
  surfaceAlt: "#3A3B4D",
  textPrimary: "#F9F9F9",
  textSecondary: "#999AA3",
  textMuted: "#B1B2B9",
  placeholder: "#807D7D",
  accent: "#F5A932",
  cta: "#F56C26",
  ctaDark: "#B8511D",
  ctaContrast: "#FFFAF3",
  tabInactive: "#666666",
  highlight: "#694AF1",
  overlay: "rgba(255,255,255,0.9)",
  statusBarStyle: "light",
  // Ebooks/Audiobooks switch on Home - unchanged from the app's original look.
  switchTrack: "#F5A932",
  switchSelectedBg: "#F5A932",
  switchUnselectedBg: "rgba(255,255,255,0.9)",
  switchSelectedText: "#FFFAF3",
  switchUnselectedText: "#F5A932",
};

export const light = {
  background: "#F5F5F7",
  surface: "#FFFFFF",
  surfaceAlt: "#ECEDF2",
  textPrimary: "#212236",
  textSecondary: "#6B6C76",
  textMuted: "#48494F",
  placeholder: "#9A9AA2",
  accent: "#F5A932",
  cta: "#F56C26",
  ctaDark: "#B8511D",
  ctaContrast: "#FFFFFF",
  tabInactive: "#B1B2B9",
  highlight: "#694AF1",
  overlay: "rgba(33,34,54,0.06)",
  statusBarStyle: "dark",
  // Ebooks/Audiobooks switch on Home - track/selected match the Search
  // page's category-pill orange, with the selected side a shade darker.
  switchTrack: "#F56C26",
  switchSelectedBg: "#B8511D",
  switchUnselectedBg: "transparent",
  switchSelectedText: "#FFFFFF",
  switchUnselectedText: "#FFFFFF",
};

export const palettes = { dark, light };
