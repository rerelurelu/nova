import type { Meta, StoryObj } from 'storybook-framework-qwik'
import ErrorText from './errorText'

const meta: Meta = {
  component: ErrorText,
}

type Story = StoryObj

export default meta

export const Default: Story = {
  render: () => <ErrorText>Error!</ErrorText>,
}
