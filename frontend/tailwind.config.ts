import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        border: "var(--border)"
      },
      spacing: {
        SectionLgGap: "var(--section-lg-gap)",
        SectionMobileGap: "var(--section-mobile-gap)"
      }

    },
  },
  plugins: [],
} satisfies Config;
