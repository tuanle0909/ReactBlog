import React, { useState } from "react";
import { getTimeSince } from "../../helpers";
// import { actAsyncGetReplies } from "../../store/comment/action";
import ViewReply from "./ViewReply";
import styles from "./comments.module.scss";
import ReplyForm from "./ReplyForm";
import ImageCustom from "../shared/ImageCustom";
import commentService from "../../service/comment";
import useGlobalState from "../../state";
import { CommentType, formatComment } from "../../helpers/formatApi";
import Link from "next/link";

type Props = {
  authorInfo: {
    nickname: string;
    desc: string;
    avatar: string;
  };
  content: string;
  date: string;
  commentReplyCount: number;
  postId: number;
  commentId: number;
  isChildren?: boolean;
};
export default function CommentItem({ authorInfo, content, date, commentReplyCount, postId, commentId, isChildren }: Props) {
  const [loading, setLoading] = useState(false);
  const [replies, setReplies] = useGlobalState("replies");
  const [isReply, setIsReply] = useState(false);
  const handleLoadReplies = () => {
    if (!loading) {
      setLoading(true);
      const currentPage = (replies[commentId]?.currentPage || 0) + 1;
      commentService.getComments({ postId, commentId, page: currentPage, exclude: replies[commentId]?.exclude || [] }).then((res) => {
        const comments: CommentType[] = res.data.map((e: any) => formatComment(e));
        const newReplies = currentPage === 1 ? comments : [...replies[commentId].comments, ...comments];
        const newExclude = replies[commentId] ? replies[commentId].exclude : [];
        setReplies({
          ...replies,
          [commentId]: {
            currentPage: currentPage,
            totalPage: res.headers["x-wp-totalpages"] * 1,
            totalComment: res.headers["x-wp-total"] * 1,
            comments: newReplies,
            exclude: newExclude,
          },
        });
        setLoading(false);
      });
    }
  };
  const remainReply = isNaN(replies[commentId]?.totalComment - replies[commentId]?.comments?.length) ? commentReplyCount : replies[commentId]?.totalComment - replies[commentId]?.comments?.length;

  return (
    <li className={styles["item"]}>
      <div className={styles["comments__section"]}>
        <div className={styles["comments__section--avatar"]}>
          <Link href="/">
            <ImageCustom src={authorInfo?.avatar} width={40} height={40}></ImageCustom>
          </Link>
        </div>
        <div className={styles["comments__section--content"]}>
          <Link href="/" className={styles["comments__section--user"]}>
            {authorInfo?.nickname}
          </Link>
          <p className={styles["comments__section--time"]}>{getTimeSince(date)}</p>
          <p className={styles["comments__section--text"]} dangerouslySetInnerHTML={{ __html: content }}></p>
          {!isChildren && (
            <i
              className={"ion-reply cursor-pointer " + styles["comments__section--reply"]}
              onClick={() => {
                setIsReply(!isReply);
              }}
            ></i>
          )}
        </div>
      </div>
      <ul className={styles["comments"]}>
        {replies[commentId]?.comments?.map((e, k) => {
          return <CommentItem {...e} key={e.id} postId={postId} commentId={e.id} isChildren={true}></CommentItem>;
        })}
      </ul>
      {isReply && <ReplyForm postId={postId} commentId={commentId}></ReplyForm>}
      <ViewReply replyCount={remainReply} isShowIcon={true} onClick={handleLoadReplies} />
    </li>
  );
}
