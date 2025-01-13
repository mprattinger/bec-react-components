import { Meta, StoryObj } from "@storybook/react";
import { BecImageButton } from "bec-react-components";
import { MagnifierBtnImg, PrintBtnImg, ScreenshotBtnImg } from "../../contants";

const meta: Meta<typeof BecImageButton> = {
  component: BecImageButton,
  title: "Becom Components/Buttons/BecImageButtons",
};

export default meta;

type Story = StoryObj<typeof BecImageButton>;

export const Default: Story = {
  name: "Print Button",
  args: {
    size: "small",
    variant: "orange",
    imgSrc: PrintBtnImg,
  },
};

export const Screenshot: Story = {
  name: "Screenshot Button",
  args: {
    size: "small",
    variant: "orange",
    imgSrc: ScreenshotBtnImg,
  },
};

export const Magnifier: Story = {
  name: "Magnifier Button",
  args: {
    size: "small",
    variant: "secondary",
    imgSrc: MagnifierBtnImg,
  },
};
