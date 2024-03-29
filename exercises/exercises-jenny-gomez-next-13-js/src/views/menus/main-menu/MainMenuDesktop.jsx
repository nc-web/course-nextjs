
import Link from "next/link"

// Styles
import styles from './main-menu-desktop.module.css'

export default function MainMenuDesktop() {
  return(
    <>
      <menu className={styles.main}>
        <div className={styles.main__company}>
           Company
        </div>

        <div className={styles.main__nav}>
            <Link className={styles.main__nav_link} href="/">
                <div className={styles.main__nav_items}>
                    Home
                </div>
                
            </Link>

            <Link className={styles.main__nav_link} href="/store">
                <div className={styles.main__nav_items}>
                    Store
                </div>
                
            </Link>

            <Link href="/login" className={styles.main__nav_link}>
                <div className={styles.main__nav_items}>
                    Login
                </div>
                </Link>
        </div>

        <div className={styles.main__login}>
            Login
        </div>
      </menu>
    </>
  );
}
