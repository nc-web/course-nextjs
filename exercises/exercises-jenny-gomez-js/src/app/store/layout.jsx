
import StoreMenu from '@views/menus/store-menu/StoreMenuDesktop';

export default function LayoutStore({children}) {
    return(
        <>
        <StoreMenu/>
        {children}
        </>
    )
}