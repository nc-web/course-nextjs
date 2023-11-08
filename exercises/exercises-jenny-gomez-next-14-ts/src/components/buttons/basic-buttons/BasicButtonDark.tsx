
import Link from 'next/link'
import styles from '../BasicButtonDark.module.css'

export default function BasicButtonDark () {
  return(
    <>
      <Link href="#">
        <div className={styles.button}>
            Button
        </div>
      </Link>
    </>
  )
}
