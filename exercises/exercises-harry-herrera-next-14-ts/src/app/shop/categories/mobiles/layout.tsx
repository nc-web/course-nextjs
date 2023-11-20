
import { Roboto } from 'next/font/google'

import MobileMenu from './menus/MobileMenu'
import React from 'react'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'], style: ['italic'], preload: true })

export const metadata = {
  title: 'Virtual Store Mobile Harry',
  description: 'Virtual store Harrinson Herrera, views and buy Mobiles',
}

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={roboto.className}>
        <MobileMenu></MobileMenu>
        {children}
      </body>
    </html>
  )
}
