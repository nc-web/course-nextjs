
import { Roboto } from 'next/font/google'

import MobileMenu from './menus/MobileMenu'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'], style: ['italic'], preload: true })

export const metadata = {
  title: 'Virtual Store Mobile Harry',
  description: 'Virtual store Harrinson Herrera, views and buy Mobiles',
}

export default function MobileLayout({ children }) {
  return (
    <>
      <MobileMenu></MobileMenu>
      {children}
    </>
  )
}
