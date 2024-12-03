import { Meta, StoryObj } from "@storybook/react"
import { BecInputContainer } from "bec-react-components"

const meta: Meta<typeof BecInputContainer> = {
    component: BecInputContainer,
    title: "Becom Components/Containers/Input Container",
}

export default meta

type Story = StoryObj<typeof BecInputContainer>

export const Default: Story = {
    name: "Button Input Row",
    args: {
        children: [<input type="text" placeholder="Enter a test" />, <input type="number" placeholder="What number" />],
    }
}