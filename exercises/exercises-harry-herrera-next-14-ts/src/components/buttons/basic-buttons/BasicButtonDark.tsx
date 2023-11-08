import Link from 'next/link'

// Styles
import styles from './BasicButtonDark.module.css'

export default function BasicButtonDark() {
  return (
    <>
      <Link href={'/'}>
        <div className={styles.button__container}>
          <p className={styles.button__container_text}>button</p>
        </div>
      </Link>
    </>
  )
}
