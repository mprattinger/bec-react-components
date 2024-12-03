import type {Meta, StoryObj } from "@storybook/react";
import { BecButton } from "./BecButton";

const meta: Meta<typeof BecButton> = {
    component: BecButton
}

export default meta

type Story = StoryObj<typeof BecButton>

export const Default: Story = {
    args: {
        children: "Click me!"
    }
}