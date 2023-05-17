import ImageCustom from "../shared/ImageCustom";
import styles from "./article-item.module.scss";

export default function ArticleItemAvatar({ avatar }: { avatar: string }) {
  return (
    <div className={styles["article-item__author-image"]}>
      <a aria-label="John Doe" href="/">
        <ImageCustom src={avatar} width={48} height={48}></ImageCustom>
      </a>
    </div>
  );
}
