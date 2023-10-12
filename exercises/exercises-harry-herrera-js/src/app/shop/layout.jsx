
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'], style: ['italic'], preload: true })

export const metadata = {
  title: 'Virtual Store Harry',
  description: 'Virtual store Harrinson Herrera, Sell Mobiles, Tablets adn Laptops',
}

export default function LayoutStore({ children }) {
  return (
    <>
      {children}
    </>
  )
}
