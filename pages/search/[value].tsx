import ArticleItem from "../../components/ArticleItem";
import Button from "../../components/shared/Button";
import MainTitle from "../../components/shared/MainTitle";
import usePostPaging from "../../customHook/usePostPaging";
import { PostType, formatPost } from "../../helpers/formatApi";
import postService from "../../service/post";
import { NextSeo } from "next-seo";

type Props = {
  searchValue: string;
  searchPosts: PostType[];
  totalPost: number;
};
export default function SearchPage({ searchPosts, searchValue, totalPost }: Props) {
  const { posts, isLastPage, loadMore, loading } = usePostPaging({ initialPost: searchPosts, extraParam: { per_page: 2, search: searchValue }, triggerChange: searchValue });
  return (
    <div className="articles-list section">
      <NextSeo title={totalPost + " kết quả tìm kiếm với từ khóa " + "'" + searchValue + "'"} description="Tìm kiếm bài viết bằng từ khóa liên quan tại ReactBlog."></NextSeo>
      <div className="tcl-container">
        <MainTitle type="search">
          {totalPost} kết quả tìm kiếm với từ khóa &quot;{searchValue}&quot;
        </MainTitle>
        <div className="tcl-row tcl-jc-center">
          {posts.map((e) => {
            return (
              <div className="tcl-col-12 tcl-col-md-8 mb-2" key={e.id}>
                <ArticleItem isStyleCard isShowCategories post={e} />
              </div>
            );
          })}
        </div>
        <div className="text-center">
          {!isLastPage && (
            <Button theme="primary" size="large" loading={loading} onClick={loadMore} className="mt-4">
              Tải thêm
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context: { query: { value: string } }) {
  const { value } = context.query;
  const posts = await postService.getPagingPost({ page: 1, extraParam: { per_page: 2, search: value } });
  const totalPost = posts.headers["x-wp-total"];
  const searchPosts = posts.data.map((e: PostType) => formatPost(e));
  return {
    props: {
      searchPosts: searchPosts || [],
      searchValue: value,
      totalPost: totalPost,
    },
  };
}
