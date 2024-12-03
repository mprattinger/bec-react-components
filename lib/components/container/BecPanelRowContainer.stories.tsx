import { Meta, StoryObj } from "@storybook/react"
import { BecPanel, BecPanelRowContainer } from "bec-react-components"

const meta: Meta<typeof BecPanelRowContainer> = {
    component: BecPanelRowContainer,
    title: "Becom Components/Containers/Panel Row Container",
}

export default meta

type Story = StoryObj<typeof BecPanelRowContainer>
export const Default: Story = {
    name: "Bec Panel Row Container",
    args: {
        children: [
            <BecPanel header="Panel 1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat ratione, rem eveniet aspernatur illo velit dolore eaque alias temporibus ad beatae quaerat dolor id praesentium quasi doloribus harum? Repellat.
            </BecPanel>,
            <BecPanel header="Panel 2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero repudiandae perferendis atque fuga, amet veniam praesentium cumque, eveniet aliquid laboriosam modi sequi quo cum dicta consectetur officia cupiditate suscipit. Vero.
            </BecPanel>
        ]
    }
}