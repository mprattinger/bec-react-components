import { Meta, StoryObj } from "@storybook/react"
import { BecPanel, BecPanelContainer } from "bec-react-components"

const meta: Meta<typeof BecPanelContainer> = {
    component: BecPanelContainer,
    title: "Becom Components/Containers/Panel Container",
}

export default meta

type Story = StoryObj<typeof BecPanelContainer>
export const Default: Story = {
    name: "Bec Panel Container",
    args: {
        children: [
            <BecPanel header="Panel 1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ut consequatur modi ipsam ipsa. Magni cum minus eveniet, autem ratione saepe ad consequuntur, sint hic inventore dicta dolorum, amet officiis.
            </BecPanel>,
            <BecPanel header="Panel 2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni harum officia provident et fugit fugiat, nam, consequatur temporibus neque quod doloremque explicabo dolor ipsam rerum praesentium alias laboriosam nostrum?
            </BecPanel>
        ]
    }
}