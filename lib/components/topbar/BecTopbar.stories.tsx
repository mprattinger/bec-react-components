import { Meta, StoryObj } from "@storybook/react";
import { BecTopbar } from "bec-react-components";

const meta: Meta<typeof BecTopbar> = {
  component: BecTopbar,
  title: "Becom Components/Topbar/Topbar",
};

export default meta;

type Story = StoryObj<typeof BecTopbar>;

export const Default: Story = {
  name: "Topbar",
  args: {
    programName: "My Program",
    companyName: "Becom Electronics GmbH",
    helpText: "Hilfe",
    info: {
      creationYear: "2025",
      developer: "MPR",
      screen: "1",
      program: "Story",
    },
  },
};
