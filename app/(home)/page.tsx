import Link from "next/link";
import styles from "../styles/home.module.css";
export const API_URL = "https://books-api.nomadcoders.workers.dev";
export const metadata = {
  title: "Home | Next.js",
};

async function getBooks() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const books = await getBooks();
  console.log(books);
  return (
    <div className={styles.container}>
      <div className={styles.main_box}>
        {books.results.map((book) => (
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
