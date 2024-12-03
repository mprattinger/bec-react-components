import { Meta, StoryObj } from "@storybook/react"
import { BecPanel } from "bec-react-components"

const meta: Meta<typeof BecPanel> = {
    component: BecPanel,
    title: "Becom Components/Containers/Panel"
}

export default meta

type Story = StoryObj<typeof BecPanel>
export const Default: Story = {
    name: "Bec Panel",
    args: {
        header: "Important Text",
        children: [<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore rem, id est natus fuga cupiditate explicabo quidem sequi veniam inventore provident beatae eos amet necessitatibus. Autem optio neque nemo!q</p>],
    }
}