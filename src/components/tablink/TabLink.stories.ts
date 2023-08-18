import type { Meta, StoryObj } from "@storybook/react";
import { TabLink } from "./TabLink";


const meta = {
  title: "TabLink",
  component: TabLink,
} satisfies Meta<typeof TabLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    index: 0,
    id: 'overview',
    planet: 'mercury',
    isActive: true
  }
};


export const Structure: Story = {
  args: {
    index: 1,
    id: 'structure',
    isActive: false,
    planet: 'mercury',
    isMobile: true,
  }
};

export const Geology: Story = {
  args: {
    index: 2,
    id: 'geology',
    isActive: false,
    planet: 'mercury',
    isMobile: false,
  }
};
