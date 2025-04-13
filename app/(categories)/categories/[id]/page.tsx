import { Suspense } from "react";
import BookInfo from "../../../../components/category-info";
import styles from "../../../styles/category.module.css";
export const API_URL = "https://books-api.nomadcoders.workers.dev";

export const metadata = {
  title: "Category | Next.js",
};

type IParams = Promise<{
  id: string;
}>;

async function getCategory(id: string) {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  const json = await response.json();
  return json;
}

export default async function CategoryDetail(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  const categoryTitle = await getCategory(id);
  return (
    <div className={styles.category_page}>
      <h1>{categoryTitle.results.list_name}</h1>
      <div className={styles.category_item}>
        <Suspense fallback={<h2>Loading movie info</h2>}>
          <BookInfo id={id} />
        </Suspense>
      </div>
    </div>
  );
}
