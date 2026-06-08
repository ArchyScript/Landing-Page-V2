import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,ts,js}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1f6b4f",
          50: "#eefaf4",
          100: "#d8f3e6",
          200: "#b4e7cf",
          300: "#83d2ad",
          400: "#4fb785",
          500: "#2f9668",
          600: "#1f6b4f",
          700: "#1b5742",
          800: "#184637",
          900: "#143a30",
        },
        theme: {
          ink: "#10231d",
          muted: "#5f716b",
          line: "#d9e4df",
          canvas: "#fbfefc",
          surface: "#ffffff",
          accent: "#f4b740",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.6rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.85rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.35rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "5xl": ["3rem", { lineHeight: "3.35rem" }],
        "6xl": ["3.75rem", { lineHeight: "4.1rem" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(16, 35, 29, 0.08)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
};

export default config;
