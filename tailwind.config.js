const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-filter-img":
          "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            navBg: "#FFFFFFB2",
            gridDropBg: "#0000004D",
            primary: "#FFF",
            prime: "#f11320",
            secondary: "#27b37b",
            tritory: "#3f9cbd",
            forth: "#737373",
            fifth: "#9747FF",
            sixth: "#00A79D",
            sixth50: "hsl(175.66deg 91.21% 17.84%)",
            mainColor: "#000",
            mainColor2: "#FFF",
          },
        },
        dark: {
          colors: {
            navBg: "#051b22e5",
            gridDropBg: "#FFFFFF4D",
            primary: "#031d26",
            prime: "#F55661",
            secondary: "#13F198",
            tritory: "#13B6F1",
            forth: "#737373",
            fifth: "#9747FF",
            sixth: "#00A79D",
            mainColor: "#FFF",
            mainColor2: "#000",
          },
        },
        // ... custom themes
      },
    }),
  ],
};

"primary : #031d26", "#FFF";
