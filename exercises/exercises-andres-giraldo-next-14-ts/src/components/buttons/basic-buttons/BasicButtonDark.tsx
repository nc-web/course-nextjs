
'use client'

import Link from 'next/link'

// Styles
import styles from './BasicButtonDark.module.css'

export default function BasicButtonDark() {

  function handleClick() {
    console.log('Hola ')
  }

  return(
    <>
      <Link href='#'>
        <button onClick={() => handleClick} className={styles.button}>
            Button
        </button>
      </Link>
    </>
  )
}
