import styles from "../app/styles/category.module.css";

export const API_URL = "https://books-api.nomadcoders.workers.dev";

export async function getCategories(id: string) {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  return response.json();
}

export default async function BookInfo({ id }: { id: string }) {
  const category = await getCategories(id);
  console.log(category);
  return (
    <div className={styles.category_box}>
      {category.results.books.map((book) =>
        book.book_image ? (
          <div key={book.primary_isbn13} className={styles.category_item}>
            <img src={book.book_image} />

            <div className={styles.cateogry_desc}>
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
              <a
                href={book.amazon_product_url}
                className={styles.buy_btn}
                target="_blank"
              >
                Buy Now
              </a>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}
