
import { Roboto } from 'next/font/google'

import LaptopsMenu from './menus/LaptopsMenu'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'], style: ['italic'], preload: true })

export const metadata = {
  title: 'Virtual Store Laptops Harry',
  description: 'Virtual store Harrinson Herrera, views and buy Laptopss',
}

export default function LaptopsLayout({ children }) {
  return (
    <>
      <LaptopsMenu></LaptopsMenu>
      {children}
    </>
  )
}
