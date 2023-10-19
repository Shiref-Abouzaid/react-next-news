import styles from './page.module.css'
import NewsCard from '../app/components/news-card'

export default function Home() {
  return (
    <main className={styles.main}>
      <NewsCard/>
    </main>
  )
}
