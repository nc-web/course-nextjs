import React from 'react'

import { Roboto } from 'next/font/google'

// Menu
import LoginMenuDesktop from '@/views/menus/login-menu/login-menu-desktop/loginMenuDesktop'

// eslint-disable-next-line new-cap
const roboto = Roboto({ subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  preload: true })

export const metadata = {
  title: 'Login Virtual Store Harry',
  description: 'Login for enter to Virtual store Harrinson Herrera'
}

export default function Layoutlogin({children}: { children: React.ReactNode }) {
  return (
    <html>
      <body className={roboto.className}>

        <LoginMenuDesktop></LoginMenuDesktop>

        {children}
      </body>
    </html>
  )
}
