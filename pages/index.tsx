import type { NextPage } from "next";
import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import { formatPost, PostType } from "../helpers/formatApi";
import postService from "../service/post";
import { NextSeo } from "next-seo";

type Props = {
  latedPosts: PostType[];
  popularPosts: PostType[];
  generalPosts: PostType[];
};
const HomePage: NextPage<Props> = ({ latedPosts, popularPosts, generalPosts }: Props) => {
  return (
    <>
      <NextSeo title="Trang Chủ" description="Cập nhật thông tin tin tức, hình ảnh, video clip mới nhất, nhanh nhất và đầy đủ nhất từ nguồn ReactBlog"></NextSeo>
      <ArticleLatest posts={latedPosts} />
      <ArticlePopular posts={popularPosts} />
      <ArticleGeneral generalPosts={generalPosts} />
    </>
  );
};
export async function getServerSideProps() {
  const latedPostsRequest = postService.getLated();
  const popularPostsRequest = postService.getPostPopular();
  const generalPostsRequest = postService.getPagingPost({ page: 1, extraParam: { per_page: 2 } });
  const [latedPosts, popularPosts, generalPosts] = await Promise.all([latedPostsRequest, popularPostsRequest, generalPostsRequest].map((p) => p.catch((e) => e)));

  const formatLatedPosts = latedPosts.data.map((e: any) => formatPost(e));
  const formatPopularPosts = popularPosts.data.map((e: any) => formatPost(e));
  const formatGeneralPosts = generalPosts.data.map((e: any) => formatPost(e));

  return {
    props: {
      latedPosts: formatLatedPosts,
      popularPosts: formatPopularPosts,
      generalPosts: formatGeneralPosts,
    },
  };
}
export default HomePage;
