import styles from './index.module.scss';
import Link from 'next/link';

export default function NewsCard({ article }) {
  
    return (
        <article className={styles.newsCard}>

            <a className={styles.imgContainer} href="https://thenextweb.com/news/musk-might-remove-x-twitter-from-eu-disinformation-law">
                <img src={article.urlToImage} alt={article.title} loading="lazy" />
            </a>

            <h2>
                <a href="https://thenextweb.com/news/musk-might-remove-x-twitter-from-eu-disinformation-law">{article.title.substr(1, 20)}..</a>
            </h2>

            <p>{String(article.description).substr(0, 60)}..<Link href="https://thenextweb.com/news/musk-might-remove-x-twitter-from-eu-disinformation-law" aria-label="Read more about Musk mulling over removing X from EU">Read more &raquo;</Link></p>

            <footer className={styles.cardFooter}>

                <span>Author: {String(article.author).substr(0,20)}</span>
        <br/>

                <time datetime={article.publishedAt}>Published: {article.publishedAt.split('T')[0]}</time>


            </footer>
        </article>
    )
}