import type { Meta, StoryObj } from "@storybook/react";

import { Description } from "./Description";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Description",
  component: Description,
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Mercury: Story = {
  args: {
    content: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
  }
};
