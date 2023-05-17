import styles from "./article-item.module.scss";

export default function ArticleItemStats({ viewCount }: { viewCount: number }) {
  return (
    <ul className={styles["article-item__stats"]}>
      <li>
        <i className="icons ion-ios-eye"></i>
        <span className="text">{viewCount}</span>
      </li>
    </ul>
  );
}
