import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import styles from "./comments.module.scss";
import ViewReply from "./ViewReply";
import useGlobalState from "../../state";
import commentService from "../../service/comment";
import { CommentType, formatComment } from "../../helpers/formatApi";

function PostDetailComments({ postId }: { postId: number }) {
  const [commentLoading, setCommentLoading] = useState(false);
  const [{ comments, currentPage, exclude, totalComment }, setCommentsPaging] = useGlobalState("commentsPaging");
  const remainComment = totalComment - comments.length;

  const handleViewMoreComment = (page?: number) => {
    const p = page || currentPage + 1;
    if (!commentLoading) {
      setCommentLoading(true);
      commentService.getComments({ postId, exclude, page: p }).then((res) => {
        const resComments: CommentType[] = res.data.map((e: any) => formatComment(e));
        const newComments = p === 1 ? resComments : [...comments, ...resComments];
        setCommentsPaging({ exclude, totalComment: res.headers["x-wp-total"] * 1, currentPage: p, totalPage: res.headers["x-wp-totalpages"] * 1, comments: newComments });
        setCommentLoading(false);
      });
    }
  };
  useEffect(() => {
    if (postId) {
      handleViewMoreComment(1);
    }
  }, [postId]);

  return (
    <div className={styles["post-detail__comments"]}>
      <CommentForm postId={postId} />
      <p>{totalComment} Comments</p>
      <ul className={styles["comments"]}>
        {comments?.map((e) => {
          return <CommentItem {...e} key={e.id} postId={postId} commentId={e.id}></CommentItem>;
        })}
      </ul>
      <div>
        <ViewReply
          isParent={true}
          replyCount={remainComment}
          onClick={() => {
            handleViewMoreComment();
          }}
        ></ViewReply>
      </div>
    </div>
  );
}

export default PostDetailComments;
