import Link from "next/link";

export default function StoreMobilesLayout({children}) {
    return(
        <>
            <nav>
                <Link href='/store/mobiles/huawei'>Huawei</Link>
                <Link href='/store/mobiles/xiaomi'>Xiaomi</Link>
                <Link href='/store/mobiles/iphone'>Iphone</Link>
            </nav>
            {children}
        </>
    )
}