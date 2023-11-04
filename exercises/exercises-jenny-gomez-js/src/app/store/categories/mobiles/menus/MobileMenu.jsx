

import Link from "next/link"

// Styles
import styles from './mobile-menu-desktop.module.css'

export default function MobileMenuDesktop() {
  return(
    <>
      <menu className={styles.main}>
        <div className={styles.main__nav}>
            <Link className={styles.main__nav_link} href="/store">
                <div className={styles.main__nav_items}>
                    Huawei
                </div>
                
            </Link>

            <Link href="/login" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                    Xiaomi
                </div>
           </Link>

                <Link href="/login" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                    Samsung
                </div>
                </Link>

                <Link href="/login" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                    Iphone
                </div>
                </Link>
        </div>
      </menu>
    </>
  );
}
