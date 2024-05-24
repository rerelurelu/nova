import type { Meta, StoryObj } from 'storybook-framework-qwik'
import type { Props } from './Button'
import Button from './Button'

const meta: Meta<Props> = {
  component: Button,
}

type Story = StoryObj<Props>

export default meta

export const Default: Story = {
  args: {
    disabled: false,
    type: 'button',
  },
  render: (props) => <Button {...props}>Some button</Button>,
}
