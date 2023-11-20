
import { Roboto } from 'next/font/google'

import LaptopsMenu from './menus/LaptopsMenu'
import React from 'react'

const roboto = Roboto({ subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  preload: true })

export const metadata = {
  title: 'Virtual Store Laptops Harry',
  description: 'Virtual store Harrinson Herrera, views and buy Laptopss'
}

export default function LaptopsLayout({ children }: { children: React.ReactNode}) {
  return (
    <html>
      <body className={roboto.className}>
        <LaptopsMenu></LaptopsMenu>
        {children}
      </body>
    </html>
  )
}
