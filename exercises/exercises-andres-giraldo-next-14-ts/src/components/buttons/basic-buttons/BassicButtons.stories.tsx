
import type { Meta, StoryObj } from '@storybook/react'

import BasicButtonDark from './BasicButtonDark'
// import { BasicButtonLight } from './BasicButtonLight'


// Basic Button Dark
const metaBasicButtonDark: Meta<typeof BasicButtonDark> = {
  component: BasicButtonDark
}

export default metaBasicButtonDark
type StoryBasicButtonDark = StoryObj<typeof BasicButtonDark>

export const BasicButtonDarkStory: StoryBasicButtonDark = {
  render: () => <BasicButtonDark />
}
