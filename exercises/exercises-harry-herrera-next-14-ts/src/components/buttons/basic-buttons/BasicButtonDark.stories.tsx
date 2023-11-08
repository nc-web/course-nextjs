// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import BasicButtonDark from './BasicButtonDark'

const meta: Meta<typeof BasicButtonDark> = {
  component: BasicButtonDark
}

export default meta
type Story = StoryObj<typeof BasicButtonDark>

export const Primary: Story = {
  render: () => <BasicButtonDark />
}
