
import Link from "next/link"

// Styles
import styles from './login-menu-desktop.module.css'

export default function LoginMenuDesktop() {
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

            <Link className={styles.main__nav_link} href="/register">
                <div className={styles.main__nav_items}>
                    Register
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
