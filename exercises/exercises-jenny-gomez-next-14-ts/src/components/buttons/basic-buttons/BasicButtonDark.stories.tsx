
// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import ButtonBasicDark from './BasicButtonDark'

// Meta
const meta: Meta<typeof ButtonBasicDark> = {
  component: ButtonBasicDark
}

export default meta
type Story = StoryObj<typeof ButtonBasicDark>

export const Primary: Story = {
  render: () => <ButtonBasicDark />
}
