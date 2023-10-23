
import './global-styles.css';
import { Inter, Roboto } from 'next/font/google';

// Menus
import MainMenuDesktop from '@views/menus/main-menu/MainMenuDesktop';

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900' ], 
  subsets: ['latin'],
  style: ['normal','italic'],
})

export const metadata = {
  title: 'Virtual Store Jenny',
  description: 'Virtual Store Jenny Gómez, Mobiles, Tablets, Laptops, PC, Escritorio',
};

export default function ({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <MainMenuDesktop/>
        {children}
      </body>
    </html>
  );
}
