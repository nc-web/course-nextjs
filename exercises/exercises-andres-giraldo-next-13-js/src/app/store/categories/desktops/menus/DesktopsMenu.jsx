
import Link from 'next/link'

// Styles
import styles from './desktops-menu-desktop.module.css'

export default function DesktopsMenuDesktop() {
    return(
        <>
            <menu className={styles.main}>
                <div className={styles.main__nav}>
                    <Link href='/store' className={styles.main__nav_link}>
                        <div className={styles.main__nav_items}>
                            Dell
                        </div>
                    </Link>
                    <Link href='/login' className={styles.main__nav_link}>
                        <div className={styles.main__nav_items}>
                            HP
                        </div>
                    </Link>
                    <Link href='/login' className={styles.main__nav_link}>
                        <div className={styles.main__nav_items}>
                            Lenovo
                        </div>
                    </Link>
                    <Link href='/login' className={styles.main__nav_link}>
                        <div className={styles.main__nav_items}>
                            Mac
                        </div>
                    </Link>
                </div>
            </menu>
        </>
    )
}