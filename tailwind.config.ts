import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          50: "#eef3fb",
          100: "#d8e2f3",
          200: "#b3c5e6",
          300: "#86a1d4",
          400: "#5a7bbd",
          500: "#3b5ca3",
          600: "#2a4686",
          700: "#20376d",
          800: "#172a55",
          900: "#0f1d3d",
          950: "#09132a",
        },
        gold: {
          50: "#fbf7ec",
          100: "#f5ebcc",
          200: "#ead597",
          300: "#dfbd62",
          400: "#d4a93f",
          500: "#c1922b",
          600: "#a47522",
          700: "#83591f",
          800: "#6c4820",
          900: "#5b3c1f",
        },
        ivory: {
          DEFAULT: "#fbf8f1",
          50: "#fffdf8",
          100: "#fbf8f1",
          200: "#f4eee0",
          300: "#e9e0ca",
        },
        saffron: "#e8871e",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "var(--font-deva)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-deva-serif)", "Georgia", "serif"],
        deva: ["var(--font-deva)", "sans-serif"],
      },
      boxShadow: {
        royal: "0 1px 2px rgba(15,29,61,0.04), 0 8px 24px -8px rgba(15,29,61,0.12)",
        "royal-lg": "0 2px 4px rgba(15,29,61,0.05), 0 24px 48px -16px rgba(15,29,61,0.22)",
        gold: "0 0 0 1px rgba(193,146,43,0.35), 0 10px 30px -12px rgba(193,146,43,0.35)",
      },
      backgroundImage: {
        "royal-gradient": "linear-gradient(135deg, #09132a 0%, #172a55 45%, #20376d 100%)",
        "gold-line": "linear-gradient(90deg, transparent, #c1922b 20%, #ead597 50%, #c1922b 80%, transparent)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
