import type { Meta, StoryObj } from 'storybook-framework-qwik/*'
import Footer from './Footer'

const meta: Meta = {
  component: Footer,
}

type Story = StoryObj

export default meta

export const Default: Story = {
  render: () => <Footer />,
}
