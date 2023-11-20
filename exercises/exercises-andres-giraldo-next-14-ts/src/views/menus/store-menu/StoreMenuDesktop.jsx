
import Link from 'next/link'

// Styles
import styles from './store-menu-desktop.module.css'

export default function StoreMenuDesktop() {
  return(
    <>
      <menu className={styles.main}>
        <div className={styles.main__nav}>
          <Link href='/store/categories/mobiles' className={styles.main__nav_link}>
            <div className={styles.main__nav_items}>
                            Mobiles
            </div>
          </Link>
          <Link href='/store/categories/tablets' className={styles.main__nav_link}>
            <div className={styles.main__nav_items}>
                            Tablets
            </div>
          </Link>
          <Link href='/store/categories/laptops' className={styles.main__nav_link}>
            <div className={styles.main__nav_items}>
                            Laptops
            </div>
          </Link>
          <Link href='/store/categories/desktops' className={styles.main__nav_link}>
            <div className={styles.main__nav_items}>
                            PC Desktop
            </div>
          </Link>
        </div>
      </menu>
    </>
  )
}
