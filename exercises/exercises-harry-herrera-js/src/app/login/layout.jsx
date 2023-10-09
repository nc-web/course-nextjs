
import { Inter, Roboto } from 'next/font/google'

// Menu
import LoginMenuDesktop from "@/views/menus/login-menu/login-menu-desktop/loginMenuDesktop";

const roboto = Roboto({ subsets: ['latin'], weight: ['400'], style: ['italic'], preload: true })

export const metadata = {
  title: 'Login Virtual Store Harry',
  description: 'Login for enter to Virtual store Harrinson Herrera',
}

export default function Layoutlogin({children}) {
  return (
    <html>
      <body>

        <LoginMenuDesktop></LoginMenuDesktop>
        
        {children}
      </body>
    </html>
  )
}