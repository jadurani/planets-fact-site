import type { Meta, StoryObj } from "@storybook/react";

import { Profile } from "./Profile";

const meta = {
  title: "Profile",
  component: Profile,
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Earth: Story = {
  args: {
    planet: "earth",
    desc: "overview",
  },
};
