import Link from "next/link";
import { ReactElement } from "react";
import styles from "./article-item.module.scss";

type Props = {
  href: string;
  children: ReactElement | string;
  [key: string]: any;
};
export default function ArticleItemTitle({ href, children, ...restProps }: Props) {
  return (
    <h2 className={styles["article-item__title"]}>
      <Link href={href} {...restProps}>
        {children}
      </Link>
    </h2>
  );
}
