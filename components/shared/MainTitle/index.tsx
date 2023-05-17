import cls from "classnames";
import { ReactElement } from "react";
import Button from "../Button";
import styles from "./main-title.module.scss";
type Props = {
  children?: any;
  btnLabel?: string;
  type?: string;
  btnProps?: {
    [key: string]: any;
  };
};
function MainTitle({ children, btnLabel, type = "", btnProps = {} }: Props) {
  const classes = cls([styles["main-title"] + " spacing"], {
    [styles["main-title__search"]]: type === "search",
    "d-flex tcl-jc-between tcl-ais-center": btnLabel,
  });

  return (
    <div className={classes}>
      <h2>{children}</h2>
      {btnLabel && <Button {...btnProps}>{btnLabel}</Button>}
    </div>
  );
}

export default MainTitle;
