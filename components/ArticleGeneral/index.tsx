import { useEffect, useState } from "react";
import usePostPaging from "../../customHook/usePostPaging";
import { PostType } from "../../helpers/formatApi";
import ArticleItem from "../ArticleItem";
import styles from "../ArticleItem/article-item.module.scss";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";

function ArticleGeneral({ generalPosts }: { generalPosts: PostType[] }) {
  const { posts, isLastPage, loadMore, loading } = usePostPaging({ initialPost: generalPosts, extraParam: { per_page: 2 }, triggerChange: "ArticleGeneral" });

  return (
    <div className="section">
      <div className="tcl-container">
        <MainTitle btnLabel="Xem them">Bài Viết Tổng Hợp</MainTitle>
        <div className="tcl-row">
          {posts.map((p: PostType) => {
            return (
              <div className={"tcl-col-12 tcl-col-md-6 " + styles["mb-30px"]} key={p.id}>
                <ArticleItem post={p} isStyleCard isShowAvatar={false} />
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

export default ArticleGeneral;
