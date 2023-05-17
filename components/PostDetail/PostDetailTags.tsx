import Link from "next/link";
import Button from "../shared/Button";
import styles from "./post-detail.module.scss";
import useGlobalState from "../../state";
function PostDetailTags({ tags }: { tags: number[] }) {
  const categories = useGlobalState("categories")[0];
  return (
    <div className={styles["post-detail__tags"]}>
      <h2>Tags</h2>
      <ul>
        {tags.map((e, k) => {
          return (
            <li className={styles["item"]} key={k}>
              <Button>
                <Link href={`/category/${categories[e]?.id}`}>{categories[e]?.name}</Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostDetailTags;
