import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        brand: {
          dark: "#0b0b1e",
          card: "#151525",
          purple: "#6366f1",
          purpleLight: "#8b5cf6",
          cyan: "#06b6d4",
          green: "#10b981",
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "scroll-vertical":
          "scroll-vertical var(--animation-duration, 40s) linear infinite",
        shimmer: "shimmer 2s linear infinite",
        aurora: "aurora 60s linear infinite",
        meteor: "meteor 5s linear infinite",
        "border-beam": "border-beam calc(var(--duration) * 1s) infinite linear",
        "move-horizontal":
          "moveHorizontal 40s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
        },
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
        "scroll-vertical": {
          to: { transform: "translateY(-50%)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
