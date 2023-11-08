
import Link from "next/link";

// Styles
import styles from './desktop-menu.module.css'

export default function DesktopMenu() {
  return (
    <>
      <menu className={styles.menu}>
        <div className={styles.menu__logo}>
          <Link href='/'><p>Logo</p></Link>
        </div>
        <div className={styles.menu__nav}>
          <nav className={styles.menu__nav_container}>
            <Link href='/shop/categories/desktop' className={styles.menu__nav_container_link}><p>Mac Book</p></Link>
            <Link href='/shop/categories/desktop' className={styles.menu__nav_container_link}><p>Samsung</p></Link>
            <Link href='/shop/categories/desktop' className={styles.menu__nav_container_link}><p>Xiaomi</p></Link>
            <Link href='/shop/categories/desktop' className={styles.menu__nav_container_link}><p>Sony Vaio</p></Link>
          </nav>
        </div>
      </menu>
    </>
  )
}