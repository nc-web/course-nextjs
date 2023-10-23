

import Link from "next/link"

// Styles
import styles from './desktop-menu-desktop.module.css'

export default function DesktopMenuDesktop() {
  return(
    <>
      <menu className={styles.main}>
        <div className={styles.main__nav}>
            <Link className={styles.main__nav_link} href="/store">
                <div className={styles.main__nav_items}>
                  Samsung
                </div>
                
            </Link>

            <Link href="/login" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                    Lenovo
                </div>
           </Link>

                <Link href="/login" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                  Dell
                </div>
                </Link>

                <Link href="/login" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                  Acer
                </div>
                </Link>
        </div>
      </menu>
    </>
  );
}
