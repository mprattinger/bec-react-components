import { Meta, StoryObj } from "@storybook/react";
import { BecCheckbox } from "bec-react-components";

const meta: Meta<typeof BecCheckbox> = {
  component: BecCheckbox,
  title: "Becom Components/Inputs/BecCheckbox",
};

export default meta;

type Story = StoryObj<typeof BecCheckbox>;

export const Default: Story = {
  name: "Checkbox",
  args: {
    id: "checkbox",
    label: "A checkbox",
  },
};
