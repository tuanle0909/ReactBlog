import { PostDetailType, PostType } from "../../helpers/formatApi";
import PostDetailAuthor from "./PostDetailAuthor";
import PostDetailRelatedPosts from "./PostDetailRelatedPosts";
import styles from "./post-detail.module.scss";

function PostDetailSidebar({ postDetail, relatedPosts }: { postDetail: PostDetailType; relatedPosts: PostType[] }) {
  return (
    <div className={styles["post-detail__side"]}>
      <PostDetailAuthor {...postDetail.authorInfo} />
      <div className="spacing" />
      <PostDetailRelatedPosts relatedPosts={relatedPosts} />
    </div>
  );
}

export default PostDetailSidebar;
