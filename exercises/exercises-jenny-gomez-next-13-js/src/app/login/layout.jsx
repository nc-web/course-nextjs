
import { Roboto } from 'next/font/google'

import LoginMenu from '@views/menus/login-menu/LoginMenuDesktop'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
    style: ['normal', 'italic']
})

export const metadata = {
    title: 'Page Login',
    description: 'Page Login Virtual Jenny Gómez'
}

export default function LayoutLogin({children}) {
    return(
        <body className={roboto.className}>
            <nav>
                <LoginMenu/>
                {children}
            </nav>
        </body>
    ) 
}