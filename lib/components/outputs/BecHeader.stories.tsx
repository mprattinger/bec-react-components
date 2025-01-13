import { Meta, StoryObj } from "@storybook/react";
import { BecHeader } from "bec-react-components";

const meta: Meta<typeof BecHeader> = {
  component: BecHeader,
  title: "Becom Components/Outputs/BecHeader",
};

export default meta;

type Story = StoryObj<typeof BecHeader>;

export const Default: Story = {
  name: "Header",
  args: {
    children: "A Header",
  },
};
