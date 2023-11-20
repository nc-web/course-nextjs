
import styles from './page.module.css'

// Error
import Error from './error'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Page Home</h2>
      <Error/>
    </main>
  )
}
