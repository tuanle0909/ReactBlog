import { PostDetailType } from "../../helpers/formatApi";
import PostDetailComments from "./PostDetailComments";
import PostDetailRichText from "./PostDetailRichText";
import PostDetailTags from "./PostDetailTags";
import styles from "./post-detail.module.scss";

function PostDetailContent({ postDetail }: { postDetail: PostDetailType }) {
  return (
    <div className={styles["post-detail__content"]}>
      <div className={styles["thumbnail"]}>
        <img src={postDetail.featuredMediaUrl} alt="blog-title" />
      </div>
      <div className={styles["content-padding"]}>
        <PostDetailRichText content={postDetail.content} />

        <PostDetailTags tags={postDetail.categories} />

        <PostDetailComments postId={postDetail.id} />
      </div>
    </div>
  );
}

export default PostDetailContent;
