import type { Meta, StoryObj } from "@storybook/react";
import { BecButton } from "./BecButton";

const meta: Meta<typeof BecButton> = {
  component: BecButton,
  title: "Becom Components/Buttons/BecButtons",
};

export default meta;

type Story = StoryObj<typeof BecButton>;

export const Default: Story = {
  name: "Primary Button",
  args: {
    children: "Click me!",
  },
};

export const PrimarySmall: Story = {
  name: "Primary Small Button",
  args: {
    children: "Click me!",
    size: "small",
  },
};

export const PrimaryDisabled: Story = {
  name: "Primary Disabled Button",
  args: {
    children: "Click me!",
    disabled: true,
  },
};

export const Secondary: Story = {
  name: "Secondary Button",
  args: {
    children: "Iam sec",
    variant: "secondary",
  },
};

export const SecondarySmall: Story = {
  name: "Secondary Small Button",
  args: {
    children: "Iam sec",
    variant: "secondary",
    size: "small",
  },
};

export const SecondaryDisabled: Story = {
  name: "Secondary Disabled Button",
  args: {
    children: "Iam sec",
    variant: "secondary",
    disabled: true,
  },
};

export const Orange: Story = {
  name: "Orange Button",
  args: {
    children: "Iam orange",
    variant: "orange",
  },
};

export const OrangeSmall: Story = {
  name: "Orange Small Button",
  args: {
    children: "Iam orange",
    variant: "orange",
    size: "small",
  },
};

export const OrangDisabled: Story = {
  name: "Orange Disabled Button",
  args: {
    children: "Iam orange",
    variant: "orange",
    disabled: true,
  },
};

// export const ScreenshotButton: Story = {
//     name: "Orange Screenshot Button",
//     args: {
//         children: <img src={ScreenshotButtonImage} />,
//         variant: "orange",
//         size: "small",
//         isImageButton: "yes"
//     }
// }

// export const ScreenshotButtonDisable: Story = {
//     name: "Orange Disabled Screenshot Button",
//     args: {
//         children: <img src={ScreenshotButtonImage} />,
//         variant: "orange",
//         size: "small",
//         disabled: true,
//         isImageButton: "yes"
//     }
// }

// export const PrintButton: Story = {
//     name: "Orange Print Button",
//     args: {
//         children: <img src={PrintButtonImage} />,
//         variant: "orange",
//         size: "small",
//         isImageButton: "yes"
//     }
// }

// export const PrintButtonDisable: Story = {
//     name: "Orange Disabled Print Button",
//     args: {
//         children: <img src={PrintButtonImage} />,
//         variant: "orange",
//         size: "small",
//         disabled: true,
//         isImageButton: "yes"
//     }
// }
