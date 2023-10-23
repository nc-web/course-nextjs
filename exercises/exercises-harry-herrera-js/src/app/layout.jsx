
import './globals-styles.css'
import { Roboto } from 'next/font/google'

// Menus
import MainMenuDesktop from '@views/menus/main-menu/main-menu-desktop/MainMenuDesktop'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'], style: ['italic'], preload: true })

export const metadata = {
  title: 'Virtual Store Harry',
  description: 'Virtual store Harrinson Herrera, Sell Mobiles, Tablets adn Laptops',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>

      {/* <MainMenuDesktop></MainMenuDesktop> */}
      
      {children}
      
      </body>
    </html>
  )
}
