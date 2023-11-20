
import Link from 'next/link'

// Styles
import styles from './mobile-menu.module.css'

export default function MobileMenu() {
  return (
    <>
      <menu className={styles.menu}>
        <div className={styles.menu__logo}>
          <Link href='/' className={styles.menu__nav_container_link}><p>Logo</p></Link>
        </div>
        <div className={styles.menu__nav}>
          <nav className={styles.menu__nav_container}>
            <Link href='/shop/categories/mobile' className={styles.menu__nav_container_link}><p>Iphone</p></Link>
            <Link href='/shop/categories/mobile' className={styles.menu__nav_container_link}><p>Xiaomi</p></Link>
            <Link href='/shop/categories/mobile' className={styles.menu__nav_container_link}><p>Huawei</p></Link>
            <Link href='/shop/categories/mobile' className={styles.menu__nav_container_link}><p>Motorola</p></Link>
          </nav>
        </div>
      </menu>
    </>
  )
}
