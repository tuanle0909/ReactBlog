import styles from "./article-item.module.scss";

export default function ArticleItemDesc({ excerpt }: { excerpt: string }) {
  return <div className={styles["article-item__desc"]} dangerouslySetInnerHTML={{ __html: excerpt }}></div>;
}
