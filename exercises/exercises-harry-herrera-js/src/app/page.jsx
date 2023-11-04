import MainMenuDesktop from '@/views/menus/main-menu/main-menu-desktop/MainMenuDesktop'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <MainMenuDesktop></MainMenuDesktop>
      <h2>Page Principal</h2>
    </main>
  )
}
