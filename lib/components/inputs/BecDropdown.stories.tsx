import { Meta, StoryObj } from "@storybook/react";
import { BecDropdown } from "bec-react-components";

const meta: Meta<typeof BecDropdown> = {
  component: BecDropdown,
  title: "Becom Components/Inputs/BecDropdown",
};

export default meta;

type Story = StoryObj<typeof BecDropdown<string>>;

export const Default: Story = {
  name: "Dropdown",
  args: {
    id: "dropdown",
    label: "A dropdown",
    options: [
      { key: "Option 1", value: "Option 1" },
      { key: "Option 2", value: "Option 2" },
      { key: "Option 3", value: "Option 3" },
    ],
    getOptionLabel: (option) => option.value,
  },
};

export const Small: Story = {
  name: "Small Dropdown",
  args: {
    id: "dropdown",
    label: "A dropdown",
    options: [
      { key: "A", value: "Option A" },
      { key: "B", value: "Option B" },
      { key: "C", value: "Option C" },
    ],
    getOptionLabel: (option) => {
      return `${option.key} ... ${option.value}`;
    },
  },
};
