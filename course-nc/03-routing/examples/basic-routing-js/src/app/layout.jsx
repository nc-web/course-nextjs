import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Basic Routing Next JS',
  description: 'Create Basic routing into Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/login'>Login</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
