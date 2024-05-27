import type { Meta, StoryObj } from 'storybook-framework-qwik/*'
import { Avatar } from './Avatar'

const meta: Meta = {
  component: Avatar,
}

type Story = StoryObj

export default meta

export const Default: Story = {
  render: () => <Avatar />,
}
