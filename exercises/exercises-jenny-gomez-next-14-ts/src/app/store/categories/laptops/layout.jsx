
// Menu
import LaptopsMenu from './menus/LaptopsMenu'

export default function LaptopsLayout({children}) {
  return(
    <>
      <LaptopsMenu/>
      {children}
    </>
  )
}
