import Link from "next/link";
import { PostDetailType } from "../../helpers/formatApi";
import { formatPostDate } from "../../helpers/index";
import styles from "./post-detail.module.scss";

function PostDetailHead({ postDetail }: { postDetail: PostDetailType }) {
  const { title, authorInfo, date, viewCount, commentCount } = postDetail;

  return (
    <div className={styles["post-detail__head"]}>
      <div className="tcl-container">
        <h1 className={styles["post-detail__title"]}>{title}</h1>
        <ul className={styles["post-detail__info"]}>
          <li className={styles["item"] + " author"}>
            By{" "}
            <Link href="/">
              <strong>{authorInfo?.nickname}</strong>
            </Link>
          </li>
          <li className={styles["item"] + " date"}>{formatPostDate(date)}</li>
          <li className={styles["item"] + " views"}>
            {viewCount} <i className="icons ion-ios-eye" />
          </li>
          <li className={styles["item"] + " comments"}>
            {commentCount} <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostDetailHead;
