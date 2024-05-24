import type { Meta, StoryObj } from 'storybook-framework-qwik'
import ErrorText from './ErrorText'

const meta: Meta = {
  component: ErrorText,
}

type Story = StoryObj

export default meta

export const Default: Story = {
  render: () => <ErrorText>Error!</ErrorText>,
}
