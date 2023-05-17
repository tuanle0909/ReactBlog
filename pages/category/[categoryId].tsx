import CategoryPost from "../../components/CategoryPost";
import { formatPost, PostType } from "../../helpers/formatApi";
import postService from "../../service/post";
import { NextSeo } from "next-seo";
type Props = {
  categoryPosts: PostType[];
  categoryId: string;
  totalPost: number;
};

export default function CategoryPage({ categoryPosts, categoryId, totalPost }: Props) {
  return (
    <div className="articles-list section">
      <NextSeo title="Thể loại"></NextSeo>

      <CategoryPost categoryPosts={categoryPosts} categoryId={categoryId} totalPost={totalPost}></CategoryPost>
    </div>
  );
}
export async function getServerSideProps(context: { query: { categoryId: string } }) {
  const { categoryId } = context.query;
  const posts = await postService.getPagingPost({ page: 1, extraParam: { per_page: 2, categories: categoryId } });
  const totalPost = posts.headers["x-wp-total"];
  const categoryPosts = posts.data.map((e: PostType) => formatPost(e));
  return {
    props: {
      categoryPosts: categoryPosts || [],
      categoryId,
      totalPost: totalPost,
    },
  };
}
