
import { Roboto } from 'next/font/google'

import DesktopMenu from './menus/DesktopMenu'
import React from 'react'

// eslint-disable-next-line new-cap
const roboto = Roboto({ subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  preload: true })

export const metadata = {
  title: 'Virtual Store Desktop Harry',
  description: 'Virtual store Harrinson Herrera, views and buy Desktops'
}

export default function DesktopLayout({ children }: { children: React.ReactNode}) {
  return (
    <html>
      <body className={roboto.className}>
        <DesktopMenu></DesktopMenu>
      </body>
      {children}
    </html>
  )
}
