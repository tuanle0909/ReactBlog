import { PostType } from "../../helpers/formatApi";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import styles from "./popular-news-list.module.scss";

function ArticlePopular({ posts }: { posts: PostType[] }) {
  return (
    <div className={styles["popular-news"] + " section bg-white-blue"}>
      <div className="tcl-container">
        <MainTitle btnLabel="View More" btnProps={{ href: "/", as: "a" }}>
          Bài viết phổ biến
        </MainTitle>
        {/* End Main Title */}
        <div className={styles["popular-news__list"] + " spacing"}>
          <div className={styles["popular-news__list--left"]}>
            <div className={styles["popular-news__list--row"]}>
              {/* Popular news card */}
              <div className={styles["popular-news__list--card"]}>
                <ArticleItem isStyleCard isShowCategories={true} isShowDesc post={posts[0]} />
              </div>
              {/* End Popular news card */}
              {/* Popular news card */}
              <div className={styles["popular-news__list--card"]}>
                <ArticleItem isStyleCard isShowCategories={true} isShowDesc post={posts[1]} />
              </div>
              {/* End Popular news card */}
            </div>
          </div>
          <div className={styles["popular-news__list--right"]}>
            <div className={styles["popular-news__list--row"]}>
              {/* Popular news card */}
              <div className={styles["popular-news__list--card"]}>
                <ArticleItem isStyleCard isStyleRow isShowCategories isShowDesc post={posts[2]} />
              </div>
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopular;
