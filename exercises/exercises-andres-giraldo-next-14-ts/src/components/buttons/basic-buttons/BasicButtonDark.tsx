
'use client'

import Link from 'next/link'

export default function BasicButtonDark() {

  function handleClick() {
    console.log('Hola ')
  }

  return(
    <>
      <Link href='#'>
        <button onClick={() => handleClick} >
            Button
        </button>
      </Link>
    </>
  )
}
