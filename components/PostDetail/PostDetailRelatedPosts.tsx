import { PostType } from "../../helpers/formatApi";
import ArticleRelated from "../ArticleItem/ArticleRelated";

type Props = {
  relatedPosts: PostType[];
};
function PostDetailRelatedPosts({ relatedPosts }: Props) {
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {relatedPosts.map((e) => {
        return <ArticleRelated key={e.id} post={e} />;
      })}
    </div>
  );
}

export default PostDetailRelatedPosts;
