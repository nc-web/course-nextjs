
import LaptopsMenu from './menus/LaptopsMenu'

export default function LayoutLaptops({children}) {
    return(
        <>
            <LaptopsMenu/>
            {children}
        </>
    )
}