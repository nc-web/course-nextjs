
import Link from "next/link";

// Styles
import styles from './tablet-menu.module.css'

export default function TabletsMenu() {
  return (
    <>
      <menu className={styles.menu}>
        <div className={styles.menu__logo}>
          <Link href='/' className={styles.menu__nav_container_link}><p>Logo</p></Link>
        </div>
        <div className={styles.menu__nav}>
          <nav className={styles.menu__nav_container}>
            <Link href='/shop/categories/tablets' className={styles.menu__nav_container_link}><p>Mac Touch</p></Link>
            <Link href='/shop/categories/tablets' className={styles.menu__nav_container_link}><p>Acer</p></Link>
            <Link href='/shop/categories/tablets' className={styles.menu__nav_container_link}><p>Huawei</p></Link>
            <Link href='/shop/categories/tablets' className={styles.menu__nav_container_link}><p>Samsung</p></Link>
          </nav>
        </div>
      </menu>
    </>
  )
}