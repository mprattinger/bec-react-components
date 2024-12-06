import { Meta, StoryObj } from "@storybook/react";
import { BecInput } from "bec-react-components";

const meta: Meta<typeof BecInput<string>> = {
  component: BecInput,
  title: "Becom Components/Inputs/BecInput",
};

export default meta;

type Story = StoryObj<typeof BecInput<string>>;

export const Default: Story = {
  name: "Input",
  args: {
    id: "input",
    label: "Give me data",
    type: "text",
  },
};
