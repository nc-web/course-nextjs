
import { Roboto } from 'next/font/google'

import TabletsMenu from './menus/TabletsMenu'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'], style: ['italic'], preload: true })

export const metadata = {
  title: 'Virtual Store Tablets Harry',
  description: 'Virtual store Harrinson Herrera, views and buy Tablets',
}

export default function TabletsLayout({ children }) {
  return (
    <>
      <TabletsMenu></TabletsMenu>
      {children}
    </>
  )
}
