import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { Hero } from './Hero'

const meta: Meta = {
  component: Hero,
}

type Story = StoryObj

export default meta

export const _Hero: Story = {
  render: () => <Hero />,
}
