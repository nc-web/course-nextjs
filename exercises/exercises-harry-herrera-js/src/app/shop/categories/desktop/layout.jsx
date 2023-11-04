
import { Roboto } from 'next/font/google'

import DesktopMenu from './menus/DesktopMenu'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'], style: ['italic'], preload: true })

export const metadata = {
  title: 'Virtual Store Desktop Harry',
  description: 'Virtual store Harrinson Herrera, views and buy Desktops',
}

export default function DesktopLayout({ children }) {
  return (
    <>
    <DesktopMenu></DesktopMenu>
      {children}
    </>
  )
}
