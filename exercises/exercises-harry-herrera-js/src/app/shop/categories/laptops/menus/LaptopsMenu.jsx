
import Link from "next/link";

// Styles
import styles from './laptops-menu.module.css'

export default function laptopsMenu() {
  return (
    <>
      <menu className={styles.menu}>
        <div className={styles.menu__logo}>
          <Link href='/' className={styles.menu__nav_container_link}><p>Logo</p></Link>
        </div>
        <div className={styles.menu__nav}>
          <nav className={styles.menu__nav_container}>
            <Link href='/shop/categories/laptop' className={styles.menu__nav_container_link}><p>Mac Book</p></Link>
            <Link href='/shop/categories/laptop' className={styles.menu__nav_container_link}><p>Republic</p></Link>
            <Link href='/shop/categories/laptop' className={styles.menu__nav_container_link}><p>Azus</p></Link>
            <Link href='/shop/categories/laptop' className={styles.menu__nav_container_link}><p>Acer</p></Link>
          </nav>
        </div>
      </menu>
    </>
  )
}