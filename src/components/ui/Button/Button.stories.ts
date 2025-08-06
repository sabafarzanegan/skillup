import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "secoundary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "destructive",
    variant: "destructive",
  },
};
export const Outline: Story = {
  args: {
    children: "outline",
    variant: "outline",
  },
};
