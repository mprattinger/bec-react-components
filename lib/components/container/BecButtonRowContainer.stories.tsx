import { Meta, StoryObj } from "@storybook/react"
import { BecButtonRowContainer } from "./BecButtonRowContainer"
import { BecButton } from "bec-react-components"

const meta: Meta<typeof BecButtonRowContainer> = {
    component: BecButtonRowContainer,
    title: "Becom Components/Containers/Button Row Container",
}

export default meta

type Story = StoryObj<typeof BecButtonRowContainer>
export const Default: Story = {
    name: "Button Row",
    args: {
        children: [<BecButton>Submit</BecButton>, <BecButton variant="orange">Cancel</BecButton>],
    }
}
