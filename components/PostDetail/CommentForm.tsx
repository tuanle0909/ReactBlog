import Link from "next/link";
import React, { useState } from "react";
import Button from "../shared/Button";
import ImageCustom from "../shared/ImageCustom";
import styles from "./comments.module.scss";
import useGlobalState from "../../state";
import commentService from "../../service/comment";
import { formatComment } from "../../helpers/formatApi";

export default function CommentForm({ postId }: { postId: number }) {
  const [loading, setLoading] = useState(false);
  const currentUser = useGlobalState("user")[0];
  const [commentsPaging, setCommentsPaging] = useGlobalState("commentsPaging");
  const [commentInput, setCommentInput] = useState("");
  if (!currentUser?.id) {
    return (
      <p className="text-center">
        Vui lòng <Link href="/login">đăng nhập</Link> để bình luận.
      </p>
    );
  }

  const submitComment = ({ author = currentUser?.id, content = commentInput }) => {
    setLoading(true);
    if (!loading) {
      commentService.sendComment({ author, content, postId, parent: 0 }).then((res) => {
        const comment = formatComment(res.data);
        setCommentsPaging({
          ...commentsPaging,
          exclude: [...commentsPaging.exclude, comment.id],
          comments: [comment, ...commentsPaging.comments],
          totalComment: commentsPaging.totalComment + 1,
        });
        setCommentInput("");
        setLoading(false);
      });
    }
  };

  return (
    <div className={styles["comments__form"]}>
      <div className={styles["comments__form--control"]}>
        <div className={styles["comments__section--avatar"]}>
          <Link href="/">
            <ImageCustom src={currentUser.simpleLocalAvatar?.full} width={35} height={35}></ImageCustom>
          </Link>
        </div>
        <textarea
          onChange={(e) => {
            setCommentInput(e.target.value);
          }}
          value={commentInput}
        />
      </div>
      <div className="text-right">
        <Button loading={loading} className="btn btn-default" onClick={submitComment}>
          Submit
        </Button>
      </div>
    </div>
  );
}
