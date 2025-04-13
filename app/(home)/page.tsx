import Link from "next/link";
import styles from "../styles/home.module.css";

export const metadata = {
  title: "Home | Next.js",
};

async function getBooks() {
  const API_URL = "https://books-api.nomadcoders.workers.dev";
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

type ItemType = {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
};

export default async function HomePage() {
  const books = await getBooks();
  return (
    <div className={styles.container}>
      <div className={styles.main_box}>
        {books.results.map((book: ItemType) => (
          <div key={book.list_name_encoded} className={styles.category_box}>
            <Link href={`/categories/${book.list_name_encoded}`}>
              {book.display_name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
