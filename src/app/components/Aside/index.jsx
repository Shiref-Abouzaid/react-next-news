import styles from  './index.module.scss';
import NewsCard from '../NewsCard';
export default async function Aside() {
  const getRandomWord = async () => {
   const res = await fetch('https://random-word-api.herokuapp.com/word')
   const json = await res.json();
    return json[0]
  }
  
  const getAsideNews = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${randomWord}&from=2023-09-19&sortBy=publishedAt&pageSize=3&apiKey=e444502030f94566bd42a417ae5117e7`
    );
    const json = await res.json();
    return json;
  };

  let randomWord = await getRandomWord();
  let asideNews = await getAsideNews();
    return (
      <aside className={styles.aside}>
        <h2>Pupilar Articles</h2>
        <div className={styles.newsCards}>
          {asideNews.articles.map((article) => (
            <NewsCard article={article} key={article.url} />
          ))}
          </div>
      </aside>
    )
}