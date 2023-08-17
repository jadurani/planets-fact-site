import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import * as React from "react";
import "tailwindcss/tailwind.css";
import { AntonioFont, SpartanFont } from "../src/lib/fonts";
import "../src/styles/globals.css";

const BREAKPOINTS_INT = {
  xs: {
    width: 320,
    height: 568,
  },
  sm: {
    width: 640,
    height: 360,
  },
  md: {
    width: 768,
    height: 432,
  },
  lg: {
    width: 1024,
    height: 576,
  },
  xl: {
    width: 1280,
    height: 720,
  },
  "2xl": {
    width: 1536,
    height: 864,
  },
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val["width"]}px`,
          height: `${val["height"]}px`,
        },
      },
    ];
  })
);

const withDefaultStyles = (Story) => (
  <div className={`${AntonioFont.variable} ${SpartanFont.variable}`}>
    <Story />
  </div>
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
    viewport: { viewports: customViewports },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    withDefaultStyles,
  ],
};

export default preview;
