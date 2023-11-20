
import DesktopsMenu from './menus/DesktopsMenu'

export default function LayoutLaptops({children}) {
  return(
    <>
      <DesktopsMenu/>
      {children}
    </>
  )
}
