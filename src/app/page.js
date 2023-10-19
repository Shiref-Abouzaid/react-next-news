import styles from "./page.module.css";
import NewsCard from "./components/NewsCard";
import { Row, Col } from "react-bootstrap";
export default async function Home() {
  const getHomeNews = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=fishing&from=2023-09-19&sortBy=publishedAt&pageSize=6&apiKey=e444502030f94566bd42a417ae5117e7"
    );
    const json = await res.json();
    return json;
  };
  const news = await getHomeNews();
  const newsList = news.articles.map((article) => {
    return (
      <Col md="4">
        <NewsCard article={article} />
      </Col>
    );
  });

  return (
    <main className={styles.main}>
      <Row>{newsList}</Row>
    </main>
  );
}
