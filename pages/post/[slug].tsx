import { useEffect, useState } from "react";
import PostDetailContent from "../../components/PostDetail/PostDetailContent";
import PostDetailHead from "../../components/PostDetail/PostDetailHead";
import PostDetailSidebar from "../../components/PostDetail/PostDetailSidebar";
import styles from "../../components/PostDetail/post-detail.module.scss";
import { PostDetailType, formatPost, formatPostDetail } from "../../helpers/formatApi";
import postService from "../../service/post";
import { NextSeo } from "next-seo";

type Props = {
  postDetail: PostDetailType;
  slug: string;
};
function PostDetailPage({ postDetail, slug }: Props) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      postService.getRelatedPosts({ author: postDetail.author, exclude: postDetail.id }).then((res) => {
        const formatPosts = res.data.map((e: any) => formatPost(e));
        setRelatedPosts(formatPosts);
      });
    }
  }, [slug]);

  return (
    <main className={styles["post-detail"]}>
      <NextSeo
        title={postDetail.title}
        description={postDetail.excerpt}
        openGraph={{
          type: "website",
          url: "https://www.example.com/page",
          title: postDetail.title,
          description: postDetail.content,
          images: [
            {
              url: postDetail.featuredMediaUrl,
              width: 800,
              height: 600,
              alt: postDetail.title,
            },
          ],
        }}
      />
      <div className="spacing" />

      <PostDetailHead postDetail={postDetail} />

      <div className="spacing" />

      <div className={styles["post-detail__fluid"]}>
        <div className="tcl-container">
          <div className={styles["post-detail__wrapper"]}>
            <PostDetailContent postDetail={postDetail} />
            <PostDetailSidebar postDetail={postDetail} relatedPosts={relatedPosts} />
          </div>
        </div>
      </div>
    </main>
  );
}
export async function getServerSideProps(context: { query: { slug: string } }) {
  const { slug } = context.query;
  const postContent = await postService.getDetailPost({ slug });
  const postDetail = formatPostDetail(postContent.data[0]);
  return {
    props: {
      postDetail: postDetail,
      slug,
    },
  };
}
export default PostDetailPage;
