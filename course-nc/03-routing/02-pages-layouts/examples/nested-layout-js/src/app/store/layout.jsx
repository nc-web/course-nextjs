
import Link from "next/link";

export default function StoreLayout({children}) {
    return(
        <>
            <Link href='/store/mobiles'>Mobiles</Link>
            <Link href='/store/laptops'>Laptops</Link>
            {children}
        </>
    )
}