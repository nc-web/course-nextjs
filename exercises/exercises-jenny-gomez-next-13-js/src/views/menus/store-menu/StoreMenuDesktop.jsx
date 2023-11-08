
import Link from "next/link"

// Styles
import styles from './store-menu-desktop.module.css'

export default function StoreMenuDesktop() {
  return(
    <>
      <menu className={styles.main}>
        <div className={styles.main__nav}>
            <Link className={styles.main__nav_link} href="/store/categories/mobiles">
                <div className={styles.main__nav_items}>
                    Mobiles
                </div>
                
            </Link>

            <Link href="/store/categories/tablets" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                    Tablets
                </div>
           </Link>

                <Link href="/store/categories/laptops" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                    Laptops
                </div>
                </Link>

                <Link href="/store/categories/desktop" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                    Desktop
                </div>
                </Link>
        </div>
      </menu>
    </>
  );
}
