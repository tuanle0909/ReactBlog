import cls from "classnames";
import { ReactElement } from "react";
import IconLoading from "../IconLoading";
import styles from "./button.module.scss";
type Props = {
  theme?: string;
  loading?: boolean;
  loadingPos?: string;
  size?: string;
  as?: string;
  htmlType?: "button" | "submit" | "reset";
  className?: string;
  children?: any;
  [key: string]: any;
};
function Button({ theme = "default", loading, loadingPos = "left", size, as = "button", htmlType, className, children, ...restProps }: Props) {
  const classes = cls(
    styles["btn"],
    {
      [styles["btn-default"]]: theme === "default",
      [styles["btn-category"]]: theme === "category",
      [styles["btn-primary"]]: theme === "primary",
      [styles["btn-size-large"]]: size === "large",
    },
    className
  );

  const content = (
    <>
      {loading && loadingPos === "left" && <IconLoading />}
      {children}
      {loading && loadingPos === "right" && <IconLoading />}
    </>
  );

  const injectedProps = {
    className: classes,
    type: htmlType,
    ...restProps,
  };

  if (as === "a") {
    return <a {...injectedProps}>{content}</a>;
  }

  return <button {...injectedProps}>{content}</button>;
}

export default Button;
