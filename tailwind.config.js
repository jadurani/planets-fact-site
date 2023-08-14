/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#070724",
      grey1: "#38384F",
      grey2: "#838391",
      "grey-hover": "D8D8D8",
      mercury: "#419EBB",
      venus: "#EDA249",
      earth: "#6f2ed6",
      mars: "#D14C32",
      jupiter: "#D83A34",
      saturn: "#CD5120",
      uranus: "#1ec2a4",
      neptune: "#2d68f0",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
