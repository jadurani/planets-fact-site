import type { Meta, StoryObj } from "@storybook/react";

import { NavLink } from "./NavLink";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "NavLink",
  component: NavLink,
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mercury: Story = {
  args: {
    id: 'mercury',
    isActive: true
  }
};


export const Earth: Story = {
  args: {
    id: 'earth',
    isActive: false
  }
};
