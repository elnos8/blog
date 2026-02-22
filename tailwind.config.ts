import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        base: ["1.125rem", { lineHeight: "1.75" }],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "48rem",
            fontSize: "1.125rem",
            lineHeight: "1.75",
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
            "h1, h2, h3, h4": {
              fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
              fontWeight: "600",
            },
            h1: {
              fontSize: "2rem",
              marginTop: "0",
              marginBottom: "0.8888889em",
              lineHeight: "1.2",
            },
            h2: {
              fontSize: "1.5rem",
              marginTop: "2em",
              marginBottom: "0.6666667em",
              lineHeight: "1.3",
            },
            h3: {
              fontSize: "1.25rem",
              marginTop: "1.5em",
              marginBottom: "0.5em",
              lineHeight: "1.4",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
