
// Menu
import TabletMenu from './menus/TabletMenu'

export default function TabletLayout({children}) {
  return(
    <>
      <TabletMenu/>
      {children}
    </>
  )
}
