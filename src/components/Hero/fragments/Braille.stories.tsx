import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { Braille, type Props } from './Braille'

const meta: Meta = {
  component: Braille,
}

type Story = StoryObj<Props>

export default meta

export const _Braille: Story = {
  args: {
    tl: true,
    tr: true,
    ml: true,
    mr: true,
    bl: true,
    br: true,
  },
  render: (props) => <Braille {...props} />,
}
