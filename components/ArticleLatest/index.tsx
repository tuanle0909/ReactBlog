import { PostType } from "../../helpers/formatApi";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import styles from "./latest-news-list.module.scss";

function ArticleLatest({ posts }: { posts: PostType[] }) {
  return (
    <div className={styles["latest-news"] + " section"}>
      <div className="tcl-container">
        <MainTitle>Bài viết mới nhất</MainTitle>

        <div className={styles["latest-news__list"] + " spacing"}>
          {posts.map((p: PostType) => {
            return (
              <div className={styles["latest-news__card"]} key={p.id}>
                <ArticleItem post={p} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
