import { Card } from "./Card";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof Card> = {
  title: "Input",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;
export const Primary: Story = {};
