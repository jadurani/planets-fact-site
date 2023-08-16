const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    // Make sure these colors match what's in globals.css
    // We didn't use css variables here so that the VSCode
    // Tailwind Intellisense can still preview the colors
    colors: {
      white: "#FFFFFF",
      black: "#070724",
      grey1: "#38384F",
      grey2: "#838391",
      "grey-hover": "#D8D8D8",
      mercury: "#419EBB",
      venus: "#EDA249",
      earth: "#6f2ed6",
      mars: "#D14C32",
      jupiter: "#D83A34",
      saturn: "#CD5120",
      uranus: "#1ec2a4",
      neptune: "#2d68f0",
    },
    fontSize: {
      h1: [
        "80px",
        {
          lineHeight: "103px",
          fontWeight: "500",
        },
      ],
      h2: [
        "40px",
        {
          lineHeight: "-1.5px",
          fontWeight: "500",
        },
      ],
      h3: [
        "12px",
        {
          lineHeight: "25px",
          letterSpacing: "2.6px",
          fontWeight: "700",
        },
      ],
      h4: [
        "11px",
        {
          lineHeight: "25px",
          letterSpacing: "1px",
          fontWeight: "700",
        },
      ],
      body1: [
        "14px",
        {
          lineHeight: "18px",
          fontWeight: "700",
        },
      ],
      body2: [
        "12px",
        {
          lineHeight: "25px",
          fontWeight: "400",
        },
      ],
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        antonio: ["var(--font-antonio)"],
        spartan: ["var(--font-spartan)"],
      },
    },
  },
  plugins: [],
};
