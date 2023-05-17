import Link from "next/link";
import ImageCustom from "../shared/ImageCustom";
import styles from "./article-item.module.scss";

type Props = {
  href: string;
  mediaURL: string;
  [key: string]: any;
};
export default function ArticleItemThumb({ mediaURL, href, ...restProps }: Props) {
  return (
    <div className={styles["article-item__thumbnail"]}>
      <Link href={href} {...restProps}>
        <img src={mediaURL} alt={mediaURL} />
      </Link>
    </div>
  );
}
