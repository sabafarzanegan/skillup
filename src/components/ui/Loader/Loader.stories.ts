import type { Meta, StoryObj } from "@storybook/nextjs";

import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Button",
  component: Loader,
  argTypes: {
    variant: {
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;
export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
