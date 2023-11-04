

import Link from "next/link"

// Styles
import styles from './laptops-menu-desktop.module.css'

export default function LaptopsMenuDesktop() {
  return(
    <>
      <menu className={styles.main}>
        <div className={styles.main__nav}>
            <Link className={styles.main__nav_link} href="/store">
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
                  Apple
                </div>
                </Link>

                <Link href="/login" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                  HP
                </div>
                </Link>
        </div>
      </menu>
    </>
  );
}
