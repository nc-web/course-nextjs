
import './global-styles.css'
import { Inter } from 'next/font/google'

// Menus
import MainMenuDesktop from '@views/menus/main-menu/MainMenuDesktop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainMenuDesktop/>
        {children}
      </body>
    </html>
  )
}
