
import TabletsMenu from './menus/TabletsMenuDesktop'

export default function TabletsLayout({children}) {
    return(
        <>
            <TabletsMenu/>
            {children}
        </>
    )
}