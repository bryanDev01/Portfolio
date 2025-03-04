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
        baseColor: "#2688ff",
        secondColor: "#5e00c8"
      },
      backgroundColor: {
        baseBGColor: "#2688ff",
        secondBGColor: "#5e00c8"
      }
    },
  },
  plugins: [],
} satisfies Config;
