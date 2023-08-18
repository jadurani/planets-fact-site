import type { Meta, StoryObj } from "@storybook/react";

import { Fact } from "./Fact";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Fact",
  component: Fact,
  parameters: {
    layout: "padded",
  }
} satisfies Meta<typeof Fact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rotation: Story = {
  args: {
    property: "rotation time",
    value: "58.6 days",
  }
};

export const Temperature: Story = {
  args: {
    property: "Average Temp.",
    value: "430°c",
  }
};