import Link from "next/link";
import { CategoryType } from "../../helpers/formatApi";
import Button from "../shared/Button";
import styles from "./article-item.module.scss";
import useGlobalState from "../../state";
import { ReactElement, ReactNode } from "react";

const RenderCategoryComponent = ({ categories, categoriesId }: { categories: any; categoriesId: string[] }) => {
  const categoryComponent = categoriesId.map((id) => {
    const category = categories[id];
    return (
      <li key={id}>
        <Link href={`/category/${id}`}>
          <Button>{category?.name}</Button>
        </Link>
      </li>
    );
  });
  return <>{categoryComponent}</>;
};
export default function ArticleItemCategories({ categoriesId }: { categoriesId: string[] }) {
  const categories = useGlobalState("categories")[0];
  return (
    <ul className={styles["article-item__categories"]}>
      <RenderCategoryComponent categoriesId={categoriesId} categories={categories} />
    </ul>
  );
}
