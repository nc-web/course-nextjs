
import Link from "next/link";

// Styles
import styles from './login-menu-desktop.module.css'

export default function LoginMenuDesktop() {
  return (
    <>
      <menu className={styles.menu}>
        <div className={styles.menu__logo}>
          <p>Logo</p>
        </div>
        <div className={styles.menu__nav}>
          <nav className={styles.menu__nav_container}>
            <Link href='/' className={styles.menu__nav_container_link}><p>Home</p></Link>
            <Link href='/login' className={styles.menu__nav_container_link}><p>Register</p></Link>
            <Link href='/shop' className={styles.menu__nav_container_link}><p>Login</p></Link>
          </nav>
        </div>
      </menu>
    </>
  )
}