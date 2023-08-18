import type { Meta, StoryObj } from "@storybook/react";

import { TabNav } from "./TabNav";

const meta = {
  title: "TabNav",
  component: TabNav,
} satisfies Meta<typeof TabNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mercury: Story = {
  args: {
    planet: 'mercury'
  }
};
