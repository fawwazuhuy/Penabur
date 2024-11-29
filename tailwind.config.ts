import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#40A578",
        secondary: "#9DDE8B",
        elgato:"background: linear-gradient(to right, #40A578 0%, #9DDE8B 40%, #E6FF94 100%);",
        // third: "background-color: rgb(0 103 105);",
        // fourth: "background-color: rgb(0 103 105);",
      },
    },
  },
  plugins: [],
} satisfies Config;
