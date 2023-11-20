
import MainMenuDesktop from '@/views/menus/login-menu/LoginMenuDesktop'
import styles from './page.module.css'

// Error
import Error from './error'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Page home</h2>
      <Error/>
    </main>
  )
}
