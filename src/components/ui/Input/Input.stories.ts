import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;
export const Primary: Story = {};
