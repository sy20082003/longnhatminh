import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4ff",
          100: "#dbe7ff",
          200: "#bcd3ff",
          300: "#8eb6ff",
          400: "#5a91ff",
          500: "#3470fa",
          600: "#1f52ef",
          700: "#1a3fd1",
          800: "#1a35a8",
          900: "#142566",
          950: "#0c1840",
        },
        gold: {
          50: "#fffdf2",
          100: "#fff9de",
          200: "#fef2b8",
          300: "#fde685",
          400: "#fbd34d",
          500: "#f7bd24",
          600: "#e29c14",
          700: "#bb7611",
          800: "#975c15",
          900: "#7c4b16",
        },
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0c1840 0%, #1a35a8 45%, #1f52ef 75%, #3470fa 100%)",
        "soft-gradient": "linear-gradient(180deg, #eef4ff 0%, #ffffff 100%)",
        "gold-gradient": "linear-gradient(135deg, #fde685 0%, #f7bd24 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(26, 53, 168, 0.25)",
        card: "0 4px 24px -4px rgba(12, 24, 64, 0.12)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
