import styles from "./article-item.module.scss";
import cls from "classnames";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemThumb from "./ArticleItemThumb";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemInfo from "./ArticleItemInfo";
import ArticleItemCategories from "./ArticleItemCategories";
import ArticleItemStats from "./ArticleItemStats";
import { PostType } from "../../helpers/formatApi";
type Props = {
  isStyleRow?: boolean;
  isStyleCard?: boolean;
  isShowDesc?: boolean;
  isShowCategories?: boolean;
  isShowAvatar?: boolean;
  post: PostType;
};
export default function ArticleItem({ isStyleRow = false, isStyleCard = false, isShowDesc = false, isShowCategories = false, isShowAvatar = true, post }: Props) {
  const classes = cls([styles["article-item"]], {
    [styles["style-card"]]: isStyleCard,
    [styles["style-row"]]: isStyleRow,
  });
  if (!post) {
    return <></>;
  }
  return (
    <article className={classes}>
      <ArticleItemThumb mediaURL={post.mediaURL} href={"/post/" + post.slug} />
      <div className={styles["article-item__content"]}>
        {isShowCategories && <ArticleItemCategories categoriesId={post.categories} />}
        {isShowCategories && <ArticleItemStats viewCount={post.viewCount} />}
        <ArticleItemTitle href={"/post/" + post.slug}>{post.title}</ArticleItemTitle>
        {isShowDesc && <ArticleItemDesc excerpt={post.excerpt} />}
        <ArticleItemInfo isShowAvatar={isShowAvatar} date={post.date} author={post.author} />
      </div>
    </article>
  );
}
