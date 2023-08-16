const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "var(--color-white)",
      black: "var(--color-black)",
      grey1: "var(--color-grey1)",
      grey2: "var(--color-grey2)",
      "grey-hover": "var(--color-grey-hover)",
      mercury: "var(--color-mercury)",
      venus: "var(--color-venus)",
      earth: "var(--color-earth)",
      mars: "var(--color-mars)",
      jupiter: "var(--color-jupiter)",
      saturn: "var(--color-saturn)",
      uranus: "var(--color-uranus)",
      neptune: "var(--color-neptune)",
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
