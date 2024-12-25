import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // safelist: [
  //   {
  //     pattern: /px-*/,
  //   },
  // ],
  theme: {
    extend: {
      screens: {
        380: "380px",
        420: "420px",
        480: "480px",
        600: "600px",
        620: "620px",
        640: "640px",
        680: "680px",
        700: "700px",
        768: "768px",
        920: "920px",
        960: "960px",
        1024: "1024px",
        1230: "1230px",
        1366: "1366px",
        1440: "1440px",
        1500: "1500px",
      },
      fontFamily: {
        IBM: "IBMPlexSansArabic",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          1: "var(--theme-color-1)",
          2: "var(--theme-color-2)",
          3: "var(--theme-color-3)",
          4: "var(--theme-color-4)",
          opposite : {
            1 : "var(--theme-opposite-1)",
            2 : "var(--theme-opposite-2)",
            3 : "var(--theme-opposite-3)",
            
          }
        },
        
        primary: {
          1: "#333333",
          2: "#e4ded0",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
