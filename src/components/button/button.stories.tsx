import type { Meta, StoryObj } from 'storybook-framework-qwik'
import type { Props } from './button'
import Button from './button'

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
