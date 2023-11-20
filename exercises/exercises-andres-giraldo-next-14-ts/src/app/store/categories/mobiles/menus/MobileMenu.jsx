
import Link from 'next/link'

// Styles
import styles from './store-menu-desktop.module.css'

export default function StoreMenuDesktop() {
  return(
    <>
      <menu className={styles.main}>
        <div className={styles.main__nav}>
          <Link href='/store' className={styles.main__nav_link}>
            <div className={styles.main__nav_items}>
                            Huawei
            </div>
          </Link>
          <Link href='/login' className={styles.main__nav_link}>
            <div className={styles.main__nav_items}>
                            Xiaomi
            </div>
          </Link>
          <Link href='/login' className={styles.main__nav_link}>
            <div className={styles.main__nav_items}>
                            Samsung
            </div>
          </Link>
          <Link href='/login' className={styles.main__nav_link}>
            <div className={styles.main__nav_items}>
                            Iphone
            </div>
          </Link>
        </div>
      </menu>
    </>
  )
}
