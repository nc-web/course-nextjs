
import Link from "next/link";

// Styles
import styles from './shop-menu-desktop.module.css'

export default function ShopMenuDesktop() {
  return (
    <>
      <menu className={styles.menu}>
        <div className={styles.menu__logo}>
          <p>Logo</p>
        </div>
        <div className={styles.menu__nav}>
          <nav className={styles.menu__nav_container}>
            <Link href='/shop' className={styles.menu__nav_container_link}><p>Mobiles</p></Link>
            <Link href='/shop' className={styles.menu__nav_container_link}><p>Tablets</p></Link>
            <Link href='/shop' className={styles.menu__nav_container_link}><p>Laptops</p></Link>
            <Link href='/shop' className={styles.menu__nav_container_link}><p>Desktop</p></Link>
          </nav>
        </div>
      </menu>
    </>
  )
}