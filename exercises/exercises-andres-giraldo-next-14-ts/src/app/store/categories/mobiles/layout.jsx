
import MobileMenu from './menus/MobileMenu'

export default function MobileLayout({children}) {
  return(
    <>
      <MobileMenu/>
      {children}
    </>
  )
}
